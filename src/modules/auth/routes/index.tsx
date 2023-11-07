import {AuthRoutes} from './routes'

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import ForgotPassword from '../screens/ForgotPassword'

export const AUTH_SCREENS = [
  {
    name: AuthRoutes.SignIn,
    component: SignIn
  },
  {
    name: AuthRoutes.SignUp,
    component: ForgotPassword
  },
  {
    name: AuthRoutes.ForgotPassword,
    component: SignUp
  }
]
