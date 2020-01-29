import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Container, Logo } from './styles';

function Login (props) {
  console.log(props)
  return (
    <Container>
      <Logo />
      <TouchableOpacity onPress={() => props.navigation.navigate('App')}>
        <Text>Navigate To App</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Login
