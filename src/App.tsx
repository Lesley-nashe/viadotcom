import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import AppRoutes from "./Routes";
import { AuthWrapper } from "./auth/authWrapper";

function App() {
  return (
    <AuthWrapper>
      <ChakraProvider theme={theme}>
        <AppRoutes />
      </ChakraProvider>
    </AuthWrapper>
  );
}

export default App;
