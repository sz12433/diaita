import type { AppProps } from 'next/app'
import * as React from 'react'
import Home from '.'
import theme from '@/styles/styles'

import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps}></Component>
    </ChakraProvider>
  )
}
