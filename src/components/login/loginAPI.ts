import axios from '../../common/axios.config'
import { Iuserdata } from './types/userdata.type'

export async function login(
  username: string,
  pass: string
): Promise<boolean | Iuserdata> {
  // TODO: Change this to use actual API!
  try {
  const res = await axios.get(`/users?username=${username}&pass=${pass}`)
  if (res.data[0]) {
    // Maybe use react-cookies ? for now use the document api.
    if (res.data[0].accessToken) {
      document.cookie = `Bearer=${res.data[0].accessToken};`
    }
    return res.data[0]
  }
  return false
  } catch(err) {
    console.log(err)
    return false
  }
}
