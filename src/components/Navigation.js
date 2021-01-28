import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Flex, Spacer, Button, Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

const Nav = styled(Box)`
  a {
    margin: 5px;
  }
`

export default function Navigation() {
  return (
    <Nav as="nav" p={2} boxShadow="lg" bg="#fefef2">
      <Flex align="center">
        <Button as={Link} to="/properties">
          All Properties
        </Button>

        <Spacer />

        <Link to="/">
          <Image src="/images/logo.svg" alt="Zidence Logo" h={10} />
        </Link>

        <Spacer />

        <Button as={Link} to="/login">
          Login
        </Button>
        <Button as={Link} to="/register" colorScheme="yellow">
          Register
        </Button>
      </Flex>
    </Nav>
  )
}
