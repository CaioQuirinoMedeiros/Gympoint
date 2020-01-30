import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

// import { Container } from './styles';

function NewHelpOrder ({navigation}) {
  return (
    <View>
      <Text>NOVO PEDIDO DE AUXILIO</Text>
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

export default NewHelpOrder
