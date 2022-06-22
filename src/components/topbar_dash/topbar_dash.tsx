import './topbar_dash.css'
import logo from './../../images/settings.png'
import { useLocation } from 'react-router-dom'

export function TopBarDash() {
  const location = useLocation()
  return (
  <div className='topbar-dash'>
    <div className='topbar-elements'>
        <a href='/'>
          <img className='topbar_dash-logo' src={logo} />
        </a>
            {location.pathname}
    </div>
  </div>
  )
}

export default TopBarDash
