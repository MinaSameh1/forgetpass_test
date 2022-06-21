import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar'
import { Iuserdata } from './../../common/types'
import { TableDash } from './../../components/TableDash'
import { TopBar } from './../../components/topbar'

type locationProps = { userdata: Iuserdata }

export function AdminDashboard() {
  const location = useLocation()
  const { userdata } = location.state as locationProps

  return (
    <>
      <TopBar img={userdata.img} name={userdata.username} role={userdata.role} />
      <Sidebar />
      <TableDash  />
      <div className='dash-page'>

      </div>
    </>
  )
}

export default AdminDashboard
