import {
  Box,
  Flex,
  Text,
  Button,
  Link,
  Image,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import vdtlogo from "../../tools/vdtlogo3.png";
import { CaretDown, User } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const MenuItem = (props: any) => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
      color={"white"}
    >
      <Link >{children}</Link>
    </Text>
  );
};

const Navbar = (props: any) => {
  const navigate = useNavigate();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={4}
      px={8}
      bg={"#030B1C"}
      {...props}
      height={"150px"}
      top={0}
      position="sticky"
      zIndex={1000} // Adjust this value if needed
    >
      <Flex align="center">
        <Image borderRadius={"50px"} src={vdtlogo} />
      </Flex>

      <Box flexBasis={{ base: "100%", md: "auto" }}>
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <>
            <MenuItem
              onClick={() => navigate("/")}
              fontSize="16px"
              fontWeight="bold"
            >
              Home
            </MenuItem>

            <Menu>
              <MenuButton pr={10}>
                <Text fontWeight="bold" display="block" color={"white"}>
                 <Flex direction={'row'}>Products <CaretDown size={20} /></Flex>
                </Text>
              </MenuButton>

              <MenuList p={5}>
                <MenuItem fontSize="16px" fontWeight="bold">
                  <Box p={2}>
                    <Text fontWeight="bold" display="block" color="#030B1C">
                      Fibre
                    </Text>
                  </Box>
                </MenuItem>

                <MenuItem fontSize="16px" fontWeight="bold">
                  <Box p={2}>
                    <Text fontWeight="bold" display="block" color="#030B1C">
                      Air Fibre
                    </Text>
                  </Box>
                </MenuItem>

                <MenuItem fontSize="16px" fontWeight="bold">
                  <Box p={2}>
                    <Text fontWeight="bold" display="block" color="#030B1C">
                      5G
                    </Text>
                  </Box>
                </MenuItem>

                <MenuItem fontSize="16px" fontWeight="bold">
                  <Box p={2}>
                    <Text fontWeight="bold" display="block" color="#030B1C">
                      Fixed LTE
                    </Text>
                  </Box>
                </MenuItem>

                <MenuItem fontSize="16px" fontWeight="bold">
                  <Box p={2}>
                    <Text fontWeight="bold" display="block" color="#030B1C">
                      On-the-Go Internet
                    </Text>
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
            <MenuItem
              // onClick={() => navigate("/checkout")}
              fontSize="16px"
              fontWeight="bold"
            >
              Apply
            </MenuItem>
            <MenuItem
              // onClick={() => navigate("/checkout")}
              fontSize="16px"
              fontWeight="bold"
            >
              About Us
            </MenuItem>
            <MenuItem
              // onClick={() => navigate("/checkout")}
              fontSize="16px"
              fontWeight="bold"
            >
              Get Help
            </MenuItem>

            <Flex gap={4} direction={"row"}>
              <Button background={'yellow'} borderRadius={"20px"}>
                <Text fontSize={"small"}>CHECK COVERAGE</Text>
              </Button>

              <Button onClick={() => navigate("/authenticate")} borderRadius={"20px"}>
                <User size={12} /> <Text mx={2}>Login</Text> 
              </Button>
            </Flex>
          </>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
