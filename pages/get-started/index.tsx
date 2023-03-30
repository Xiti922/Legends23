import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { useChain } from '@cosmos-kit/react';
import Head from 'next/head';
import {
    Box,
    Card, 
    CardHeader,
    CardBody, 
    CardFooter,
    Divider,
    Grid,
    Heading,
    Text,
    Stack,
    Container,
    Link,
    Button,
    Flex,
    Icon,
    useColorMode,
    Center,
  } from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';  
import {
    chainassets,
    chainName,
    coin,
    dependencies,
  } from '../../config';

export default function GetStarted() {


return (
    <Container maxW="5xl" py={10}>
       <Navbar />
       <Box   textAlign="center">
        <Heading 
          as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="extrabold" mb={5}>
          Introduction
        </Heading> 
          <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            Simple Tutorials For Interacting With The App
          </Heading>
        </Box>
        <Box >
        <Text fontSize='lg' fontWeight="bold"  p="1" >Welcome! This is your one stop for understanding exactly how to use the application powering ticketing & judging.
        </Text>
        <Text>
        These fundamentals we will cover can be applied to interacting with similar applications built by other teams, if you have any specific technical questions leading up to the event, 
         please contact our team.
        </Text>
          <Heading textAlign="center" color="#F3C674" as="h2" p="2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            STEP 1: SETTING UP YOUR WALLET
          </Heading>
          <Box   textAlign="center">
          <Heading color="#F06543" as="h3" p="7.5" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >What is a wallet?</Heading>
          <Text>A crypto wallet is like a bank account on steroids. 
          Think about it, any financial service you use, (PayPal, Credit Card, Stripe...) needs to be linked to a bank account. Not just for funding, but for verification.
          In crypto, your wallet is what connects you to the DeFi applications and blockchains that exist. 
          </Text>
          <Heading color="#F06543" as="h3" p="7.5" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          Why are we using wallets?
          </Heading>
          <Text>Your wallet acts as your log-in for crypto apps. Just like when a website asks you "Would you like to log-in with Facebook / Google?”. 
            Whats worthy to note is that unlike centralized login & authentication technology, the most beneficial crypto applications are censorship-resistant,
            meaning there is very few ways to limit someone from interacting with the features an application provides. This differs from what we find our culture 
            relying on with digital applications and services, and is why our team is willing to take the time to create applications like this.
          </Text>
          <Heading color="#F06543" as="h3" p="7.5" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          How do I get my own wallet?
          </Heading>
          <Text>The wallets that are compatible with the ticket application  are supported on most platforms (Mobile, Web-Browser, Cold-Wallet).
             While getting comfotable with managing your wallets, we have created some best practices that we have learned from our journey:</Text>
             <Heading  textAlign="left" as="h5" p="7.5" fontSize={{ base: 'sm', md: 'sm' }} fontWeight="extrabold" mb={1} >
            Treat your private keys like vital organs.
             </Heading>
             <Text textAlign="left" fontSize={{ base: 'xs', md: 'xs' }} >
              Private keys are the private piece of data that wallets require in order to successfully sign & send transactions. This data is unique to each wallet, 
             so if someone ends up with your wallets private key, the wallet will sign & broadcast and messages that they want, which is how we frequently see exploits & hacks occur.
             in that wallet. Store keys on trustworthy key manager apps, or even better write them on a piece of paper and put it somewhere where you know it will be safe.</Text>
             <Heading  textAlign="left" as="h5" p="7.5" fontSize={{ base: 'sm', md: 'sm' }} fontWeight="extrabold" mb={1} >
            Redundancy.
             </Heading>
             <Text textAlign="left" fontSize={{ base: 'xs', md: 'xs' }} >
              There is no cost for making a new wallet, so do not be frugal with creating new wallets, just be sure you keep track of private keys securely! Since, Hot Wallets (software, online based) like Keplr & Leap are less secure
              than Cold Wallets (Hardware, offline based), if you have a wallet that hold any substancial amount of tokens, it might be best practice to use other wallets for frequent task, so that the expore time to accessing your private key is as minimal as possible.
             </Text>
          <Heading color="#F06543" as="h3" p="7.5" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
          I have my own wallet, how do I use it?
          </Heading>
          <Text textAlign="left" fontSize={{ base: 'xs', md: 'xs' }} >
            
            </Text>
            <Heading textAlign="center" color="#F3C674" as="h2" p="2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            STEP 2: REGISTER FOR THE EVENT
          </Heading>
          <Text>
This year guest will register their name, email, and wallet address through our registration portal. Once registered, emails regarding minting will be sent out 
leading up to the event. On a device that is connected to your wallet, open up a web browser and go to https://glassflow.xyz/register.
          </Text>
          </Box>

          <Heading color="#F3C674" as="h2" p="10" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            STEP 3: PURCHASING YOUR TICKET
          </Heading>
<Box   textAlign="center"> 
<Card>
  <CardHeader>
    <Heading size='md'>Purchase Requirements</Heading>
  </CardHeader>
<Text px="4" textAlign="left">To purchase your ticket, you will need 2 things:</Text>
  <CardBody>
    <Stack  spacing='4'>
      <Box textAlign="left">
        <Heading size='xs' textTransform='uppercase'>
          1. Registered Wallet Connected
        </Heading>
        <Text pt='2' fontSize='sm'>
          Only guest who have been registered & verified will be able to mint.
          </Text>
      </Box>
      <Box textAlign="left">
        <Heading size='xs' textTransform='uppercase'>
         2. USDC for minting the ticket
        </Heading>
        <Text pt='2' fontSize='sm'>
         Tickets will need to be purchased using digital assets (USDC). Funding a wallet with digital assets is now a much more simple process than some might have of experienced before! We have created guides highlighting just 2 options that we have found to be convienient, however there are plenty of other viable methods to onboarding fiat into your own soviergn wallet.
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card></Box>
          <Heading color="#F3C674" as="h2" p="10" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            STEP 4: ARRIVING AT THE DOOR
          </Heading>
On arrival, you will be able to display a QR code of your wallet address to our event ushers who will scan & validate your wallet is an owner of a ticket.
          <Heading color="#F3C674" as="h2" p="10" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            STEP 5: VIEWING ENTRIES & JUDGING 
          </Heading>
Those guest who are judges will be able to cast their votes on this years entries.
          <Heading color="#F3C674" as="h2" p="10" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="extrabold" mb={5} >
            STEP 6: MERCH STORE 
          </Heading>
A merch store will be available for guest to purchase items with Tokens.
        </Box>
        <Footer/>
    </Container>
)
}