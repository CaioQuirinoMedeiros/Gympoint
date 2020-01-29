import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import theme from '../utils/theme'

import Checkins from '../screens/Checkins'
import HelpOrders from '../screens/HelpOrders'

export default createBottomTabNavigator(
  {
    Checkins: {
      screen: Checkins,
      navigationOptions: {
        tabBarLabel: 'Check-ins',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='place' color={tintColor} size={20} />
        )
      }
    },
    HelpOrders: {
      screen: HelpOrders,
      navigationOptions: {
        tabBarLabel: 'Pedir ajuda',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='question-answer' color={tintColor} size={20} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: theme.primary,
      inactiveTintColor: theme.dimDark,
      labelStyle: {
        fontSize: 13,
      },
      style: {
        height: 60,
        paddingVertical: 8
      }
    }
  }
)
