import { Flex, Text, Image } from "@chakra-ui/react";
import vdtlogo from "../../tools/vdtlogo4.png";
import React from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <Flex width={"100%"}>
      <Flex width={"100%"} direction={"row"}>
        <Flex p={8} direction={"column"} width={"100%"}>
          <Flex py={4} align="center">
            <Image borderRadius={"20px"} src={vdtlogo} />
          </Flex>
          <Text color={"whitesmoke"}>
            © Copyright Supersonic. All rights reserved.
          </Text>
        </Flex>
        <Flex justifyContent={"flex-end"}>
          <Flex gap={4} alignContent={"center"} px={8} py={20} direction={"row"}>
            <FacebookLogo color="white" size={32} />
            <XLogo color="white" size={32} />
            <InstagramLogo color="white" size={32} />
            <LinkedinLogo color="white" size={32} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
