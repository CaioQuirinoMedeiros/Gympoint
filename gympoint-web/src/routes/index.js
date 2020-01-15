import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoutes from './private'
import GuestRoutes from './guest'
import NotFound from '~/pages/NotFound'

import { Wrapper } from './styles'

export default function Routes() {
  return (
    <Wrapper>
      <Switch>
        <Route path='/guest' component={GuestRoutes} />
        <Route path='/app' component={PrivateRoutes} />
        <Redirect to='/guest' />
        <Route path='*' component={NotFound} />
      </Switch>
    </Wrapper>
  )
}
