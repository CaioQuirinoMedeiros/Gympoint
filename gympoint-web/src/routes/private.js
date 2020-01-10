import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AppLayout from '~/pages/_layouts/App'

import Students from '~/pages/Students'
import EditStudent from '~/pages/Students/EditStudent'
import AddStudent from '~/pages/Students/AddStudent'
import Plans from '~/pages/Plans'
import EditPlan from '~/pages/Plans/EditPlan'
import AddPlan from '~/pages/Plans/AddPlan'
import Enrollments from '~/pages/Enrollments'
import EditEnrollment from '~/pages/Enrollments/EditEnrollment'
import AddEnrollment from '~/pages/Enrollments/AddEnrollment'
import HelpOrders from '~/pages/HelpOrders'

export const privateRoutes = [
  { label: 'Alunos', path: 'students', component: Students },
  { label: 'Planos', path: 'plans', component: Plans },
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
        <Route
          exact
          path={`${props.match.path}/students/register`}
          component={AddStudent}
        />
        <Route
          exact
          path={`${props.match.path}/plans/:planId/edit`}
          component={EditPlan}
        />
        <Route
          exact
          path={`${props.match.path}/plans/register`}
          component={AddPlan}
        />
        <Route
          exact
          path={`${props.match.path}/enrollments/:enrollmentId/edit`}
          component={EditEnrollment}
        />
        <Route
          exact
          path={`${props.match.path}/enrollments/register`}
          component={AddEnrollment}
        />
        <Redirect to={`${props.match.path}/students`} />
      </Switch>
    </AppLayout>
  )
}

export default PrivateRoutes
