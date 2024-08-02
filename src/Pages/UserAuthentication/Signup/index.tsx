import {
  Button,
  Checkbox,
  Flex,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import FormInput from "../../../components/FormComponents/FormInput";
import FormSelect from "../../../components/FormComponents/FormSelect";
import { SignupSchema } from "../../../Helpers";

const SignupPage = () => {
  return (
    <Flex width={"100%"}>
      <Flex direction={"column"} width={"100%"} height={"100%"}>
        <Formik
          initialValues={{
            customerType: "",
            citizenship: "",
            fname: "",
            surname: "",
            mobileNumber: "",
            Idnumber: "",
            email: "",
            confirmEmail: "",
            password: ""
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
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
                name="citizenship"
                title="Are you an SA Citizen/Resident? :"
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
                name="mobileNumber"
                title="Mobile Number :"
                my={3}
              />
              <FormInput
                labelColor={"white"}
                width={"230px"}
                name="Idnumber"
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
                name="confirmEmail"
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
