import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiFillHome, AiOutlinePoweroff } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import ClickAwayListener from 'react-click-away-listener'
import './topbar.css'
import logo from './../../images/simcc.png'

interface props {
  img: string
  name: string
  role: string
}

export function TopBar({ img, name, role }: props) {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const navigate = useNavigate()

  return (
    <div className='Topbar'>
      <div className='topbar-elements'>
        <div className='topbar-left'>
          <a href='/'>
            <img className='topbar-logo' src={logo} />
          </a>
        </div>
        <div className='topbar-right'>
          <div className='topbar-icon'>
            <span className='topbar-badge'>2</span>
            <IoMdNotificationsOutline className='topbar-noti' />
          </div>
          <div>
            <img
              className='topbar-pfp'
              alt='img'
              src={img}
              onClick={() => setShowMenu(true)}
            />
            {showMenu && (
              <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                <div className='topbar-menu'>
                  <li>
                    <span className='topbar-name'>{name}</span>{' '}
                    <span className='topbar-role'>{role}</span>
                  </li>
                  <li>
                    <a
                      className='topbar-button'
                      onClick={() => navigate('/', { replace: true })}
                    >
                      <AiFillHome color='#706FA7' /> Home
                    </a>
                  </li>
                  <li>
                    <a
                      className='topbar-button'
                      onClick={() => navigate('/profile', { replace: true })}
                    >
                      <CgProfile color='#706FA7' /> Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className='topbar-button'
                      onClick={() => navigate('/logout', { replace: true })}
                    >
                      <AiOutlinePoweroff color='#706FA7' /> Logout
                    </a>
                  </li>
                </div>
              </ClickAwayListener>
            )}
          </div>
          <div className='topbar-icon'>
            <IoMdArrowDropdown
              className='topbar-dropdown'
              onClick={() => setShowMenu(true)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
