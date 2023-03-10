import '@fontsource/open-sans/700.css'
import '@fontsource/open-sans/400.css'
import { useDisclosure } from '@chakra-ui/react'
import Footer from '@/components/footer'

import NavBar from '@/components/naxbar'
import { Center, Box, SlideFade, Button, Image, HStack, Text, Flex, Link, VStack, Heading } from "@chakra-ui/react"

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
      <HStack>
          <Box p="2rem" m="2rem">
            <Heading mb="1rem">A professional team</Heading>
            <Text mb="1rem">Qualifications, Diaita provides personalized diet and physical activity plans </Text>
          </Box>
          <Image maxWidth="50%" src="landing3.png" alt="picture of woman smiling"></Image>
      </HStack>
      <Image zIndex="-1" position="absolute" width="100vw" maxHeight="90vh" src="background-wave.png" alt="green background color"></Image>
      <HStack mt="7rem">
        <Box p="2rem" m="2rem">
          <Center>Testimonial Diaita provides personalized diet and physical activity plans</Center>
          <Text>-Person, Occupation</Text>
        </Box>
        <Box>
          <Center>Testimonial Diaita provides personalized diet and physical activity plans</Center>
          <Text>-Person, Occupation</Text>
        </Box>
      </HStack>
      <Box mt="5rem">
        <Heading p="2rem" m="2rem">Keep yourself informed</Heading>
        <HStack p="2rem" m="2rem">
          <Box>
            <Image src="placeholder.png" alt="article picture"></Image>
            <Heading mt = "1rem" mb="1rem">Article 1</Heading>
            <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data. </Text>
          </Box>
          <Box>
            <Image src="placeholder.png" alt="article picture"></Image>
            <Heading mt = "1rem" mb="1rem">Article 1</Heading>
            <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data. </Text>
          </Box>
          <Box>
            <Image src="placeholder.png" alt="article picture"></Image>
            <Heading mt = "1rem" mb="1rem">Article 1</Heading>
            <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data. </Text>
          </Box>
        </HStack>
      </Box>
      <HStack mt="5rem">
        <Heading p="2rem" m="2rem">Get started with Diaita today</Heading>
        <Button p="2rem" m="2rem" variant="green">Download Diaita</Button>
        <Link p="2rem" m="2rem">Contact Us</Link>
      </HStack>
      <Footer></Footer>
    </>
  )
}
