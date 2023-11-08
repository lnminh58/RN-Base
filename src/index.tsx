import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {persistor, store} from './store'
import App from './App'

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
