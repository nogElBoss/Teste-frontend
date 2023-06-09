import { Box, Button, Heading, Link, Text, Flex } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../styles/styles";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      bg=""
      color="white"
    >
      <Flex align="center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" width="110px" />
        </Link>
      </Flex>

      

      <Box display={{ base: "none", md: "block" }}>
        <NextLink href="/login" passHref>
          <Button
            colorScheme="#8A624A"
            variant="outline"
            mr={4}
            borderRadius="0"
            borderColor="white"
          >
            Sign In
          </Button>
        </NextLink>
        <NextLink href="/registo" passHref>
          <Button
            colorScheme="teal"
            variant="solid"
            borderRadius="0"
            bg="white"
            color="#8A624A"
          >
            Sign Up
          </Button>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
