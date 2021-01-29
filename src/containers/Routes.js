import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import Navigation from '../components/Navigation'
import HomePage from '../pages/home'
import PropertiesPage from '../pages/properties'
import Footer from '../components/Footer'
import PropertyPage from '../pages/property'

export default function Routes() {
  return (
    <Router>
      <Box bg="#fdf5e8">
        <Navigation />

        <Box>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/properties" exact>
              <PropertiesPage />
            </Route>
            <Route path="/properties/:id">
              <PropertyPage />
            </Route>
          </Switch>
        </Box>

        <Footer />
      </Box>
    </Router>
  )
}
