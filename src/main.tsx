import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import Router from './routes.tsx';
import "./styles/global.css";
import { CartProvider } from './common/context/Cart.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </CartProvider>
  </React.StrictMode>,
)
