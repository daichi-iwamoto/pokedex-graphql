
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import client from "../lib/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
