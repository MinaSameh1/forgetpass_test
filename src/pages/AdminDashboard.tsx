import { useLocation } from 'react-router-dom'
import { Iuserdata } from './../common/types'
import { getData } from './dashAPI'
import { TableDash } from './../components/TableDash'
import { TopBar } from './../components/topbar'

type locationProps = { data: Iuserdata }

export function AdminDashboard() {
  const location = useLocation()
  const { data } = location.state as locationProps

  return (
    <>
      <TopBar img={data.img} name={data.username} role={data.role} />
    </>
  )
}

export default AdminDashboard
