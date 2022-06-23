import { useEffect } from 'react'
import { useAuth } from './.'
import { axiosOnline } from './../../api/axios.config'

export const useAxiosWithTokens = () => {
  const { auth, setAuth } = useAuth()

  useEffect(() => {
    const reqIntercept = axiosOnline.interceptors.request.use(
      (config) => {
        if (config.headers) {
          if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
          }
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    const resIntercept = axiosOnline.interceptors.response.use(
      (response) => {
        // Auto Refresh Token from backend
        if (response.headers['x-access-token']) {
          console.log('Recieved New Token')
          if (setAuth) setAuth({
            ...auth,
            accessToken: response.headers['x-access-token']
          })
        }
      },
      async (error) => Promise.reject(error)
    )

    return () => {
      axiosOnline.interceptors.request.eject(reqIntercept)
      axiosOnline.interceptors.response.eject(resIntercept)
    }
  }, [auth])
}

export default useAxiosWithTokens
