import axios from 'axios'
import { setToken, setTokenValue } from '../../common'
import { Iuserdata } from './../../common/types'

export async function login(
  username: string,
  pass: string
): Promise<null | Iuserdata> {
  try {
    const res = await axios.post(
      'https://loginapi-quick.herokuapp.com/api/login',
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
