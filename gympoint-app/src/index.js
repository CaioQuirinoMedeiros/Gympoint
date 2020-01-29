import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import './config/reactotron-config'

import { store, persistor } from './store'
import theme from './utils/theme'

import Navigation from './navigation'

export default function App () {
  // const Navigation = createNavigation()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
        <StatusBar barStyle="dark-content" />
          <Navigation />
        </>
      </ThemeProvider>
    </Provider>
  )
}
