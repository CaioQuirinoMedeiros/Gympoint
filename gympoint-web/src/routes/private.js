import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AppLayout from '~/pages/_layouts/App'

import Students from '~/pages/Students'
import EditStudent from '~/pages/Students/EditStudent'
import Plans from '~/pages/Plans'
import Enrollments from '~/pages/Enrollments'
import HelpOrders from '~/pages/HelpOrders'

export const privateRoutes = [
  { label: 'Alunos', path: 'students', component: Students },
  { label: 'Plano', path: 'plans', component: Plans },
  { label: 'Matrículas', path: 'enrollments', component: Enrollments },
  { label: 'Pedidos de auxílio', path: 'help-orders', component: HelpOrders }
]

function PrivateRoutes(props) {
  const signed = useSelector(({ auth }) => auth.signed)

  if (!signed) {
    return <Redirect to='/guest' />
  }

  return (
    <AppLayout>
      <Switch>
        {privateRoutes.map((route, i) => (
          <Route
            key={i}
            path={`${props.match.path}/${route.path}`}
            component={route.component}
            exact
          />
        ))}
        <Route
          exact
          path={`${props.match.path}/students/:studentId/edit`}
          component={EditStudent}
        />
        <Redirect to={`${props.match.path}/students`} />
      </Switch>
    </AppLayout>
  )
}

export default PrivateRoutes
