import Axios from 'axios'
import { URL } from './../common'

const axiosInstance = Axios.create({
  baseURL: URL
})

export default axiosInstance
