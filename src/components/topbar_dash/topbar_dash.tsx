import './topbar_dash.css'
import logo from './../../images/settings.png'
import { useLocation } from 'react-router-dom'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

export function TopBarDash() {
  const location = useLocation()
  return (
    <div className='topbar-dash'>
      <div className='topbar-elements'>
        <a href='/'>
          <img className='topbar_dash-logo' src={logo} />
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
