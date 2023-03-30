import React, { useEffect, useState } from "react"
import { useZxing } from "react-zxing"
import { Button, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Box, SimpleGrid, Center, Container, Divider, Text } from "@chakra-ui/react"
import { queryGuestType, getGuestType } from "../../config/contracts/guestType"
import { queryDayOneArrival, queryDayTwoArrival } from "../../config/contracts/updateArrival"
import { useChain } from '@cosmos-kit/react'
import { chainName } from '../../config';

function BarcodeScanner() {


    return (
        <div py={10} >

            <Center>
                {" "}
                <Container maxW="2xl" py={1}>
                    <Card py={10} px="2">
                        <Center><Heading color="white" size="md">Barcode Scanner</Heading></Center>
                        <div>
                            <video id="video" width={480} height={852}></video>
                            <SimpleGrid columns={1} spacing={5}>
                                <Heading color="#F3C674" textAlign="center" py="2">Address</Heading>
                                <Button>Reset</Button>
                                <Stack>
                                    <Card direction="row" variant="outline">
                                    </Card>
                                    <Center></Center>
                                    <Center>
                                        <Heading color="white" size="md">Arrival Status A </Heading>
                                        <Heading size="md" color="#F3C674" py="2">{/* {dayOneArrival ? "Arrived" : "Not Arrived"}*/}</Heading>
                                    </Center>
                                </Stack>
                                <Card direction="row" variant="outline">
                                    <Stack>
                                        <CardBody>
                                            <Center>
                                                <Heading color="white" size="md">
                                                    Update Arrival Status A
                                                </Heading>
                                            </Center>
                                        </CardBody>

                                        <CardFooter>
                                            <Center>
                                                <Button>Update</Button>
                                            </Center>
                                        </CardFooter>
                                        =</Stack>
                                </Card>
                                <Center>
                                    <Heading size="md" color="#F3C674" py="2">{/*   {dayTwoArrival ? "Arrived" : "Not Arrived"}*/}</Heading>

                                    <Heading color="white" size="md">Arrival Status: B
                                    </Heading>
                                </Center>
                                <Card direction="row" variant="outline">
                                    <Stack>
                                        <CardBody>
                                            <Center>
                                                <Heading color="white" size="md">
                                                    Update Arrival Status B
                                                </Heading>
                                            </Center>
                                        </CardBody>
                                        <CardFooter>
                                            <Center>
                                                <Button>Update</Button>
                                            </Center>
                                        </CardFooter>
                                    </Stack>
                                </Card>
                            </SimpleGrid>
                        </div>
                    </Card>
                </Container>
            </Center>
        </div>
    )
}


export default BarcodeScanner




