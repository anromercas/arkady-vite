export interface Promotion {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
  href?: string;
  storageKey: string;
  active: boolean;
  startDate?: string;
  endDate?: string;
  delayMs?: number;
}

export interface PromotionsResponse {
  promotions: Promotion[];
}
