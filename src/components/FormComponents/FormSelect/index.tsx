import { Flex, FormLabel } from "@chakra-ui/react";
import { Field } from "formik";

const FormSelect = (props: any) => {
  const { children, options, labelColor, title, id, name, type, ...rest } =
    props;
  return (
    <Flex {...rest} direction={"column"}>
      <FormLabel color={labelColor} htmlFor={name}>{title}</FormLabel>
      <Field style={{height: '40px', borderRadius:"5px"}} variant="white" as="select" name={name}>
        {options.map((item: any) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
    </Flex>
  );
};

export default FormSelect;
