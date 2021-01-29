import React from 'react'
import { Box } from '@chakra-ui/react'
import ReactMapboxGl from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import MapboxMarker from './MapboxMarker'
import propertiesData from '../data/properties.json'

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
/**
 * Configuration values for Mapbox Component.
 *
 * @interface ReactMapboxGl interface with configurations for creating the map.
 */

ReactMapboxGl.workerClass = MapboxWorker.default

const Mapbox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
})

export default function PropertiesMaps() {
  return (
    <Box id="properties-map" height="100vh" width="50vw">
      <Mapbox
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: '100vh',
          width: '50vw',
        }}
        center={[106.85, -6.3]}
        zoom={[10]}
      >
        {propertiesData.map((property, index) => {
          return <MapboxMarker property={property} />
        })}
      </Mapbox>
    </Box>
  )
}
