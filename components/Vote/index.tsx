import { Navbar } from '../Navbar'
import { Footer } from '../Footer'
import { Badge, Button, Card, CardBody, CardFooter, Container, Divider, Flex, Heading, Image, Spacer ,Stack,Tag, Text} from '@chakra-ui/react'




export const Vote= () => {

    return(
<Container>
    <Navbar/>
    <Card variant='outline' boxShadow='xl' maxW='sm'>
    <CardBody>
    <Image/>
    <Stack mt='6' spacing='3'>
                  <Heading color="white" size='md'>entry.name</Heading>
                  <Divider/>
                  <Heading color="#deb887" size='md'>Maker Name</Heading>
                  <Heading color="white" size='l'> maker.name</Heading>
                  <Divider />
                  <Heading color="#deb887" size='md'> Category</Heading>
                  <Text color="white">entry.category</Text>
                  <Divider />
                  <Heading color="#deb887" size='md'>  Breeder</Heading>
                  <Text color="white">entry.breeder</Text>
                  <Divider />
                  <Heading color="#deb887" size='md'>  Farmer</Heading>
                  <Text color="white">entry.farmer</Text>
                  <Divider />
                  <Heading color="#deb887" size='md'>  Genetics</Heading>
                  <Text color="white">entry.genetics</Text>
    <Divider />
    </Stack>
    </CardBody>
    </Card>
    <Footer/>
</Container>

    )
}
