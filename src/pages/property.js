import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { Box, Heading, Flex, Image, Text, Container } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaMapMarkerAlt } from 'react-icons/fa'

import propertiesData from '../data/properties.json'
import {
  formatRupiah,
  formatBedroomText,
  formatBathroomText,
  formatLocation,
} from '../lib/formatters'

export default function PropertyPage() {
  const { id } = useParams()

  const property = propertiesData.find((property) => {
    return property.id === Number(id)
  })

  if (!property) {
    return <Redirect to="/properties" />
  } else {
    return (
      <Container>
        <Flex
          key={id}
          id={id}
          my={5}
          p={2}
          boxShadow="base"
          borderRadius="md"
          bg="white"
        >
          <Image width="320px" src={property.images[0]} alt={property.name} />
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

            <Flex>
              <Icon
                as={FaMapMarkerAlt}
                w={4}
                h={4}
                mt={1}
                mr={1}
                color="red.500"
              />
              <Text as="p">{formatLocation(property.location)}</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    )
  }
}
