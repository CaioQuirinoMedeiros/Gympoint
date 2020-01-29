import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ThemeProvider } from 'styled-components'

import theme from './utils/theme'

import Navigation from './navigation'

export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
