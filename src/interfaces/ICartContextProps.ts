import { Dispatch, SetStateAction } from "react";
import { IProduct } from "./IProduct";

export interface ICartContextProps {
  cart: Array<IProduct>;
  setCart: Dispatch<SetStateAction<Array<IProduct>>>;
}
