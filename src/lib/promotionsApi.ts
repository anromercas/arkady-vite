import { Promotion, PromotionsResponse } from "../types/promotion";

// TODO: Reemplaza esta URL con tu endpoint de Google AppScript
const APPSCRIPT_ENDPOINT = import.meta.env.VITE_PROMOTIONS_API_URL || "";

/**
 * Obtiene las promociones activas desde el endpoint de AppScript
 * @returns Array de promociones activas
 */
export async function fetchPromotions(): Promise<Promotion[]> {
  if (!APPSCRIPT_ENDPOINT) {
    console.warn("VITE_PROMOTIONS_API_URL no está configurado");
    return [];
  }

  try {
    const response = await fetch(APPSCRIPT_ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener promociones: ${response.status}`);
    }

    const data: PromotionsResponse = await response.json();
    
    // Filtrar solo promociones activas y válidas por fecha
    const now = new Date();
    return data.promotions.filter((promo) => {
      if (!promo.active) return false;
      
      // Verificar fecha de inicio
      if (promo.startDate) {
        const startDate = new Date(promo.startDate);
        if (now < startDate) return false;
      }
      
      // Verificar fecha de fin
      if (promo.endDate) {
        const endDate = new Date(promo.endDate);
        if (now > endDate) return false;
      }
      
      return true;
    });
  } catch (error) {
    console.error("Error al cargar promociones:", error);
    return [];
  }
}
