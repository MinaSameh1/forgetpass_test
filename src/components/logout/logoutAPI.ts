import axios from "axios"

export function logoutAPI() {
  return axios.post('https://loginapi-quick.herokuapp.com/api/logout',
    {},
    {
    headers: { authroization: "Beaerer " }
  })
}

export default logoutAPI
