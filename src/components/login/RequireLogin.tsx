import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../common/hooks'

export function RequireLogin({ children }: { children: JSX.Element }) {
  const navigate = useNavigate()
  const { auth } = useAuth()

  return auth?.user ? children
    : navigate('/login', { replace: true })
}
