import React from 'react'
import {NavigationProp, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'

import {AUTH_SCREENS} from 'src/modules/auth/routes'
import {MAIN_SCREENS} from 'src/modules/main/routes'
import {useIsAuthenticated} from 'src/hooks/authentication'

import {AppStackParamList} from './routes'

const AppStack = createNativeStackNavigator<AppStackParamList>()

export const AppStackType = typeof AppStack
type AppNavigationProp = NavigationProp<AppStackParamList>

export const useAppNavigation = () => useNavigation<AppNavigationProp>()

export const AppNavigator = () => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {!isAuthenticated ? (
          <AppStack.Group>
            {AUTH_SCREENS.map(({name, ...rest}) => (
              <AppStack.Screen key={name} name={name} {...rest} />
            ))}
          </AppStack.Group>
        ) : (
          <AppStack.Group>
            {MAIN_SCREENS.map(({name, ...rest}) => (
              <AppStack.Screen key={name} name={name} {...rest} />
            ))}
          </AppStack.Group>
        )}
      </AppStack.Navigator>
    </NavigationContainer>
  )
}
