import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { NativeModules } from 'react-native'

import './config/reactotron-config'

import { store, persistor } from './store'
import theme from './utils/theme'

import Navigation from './navigation'


const OPA = NativeModules.SourceCode.scriptURL

console.log(OPA)

export default function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Navigation />
        </>
      </ThemeProvider>
    </Provider>
  )
}
