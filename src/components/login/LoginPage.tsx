import { useState } from 'react'
import './login.css'
import image from './../../images/simcc.png'
import { login } from './loginAPI'
import { Link } from 'react-router-dom'
import { Iuserdata } from './types/userdata.type'

const LoginPage: React.FC = () => {
  const [userdata, setUserdata] = useState<Iuserdata>(null)
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, pass } = e.currentTarget
    const res = await login(username.value, pass.value)
    if (res) {
      setUserdata(res)
      // login
      console.log('Success in login')
      return
    }
    setError(true)
  }

  return (
    <div className='login-div'>
      {/* Image */}
      <div className='login-left'>
        <div className='login-circle-img'>
          <img className='login-img' src={image} alt='Login image' />
        </div>
        <span className='login-image-text'>company name</span>
      </div>

      {/* Form */}
      <div className='login-right'>
        <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
          <h1 className='login-title'>LOGIN</h1>
          <span className='login-text'>Username</span>
          <br />
          <input
            className='login-input'
            name='username'
            type='text'
            placeholder='username'
            required
          />
          <br />
          <br />
          <span className='login-text'>Password</span> <br />
          <input
            className='login-input'
            placeholder='password'
            name='pass'
            type='password'
            required
          />
          <br />
          {error && (
            <span className='login-error'>Invalid username or password</span>
          )}
          <Link className='login-link' to='/forgotpass'>
            Forgot password?
          </Link>
          <br />
          <br />
          <button type='submit' className='login-button'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
