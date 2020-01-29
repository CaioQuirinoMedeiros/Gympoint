import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import SignIn from '../screens/SignIn'
import App from '../screens/App'

const AppContainer = createAppContainer(
  createSwitchNavigator({SignIn, App})
)

export default AppContainer