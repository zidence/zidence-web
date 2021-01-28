import React from 'react'
import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react'

import propertiesData from '../data/properties.json'
import {
  formatRupiah,
  formatBedroomText,
  formatBathroomText,
  formatLocation,
} from '../lib/formatters'

export default function PropertiesCards() {
  return (
    <Box id="properties-cards" py={5}>
      <Box py="5" borderBottom="2px solid" borderBottomColor="orange.300">
        <Heading as="h1" size="2xl">
          All properties
        </Heading>
      </Box>

      {propertiesData.map((property, index) => {
        const id = `property-card-${property.id}`
        return (
          <Flex
            key={id}
            id={id}
            py={5}
            my={5}
            boxShadow="base"
            borderRadius="md"
            bg="white"
            width="700px"
          >
            <Image width="350px" src={property.images[0]} alt={property.name} />
            <Box pl={4}>
              <Heading as="h2" size="lg">
                {property.name}
              </Heading>
              <Heading as="h3" size="md">
                {formatRupiah(property.price)}
              </Heading>
              <Heading as="h4" size="sm">
                {property.type} {property.subtype}
              </Heading>
              <Text as="p">
                <Text as="span">
                  {formatBedroomText(property.numberOfBedrooms)} |
                </Text>
                <Text as="span">
                  {formatBathroomText(property.numberOfBathrooms)} |
                </Text>
                <Text as="span">{property.unitSize} m²</Text>
              </Text>
              <Text as="p">{formatLocation(property.location)}</Text>
            </Box>
          </Flex>
        )
      })}
    </Box>
  )
}
