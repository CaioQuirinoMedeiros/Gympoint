import React from 'react'
import { Switch, Route } from 'react-router-dom'

function ComponentTop() {
  return <div>Opaaaaaa</div>
}
export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={ComponentTop} />
      <Route path='/login' component={ComponentTop} />

      <Route path='*' component={ComponentTop} />
    </Switch>
  )
}
