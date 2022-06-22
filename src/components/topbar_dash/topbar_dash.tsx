import './topbar_dash.css'
import { useLocation } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { FaTools } from 'react-icons/fa'

export function TopBarDash() {
  const location = useLocation()
  return (
    <div className='topbar-dash'>
      <div className='topbar-elements'>
        <a href='/'>
          <FaTools className='topbar_dash-logo' />
        </a>
        {/* TODO: Make it dynamic */}
        <span className='topbar_dash-title'>
          {location.pathname.replaceAll('/', ' ')}
        </span>
        <MdOutlineArrowForwardIos className='topbar_dash-arrow' />
        <span className='topbar_dash-header'>Schools</span>
      </div>
    </div>
  )
}

export default TopBarDash
