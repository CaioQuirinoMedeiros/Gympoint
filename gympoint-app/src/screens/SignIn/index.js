import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import AuthActions from '../../store/modules/auth/actions'

import { Container, Logo, Input, Button } from './styles'

function Login ({ navigation }) {
  const [id, setId] = useState('')

  const loading = useSelector(({ auth }) => auth.loading)

  const shouldSignOut = navigation.getParam('shouldSignOut')

  const dispatch = useDispatch()

  if (shouldSignOut) {
    dispatch(AuthActions.signOut())
  }

  function handleSubmit () {
    dispatch(AuthActions.signInRequest(id))
  }

  return (
    <Container>
      <Logo />
      <Input autoFocus onChangeText={text => setId(text)} />
      <Button onPress={handleSubmit} loading={loading} disabled={false}>
        Entrar no sistema
      </Button>
    </Container>
  )
}

export default Login
