import {AuthRoutes} from './routes'

import SignIn from 'src/modules/auth/screens/SignIn'
import SignUp from 'src/modules/auth/screens/SignUp'
import ForgotPassword from 'src/modules/auth/screens/ForgotPassword'

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
