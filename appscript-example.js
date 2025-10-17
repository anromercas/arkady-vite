/**
 * Google AppScript para servir promociones desde Google Sheets
 * 
 * Instrucciones:
 * 1. Crea una hoja llamada "Promociones" en tu Google Sheet
 * 2. Añade las columnas: id, title, imageUrl, imageAlt, href, storageKey, active, startDate, endDate, delayMs
 * 3. Copia este código en Apps Script (Extensiones → Apps Script)
 * 4. Despliega como aplicación web con acceso público
 * 5. Copia la URL del endpoint y añádela a tu archivo .env
 */

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

/**
 * Función de prueba para verificar que el script funciona correctamente
 * Ejecuta esta función desde el editor de Apps Script para probar
 */
function testGetPromotions() {
  const result = doGet();
  const content = result.getContent();
  Logger.log(content);
  return JSON.parse(content);
}
