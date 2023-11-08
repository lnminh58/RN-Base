import {AuthRoutes, AuthStackParamList} from 'src/modules/auth/routes/routes'
import {MainRoutes, MainStackParamList} from 'src/modules/main/routes/routes'

export const AppRoutes = {
  ...AuthRoutes,
  ...MainRoutes
}

export type AppStackParamList = AuthStackParamList & MainStackParamList
