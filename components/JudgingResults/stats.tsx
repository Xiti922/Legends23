import {
Center,
Stat,
StatLabel,
StatNumber,
StatHelpText,
StatArrow,
StatGroup,
CircularProgress,
CircularProgressLabel,
} from '@chakra-ui/react'

export const JudgingResultsStats = () => {
    return (
        <div>
            <Center><div>
                <CircularProgress py="3"value={40} size='190px' color='#dfb76d'>
                    <CircularProgressLabel fontSize="md">
                    <Stat>
                    <StatNumber color="#F06543">04:20</StatNumber>
                    <StatHelpText  color="#dfb76d">Time Remaining</StatHelpText>
                </Stat>
                    </CircularProgressLabel>
                </CircularProgress></div>
                
            </Center>
            <StatGroup>
                <Stat >
                    <StatNumber color="#dfb76d">100</StatNumber>
                    <StatHelpText color="#dfb76d">Judges</StatHelpText>
                </Stat>
                <Stat>
                    <StatNumber color="#dfb76d">90</StatNumber>
                    <StatHelpText color="#dfb76d">Entries</StatHelpText>
                </Stat>
                <Stat>
                    <StatNumber color="#dfb76d">100 Points</StatNumber>
                    <StatHelpText color="#dfb76d">Param Max Score</StatHelpText>
                </Stat>
                <Stat>
                    <StatNumber color="#dfb76d">500 Points</StatNumber>
                    <StatHelpText color="#dfb76d">Entry Max Score</StatHelpText>
                </Stat>
                
            </StatGroup>
        </div>
    )
}
  