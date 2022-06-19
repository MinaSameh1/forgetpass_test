import Axios from 'axios'
import { URL } from '.'

const axios = Axios.create({
  baseURL: URL
})

export default axios
