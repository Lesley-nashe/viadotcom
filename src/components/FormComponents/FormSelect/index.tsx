import { Flex, Select } from "@chakra-ui/react";
import { Field } from "formik";
import React, { FC } from "react";

interface formSelectProps {
  name: string;
  options: [string];
}

const formSelect: FC<formSelectProps> = ({ name, options }) => {
  return (
    <Flex direction={"column"}>
      <Field as="select" name={name}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
    </Flex>
  );
};

export default formSelect;
