import { FormEvent, useState } from "react";
import connect from "../db/connect";
import User, { IUser } from "../models/User";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  ThemeProvider,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "../styles/styles";
import Navbar from "../components/Navbar_sign";
import NextLink from "next/link";

const mongoose = require('mongoose')
const PORT = 5050;


// connect to mongodb
mongoose.connect("mongodb+srv://admin:admin123@ptiptr.unbaobh.mongodb.net/ptiptr?retryWrites=true&w=majority").then(() => {
    // User.insertMany({username:"a", name:"okok"})
    
  console.log("Server is running...");

});

export default function Registo() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmePassword, setConfirmePassword] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const newUser: IUser = new User({
        nome,
        email,
        senha: password,
        NIF: 123495050,
        Morada: "Rua Ola",
        telemovel: 12345234,
      });

      await newUser.save();

      console.log(`Novo usuário criado: ${newUser}`);
    } catch (error) {
      console.error(`Erro ao criar novo usuário: ${error}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          body {
            background-image: url('/fundo.jpg');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            overflow-x: hidden;
          }
        `}
      />
      <Box
        background="rgb(1,1,1,0.3)"
        width="100%"
        height="100%"
        zIndex="100"
      >
      <Navbar />
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Box bg="#65000b" p="4">
            <Heading size="md" color="white">
              Faça login na sua conta
            </Heading>
          </Box>
          <Box p="4">
            <form onSubmit={handleSubmit}>
              <FormControl id="nome" mb="4">
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" mb="4">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" mb="4">
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <FormControl id="confirmePassword" mb="4">
                <FormLabel>Confirme a Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmePassword}
                  onChange={(e) => setConfirmePassword(e.target.value)}
                />
              </FormControl>
              <Button type="submit" width="full">
                Registar
              </Button>
            </form>
            <Text mt="4" textAlign="center">
              Já tem uma conta?{" "}
              <Link as={NextLink} href="/login" color="#65000b" passHref>
                Faça o login aqui
              </Link>
            </Text>
          </Box>
        </Box></Box>
      </Box>
    </ThemeProvider>
  );
}
