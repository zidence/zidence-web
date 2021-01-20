import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import Routes from './containers/Routes'

export default function App() {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  )
}
