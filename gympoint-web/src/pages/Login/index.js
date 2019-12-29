import React, { useState } from 'react'

import { Container, LoginWindow, Title, Input, Button } from './styles'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  React.useEffect(() => {
    console.log('email: ', email)
    console.log('password: ', password)
  }, [email, password])

  function handleLogin() {
    alert('opa')
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
        <Button onClick={handleLogin}>Entrar no sistema</Button>
      </LoginWindow>
    </Container>
  )
}

export default Login
