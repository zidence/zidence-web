import React from 'react'
import { Box } from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react'

export default function PropertiesMaps() {
  return (
    <Box id="properties-map" width="50%" bg="white">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      >
        <p>Example</p>
      </GoogleMapReact>
    </Box>
  )
}
