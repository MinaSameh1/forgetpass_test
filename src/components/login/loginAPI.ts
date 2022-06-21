import axiosInstance from '../../common/axios.config'
import { Iuserdata } from './../../common/types'

export async function login(
  username: string,
  pass: string
): Promise<null | Iuserdata> {
  // TODO: Change this to use actual API!
  try {
    const res = await axiosInstance.get(
      `/users?username=${username}&pass=${pass}`
    )
    const userdata = res.data[0]
    if (userdata) {
      // Maybe use react-cookies ? for now use the document api.
      if (userdata.accessToken)
        // since this api doesn't return an actual token
        document.cookie = `Bearer=${userdata.accessToken};`
      else document.cookie = 'Bearer=Token;'
      // The token should be decoded here to get data
      return userdata
    }
    return null
  } catch (err) {
    console.log(err)
    return null
  }
}
