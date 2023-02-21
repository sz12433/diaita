import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/400.css'
import { useDisclosure } from '@chakra-ui/react'

import NavBar from '@/components/naxbar'
import { Box, SlideFade, Button, Image, HStack, Text, Flex, Link, VStack, Heading } from "@chakra-ui/react"

export default function Home() {
  const { isOpen, onToggle } = useDisclosure(); 
  return (
    <>
      <Image zIndex="-1" position="absolute" width="100vw" maxHeight="90vh" src="landing-background.png" alt="green background color"></Image>
      <NavBar></NavBar>
      <Flex p="5rem" align="center" justify="space-around" >
      
      <SlideFade in={!isOpen} offsetY='20px'>
      <VStack align="left"  spacing="2rem" maxWidth="50vw" p="2rem">
          <Heading color="brand.veryDark">Good Mood, Good Food</Heading>
          <Text color="brand.dark" fontSize="1.5rem">Personalized plans to help you achieve a healthy, balanced lifestyle. </Text>
          <HStack spacing="2rem">
            <Button variant="green">Download Diaita</Button>
            <Link variant="underline" color="brand.medium" fontWeight="bold" fontSize="1.25rem">Contact Us</Link>
          </HStack>
      </VStack>
      </SlideFade>
      <Image pr="7rem" src="phone.png" alt="picture of phone with Diaita App opened" maxHeight="50vh"></Image>
      </Flex>
      
      <HStack mt="3rem" m="2rem"> 
        <Box p="2rem" m="2rem">
            <Heading mb="1rem">Improve your health</Heading>
            <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data. </Text>
            <Button variant="green" height="2.5rem" px="1.25rem" fontSize="1rem">Learn more</Button>
        </Box>
        <Image maxWidth="50%" src="landing1.png" alt="picture of woman smiling"></Image>
      </HStack>
      <Image zIndex="-1" position="absolute" width="100vw" maxHeight="90vh" src="gradient.png" alt="green background color"></Image>
      <HStack mt="3rem" m="2rem"> 
        <Image maxWidth="50%" src="landing2.png" alt="picture of woman smiling"></Image>
        <Box p="2rem" m="2rem">
            <Heading mb="1rem">Improve your health</Heading>
            <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data. </Text>
            <Button variant="green" height="2.5rem" px="1.25rem" fontSize="1rem">Learn more</Button>
        </Box>
      </HStack>
      <HStack mt="3rem" m="2rem"> 
        <Box p="2rem" m="2rem">
            <Heading mb="1rem">Improve your health</Heading>
            <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data. </Text>
            <Button variant="green" height="2.5rem" px="1.25rem" fontSize="1rem">Learn more</Button>
        </Box>
        <Image maxWidth="50%" src="landing3.png" alt="picture of woman smiling"></Image>
      </HStack>
    </>
  )
}
