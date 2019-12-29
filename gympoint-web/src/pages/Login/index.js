import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AuthActions from '~/store/modules/auth/actions'

import { Container, LoginWindow, Title, Input, Button } from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loading = useSelector(({ auth }) => auth.loading)

  const dispatch = useDispatch()

  function handleLogin() {
    console.log('OPA')
    dispatch(AuthActions.signInRequest(email, password))
  }

  return (
    <Container>
      <LoginWindow>
        <Title>Gympoint</Title>
        <Input
          name='email'
          label='Seu e-mail'
          onChangeText={setEmail}
          placeholder='exemplo@email.com'
        />
        <Input
          name='password'
          type='password'
          label='Sua senha'
          onChangeText={setPassword}
          placeholder='********'
        />
        <Button onClick={handleLogin} loading={loading} disabled={loading}>
          Entrar no sistema
        </Button>
      </LoginWindow>
    </Container>
  )
}

export default Login
