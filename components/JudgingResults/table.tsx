import React from 'react'
import {
    Center,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { JudgingResultsStats } from './stats'



export const JudgingResultsTable = () => {
    return (
  
        // TODO: 
        // - Add function that checks current events judging params, then sets the columns & rows data with correct information.
        <Center>
        <div >
        <JudgingResultsStats/>
        <TableContainer maxWidth="100%">
            <Table variant='striped' color='#dfb76d'>
            <TableCaption>Event Judging Results </TableCaption>
            <Thead>
                <Tr>
                <Th>Entry ID</Th>
                <Th>Param 1</Th>
                <Th>Param 2</Th>
                <Th>Param 3</Th>
                <Th>Param 4</Th>
                <Th>Param 5</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                <Td >Entry 1</Td>
                <Td >1-1</Td>
                <Td >1-2</Td>
                <Td >1-3</Td>
                <Td >1-4</Td>
                <Td >1-5</Td>
                
                </Tr>
                <Tr>
                <Td>Entry 2</Td>
                <Td >2-1</Td>
                <Td >2-2</Td>
                <Td >2-3</Td>
                <Td >2-4</Td>
                <Td >2-5</Td>
               
                </Tr>
                <Tr>
                <Td>Entry 3</Td>
                <Td >3-1</Td>
                <Td >3-2</Td>
                <Td >3-3</Td>
                <Td >3-4</Td>
                <Td >3-5</Td>
            
                </Tr>
            </Tbody>
            <Tfoot>
         
            </Tfoot>
            </Table>
</TableContainer>
            </div>
            </Center>
 
    )
}