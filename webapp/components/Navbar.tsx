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

      <Flex align="center" flexGrow={1}>
        <Box display={{ base: "none", md: "flex" }} ml={10}>
          <Link href="/" mr={4} fontSize="md" fontWeight="bold" letterSpacing="wide">
            Home
          </Link>
          <Link href="/about" mr={4} fontSize="md" fontWeight="bold" letterSpacing="wide">
            Sobre nós
          </Link>
          <Link href="/contactos" mr={4} fontSize="md" fontWeight="bold" letterSpacing="wide">
            Contatos
          </Link>
          <Link href="/produto" mr={4} fontSize="md" fontWeight="bold" letterSpacing="wide">
            Produtos
          </Link>
        </Box>
      </Flex>

        <Link as={NextLink} display="flex" alignItems="center" mr={4} href="/profile" passHref>
          <img src="/perfil.png" alt="Descrição da imagem" width="50px" />
        </Link>
        <Link as={NextLink} display="flex" alignItems="center" mr={4} href="/cesto" passHref>
          <img src="/cesto.png" alt="Descrição da imagem" width="35px" />
        </Link>
      <Box display={{ base: "none", md: "block" }}>
        <NextLink href="/login" passHref>
          <Button
            colorScheme="#8A624A"
            variant="outline"
            mr={4}
            borderRadius="0"
            borderColor="white"
          >
            Logout
          </Button>
        </NextLink> 
      </Box>
        

    </Flex>
  );
};

export default Navbar;
