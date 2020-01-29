import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

if (__DEV__) {
  console.log('TRYING TO CONNECT')
  const tron = Reactotron.configure({
    name: 'Gympoint',
    host: '192.168.15.146'
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  tron.clear()

  console.tron = tron
} else {
  const noop = () => undefined
  console.tron = {
    configure: noop,
    connect: noop,
    use: noop,
    useReactNative: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    warn: noop,
    image: noop,
    reportError: noop
  }
}

// http://packager.su-9j3.anonymous.gympoint-app.exp.direct
// exp://su-9j3.anonymous.gympoint-app.exp.direct:80
