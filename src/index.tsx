import 'react-native-gesture-handler'
import React from 'react'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {I18nextProvider} from 'react-i18next'

import i18n from 'src/translations'
import {persistor, store} from './store'
import App from './App'

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </PersistGate>
  </Provider>
)
