import {
  Flex,
  HStack,
  RadioGroup,
  useDisclosure,
  useRadioGroup,
  Text,
  Divider,
  Collapse,
} from "@chakra-ui/react";
import React, { useState } from "react";
import RadioCard from "../../components/RadioButtons";
import Loginpage from "./Login";
import SignupPage from "./Signup";

const UserAuthentication = () => {
  const options = ["LOGIN", "REGISTER"];
  const [value, setValue] = useState("LOGIN");
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: options[0],
    onChange: onToggle,
  });

  const group = getRootProps();

  return (
    <Flex px={8} direction={"column"}>
      <Flex gap={3} direction={"column"}>
        {isOpen ? (
          <Flex direction={"column"}>
            <Text color={"White"} fontSize="40px">
              Please Enter Your Details
            </Text>
            <Text color={"White"} fontSize="14px">
              Log in or create an account below.
            </Text>
          </Flex>
        ) : (
          <Flex direction={"column"}>
            <Text color={"White"} fontSize="40px">
              Please Enter Your Details
            </Text>
            <Text color={"White"} fontSize="14px">
              Welcome, please fill the form below to register an account!
            </Text>
          </Flex>
        )}

        <Divider width={"42%"} color={"White"} />
      </Flex>

      <RadioGroup py={4} onChange={setValue} value={value}>
        <HStack direction={"row"} {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </RadioGroup>
      <Collapse in={isOpen} animateOpacity>
        <Loginpage />
      </Collapse>
      <Collapse in={!isOpen} animateOpacity>
        <SignupPage />
      </Collapse>
    </Flex>
  );
};

export default UserAuthentication;
