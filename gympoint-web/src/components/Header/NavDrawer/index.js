/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react'
import { withRouter } from 'react-router-dom'

import { privateRoutes } from '~/routes/private'

import { Container, Wrapper, NavItem, Button } from './styles'

function NavDrawer({ match, location, ...rest }) {
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

  const activeRoute = useMemo(
    () => privateRoutes.find(route => location.pathname.includes(route.path)),
    [location]
  )

  return (
    <Container onClick={() => setOpen(!open)} {...rest}>
      <Button icon='chevron-down' open={open}>
        {activeRoute ? activeRoute.label : 'Menu'}
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

export default withRouter(NavDrawer)
