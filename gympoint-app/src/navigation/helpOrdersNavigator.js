import { createStackNavigator } from 'react-navigation-stack'

import HelpOrders from '../screens/HelpOrders'
import NewHelpOrder from '../screens/NewHelpOrder'
import Answer from '../screens/Answer'

export default createStackNavigator(
  {
    HelpOrders,
    NewHelpOrder,
    Answer
  },
  {
    headerMode: 'none'
  }
)
