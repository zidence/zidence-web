import React from 'react'
import { Icon, Heading, Center } from '@chakra-ui/react'
import { Marker } from 'react-mapbox-gl'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function MapboxMarker({ property }) {
  return (
    <Marker
      coordinates={[property.location.geo.lng, property.location.geo.lat]}
      anchor="bottom"
    >
      <Center bg="white" borderRadius={5} p={1} boxShadow="base">
        <Icon as={FaMapMarkerAlt} w={5} h={5} color="teal.500" />
        <Heading as="h4" size="sm">
          320M
        </Heading>
      </Center>
    </Marker>
  )
}
