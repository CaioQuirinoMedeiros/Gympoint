import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from '~/pages/Login'

function PrivateRoutes(props) {
  const signed = useSelector(({ auth }) => auth.signed)

  if (signed) {
    return <Redirect to='/app' />
  }

  console.log('OPA', signed)

  return (
    <Switch>
      <Route path={`${props.match.path}/login`} exact component={Login} />
      <Redirect to={`${props.match.path}/login`} />
    </Switch>
  )
}

export default PrivateRoutes
