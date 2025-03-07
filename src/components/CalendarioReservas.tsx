import { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const localizer = momentLocalizer(moment);

const tramosHorarios = [
  { label: '10:00 - 22:00', startHour: 10, endHour: 22 },
  { label: '10:00 - 15:00', startHour: 10, endHour: 15 },
  { label: '17:00 - 22:00', startHour: 17, endHour: 22 },
  { label: '18:00 - 23:00', startHour: 18, endHour: 23 },
];

export default function CalendarioReservas() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | null>(null);
  const [tramoSeleccionado, setTramoSeleccionado] = useState<string | null>(
    null
  );
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    dni: '',
    telefono: '',
    aceptaNormas: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_CALENDLY_API_KEY;
  const usuarioCalendly = 'anromercas';

  const handleDayClick = (date: Date) => {
    setFechaSeleccionada(date);
    setTramoSeleccionado(null);
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
  };

  const validarFormulario = () => {
    const nuevosErrores: Record<string, string> = {};
    if (!formData.nombre.trim())
      nuevosErrores.nombre = 'El nombre es obligatorio';
    if (!formData.email.trim()) nuevosErrores.email = 'El email es obligatorio';
    if (!formData.dni.trim()) nuevosErrores.dni = 'El DNI es obligatorio';
    if (!formData.telefono.trim())
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    if (!formData.aceptaNormas)
      nuevosErrores.aceptaNormas = 'Debes aceptar las normas y políticas';

    setErrors(nuevosErrores);

    return Object.keys(nuevosErrores).length === 0;
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
    if (!validarFormulario()) {
      toast.error('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const tramo = tramosHorarios.find((t) => t.label === tramoSeleccionado);
    if (!tramo) return;

    const fechaInicio = new Date(fechaSeleccionada);
    fechaInicio.setHours(tramo.startHour, 0, 0);

    const fechaFin = new Date(fechaSeleccionada);
    fechaFin.setHours(tramo.endHour, 0, 0);

    const response = await fetch('https://api.calendly.com/scheduled_events', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_type: `https://calendly.com/${usuarioCalendly}/evento`,
        start_time: fechaInicio.toISOString(),
        end_time: fechaFin.toISOString(),
      }),
    });

    if (response.ok) {
      toast.success('Reserva realizada con éxito 🎉');
    } else {
      toast.error('Error al reservar. Intenta de nuevo.');
    }
  };

  const dayPropGetter = (date: Date) => {
    if (fechaSeleccionada && moment(date).isSame(fechaSeleccionada, 'day')) {
      return {
        style: {
          backgroundColor: '#4CAF50',
          color: 'white',
        },
      };
    }
    return {};
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
          views={{ month: true }}
          onSelectSlot={(slotInfo) => handleDayClick(slotInfo.start)}
          selectable
          style={{ height: 400 }}
          dayPropGetter={dayPropGetter}
        />
      </div>

      {fechaSeleccionada && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">
            Tramos disponibles para {moment(fechaSeleccionada).format('LL')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {tramosHorarios.map((tramo) => (
              <button
                key={tramo.label}
                className={`px-4 py-2 rounded-md transition ${
                  tramoSeleccionado === tramo.label
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-300 text-black hover:bg-gray-400'
                }`}
                onClick={() => handleTramoSeleccionado(tramo.label)}
              >
                {tramo.label}
              </button>
            ))}
          </div>

          {/* Formulario con validación */}
          <form className="mt-6 max-w-lg mx-auto text-left">
            {['nombre', 'email', 'dni', 'telefono'].map((field) => (
              <div key={field} className="mb-2">
                <label className="block capitalize">{field}:</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded mt-1 ${
                    errors[field] ? 'border-red-500' : ''
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

            <button
              type="button"
              className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
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
