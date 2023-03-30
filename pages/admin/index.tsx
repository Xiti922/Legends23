import { Container, Heading, Divider, Wrap} from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar';
import { Footer} from '../../components/Footer';
import BarcodeScanner from '../../components/BarcodeScanner';
import { NewEntry } from '../../components/NewEntry';
import { AdminCard } from '../../components/NewTickets';

// Admins will see something similar to this for each event: https://eventflow.io/admins/{event-contract-address}

export default function admin() {
    return (
        <Container maxW="full" >
            <Navbar/>
      <Heading textAlign="center" >Admin Portal</Heading>
            <Divider py="4"/>
            <Wrap>
            <BarcodeScanner/>
            <NewEntry/>
            </Wrap>
            <Wrap>
            <AdminCard/>
            </Wrap>
            <Footer/>
        </Container>
    )}
