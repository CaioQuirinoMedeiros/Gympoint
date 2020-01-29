import { persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'gympoint',
      storage: AsyncStorage,
      whitelist: ['auth']
    },
    reducers
  )

  return persistedReducer
}
