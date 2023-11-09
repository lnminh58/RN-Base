import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text} from 'react-native'

const SignUp = () => {
  const {t} = useTranslation()
  return (
    <View style={{flex: 1}}>
      <Text>{t('main.home.title')}</Text>
    </View>
  )
}

export default SignUp
