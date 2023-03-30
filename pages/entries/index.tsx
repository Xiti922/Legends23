import { Navbar } from "../../components/Navbar";
import { EntryCard } from "../../components/EntryCard";
import { Container,Heading, } from "@chakra-ui/react";


export default function GetStarted() { 

    return(
        <Container>
            <Navbar/>
            <Heading textAlign="center" py={2}>Entries</Heading>
            <EntryCard/>
        </Container>
    )
}
