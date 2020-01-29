import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { useSelector } from 'react-redux'

import SignIn from '../screens/SignIn'
import App from '../screens/App'

import AppNavigator from './appNavigator'

const createNavigator = signed =>
  createAppContainer(
    createSwitchNavigator(
      { SignIn, App: AppNavigator },
      { initialRouteName: signed ? 'App' : 'SignIn' }
    )
  )

export default () => {
  const student = useSelector(({ auth }) => auth.student)

  const Navigator = createNavigator(!!student)

  return <Navigator />
}
