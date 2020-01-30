import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { StatusBar, ActivityIndicator } from 'react-native'

import './config/reactotron-config'

import { store, persistor } from './store'
import theme from './utils/theme'

import LoadingScreen from './components/LoadingScreen'
import Navigation from './navigation'

export default function App () {
  // const Navigation = createNavigation()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor} loading={<LoadingScreen />}>
          <>
            <StatusBar barStyle='dark-content' />
            <Navigation />
          </>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  )
}
