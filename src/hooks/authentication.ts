import {useSelector} from 'react-redux'
import {RootState} from '../store'

export const useIsAuthenticated = () => {
  const token = useSelector((state: RootState) => state.auth?.token)

  return !!token
}
