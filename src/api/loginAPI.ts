import { Iuserdata, tokens } from './../common/types'
import { axiosOnline } from "./axios.config";

export async function login(
  username: string,
  pass: string
): Promise<null | Iuserdata & tokens> {
  try {
    const res = await axiosOnline.post(
      'api/login',
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

export async function updatePassAPI(pass: string) {
  axiosOnline.post('/api/user', {
    password: pass
  })
}
