import React, { useState } from 'react'
import { NativeModules } from 'react-native'

import { Container, Logo, Input, Button } from './styles'

function Login ({ navigation }) {
  const [id, setId] = useState('')

  return (
    <Container>
      <Logo />
      <Input autoFocus onChangeText={text => setId(text)} />
      <Button
        onPress={() => {
          console.log(NativeModules.SourceCode.scriptURL)
        }}
      >
        Entrar no sistema
      </Button>
    </Container>
  )
}

export default Login
