import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import {
  Box,Divider,Grid,Heading,Text,Stack,Container,Link,Button,Flex,Image, Input,Icon,useColorMode,Center,Card, CardHeader, CardBody, CardFooter, SimpleGrid, Select 
  } from '@chakra-ui/react';




export default function Register() {
    return (
        <Container maxW="2xl" py={1}>
            <Navbar/>
            <Card p={2} py="4" >
        <Box textAlign="left">
            <Box textAlign="center">
            <Heading
          as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="extrabold" mb={5}>
          Ticket Mint
        </Heading> 
            </Box>
            <Center>
      {" "}
      <Container>
        <div>
          <SimpleGrid columns={1} spacing={5}>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://bafybeigoaq2i7t4ptdfg6z4uqctdild3m5frkwnhysncmroqj6r37i5s6m.ipfs.nftstorage.link/'
    alt='Ticket'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>Mothership 4/20 Celebration Ticket</Heading>

      <Text py='2'>
        Follow the instructions below to mint your access token:
      </Text>
    </CardBody>

   
  </Stack>
</Card>
            <Card direction="row" variant="outline">
              <Stack>
        
                  <Center px={5} ><Heading color="white" size="md" p={5}>1. Select Token </Heading>
                  <Select placeholder='Select option'>
  <option value='option1'>USDC</option>
                </Select>
                <Card direction="row" variant="outline">
                  
                <Stack>
                </Stack>
                </Card>
                  </Center>
              </Stack>
            </Card>
            <Card direction="row" variant="outline">
            <Stack>
        <Center px={2} >
          <Stack>
            <Center>
          <Heading color="white" size="md" p={5}>2. Confirm Mint</Heading>
        <Button variant='outline' colorScheme='blue'> Mint Now</Button>
        </Center>
        </Stack>
        
      <Card direction="row" variant="outline">
        
      <Stack>
      </Stack>
      </Card>
        </Center>



    </Stack>
            </Card>
          </SimpleGrid>
        </div>
      </Container>
    </Center>
    </Box>
    </Card>
        </Container>
    )

}

