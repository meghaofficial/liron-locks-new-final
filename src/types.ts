export interface Product {
  name?: string;
  category?: string;
  price?: number;
  discount?: number;
  discounted_price?: number;
  rating?: number;
  url?: string;
}

export type ProductCardType = {
  name?: string,
  category?: string,
  price?: number,
  discount?: number,
  discounted_price?: number,
  rating?: number,
  url?: string
}