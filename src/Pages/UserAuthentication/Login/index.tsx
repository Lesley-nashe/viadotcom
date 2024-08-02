import { Button, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import FormInput from "../../../components/FormComponents/FormInput";
import { loginSchema } from "../../../Helpers";



const Loginpage = () => {
  return (
    <Flex width={"100%"}>
      <Flex direction={'column'} width={"100%"} height={"100%"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
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
