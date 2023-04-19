import NavBar from "@/components/naxbar";
import { Box, Button, Center, Heading, HStack, Image, Text } from "@chakra-ui/react";

export default function WhoWeAre() {
  return (
    <>
      <NavBar />
      <Center fontSize="2xl" fontWeight="bold" mt="2rem">Our Mission</Center>
      <HStack mt="4rem" spacing="4rem">
        <Box>
          <Image src="landing2.png" alt="picture of woman smiling" maxWidth="100%" />
        </Box>
        <Box>
          <Heading mb="1rem">Physical Activity</Heading>
          <Text mb="1rem">Diaita provides personalized diet and physical activity plans based on diet history and biochemical data.</Text>
          <Button variant="solid" size="md" colorScheme="green" _hover={{ bg: "green.500" }}>Learn more</Button>
        </Box>
      </HStack>
      <HStack mt="4rem" spacing="4rem">
        <Box>
          <Heading mb="1rem">Cognitive Behavioral Therapy</Heading>
          <Text mb="1rem">Diaita provides personalized diet and cognitive behavioral therapy plans based on diet history and psychological data.</Text>
          <Button variant="solid" size="md" colorScheme="green" _hover={{ bg: "green.500" }}>Learn more</Button>
        </Box>
        <Box>
          <Image src="landing3.png" alt="picture of woman smiling" maxWidth="100%" />
        </Box>
      </HStack>
        <Box mt="3rem" mx="2rem">
    <Text fontSize="2xl" fontWeight="bold" textAlign="center">Food is connected to everything.</Text>
    <Text mt="1rem" fontSize="xl" textAlign="center">We care about sustainable health and food policy, and we provide a way to achieve a culture of positive environmental impact.</Text>
  </Box>

  <Box mt="3rem" mx="2rem">
    <Heading fontSize="2xl" fontWeight="bold">Why we’re here</Heading>
    <Text mt="1rem" fontSize="xl">Our mission is to help people who are at risk of chronic illness make lifestyle changes. We aim to provide a tailored, sustainable way of helping them become healthier. We believe that our app can contribute to solving the problems of chronic disease, malnutrition, and climate change. Additionally, we can improve the health of not only our generation but also that of following generations.</Text>
  </Box>

  <Box mt="3rem" mx="2rem">
    <Heading fontSize="2xl" fontWeight="bold">Our Story</Heading>
    <Text mt="1rem" fontSize="xl">We believe that our app can contribute to solving the problems of climate change, malnutrition, and chronic disease. Additionally, we can improve not only our generation but also the following generation. We believe that our app can contribute to solving the problems of climate change, malnutrition, and chronic disease. Additionally, we can improve not only our generation but also the following generation.</Text>
  </Box>
  <Box>
          <Heading mb="1rem">Where We've Been</Heading>
          <Text mb="1rem">Accelerators and Incubators:</Text>
          <Text mb="1rem">Skydeck Pad-13 Batch 15 and Batch 16 (Current)</Text>
          <Text mb="1rem">Health Tech CoLab (Current)</Text>
          <Text mb="1rem">NSF National Innovation Corps (2023)</Text>
          <Text mb="1rem">NSF Regional Innovation Corps (2022)</Text>
          <Text mb="1rem">Draper University (2022)</Text>
          <Text mb="1rem">Funding Sources:</Text>
          <Text mb="1rem">2023 National Innovation Corps National, ($50,000, USA)</Text>
          <Text mb="1rem">2022 National Innovation Corps Regional, ($5,000, USA)</Text>
          <Text mb="1rem">2022 Asia Berkeley Taiwan Biomedical, BTB ($ 100,000, Taiwan)</Text>
          <Text mb="1rem">2021-2022 Berkeley Taiwan Biomedical, BTB ($ 100,000, Taiwan)</Text>
          <Text mb="1rem">2017-2018 Chevening Scholars (£24,000, U.K.)</Text>
        </Box>
    </>
  );
}
