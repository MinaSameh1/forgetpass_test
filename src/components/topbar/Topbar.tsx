import './topbar.css'
import logo from './../../images/simcc.png'
import { IoNotificationsOutline } from 'react-icons/io5'
import { IoMdArrowDropdown } from 'react-icons/io'
import { AiFillHome, AiOutlinePoweroff } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'
import ClickAwayListener from 'react-click-away-listener'

interface props {
  img: string
  name: string
  role: string
}

export function TopBar({ img, name, role }: props) {
  const [showMenu, setShowMenu] = useState<boolean>(false)

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
            <IoNotificationsOutline className='topbar-noti' />
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
                    <AiFillHome color='#706FA7' /> Home
                  </li>
                  <li>
                    <CgProfile color='#706FA7' /> Profile
                  </li>
                  <li>
                    <AiOutlinePoweroff color='#706FA7' /> Logout
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
