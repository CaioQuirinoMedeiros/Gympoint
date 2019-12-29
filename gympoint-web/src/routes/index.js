import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoutes from './private'
import GuestRoutes from './guest'
import NotFound from '~/pages/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route path='/guest' component={GuestRoutes} />
      <Route path='/app' component={PrivateRoutes} />
      <Redirect to="/guest" />
      <Route path='*' component={NotFound} />
    </Switch>
  )
}
