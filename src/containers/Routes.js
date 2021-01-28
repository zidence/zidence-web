import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from '../components/Navigation'
import HomePage from '../pages/home'
import PropertiesPage from '../pages/properties'
import Footer from '../components/Footer'

export default function Routes() {
  return (
    <Router>
      <Navigation />

      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/properties">
            <PropertiesPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
