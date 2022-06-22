import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../common/hooks'
import { Sidebar } from '../../components/sidebar'
import { TopBarDash } from '../../components/topbar_dash'
import { TableDash } from './../../components/TableDash'
import { TopBar } from './../../components/topbar'
import img from './../../images/Ellipse_1@2x.png'
import './admin.css'

export function AdminDashboard() {
  const navigate = useNavigate()
  const { auth } = useAuth()
  let userdata

  if (auth?.user) {
    userdata = auth?.user
  } else {
    setTimeout( // Wait a tiny bit for it to render first
      () => {
        navigate('/login', { replace: true })
      }, 100
    )
    return (<>
      <h1>Redirecting...</h1>
    </>)
  }

  return (
    <>
      <TopBar
        img={userdata.img || img}
        name={userdata.username}
        role={userdata.role}
      />
      <TopBarDash />
      <div className='dash-main'>
        <Sidebar />
        {/* TODO: Move to outlet. */}
        <div className='dash-page'>
          <TableDash />
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
