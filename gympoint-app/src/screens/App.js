import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`

// import { Container } from './styles';

function App (props) {
  console.log(props)
  return (
    <Container>
      <Text>App</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
        <Text>Navigate To SignIn</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default App
