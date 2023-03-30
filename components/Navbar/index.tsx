import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    Icon,
    IconButton,
    useBreakpointValue,
    useColorMode,
    useColorModeValue,
    Text,
    Link,
    Divider
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import {
    Product,
    Dependency,
    WalletSection,
    handleChangeColorModeValue,
  } from '../../components';
  import Homebutton from '../HomeButton';


export const Navbar = () => {
  
  
    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex py="3" minWidth='max-content' alignItems='center' gap='2'>
    <Box as='section'>
    <Box as='nav' mt={1} mb={1}>  
        <Container maxW={'xl'}>
            <HStack spacing="10" justify="space-between">
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <HStack spacing="4" justify="space-between">
                            {/*<Link color={'white'} href='https://github.com/glassflowNFT/Quasar'>Documentation <ExternalLinkIcon mx='2px'/> </Link>*/
                            /*<WalletSection />*/}
                        </HStack>
                    </Flex>
            </HStack>
        </Container>
    </Box>
    <Box opacity={'40%'}>
    </Box>
<Homebutton/>
</Box>
    <Divider orientation='horizontal'/>
    <Button variant="outline" px={0} onClick={toggleColorMode}>
      ~
        </Button>
</Flex>
  )
}