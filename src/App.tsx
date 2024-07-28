import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
     <h1>Hello World</h1>
    </div>
    </ChakraProvider>
  );
}

export default App;
