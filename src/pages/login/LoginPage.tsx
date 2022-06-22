import { Outlet } from 'react-router-dom'
import logo from './../../images/logo.png'
import full from './../../images/login_full.jpg'
import image from './../../images/minilogo.png'
import './login_page.css'

export function LoginPage() {
  const amount = 10

  const getLogos = (): JSX.Element[] => {
    const elements: JSX.Element[] = []
    for (let i = 0; i < amount; i++) {
      elements.push(<div className={`login_page-logo-${i}`}>
        <img src={image} alt='logo' width='100%'/>
      </div>)
    }

    return elements
  }

  return (
    <>
      <div className='login-div'>
        {/* Image */}
        <div className='login-left'>
          {/* TODO: Fix this CSS */}
          <img src={full} alt='Image' width="100%" height="100%"/>
          {/* <div className='login_page-logos'> */}
          {/*   {getLogos()} */}
          {/* </div> */}
          {/* <div className='login-circle-img'> */}
          {/*   <img className='login-img' src={logo} alt='Login image' /> */}
          {/* </div> */}
          {/* <span className='login-image-text'>company name</span> */}
        </div>

        {/* Form */}
        <div className='login-right'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default LoginPage
