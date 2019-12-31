import React from 'react'
import { withRouter } from 'react-router-dom'

import { privateRoutes } from '~/routes/private'

import { Container, NavItem } from './styles'

function NavBar({ match, ...rest }) {
  return (
    <Container {...rest}>
      {privateRoutes.map((route, i) => (
        <NavItem key={i} to={`${match.path}/${route.path}`}>
          {route.label}
        </NavItem>
      ))}
    </Container>
  )
}

export default withRouter(NavBar)
