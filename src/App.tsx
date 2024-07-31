import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import AppRoutes from "./Routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
