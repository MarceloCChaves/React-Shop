export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description?: string;
  isAtCart?: boolean;
  image: string;
}