import { Box, Button, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../styles/styles";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        backgroundImage="url('/fundo2.jpg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        height="100vh"
        overflowX="hidden"
      >
        <Navbar />
        
        <Box
          
          width="80%"
          height="80%"
          zIndex="100"
          p={8}
        >
          <Heading color="white" as="h1" mb={8}>Entre em contato conosco</Heading>
          <Box as="form" method="post" action="https://formspree.io/f/your-form-id">
            <Input type="text" name="name" placeholder="Seu nome" mb={4} />
            <Input type="email" name="_replyto" placeholder="Seu endereço de e-mail" mb={4} />
            <Textarea name="message" placeholder="Sua mensagem" mb={4} />
            <Button type="submit" bg="#8A624A">Enviar</Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
