import axiosInstance from '../../common/axios.config'
import { Iuserdata } from './types/userdata.type'

export async function login(
  username: string,
  pass: string
): Promise<null | Iuserdata> {
  // TODO: Change this to use actual API!
  try {
    const res = await axiosInstance.get(
      `/users?username=${username}&pass=${pass}`
    )
    // TODO: Deconstruct the res.data, its used like 4 times
    if (res.data[0]) {
      // Maybe use react-cookies ? for now use the document api.
      if (res.data[0].accessToken)
        // since this api doesn't return an actual token
        document.cookie = `Bearer=${res.data[0].accessToken};`
      else document.cookie = 'Bearer=Token;'
      // The token should be decoded here to get data
      return res.data[0]
    }
    return null
  } catch (err) {
    console.log(err)
    return null
  }
}
