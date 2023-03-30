import { CloseButton, Button, Container, Card, Center, Heading, FormControl, FormHelperText, Input, FormLabel, Select, CardFooter, Text, } from "@chakra-ui/react"
import { ByAddress } from "./byAddress"
import { ByCode } from "./byCode"
import { ByUpload } from "./byUpload"
import { ByInput } from "./byInput"
import { SetupClaim } from "./setupClaim"


export const AdminCard= () => {

    function newTickets() {}

    return (
        <Container>
             <Container>
        <Card px={2}>
        <Center><Heading >Mint New Ticket</Heading></Center>
        <form onSubmit={newTickets}>
        <FormControl isRequired >
        <Center><FormLabel >Entry Name</FormLabel></Center>
        <Input placeholder="Proposal Title" type='email' />
        </FormControl>
        <FormControl isRequired>
                  <Center><FormLabel >Guest Type</FormLabel></Center>
                  <Select  placeholder='Choose 1'>
                    <option>Guest</option>
                    <option>Sponsor</option>
                    <option>Judge</option>
                    <option>Usher</option>
                    <option>Admin</option>
                  </Select>
                  <FormHelperText >Entry Category</FormHelperText>
                </FormControl>
         <FormControl isRequired>
                  <Center><FormLabel > Wallet Address</FormLabel></Center>
                  <Input placeholder="terp1..." type='maker_addr' />
        </FormControl>
        </form>
       <Center> <CardFooter><Button>Confirm Mint</Button></CardFooter></Center>
        </Card>
        </Container>
        <ByAddress/>
        <ByCode/>
        <ByInput/>
        <ByUpload/>
        <SetupClaim/>
        </Container>
    )
}