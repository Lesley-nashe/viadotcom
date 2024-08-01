import { Button, Flex, Text, Divider } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import FormInput from "../../components/FormComponents/FormInput";

const Loginpage = () => {
  return (
    <Flex width={"100%"}  p={8}>
      <Flex direction={'column'} width={"100%"} height={"100%"}>
        <Flex gap={3} direction={'column'}>
          <Text color={'White'} fontSize="40px">
          Please Enter Your Details
          </Text>
          <Text color={'White'} fontSize="14px">
          Log in or create an account below.
          </Text>
          <Divider width={"42%"} color={'White'} />
        </Flex>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log(values.email, values.password);
          }}
        >
          <Form>
            <Flex mt={4} direction={"column"}>
              <FormInput
                labelColor={"white"}
                width={"500px"}
                name="email"
                title="Email :"
                my={3}
              />
              <FormInput
                labelColor={"white"}
                width={"500px"}
                name="password"
                title="Password :"
                type="password"
                my={3}
              />
            </Flex>
            <Flex direction={"row"} mt={4}>
              <Button colorScheme="white" background="#0530ad">
                Forgot your password ?
              </Button>
              <Button
                colorScheme="white"
                background="#22bb33"
                type="submit"
                mx={2}
              >
                Login
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Flex>
    </Flex>
  );
};

export default Loginpage;
