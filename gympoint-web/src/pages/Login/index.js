import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AuthActions from '~/store/modules/auth/actions'

import { Container, LoginForm, Title, Input, Button } from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loading = useSelector(({ auth }) => auth.loading)

  const dispatch = useDispatch()

  function handleLogin(e) {
    e.preventDefault()
    dispatch(AuthActions.signInRequest(email, password))
  }

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
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
        <Button type="submit" loading={loading} disabled={loading}>
          Entrar no sistema
        </Button>
      </LoginForm>
    </Container>
  )
}

export default Login
