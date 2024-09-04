import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MapPin } from "@phosphor-icons/react";
import React, { useContext } from "react";
import { AuthContext } from "../../auth/authWrapper";
import { useAuthContext } from "../../hooks/useContext";

const Homepage = () => {
  const {currentUser} = useAuthContext()
  console.log(currentUser);
  return (
    <Flex width={"100%"} height={"100%"}>
      <Flex p={8} width={"100%"} height={"100%"} direction={"column"}>
        <Heading width={["100%","100%","400px","700px"]} fontSize={"xxx-large"} color={"whitesmoke"}>
          Super fast connectivity made simple.
        </Heading>

        <Text fontSize={"xx-large"} color={"whitesmoke"}>
          Check for internet coverage in your area.
        </Text>
        <Flex my={3}>
          <InputGroup width={"600px"}>
            <Input background={'whitesmoke'} borderRadius={"20px"} placeholder="Check coverage" />
            <InputRightElement mr={2}>
              <MapPin size={24} />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Homepage;
