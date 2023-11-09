import React from 'react'
import {useTranslation} from 'react-i18next'
import {View, Text, TouchableOpacity} from 'react-native'
import {useDispatch} from 'react-redux'
import {login} from 'src/modules/auth/store/slice/auth'
import i18n from 'src/translations'

const SignIn = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const handleSignIn = () => {
    dispatch(
      login({
        token: 'test-key'
      })
    )
  }

  const handleChangeLanguage = () => {
    i18n.changeLanguage('fr')
  }

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>{t('auth.signIn.title')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleChangeLanguage}>
        <Text>change language</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
