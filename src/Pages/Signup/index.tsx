import {
  Button,
  Checkbox,
  Divider,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import FormInput from "../../components/FormComponents/FormInput";
import FormSelect from "../../components/FormComponents/FormSelect";

const SignupPage = () => {
  return (
    <Flex width={"100%"} p={8}>
      <Flex direction={"column"} width={"100%"} height={"100%"}>
        <Flex gap={3} direction={"column"}>
          <Text color={"White"} fontSize="40px">
            Please Enter Your Details
          </Text>
          <Text color={"White"} fontSize="14px">
            Welcome, if you joined Supersonic before 1 August 2021, please use
            this login here
          </Text>
          <Divider width={"42%"} color={"White"} />
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
            <Flex width={"100%"} direction={"column"}>
              <FormSelect
                labelColor={"white"}
                width={"500px"}
                name="customerType"
                title="Customer Type :"
                my={3}
                options={["Business", "Individual"]}
              />
              <FormSelect
                labelColor={"white"}
                width={"500px"}
                name="customerType"
                title="Customer Type :"
                my={3}
                options={["Yes, I am a SA Citizen/Resident", "Non SA Resident"]}
              />
            </Flex>
            <SimpleGrid width={"42%"} columns={2}>
              <FormInput
                labelColor={"white"}
                width={"230px"}
                name="fname"
                title="First Name :"
                my={3}
              />
              <FormInput
                labelColor={"white"}
                width={"230px"}
                name="surname"
                title="Lastname :"
                my={3}
              />
              <FormInput
                labelColor={"white"}
                width={"230px"}
                name="mobilenumber"
                title="Mobile Number :"
                my={3}
              />
              <FormInput
                labelColor={"white"}
                width={"230px"}
                name="Id"
                title="ID Number :"
                my={3}
              />
            </SimpleGrid>
            <Flex width={"100%"} direction={"column"}>
              <FormInput
                labelColor={"white"}
                width={"500px"}
                name="email"
                title="Email Address :"
                my={3}
              />
              <FormInput
                labelColor={"white"}
                width={"500px"}
                name="email"
                title="Confirm Email :"
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
              <Checkbox my={3} defaultChecked>
                <Text color={'white'} fontSize="14px">
                  Yes, please contact me with regards to future marketing
                  promotions and campaigns.
                </Text>
              </Checkbox>
            </Flex>
            <Flex direction={"row"} mt={4}>
              <Button colorScheme="white" background="#0530ad">
                Register
              </Button>
            </Flex>
          </Form>
        </Formik>
      </Flex>
    </Flex>
  );
};

export default SignupPage;
