export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isAtCart?: boolean;
  quantity?: number;
}