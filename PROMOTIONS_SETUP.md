# Configuración de Promociones Dinámicas

Este documento explica cómo configurar el sistema de promociones dinámicas que obtiene datos desde Google Sheets mediante Google AppScript.

## 1. Configurar Google Sheets

### Estructura de la hoja de cálculo

Crea una hoja de Google Sheets con las siguientes columnas:

| id | title | imageUrl | imageAlt | href | storageKey | active | startDate | endDate | delayMs |
|----|-------|----------|----------|------|------------|--------|-----------|---------|---------|
| promo_halloween_2025 | Halloween 2025 | https://drive.google.com/uc?id=FILE_ID | ¡Promo de Halloween 2025! | /reservas | arkady_promo_halloween2025 | TRUE | 2025-10-01 | 2025-11-01 | 800 |

### Descripción de las columnas:

- **id**: Identificador único de la promoción (texto)
- **title**: Título de la promoción (texto)
- **imageUrl**: URL de la imagen en Google Drive (texto)
- **imageAlt**: Texto alternativo para la imagen (texto)
- **href**: URL a la que redirige al hacer clic (opcional, texto)
- **storageKey**: Clave única para localStorage - **IMPORTANTE: debe ser única por promoción** (texto)
- **active**: Si la promoción está activa (TRUE/FALSE)
- **startDate**: Fecha de inicio (formato: YYYY-MM-DD, opcional)
- **endDate**: Fecha de fin (formato: YYYY-MM-DD, opcional)
- **delayMs**: Milisegundos de retardo antes de mostrar (número, opcional, default: 800)

### Importante sobre `storageKey`:
El `storageKey` es **crítico** porque:
- Es la clave que se guarda en localStorage del navegador cuando el usuario marca "No volver a mostrar"
- **Debe ser único para cada promoción** para que funcione correctamente el control de visibilidad
- Ejemplo: `arkady_promo_halloween2025`, `arkady_promo_navidad2025`, etc.

## 2. Subir imágenes a Google Drive

1. Sube las imágenes de las promociones a una carpeta en Google Drive
2. Para cada imagen:
   - Click derecho → "Obtener enlace"
   - Asegúrate de que el acceso sea "Cualquier persona con el enlace"
   - Copia el ID del archivo (la parte entre `/d/` y `/view` en la URL)
   - Usa el formato: `https://drive.google.com/uc?id=FILE_ID`

Ejemplo:
- URL original: `https://drive.google.com/file/d/1ABC123xyz/view?usp=sharing`
- URL para usar: `https://drive.google.com/uc?id=1ABC123xyz`

## 3. Crear el Google AppScript

1. En tu Google Sheet, ve a **Extensiones → Apps Script**
2. Borra el código por defecto y pega el siguiente código:

```javascript
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Promociones');
    
    if (!sheet) {
      return ContentService.createTextOutput(JSON.stringify({
        error: 'No se encontró la hoja "Promociones"',
        promotions: []
      }))
      .setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const rows = data.slice(1);
    
    // Mapear las filas a objetos
    const promotions = rows
      .filter(row => row[0]) // Filtrar filas vacías
      .map(row => {
        const promo = {};
        headers.forEach((header, index) => {
          const value = row[index];
          
          // Convertir tipos de datos
          if (header === 'active') {
            promo[header] = value === true || value === 'TRUE' || value === 'true';
          } else if (header === 'delayMs') {
            promo[header] = value ? Number(value) : 800;
          } else if (header === 'startDate' || header === 'endDate') {
            promo[header] = value ? new Date(value).toISOString() : null;
          } else {
            promo[header] = value || null;
          }
        });
        return promo;
      });
    
    const response = {
      promotions: promotions,
      timestamp: new Date().toISOString()
    };
    
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      error: error.toString(),
      promotions: []
    }))
    .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Guarda el proyecto con un nombre descriptivo (ej: "Arkady Promociones API")

## 4. Desplegar el AppScript

1. Click en **Implementar → Nueva implementación**
2. Selecciona el tipo: **Aplicación web**
3. Configuración:
   - **Descripción**: "API de promociones Arkady"
   - **Ejecutar como**: "Yo"
   - **Quién tiene acceso**: "Cualquier persona"
4. Click en **Implementar**
5. **Copia la URL** que te proporciona (será algo como: `https://script.google.com/macros/s/ABC123.../exec`)

## 5. Configurar la aplicación Vite

1. Crea un archivo `.env` en la raíz del proyecto (si no existe)
2. Añade la siguiente variable con la URL de tu AppScript:

```env
VITE_PROMOTIONS_API_URL=https://script.google.com/macros/s/TU_SCRIPT_ID/exec
```

3. Reinicia el servidor de desarrollo para que cargue las nuevas variables de entorno

## 6. Probar el sistema

1. Añade una promoción de prueba en tu Google Sheet con `active = TRUE`
2. Asegúrate de que las fechas (si las usas) incluyan la fecha actual
3. Recarga tu aplicación
4. La promoción debería aparecer después del delay configurado

## 7. Gestión de promociones

### Activar/Desactivar promociones
- Cambia el valor de la columna `active` a `TRUE` o `FALSE`
- Los cambios se reflejarán en la próxima carga de la página

### Programar promociones
- Usa `startDate` y `endDate` para que las promociones se muestren automáticamente en fechas específicas
- Formato: `YYYY-MM-DD` (ej: `2025-10-15`)

### Control de "No volver a mostrar"
- Cada promoción usa su propio `storageKey`
- Si un usuario marca "No volver a mostrar", solo afecta a esa promoción específica
- Para mostrar la misma promoción nuevamente, cambia el `storageKey` a un valor nuevo

### Múltiples promociones simultáneas
- Puedes tener varias promociones activas al mismo tiempo
- Se mostrarán con un pequeño delay entre ellas (100ms adicional por cada una)
- El usuario puede cerrarlas individualmente

## 8. Solución de problemas

### Las promociones no aparecen
1. Verifica que `VITE_PROMOTIONS_API_URL` esté configurado correctamente
2. Abre la consola del navegador y busca errores
3. Verifica que la URL del AppScript sea accesible públicamente
4. Comprueba que la columna `active` esté en `TRUE`
5. Verifica que las fechas `startDate` y `endDate` sean válidas

### La imagen no se muestra
1. Verifica que el archivo en Drive tenga permisos públicos
2. Asegúrate de usar el formato correcto: `https://drive.google.com/uc?id=FILE_ID`
3. Prueba abrir la URL de la imagen directamente en el navegador

### El "No volver a mostrar" no funciona
1. Verifica que cada promoción tenga un `storageKey` único
2. Comprueba el localStorage del navegador (DevTools → Application → Local Storage)
3. Para resetear, borra las claves que empiecen con `arkady_promo_`

## 9. Actualizar el AppScript

Si necesitas hacer cambios en el código del AppScript:
1. Edita el código en el editor de Apps Script
2. Guarda los cambios
3. Ve a **Implementar → Administrar implementaciones**
4. Click en el icono de editar (lápiz) de tu implementación
5. Cambia la versión a "Nueva versión"
6. Click en **Implementar**

La URL del endpoint permanecerá igual, no necesitas actualizar el `.env`.
