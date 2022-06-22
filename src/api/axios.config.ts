import Axios from 'axios'
import { onlineURL, URL } from './../common'

const axiosPublic = Axios.create({
  baseURL: URL
})

export const axiosUser = Axios.create({
  baseURL: onlineURL,
  headers: { 'Content-Type': 'application/json' },
})

export default axiosPublic
