import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../components/sidebar'
import { TopBarDash } from '../../components/topbar_dash'
import { Iuserdata } from './../../common/types'
import { TableDash } from './../../components/TableDash'
import { TopBar } from './../../components/topbar'
import './admin.css'

type locationProps = { userdata: Iuserdata }

export function AdminDashboard() {
  const location = useLocation()
  const { userdata } = location.state as locationProps

  return (
    <>
      <TopBar img={userdata.img} name={userdata.username} role={userdata.role} />
      <TopBarDash />
      <div className='dash-main'>
        <Sidebar />
        {/* TODO: Add React Router. */}
        <div className='dash-page'>
          <TableDash  />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
