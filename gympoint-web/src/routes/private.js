import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AppLayout from '~/pages/_layouts/App'

import Students from '~/pages/Students'
import Enrollments from '~/pages/Enrollments'

function PrivateRoutes(props) {
  const signed = useSelector(({ auth }) => auth.signed)

  if (!signed) {
    return <Redirect to='/guest' />
  }

  return (
    <AppLayout>
      <Switch>
        <Route
          path={`${props.match.path}/students`}
          exact
          component={Students}
        />
        <Route
          path={`${props.match.path}/enrollments`}
          exact
          component={Enrollments}
        />
        <Redirect to={`${props.match.path}/students`} />
      </Switch>
    </AppLayout>
  )
}

export default PrivateRoutes
