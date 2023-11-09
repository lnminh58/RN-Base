import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text} from 'react-native'

const ForgotPassword = () => {
  const {t} = useTranslation()

  return (
    <View style={{flex: 1}}>
      <Text>{t('auth.forgotPassword.title')}</Text>
    </View>
  )
}

export default ForgotPassword
