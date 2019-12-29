import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

import '~/config/reactotron-config'
import { store, persistor } from '~/store'

import Routes from '~/routes'

import GlobalStyle from '~/styles/global'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={3500} pauseOnHover={false} />
      </PersistGate>
    </Provider>
  )
}

export default App
