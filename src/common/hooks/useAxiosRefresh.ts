import { useEffect } from 'react'
import { useAuth } from './.'
import { axiosUser } from './../../api/axios.config'

export const useAxiosWithTokens = () => {
  const { auth, setAuth } = useAuth()

  useEffect(() => {
    const reqIntercept = axiosUser.interceptors.request.use(
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

    const resIntercept = axiosUser.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevReq = error?.config

        if (error.response.status !== 401) {
          const res = await axiosUser.post(
            '/api/refresh',
            { token: auth?.refreshToken },
            {
              withCredentials: true,
            }
          )

          if (setAuth) {
            setAuth((prev) => {
              console.log(`Refreshed Token with ${res.status}`)
              return {
                ...prev,
                accessToken: res.data.accessToken,
                refreshToken: res.data.refreshToken,
              }
            })
          }
          prevReq.headers['Authorization'] = `Bearer ${res.data.accessToken}`
          return axiosUser(prevReq)
        }

        Promise.reject(error)
      }
    )

    return () => {
      axiosUser.interceptors.request.eject(reqIntercept)
      axiosUser.interceptors.response.eject(resIntercept)
    }
  }, [auth])
}

export default useAxiosWithTokens
