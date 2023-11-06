export enum AuthRoutes {
  // auth
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  ForgotPassword = 'ForgotPassword',
}

export type AuthStackParamList = {
  [AuthRoutes.SignIn]: any;
  [AuthRoutes.SignUp]: any;
  [AuthRoutes.ForgotPassword]: any;
};
