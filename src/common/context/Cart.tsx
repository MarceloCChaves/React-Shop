import { ReactNode, createContext, useContext, useState } from 'react';
import { ICartContextProps } from '../../interfaces/ICartContextProps';
import { IProduct } from '../../interfaces/IProduct';

export const CartContext = createContext<ICartContextProps | undefined>(undefined);

CartContext.displayName = "Carrinho";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }: any) => {
  const [cart, setCart] = useState<Array<IProduct>>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext deve ser usado dentro de um CartProvider");
  }

  const { cart, setCart } = context;

  const addProduct = (newProduct: IProduct) => {
    const hasProduct = cart.some(product => product.id === newProduct.id)
    if(!hasProduct){
      setCart(previousCart => 
        [...previousCart, newProduct]
      );
      alert(`Produto adicionado ao carrinho`)
    } else {
      alert("Produto já adicionado")
    }
  }

  const removeProduct = (p: IProduct) => {
    setCart(previousItem => previousItem.filter(item => {
      item.id !== p.id
    }));
    alert(`Produto removido do carrinho`)
  }

  return {
    cart,
    setCart,
    addProduct,
    removeProduct
  };
};