// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
