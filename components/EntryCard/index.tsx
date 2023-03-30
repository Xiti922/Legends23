import React, { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react'
import { Badge, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Spacer ,Stack,Tag, Text} from '@chakra-ui/react'


export const EntryCard = () => {
    return (
        <Card direction='row' overflow='hidden' variant='outline'>
          <Image maxW='170px'  alt='entry-photo' />
          <Stack  >
            <CardBody>
              <Heading color='white' fontSize='lg' fontWeight='extrabold'>
               e.name
                <Badge ml={1} fontSize='.75em' colorScheme='green' >
                e.maker_name
                </Badge>
              </Heading>
              <Text py='2' color='white' fontSize={'0.8em'}>
              e.breeder
              </Text>
              <Text py='2' color='white' fontSize={'0.8em'}>
              e.genetics
              </Text>
            </CardBody>
            <CardFooter>
              <Flex>
                <Button  variant='solid' colorScheme='blue'>
                  Vote</Button>
                <Spacer p='1' />
            
              </Flex>
            </CardFooter>
          </Stack>
        </Card>
      )


}