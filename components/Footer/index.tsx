import {
    Container,
    Text,
    Link,
    Stack,
  } from '@chakra-ui/react'

export const Footer = () => {
return (
    <Container py={20}>
    <Stack
        isInline={true}
        spacing={1}
        justifyContent="center"
        opacity={0.5}
        fontSize="sm"
      >
       <Text>Built </Text>
        <Link
          href="https://permissionless.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Permissionlessly
        </Link>
      </Stack>
      </Container>
)
}