import axios from 'axios'

export async function getData() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(res.data)
  return res.data
}