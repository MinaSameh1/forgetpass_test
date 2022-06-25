import { Iuserdata, tokens } from './../common/types'
import { axiosOnline } from "./axios.config";

export async function login(
  username: string,
  pass: string
): Promise<null | Iuserdata & tokens> {
  try {
    const res = await axiosOnline.post(
      'api/user/login',
      { username, password: pass }
    )
    const userdata = res.data
    if (userdata) {
      return userdata
    }
    return null
  } catch (err) {
    console.log(err)
    return null
  }
}

export function requestResetPassAPI(email: string) {
  return axiosOnline.post('/api/user/request', {
    email: email
  })
}

export function checkTokenAPI(token: string) {
  return axiosOnline.post(`/api/user/${token}`, {
    token
  })
}

export function updatePassAPI(pass: string, token: string) {
  return axiosOnline.patch(`/api/user/${token}`, {
    password: pass
  })
}
