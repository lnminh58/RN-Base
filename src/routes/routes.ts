import {AuthRoutes, AuthStackParamList} from '../modules/auth/routes/routes'
import {MainRoutes, MainStackParamList} from '../modules/main/routes/routes'

export const AppRoutes = {
  ...AuthRoutes,
  ...MainRoutes
}

export type AppStackParamList = AuthStackParamList & MainStackParamList
