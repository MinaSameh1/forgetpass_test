import { useNavigate } from 'react-router-dom'
import { logout } from '../../common'

export function Logout() {
  const navigate = useNavigate()
  logout()

  navigate('/', { replace: true })

  return (
    <main>
      <h1>Nothing here!</h1>
    </main>
  )
}
