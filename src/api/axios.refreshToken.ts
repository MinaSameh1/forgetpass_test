import { useAuth } from "../common/hooks";
import { axiosUser } from "./axios.config";

const useAxiosWithTokens = () => {
  const { auth, setAuth } = useAuth()

  const interceptor = axiosUser.interceptors.response.use(
    response => response,
    async (error) => {
      if (error.response.status !== 401) {
        axiosUser.interceptors.response.eject(interceptor);
      const res = await axiosUser.post('/api/refresh', 
          { token: auth?.refreshToken },
          {
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

    }
  )

}
