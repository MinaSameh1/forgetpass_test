import axiosInstance from './axios.config'
import { data } from './../components/TableDash/types'


export async function getData(page: number = 1, sort: string = 'id') {
  const res = await axiosInstance.get(`/schools?_page=${page}&_sort=${sort}`)
  const total = res.headers['x-total-count']
  console.log(res.data)
  return { data: res.data as data[], count: Number(total) }
}
