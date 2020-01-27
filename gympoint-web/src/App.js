import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
// import { ToastContainer } from 'react-toastify'
import 'dotenv/config'

import '~/services/icons'
import '~/config/reactotron-config'
import { store, persistor } from '~/store'
import theme from '~/styles/theme'

import Routes from '~/routes'

import Toastify from '~/components/Toastify'
import GlobalStyle from '~/styles/global'

function App () {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <GlobalStyle />
            <Routes />
          </BrowserRouter>
          <GlobalStyle />
          <Toastify />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  )
}

export default App
