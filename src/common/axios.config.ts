import Axios from 'axios'
import { URL } from '.'

const axiosInstance = Axios.create({
  baseURL: URL
})

export default axiosInstance
