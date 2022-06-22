import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logoutAPI from './logoutAPI'

export function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    logoutAPI()
    navigate('/', { replace: true })
  }, [])

  return (
    <main>
      <h1>Nothing here!</h1>
    </main>
  )
}
