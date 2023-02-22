import {  Link, Image, HStack, Box, Text} from "@chakra-ui/react"

export default function Footer() {
    return (
    <Box mt="4rem">
        <Image zIndex="-1" position="absolute" width="100vw" maxHeight="90vh" src="footer.png" alt="green background color"></Image>
        <HStack pt="1rem" pr="1rem" pl="1rem">
        <Image maxWidth="20%" src="logo.png" alt="logo"></Image>
            <Box>
                <Text>
                    Contact
                </Text>
                <Text>
                    email@email.com
                </Text>
                <Text>
                    (000) 000-0000
                </Text>
                <Text>
                    Contact
                </Text>
                <Text>
                    email@email.com
                </Text>
                <Text>
                    (000) 000-0000
                </Text>
            </Box>
            <Box>
                <Text>
                    Contact
                </Text>
                <Text>
                    email@email.com
                </Text>
                <Text>
                    (000) 000-0000
                </Text>
                <Text>
                    Contact
                </Text>
                <Text>
                    email@email.com
                </Text>
                <Text>
                    (000) 000-0000
                </Text>
            </Box>
        </HStack>
    </Box>
    )
  }