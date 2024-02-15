import { ReactNode, createContext, useContext, useState } from 'react';
import { ICartContextProps } from '../../interfaces/ICartContextProps';
import { IProduct } from '../../interfaces/IProduct';
import { useToast } from '@chakra-ui/react'

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
  const toast = useToast();

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
      toast({
        title: 'Added',
        description: `Product ${newProduct.title} has been added to cart`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    } else {
      toast({
        title: 'Error',
        description: `product ${newProduct.title} is already in the cart`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const removeProduct = (p: IProduct) => {
    setCart(previousItem => previousItem.filter(item => {
      item.id !== p.id
    }));
    toast({
      title: 'Removed',
      description: `Product ${p.title} has been removed from cart`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  }

  return {
    cart,
    setCart,
    addProduct,
    removeProduct
  };
};
