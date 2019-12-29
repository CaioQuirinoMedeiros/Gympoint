import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '~/pages/Login'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/login' component={Login} />

      <Route path='*' component={Login} />
    </Switch>
  )
}
