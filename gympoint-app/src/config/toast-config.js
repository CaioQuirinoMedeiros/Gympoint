import Toast from 'react-native-root-toast'

import theme from '../utils/theme'

export default (success = true) => ({
  duration: Toast.durations.LONG,
  position: 200,
  opacity: 0.95,
  backgroundColor: success ? theme.positive : theme.negative
})
