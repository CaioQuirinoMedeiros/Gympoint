import React, { useState } from 'react'

import { Container, Logo, Input, Button } from './styles'

function Login ({ navigation }) {
  const [id, setId] = useState('')

  return (
    <Container>
      <Logo />
      <Input autoFocus onChangeText={text => setId(text)} />
      <Button onPress={() => alert(id)}>Entrar no sistema</Button>
    </Container>
  )
}

export default Login
