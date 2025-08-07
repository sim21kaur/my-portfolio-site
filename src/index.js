// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
