import React from 'react'
import { Box, Flex } from '@chakra-ui/react'

import PropertiesCards from '../components/PropertiesCards'
import PropertiesMaps from '../components/PropertiesMaps'

export default function PropertiesPage() {
  return (
    <Box>
      <Flex id="properties-content">
        <PropertiesCards />
        <PropertiesMaps />
      </Flex>
    </Box>
  )
}
