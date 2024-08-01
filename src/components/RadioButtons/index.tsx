import { Box, useRadio } from "@chakra-ui/react"

// 1. Create a component that consumes the `useRadio` hook
const RadioCard = (props: any) => {
    const { getInputProps, getRadioProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getRadioProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='0px'
          boxShadow='md'
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
          backgroundColor={"#A3C1AD"}
        >
          {props.children}
        </Box>
      </Box>
    )
  }

  export default RadioCard
  