import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Header from '../../components/Header'

// import { Container } from './styles';

function Answer ({ navigation }) {
  return (
    <View>
      <Header canGoBack/>
      <Text>RESPOSTA DO PEDIDO</Text>
      <TouchableOpacity onPress={() => navigation.navigate('HelpOrders')}>
        <Text>Navigate toHelpOrders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewHelpOrder')}>
        <Text>Navigate to New Help Order</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Answer')}>
        <Text>Navigate to Answer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Checkins')}>
        <Text>Navigate to Checkins</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Answer
