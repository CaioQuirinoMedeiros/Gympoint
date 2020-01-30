import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import theme from '../utils/theme'

import Checkins from '../screens/Checkins'

import HelpOrderNavigator from './helpOrdersNavigator'

export default createBottomTabNavigator(
  {
    Logout: {
      screen: () => null,
      navigationOptions: {
        tabBarLabel: 'Sair',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='arrow-back' color={tintColor} size={20} />
        ),
        tabBarOnPress: ({ navigation }) =>
          navigation.navigate('SignIn', { shouldSignOut: true })
      }
    },
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
      screen: HelpOrderNavigator,
      navigationOptions: {
        tabBarLabel: 'Pedir ajuda',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='question-answer' color={tintColor} size={20} />
        )
      }
    }
  },
  {
    initialRouteName: 'Checkins',
    tabBarOptions: {
      activeTintColor: theme.primary,
      inactiveTintColor: theme.dimDark,
      labelStyle: {
        fontSize: 13
      },
      style: {
        height: 60,
        paddingVertical: 8
      }
    }
  }
)
