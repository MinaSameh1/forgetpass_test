import { axiosUser } from '../../api'
import useAuth from './useAuth'

export const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const res = await axiosUser.get('/api/refresh', {
      withCredentials: true,
    })

    if(setAuth) {
      setAuth((prev) => {
        console.log(`Refreshed Token with ${res.status}`)
        return {
          ...prev,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        }
      })
    }
  }

  return refresh;
}

export default useRefreshToken
