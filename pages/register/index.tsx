import { Card } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { TypeForm } from '../../components/TypeForm';
import {
  Product,
  Dependency,
  WalletSection,
  handleChangeColorModeValue,
} from '../../components';
import {
  Box,
  Heading,
  Container,
  Button,
  Input,
  Center,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

export default function Register() {
  
  return (
    <Container  maxW="5xl" py={10}>
      <Navbar />
      <Heading textAlign="center"
        as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="extrabold" mb={5}>
        Registration
      </Heading>
      <Card p={2}>
        <Box textAlign="left">
        <Heading as="h2" p="3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          Step 1: Connect your Keplr wallet </Heading>
      <WalletSection />
      <Heading textAlign="left" as="h2" p="3" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          Step 2: Complete the Typeform below: </Heading>
          <TypeForm/>
        </Box>
      </Card>
      <Box>
        <Footer />
      </Box>
    </Container>
  )
}