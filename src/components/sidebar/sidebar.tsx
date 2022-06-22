import {
  MdAdminPanelSettings,
  MdDashboard,
  MdDescription,
  MdMail,
  MdPeople,
  MdSettings,
} from 'react-icons/md'
import { FaGraduationCap, FaRegNewspaper, FaDatabase } from 'react-icons/fa'
import './sidebar.css'
import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <ul className='sidebarList'>
            <Link to='/' className='link'>
              <li className='sidebarListItem'>
                <MdDashboard className='sidebarIcon' />
              </li>
            </Link>
            <Link to='/setup' className='link'>
              <li className='sidebarListItem active'>
                <MdAdminPanelSettings className='sidebarIcon' />
              </li>
            </Link>
            <li className='sidebarListItem'>
              <MdPeople className='sidebarIcon' />
            </li>
            <li className='sidebarListItem'>
              <FaGraduationCap className='sidebarIcon' />
            </li>
            <li className='sidebarListItem'>
              <FaRegNewspaper className='sidebarIcon' />
            </li>
            <li className='sidebarListItem'>
              <FaDatabase className='sidebarIcon' />
            </li>
            <li className='sidebarListItem'>
              <MdDescription className='sidebarIcon' />
            </li>
            <li className='sidebarListItem'>
              <MdMail className='sidebarIcon' />
            </li>
            <li className='sidebarListItem'>
              <MdSettings className='sidebarIcon' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
