import Reactotron from 'reactotron-react-js'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    name: 'Gympoint'
  })
    .use(reduxPlugin())
    .use(sagaPlugin())
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
