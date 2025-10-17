# Guía Rápida - Sistema de Promociones Dinámicas

## ✅ Pasos Rápidos para Empezar

### 1. Crear Google Sheet (5 minutos)
1. Crea una nueva hoja de Google Sheets
2. Nómbrala "Promociones" (importante: debe llamarse exactamente así)
3. Copia las columnas del archivo `google-sheets-template.csv` o créalas manualmente:
   - id | title | imageUrl | imageAlt | href | storageKey | active | startDate | endDate | delayMs

### 2. Subir Imagen a Drive (2 minutos)
1. Sube tu imagen de promoción a Google Drive
2. Click derecho → "Obtener enlace" → "Cualquier persona con el enlace"
3. Copia el ID del archivo (la parte entre `/d/` y `/view`)
4. Usa este formato: `https://drive.google.com/uc?id=TU_FILE_ID`

### 3. Añadir Promoción (1 minuto)
Ejemplo de fila en tu Google Sheet:

```
id: promo_halloween_2025
title: Halloween 2025
imageUrl: https://drive.google.com/uc?id=1ABC123xyz
imageAlt: ¡Promo de Halloween 2025!
href: /reservas
storageKey: arkady_promo_halloween2025
active: TRUE
startDate: 2025-10-01
endDate: 2025-11-01
delayMs: 800
```

### 4. Crear AppScript (3 minutos)
1. En tu Google Sheet: **Extensiones → Apps Script**
2. Copia el código del archivo `appscript-example.js`
3. Guarda el proyecto

### 5. Desplegar AppScript (2 minutos)
1. Click en **Implementar → Nueva implementación**
2. Tipo: **Aplicación web**
3. Ejecutar como: **Yo**
4. Acceso: **Cualquier persona**
5. **Copia la URL** que te da

### 6. Configurar la App (1 minuto)
1. Crea archivo `.env` en la raíz del proyecto
2. Añade:
   ```
   VITE_PROMOTIONS_API_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
   ```
3. Reinicia el servidor de desarrollo

### 7. ¡Listo! 🎉
Recarga tu aplicación y verás la promoción aparecer.

---

## 🔑 Puntos Clave

### StorageKey - MUY IMPORTANTE
- **Debe ser único para cada promoción**
- Controla el "No volver a mostrar" en el navegador
- Ejemplo: `arkady_promo_halloween2025`, `arkady_promo_navidad2025`
- Si cambias el storageKey, la promoción se mostrará de nuevo aunque el usuario la haya ocultado antes

### Activar/Desactivar Promociones
- Cambia `active` a `TRUE` para activar
- Cambia `active` a `FALSE` para desactivar
- Los cambios son inmediatos (próxima recarga de página)

### Fechas Opcionales
- `startDate`: La promoción solo se muestra a partir de esta fecha
- `endDate`: La promoción solo se muestra hasta esta fecha
- Formato: `YYYY-MM-DD` (ej: `2025-10-15`)
- Si no pones fechas, la promoción se muestra siempre (mientras `active=TRUE`)

### Múltiples Promociones
- Puedes tener varias promociones activas simultáneamente
- Se mostrarán una tras otra con un pequeño delay
- Cada una tiene su propio control de "No volver a mostrar"

---

## 🛠️ Gestión Diaria

### Para añadir una nueva promoción:
1. Sube la imagen a Drive y obtén la URL
2. Añade una nueva fila en Google Sheets
3. Pon `active=TRUE`
4. ¡Listo! Se mostrará automáticamente

### Para desactivar una promoción:
1. Cambia `active` a `FALSE` en Google Sheets
2. ¡Listo! Dejará de mostrarse

### Para reactivar una promoción que los usuarios ocultaron:
1. Cambia el `storageKey` a un valor nuevo (ej: `arkady_promo_halloween2025_v2`)
2. La promoción volverá a mostrarse a todos los usuarios

---

## 📋 Checklist de Verificación

Antes de activar una promoción, verifica:

- [ ] La imagen está en Drive con permisos públicos
- [ ] La URL de la imagen usa el formato correcto (`/uc?id=`)
- [ ] El `storageKey` es único (no se repite con otras promociones)
- [ ] El campo `active` está en `TRUE`
- [ ] Las fechas (si las usas) están en formato `YYYY-MM-DD`
- [ ] La fecha actual está entre `startDate` y `endDate`
- [ ] El AppScript está desplegado y la URL está en el `.env`

---

## 🆘 Solución Rápida de Problemas

**No aparece la promoción:**
- ✅ Verifica que `active=TRUE`
- ✅ Verifica las fechas
- ✅ Abre la consola del navegador (F12) y busca errores
- ✅ Verifica que el `.env` tenga la URL correcta

**La imagen no se ve:**
- ✅ Verifica que la imagen en Drive sea pública
- ✅ Usa el formato `/uc?id=` en la URL
- ✅ Prueba abrir la URL directamente en el navegador

**El "No volver a mostrar" no funciona:**
- ✅ Cada promoción debe tener un `storageKey` diferente
- ✅ Para resetear, borra el localStorage del navegador

---

## 📚 Documentación Completa

Para más detalles, consulta `PROMOTIONS_SETUP.md`
