import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react';
import Router from './routes.tsx';
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  </React.StrictMode>,
)
