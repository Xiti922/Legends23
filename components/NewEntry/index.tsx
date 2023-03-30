import { Center,Container ,Heading, FormControl,FormLabel,FormErrorMessage,FormHelperText, Input,Select,Card,Button} from "@chakra-ui/react"

export const NewEntry = () => {
  
  function addEntry() {}


return(
  <Container>
        <Container>
        <Card px={2}>
                      <Center><Heading  >Mint Entries</Heading></Center>
                      <form onSubmit={addEntry}>
                      <FormControl isRequired >
                      <Center><FormLabel >Entry Name</FormLabel></Center>
                      <Input placeholder="Proposal Title" type='email' />
                      </FormControl>
                      <FormControl isRequired>
                  <Center><FormLabel >Entry Category </FormLabel></Center>
                  <Select  placeholder='Choose 1'>
                    <option>Hashish Rosin</option>
                    <option>Water Hash</option>
                    <option>Dry Sift Hash</option>
                  </Select>
                  <FormHelperText >Entry Category</FormHelperText>
                </FormControl>
                <FormControl isRequired>
                  <Center><FormLabel >Maker Wallet Address</FormLabel></Center>
                  <Input placeholder="terp1..." type='maker_addr' />
                </FormControl>
                <FormControl isRequired>
                  <Center><FormLabel >Maker Title</FormLabel></Center>
                  <Input placeholder="Name or Alias" type='maker_name' />
                </FormControl>

                <FormControl isRequired>
                  <Center><FormLabel >Entry Description </FormLabel></Center>
                  <Input  placeholder="Descirption" type='entry_description' />
                </FormControl>

                <FormControl>
                  <Center><FormLabel >Breeder Name </FormLabel></Center>
                  <Input  type='breeder_name' />
                  <FormHelperText >Optional</FormHelperText>
                </FormControl>

                <FormControl>
                  <Center><FormLabel >Farmer Name </FormLabel></Center>
                  <Input  type='farmer_name' />
                  <FormHelperText >Optional</FormHelperText>
                </FormControl>

                <FormControl>
                  <Center><FormLabel >Genetics Name </FormLabel></Center>
                  <Input  type='farmer_name' />
                  <FormHelperText >Optional</FormHelperText>
                </FormControl>
                <Center><Button type='submit'>Mint</Button></Center>
                      </form>
                      </Card>
                      </Container>
    </Container>
)
}