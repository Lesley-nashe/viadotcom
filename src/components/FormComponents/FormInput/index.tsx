import { Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface formFields {
  title?: string;
  name: string;
  id?: string;
  type: string;
}

const FormInput: FC<formFields> = ({
  title,
  name,
  id,
  type,
  ...Children
}) => {
  return (
    <Flex direction={'column'} {...Children}>
      <FormLabel htmlFor="email">{title}</FormLabel>
      <Field
        as={Input}
        id={id}
        name={name}
        type={type}
        variant="filled"
        width={"300px"}
      />
      <ErrorMessage name={name}>
        {(errorMessage) => <Text>{errorMessage}</Text>}
      </ErrorMessage>
    </Flex>
  );
};

export default FormInput
