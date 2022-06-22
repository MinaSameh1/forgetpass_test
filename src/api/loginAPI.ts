import { setToken, setTokenValue } from './../common'
import { Iuserdata } from './../common/types'
import { axiosUser } from "./axios.config";

export async function login(
  username: string,
  pass: string
): Promise<null | Iuserdata> {
  try {
    const res = await axiosUser.post(
      'api/login',
      { username, password: pass }
    )
    const userdata = res.data
    if (userdata) {
      // Maybe use react-cookies ? for now use the document api.
      if (userdata.accessToken)
        // since this api doesn't return an actual token
      setToken(userdata.accessToken, userdata.refreshToken)
      else setTokenValue('noToken')
      return userdata
    }
    return null
  } catch (err) {
    console.log(err)
    return null
  }
}

export async function updatePassAPI(pass: string) {
  axiosUser.post('/api/user', {
    password: pass
  }, {
    headers: {
      authorization: ""
    }
  })
}
