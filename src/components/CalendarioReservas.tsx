import { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Reserva {
  nombre: string;
  email: string;
  dni: string;
  telefono: string;
  tramoHorario: string;
  diaSeleccionado: string;
  aceptaNormas: boolean;
  palomitero: boolean;
  algodonAzucar: boolean;
  codigoPromocional?: string;
}

interface Promotion {
  start: string;
  end: string;
  promotionCode: string;
  percentage: number;
  days: string; // p.ej. "lun-jue" o "Sab-dom-fest"
  tramoHorario: string;
}

interface ValidationResult {
  valid: boolean;
  promoValida?: Promotion;
}

// Configura Moment.js para que use español y que la semana empiece el lunes
moment.locale('es');
moment.updateLocale('es', {
  week: {
    dow: 1, // Lunes es el primer día de la semana
  },
});
const localizer = momentLocalizer(moment);

const formats = {
  dayFormat: 'dddd',
  weekdayFormat: 'ddd',
  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'dddd, MMMM DD, YYYY',
  agendaDateFormat: 'dddd, MMMM DD'
};

const tramosHorarios = [
  { label: '10:00 - 22:00', type: 'dia completo' },
  { label: '10:00 - 15:00', type: 'mañana' },
  { label: '16:00 - 21:00', type: 'tarde' },
  { label: '17:00 - 22:00', type: 'tarde' },
];

// Endpoint para obtener reservas
// const RESERVAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwclDYmwMtZjlUHk070xsrMpHCfKo_0fKE8neNy3mHgB_ztJvstlKtn06xNJ-JVP8Y2/exec'; // Nuria
const RESERVAS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw0b2KgTQpYaob_e0fU2IS5fgu0pY14zBMvpEOaoz-LNoM8PipJ0QpLqk5XztpKJ-KgGw/exec'; // Arkady producción

export default function CalendarioReservas() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | null>(null);
  const [tramoSeleccionado, setTramoSeleccionado] = useState<string | null>(null);
  const [promotionsData, setPromotionsData] = useState<Promotion[]>([]);
  const [selectedPromo, setSelectedPromo] = useState<Promotion | null>(null);
  const [formData, setFormData] = useState<Reserva>({
    nombre: '',
    email: '',
    dni: '',
    telefono: '',
    tramoHorario: '',
    diaSeleccionado: '',
    aceptaNormas: false,
    palomitero: false,
    algodonAzucar: false,
    codigoPromocional: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reservasData, setReservasData] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  // Formateo consistente de fecha "YYYY-MM-DD"
  const formatDateKey = (date: Date) =>
    `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

  const fetchReservas = useCallback(async () => {
    try {
      const response = await fetch(RESERVAS_ENDPOINT);
      if (!response.ok) throw new Error('Error al obtener reservas');
      const data = await response.json();
      const raw: Reserva[] = data.raw || [];
      setReservasData(raw);
      setPromotionsData(data.promotions || []);
    } catch (err: any) {
      console.error(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReservas();
  }, [fetchReservas]);

  /**
 * Devuelve el objeto Promotion válido para un código y fecha dados,
 * o null si no hay ninguno.
 */
  const getValidPromotion = (
    code: string,
    date: Date,
    tramoType: string
  ): Promotion | null => {
    const codeUp = code.trim().toUpperCase();

    // 1) Filtra sólo las promos con ese código
    const byCode = promotionsData.filter(
      p => p.promotionCode.toUpperCase() === codeUp
    );
    if (byCode.length === 0) {
      throw new Error('INVALID_CODE');
    }

    // 2) De esas, las que sean para este tramo o para "todos"
    const byTramo = byCode.filter(
      p => p.tramoHorario === tramoType || p.tramoHorario === 'todos'
    );
    if (byTramo.length === 0) {
      throw new Error('INVALID_TRAMO');
    }

    // 3) De esas, las que estén en rango de fechas
    const ts = date.getTime();
    const inDateRange = byTramo.filter(p => {
      const start = new Date(p.start).getTime();
      const end = new Date(p.end).getTime();
      return ts >= start && ts <= end;
    });
    if (inDateRange.length === 0) {
      throw new Error('INVALID_DATE');
    }

    // 4) Prioridad según el día de la semana / festivo
    const normalize = (s: string) =>
      s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const hasToken = (p: Promotion, token: string) =>
      normalize(p.days).split('-').includes(token);

    const keyToday = formatDateKey(date);
    const tomorrow = new Date(date);
    tomorrow.setDate(date.getDate() + 1);
    const keyTomorrow = formatDateKey(tomorrow);
    const holidays = generateHolidays(date.getFullYear());
    const isFestivo = holidays.includes(keyToday);
    const isVispFest = holidays.includes(keyTomorrow);
    const dow = date.getDay(); // 0=dom,1=lun,…,6=sab

    // a) Sábado
    if (dow === 6) {
      return inDateRange.find(p => hasToken(p, 'sab')) || null;
    }
    // b) Domingo
    if (dow === 0) {
      return inDateRange.find(p => hasToken(p, 'dom')) || null;
    }
    // c) Festivo
    if (isFestivo) {
      return inDateRange.find(p => hasToken(p, 'fest')) || null;
    }
    // d) Viernes o víspera de festivo
    if (dow === 5 || isVispFest) {
      return (
        inDateRange.find(p => hasToken(p, 'vie')) ??
        inDateRange.find(p => hasToken(p, 'visp.fest')) ??
        null
      );
    }
    // e) Lunes–Jueves (incluye “todos” en days token)
    return (
      inDateRange.find(p =>
        ['lun', 'mar', 'mie', 'jue', 'todos'].some(tok => hasToken(p, tok))
      ) || null
    );
  };
  // const getValidPromotion = (
  //   code: string,
  //   date: Date,
  //   tramoType: string
  // ): Promotion | null => {
  //   const codeUp = code.trim().toUpperCase();

  //   // 1) Filtra sólo las promos con ese código
  //   const byCode = promotionsData.filter(
  //     p => p.promotionCode.toUpperCase() === codeUp
  //   );
  //   if (byCode.length === 0) {
  //     throw new Error('INVALID_CODE');
  //   }

  //   // 2) De esas, las que sean para este tramo (“dia completo” | “mañana” | “tarde”)
  //   const byTramo = byCode.filter(p => p.tramoHorario === tramoType);
  //   if (byTramo.length === 0) {
  //     throw new Error('INVALID_TRAMO');
  //   }

  //   // 3) De esas, las que estén en rango de fechas
  //   const ts = date.getTime();
  //   const inDateRange = byTramo.filter(p => {
  //     const start = new Date(p.start).getTime();
  //     const end = new Date(p.end).getTime();
  //     return ts >= start && ts <= end;
  //   });
  //   if (inDateRange.length === 0) {
  //     throw new Error('INVALID_DATE');
  //   }

  //   // 4) Prioridad según el día de la semana / festivo
  //   const normalize = (s: string) =>
  //     s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  //   const hasToken = (p: Promotion, token: string) =>
  //     normalize(p.days).split('-').includes(token);

  //   const keyToday = formatDateKey(date);
  //   const tomorrow = new Date(date);
  //   tomorrow.setDate(date.getDate() + 1);
  //   const keyTomorrow = formatDateKey(tomorrow);
  //   const holidays = generateHolidays(date.getFullYear());
  //   const isFestivo = holidays.includes(keyToday);
  //   const isVispFest = holidays.includes(keyTomorrow);
  //   const dow = date.getDay(); // 0=dom,1=lun,…,6=sab

  //   // a) Sábado
  //   if (dow === 6) {
  //     return inDateRange.find(p => hasToken(p, 'sab')) || null;
  //   }
  //   // b) Domingo
  //   if (dow === 0) {
  //     return inDateRange.find(p => hasToken(p, 'dom')) || null;
  //   }
  //   // c) Festivo
  //   if (isFestivo) {
  //     return inDateRange.find(p => hasToken(p, 'fest')) || null;
  //   }
  //   // d) Viernes o víspera de festivo
  //   if (dow === 5 || isVispFest) {
  //     return (
  //       inDateRange.find(p => hasToken(p, 'vie')) ??
  //       inDateRange.find(p => hasToken(p, 'visp.fest')) ??
  //       null
  //     );
  //   }
  //   // e) Lunes–Jueves (incluye “todos”)
  //   return (
  //     inDateRange.find(p =>
  //       ['lun', 'mar', 'mie', 'jue', 'todos'].some(tok => hasToken(p, tok))
  //     ) || null
  //   );
  // };

  // Agrupa reservas por día
  const aggregatedMap = reservasData.reduce((acc: { [key: string]: string[] }, reserva) => {
    // Convertir la cadena ISO a Date y formatearla de forma consistente
    const key = formatDateKey(new Date(reserva.diaSeleccionado));
    if (key) {
      if (!acc[key]) acc[key] = [];
      acc[key].push(reserva.tramoHorario);
    }
    return acc;
  }, {});

  // Determina el estado del día
  const getDayStatus = (date: Date) => {
    const key = formatDateKey(date);
    const slots: string[] = aggregatedMap[key] || [];
    if (slots.length === 0) return 'libre';
    if (slots.includes('10:00 - 22:00')) return 'ocupado';
    if (
      slots.includes('10:00 - 15:00') &&
      (slots.includes('16:00 - 21:00') || slots.includes('17:00 - 22:00'))
    )
      return 'ocupado';
    return 'parcial';
  };

  const handleDayClick = (date: Date) => {
    const status = getDayStatus(date);
    if (status === 'ocupado') {
      toast.error('El día está completamente ocupado. No se pueden reservar franjas.');
      resetForm();
      return;
    }

    // Si la fecha seleccionada es hoy o anterior, no permitimos la reserva
    if (moment(date).isSameOrBefore(moment(), 'day')) {
      toast.error('Solo se pueden reservar días futuros.');
      resetForm();
      return;
    }

    setFechaSeleccionada(date);
    setTramoSeleccionado(null);
    setFormData({
      ...formData,
      diaSeleccionado: formatDateKey(date),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({ ...errors, [name]: '' });
  };

  const handleTramoSeleccionado = (tramo: string) => {
    setTramoSeleccionado(tramo);
    setFormData({
      ...formData,
      tramoHorario: tramo,
    });
  };

  // Funciones para calcular festivos móviles
  function calculateEaster(year: number): Date {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const L = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * L) / 451);
    const month = Math.floor((h + L - 7 * m + 114) / 31);
    const day = ((h + L - 7 * m + 114) % 31) + 1;
    return new Date(year, month - 1, day);
  }

  function addDaysAndFormat(dateObj: Date, days: number): string {
    const d = new Date(dateObj);
    d.setDate(d.getDate() + days);
    const y = d.getFullYear();
    const m = ('0' + (d.getMonth() + 1)).slice(-2);
    const dd = ('0' + d.getDate()).slice(-2);
    return `${y}-${m}-${dd}`;
  }

  function calculateCorpusDate(year: number): string {
    return addDaysAndFormat(calculateEaster(year), 60);
  }

  function calculateFeriaDate(year: number): string {
    const d = calculateEaster(year);
    d.setDate(d.getDate() + 14);
    while (d.getDay() !== 3) {
      d.setDate(d.getDate() + 1);
    }
    return addDaysAndFormat(d, 0);
  }

  function generateHolidays(year: number): string[] {
    const y = String(year);

    // 1) Festivos fijos
    const fixed = [
      `${y}-01-01`, // Año Nuevo
      `${y}-01-06`, // Reyes Magos
      `${y}-02-28`, // Día de Andalucía
      `${y}-05-01`, // Día del Trabajo
      `${y}-08-15`, // Asunción
      `${y}-10-12`, // Hispanidad
      `${y}-11-01`, // Todos los Santos
      `${y}-12-06`, // Constitución
      `${y}-12-08`, // Inmaculada
      `${y}-12-25`, // Navidad
    ];

    // 2) Festivos movibles basados en Pascua
    const easter = calculateEaster(year);
    const movibles = [
      addDaysAndFormat(easter, -3),        // Jueves Santo
      addDaysAndFormat(easter, -2),        // Viernes Santo
      calculateCorpusDate(year),           // Corpus Christi
      calculateFeriaDate(year),            // Feria de Abril
    ];

    // 3) Creamos el listado completo y “observamos” los que caen en domingo
    const all = [...fixed, ...movibles];
    const observed = all.reduce<string[]>((acc, dateStr) => {
      const d = new Date(dateStr);
      if (d.getDay() === 0) {
        // Si cae en domingo, lo trasladamos a lunes
        acc.push(addDaysAndFormat(d, 1));
      } else {
        acc.push(dateStr);
      }
      return acc;
    }, []);

    // 4) Devolvemos cronológicamente ordenado
    return observed.sort();
  }

  const validarFormulario = (): ValidationResult => {
    const nuevosErrores: Record<string, string> = {};
    if (!formData.nombre.trim())
      nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim())
      nuevosErrores.email = 'El email es obligatorio';
    if (!formData.dni.trim())
      nuevosErrores.dni = 'El DNI es obligatorio';
    if (!formData.telefono.trim())
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    if (!formData.aceptaNormas)
      nuevosErrores.aceptaNormas = 'Debes aceptar las normas y políticas';

    const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!nameRegex.test(formData.nombre)) {
      nuevosErrores.nombre = 'El nombre solo debe contener letras y espacios';
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!emailRegex.test(formData.email)) {
      nuevosErrores.email = 'El formato del email es inválido';
    }

    // Validación de DNI, NIE o NIF español
    // DNI: 8 dígitos + letra
    // NIE: X/Y/Z + 7 dígitos + letra
    // NIF (jurídico): K/L/M + 7 dígitos + letra o dígito
    // Validación de DNI / NIE / NIF / Pasaporte
    const idRegex = /^([XYZ]\d{7}[A-Z]|\d{8}[A-Z]|[KLM]\d{7}[A-J0-9])$/i;
    const pasaporteExtranjeroRegex = /^[A-Z]{2,}[0-9A-Z]{5,}$/i; // al menos 2 letras + mezcla

    if (!formData.dni.trim()) {
      nuevosErrores.dni = 'El documento de identidad es obligatorio';
    } else {
      const documento = formData.dni.toUpperCase();

      if (pasaporteExtranjeroRegex.test(documento)) {
        // 👉 Parece pasaporte extranjero → NO validamos
      } else if (!idRegex.test(documento)) {
        nuevosErrores.dni = 'Formato de DNI/NIE/NIF inválido';
      }
    }

    // Validación de teléfono (9 dígitos)
    const telefonoRegex = /^\d{9}$/;
    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    } else if (!telefonoRegex.test(formData.telefono)) {
      nuevosErrores.telefono = 'El formato del teléfono es inválido';
    }

    const selectedTramoObj = tramosHorarios.find(t => t.label === tramoSeleccionado);
    if (!selectedTramoObj) {
      nuevosErrores.tramoHorario = 'Selecciona un tramo válido';
    }
    const selectedType = selectedTramoObj?.type; // "dia completo" | "mañana" | "tarde"

    const code = formData.codigoPromocional?.trim();
    if (!code) {
      setSelectedPromo(null);
    }
    let promoValida: Promotion | undefined;
    if (code) {
      if (!fechaSeleccionada) {
        nuevosErrores.codigoPromocional = 'Selecciona la fecha antes de aplicar la promoción';
      } else if (!tramoSeleccionado) {
        nuevosErrores.codigoPromocional = 'Selecciona primero un tramo horario';
      } else {
        try {
          const found = getValidPromotion(code, fechaSeleccionada, selectedType!);
          if (found) {
            promoValida = found;
          }
        } catch (err: any) {
          switch (err.message) {
            case 'INVALID_CODE':
              nuevosErrores.codigoPromocional = 'El código promocional no existe';
              break;
            case 'INVALID_TRAMO':
              nuevosErrores.codigoPromocional = 'El código no aplica a este tramo horario';
              break;
            case 'INVALID_DATE':
              nuevosErrores.codigoPromocional = 'El código no es válido para esa fecha';
              break;
          }
        }
      }
    } else {
      setSelectedPromo(null);
    }

    setErrors(nuevosErrores);
    setSelectedPromo(promoValida || null);
    return {
      valid: Object.keys(nuevosErrores).length === 0,
      promoValida
    };
    // return Object.keys(nuevosErrores).length === 0;
  };

  const reservarEvento = async () => {
    if (!fechaSeleccionada) {
      toast.error('Selecciona una fecha antes de reservar.');
      return;
    }
    if (!tramoSeleccionado) {
      toast.error('Selecciona un tramo horario antes de reservar.');
      return;
    }
    const { valid, promoValida } = validarFormulario();
    if (!valid) {
      toast.error('Por favor, revisa el formulario.');
      return;
    }

    try {
      setLoading(true);
      const result = await agregarReserva(formData, promoValida);
      if (result.error !== undefined) {
        toast.error(result.error);
      } else {
        resetForm();
        toast.success('Reserva realizada con éxito 🎉');
      }
      await fetchReservas();
      setLoading(false);
    } catch (error) {
      console.error('Error guardando reserva:', error);
      toast.error('Error al reservar. Intenta de nuevo.');
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: '',
      email: '',
      dni: '',
      telefono: '',
      tramoHorario: '',
      diaSeleccionado: '',
      aceptaNormas: false,
      palomitero: false,
      algodonAzucar: false,
      codigoPromocional: ''
    });
    setFechaSeleccionada(null);
    setTramoSeleccionado(null);
  }

  const agregarReserva = async (reserva: Reserva, promoValida?: Promotion) => {
    try {
      console.log('reserva ', reserva)
      const params = new URLSearchParams();
      params.append('nombre', reserva.nombre);
      params.append('email', reserva.email);
      params.append('dni', reserva.dni);
      params.append('telefono', reserva.telefono);
      if (promoValida) {
        // envía todo el objeto como JSON
        params.append('promocion', JSON.stringify(promoValida));
      }
      // params.append('codigoPromocional', reserva.codigoPromocional ? reserva.codigoPromocional : '');
      params.append('diaSeleccionado', reserva.diaSeleccionado);
      params.append('tramoHorario', reserva.tramoHorario);
      params.append('aceptaNormas', reserva.aceptaNormas ? 'true' : 'false');
      params.append('palomitero', reserva.palomitero ? 'true' : 'false');
      params.append('algodonAzucar', reserva.algodonAzucar ? 'true' : 'false');
      params.append('fechaReserva', new Date().toISOString().split('T')[0]);

      const response = await fetch(
        RESERVAS_ENDPOINT,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: params.toString(),
          // body: JSON.stringify(reserva),
        }
      );
      const result = await response.json();
      return result;

    } catch (error) {
      console.error('Error al agregar reserva:', error);
      throw error;
    }
  };

  // dayPropGetter asigna estilos a cada día:
  // - Si es el día seleccionado, lo pinta en verde.
  // - Si no, utiliza getDayStatus para aplicar gris sólido o rayado.
  const dayPropGetter = (date: Date) => {
    if (fechaSeleccionada && moment(date).isSame(fechaSeleccionada, 'day')) {
      return {
        style: {
          backgroundColor: '#4CAF50',
          color: 'white',
        },
      };
    }
    const status = getDayStatus(date);
    if (status === 'ocupado') {
      return {
        style: {
          backgroundColor: '#ff6961',
          color: 'white',
        },
      };
    }
    if (status === 'parcial') {
      return {
        style: {
          backgroundImage:
            'repeating-linear-gradient(45deg, #ff9688, #ff9688 5px, #fff 5px, #fff 10px)',
        },
      };
    }
    return {};
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <ToastContainer position="top-right" autoClose={3000} />
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#20c997]"></div>
      </div>
    );
  }

  // Función auxiliar para determinar si un tramo está reservado, considerando la complementariedad
  const isSlotReserved = (slot: string, reservedSlots: string[]): boolean => {
    if (slot === '16:00 - 21:00' || slot === '17:00 - 22:00') {
      return reservedSlots.includes('16:00 - 21:00') || reservedSlots.includes('17:00 - 22:00');
    }
    return reservedSlots.includes(slot);
  };

  // Calcula los tramos reservados para el día seleccionado
  const reservedSlots =
    fechaSeleccionada && aggregatedMap[formatDateKey(fechaSeleccionada)]
      ? aggregatedMap[formatDateKey(fechaSeleccionada)]
      : [];

  const dayStatus = fechaSeleccionada ? getDayStatus(fechaSeleccionada) : 'libre';

  // Determinar si es fin de semana o festivo
  const yearSel = fechaSeleccionada?.getFullYear();
  const holidays = yearSel ? generateHolidays(yearSel) : [];
  const keySel = fechaSeleccionada ? formatDateKey(fechaSeleccionada) : '';
  const isWeekend = fechaSeleccionada ? [0, 6].includes(fechaSeleccionada.getDay()) : false;
  const isHoliday = holidays.includes(keySel);

  // Filtrar tramos disponibles
  const availableSlots = tramosHorarios.filter((tramo) => {
    // Si es fin de semana o festivo, solo full day
    if (isWeekend || isHoliday) {
      return tramo.label === '10:00 - 22:00' && !isSlotReserved(tramo.label, reservedSlots);
    }
    // Si día parcial ocultar full day
    if (dayStatus === 'parcial' && tramo.label === '10:00 - 22:00') {
      return false;
    }
    // Filtrado verano/invierno
    if (fechaSeleccionada) {
      const verano = isDaylightSavingTime(fechaSeleccionada);
      if (verano && tramo.label === '16:00 - 21:00') return false;
      if (!verano && tramo.label === '17:00 - 22:00') return false;
    }
    return !isSlotReserved(tramo.label, reservedSlots);
  });

  // Function to get the last Sunday of a month
  function lastSunday(month: number, year: number): Date {
    const lastDay = new Date(year, month + 1, 0);
    const dayOfWeek = lastDay.getDay();
    return new Date(year, month, lastDay.getDate() - dayOfWeek);
  }

  // Function that determines if a date is in daylight saving time
  function isDaylightSavingTime(date: Date): boolean {
    const year = date.getFullYear();

    const summerStart = lastSunday(2, year);  // March
    summerStart.setHours(2, 0, 0);

    const winterStart = lastSunday(9, year); // October
    winterStart.setHours(3, 0, 0);

    return date >= summerStart && date < winterStart;
  }


  const messages = {
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
  };

  return (
    <div className="flex flex-col items-center p-4">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-xl font-bold text-center mb-4">
        Selecciona una fecha
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <Calendar
          localizer={localizer}
          culture="es"
          formats={formats}
          views={{ month: true }}
          longPressThreshold={1}
          onSelectSlot={(slotInfo) => handleDayClick(slotInfo.start)}
          selectable
          style={{ height: 400 }}
          dayPropGetter={dayPropGetter}
          messages={messages}
        />
      </div>

      <div className="mt-4 flex justify-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-200 border"></div>
          <span>Día disponible</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-gray-400 bg-[repeating-linear-gradient(45deg,_#ff9688,_#ff9688,_#fff_5px,_#fff_10px)] border"></div>
          <span>Día parcialmente ocupado</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#ff6961] border"></div>
          <span>Día completamente ocupado</span>
        </div>
      </div>

      {fechaSeleccionada && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">
            Tramos disponibles para {moment(fechaSeleccionada).format('LL')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {availableSlots.map((tramo) => {
              return (
                <button
                  key={tramo.label}
                  className={`px-4 py-2 rounded-md transition ${tramoSeleccionado === tramo.label
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-black hover:bg-gray-400'
                    }`}
                  onClick={() => handleTramoSeleccionado(tramo.label)}
                >
                  {tramo.label}
                </button>
              )
            })}
          </div>

          <form className="mt-6 max-w-lg mx-auto text-left">
            {['nombre', 'email', 'dni', 'telefono', 'codigoPromocional'].map((field) => (
              <div key={field} className="mb-2">
                <label className="block">
                  {field === 'nombre' ? 'Nombre y Apellidos:'
                    : field === 'dni' ? 'DNI/NIE/NIF/Pasaporte:'
                      : field === 'codigoPromocional' ? 'Código Promocional:'
                        : `${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded mt-1 ${errors[field] ? 'border-red-500' : ''
                    }`}
                  required
                />
                {errors[field] && (
                  <p className="text-red-500 text-sm">{errors[field]}</p>
                )}
              </div>
            ))}

            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                name="aceptaNormas"
                checked={formData.aceptaNormas}
                onChange={handleChange}
                className="mr-2"
              />
              <span>
                Acepto las{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => navigate('/normas-uso')}
                >
                  normas de uso
                </span>{' '}
                y la{' '}
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={() => navigate('/politica-privacidad')}
                >
                  política de privacidad
                </span>
              </span>
            </label>
            {errors.aceptaNormas && (
              <p className="text-red-500 text-sm">{errors.aceptaNormas}</p>
            )}

            {/* <label className="flex items-center mt-4">
              <input
                type="checkbox"
                name="palomitero"
                checked={formData.palomitero}
                onChange={handleChange}
                className="mr-2"
              />
              <span>
                Añadir <strong>Palomitero</strong> (+10€)
              </span>
            </label>

            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                name="algodonAzucar"
                checked={formData.algodonAzucar}
                onChange={handleChange}
                className="mr-2"
              />
              <span>
                Añadir <strong>Máquina de Algodón de Azúcar</strong> (+10€)
              </span>
            </label> */}
            <button
              type="button"
              className="w-full text-center mt-5 bg-[#20c997] hover:bg-[#1ba884] text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors"
              onClick={reservarEvento}
            >
              Reservar
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
