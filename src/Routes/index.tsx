import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";

const AppRoutes = () => {
  return (
    <Flex backgroundColor={"#030B1C"} width={"100%"} height={"100%"}>
      <Flex direction={"column"} width={"100%"} height={"100%"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Flex>
    </Flex>
  );
};

export default AppRoutes;
