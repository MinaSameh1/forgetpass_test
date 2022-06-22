import LoginForm from '../../components/login/LoginForm'
import logo from './../../images/logo.png'
import image from './../../images/minilogo.png'
import './login_page.css'

export function LoginPage() {
  const amount = 10

  const getLogos = (): JSX.Element[] => {
    const elements: JSX.Element[] = []
    for (let i = 0; i < amount; i++) {
      elements.push(<div className={`login_page-logo-${i}`}>
        <img src={image} alt='logo' width='50px' />
      </div>)
    }

    return elements
  }

  return (
    <>
      <div className='login-div'>
        {/* Image */}
        <div className='login-left'>
          <div className='login_page-logos'>
            {getLogos()}
          </div>
          <div className='login-circle-img'>
            <img className='login-img' src={logo} alt='Login image' />
          </div>
          <span className='login-image-text'>company name</span>
        </div>

        {/* Form */}
        <div className='login-right'>
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default LoginPage
