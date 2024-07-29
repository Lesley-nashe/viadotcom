import { Flex, Heading, Input, Text } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return (
    <Flex width={"100%"} height={"100%"}>
      <Flex p={8} width={"100%"} height={"100%"} direction={"column"}>
        <Heading width={"700px"} fontSize={"xxx-large"} color={"whitesmoke"}>
          Super fast connectivity made simple.
        </Heading>

        <Text fontSize={"xx-large"} color={"whitesmoke"}>
          Check for internet coverage in your area.
        </Text>
        <Flex my={3}>
          <Input width={'700px'} placeholder="Basic usage" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Homepage;
