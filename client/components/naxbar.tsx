import {  Image, HStack, Flex, Link } from "@chakra-ui/react"

export default function NavBar() {
    return (
    <Flex padding="1.75rem" align="center" justify="space-between">
        <Link href="/">
          <Image src="logo.png" alt="Diaita Logo" width="7rem"></Image>
        </Link>
        <HStack spacing="3rem" pr="4rem">
          <Link variant="underline" href="/who-we-are">Who We Are</Link>
          <Link variant="underline" href="/blog">Blog</Link>
          <Link variant="underline" href="/contact">Contact</Link>
        </HStack>
    </Flex>
    )
  }