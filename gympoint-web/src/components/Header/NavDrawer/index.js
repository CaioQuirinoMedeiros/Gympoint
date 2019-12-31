/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { privateRoutes } from '~/routes/private'

import { Container, Wrapper, NavItem, Button } from './styles'

function NavBar({ match, location, ...rest }) {
  const [open, setOpen] = useState(false)

  const closeListener = () => {
    setOpen(false)
    window.removeEventListener('click', closeListener)
  }

  useEffect(() => {
    if (open) {
      window.addEventListener('click', closeListener)
    }
  }, [open])

  const activeRoute = privateRoutes.find(route =>
    location.pathname.includes(route.path)
  )

  return (
    <Container onClick={() => setOpen(!open)} {...rest}>
      <Button icon='chevron-down' open={open}>
        {activeRoute.label || 'Menu'}
      </Button>
      <Wrapper open={open}>
        {privateRoutes.map((route, i) => (
          <NavItem key={i} to={`${match.path}/${route.path}`}>
            {route.label}
          </NavItem>
        ))}
      </Wrapper>
    </Container>
  )
}

export default withRouter(NavBar)
