import { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import image from './../../images/simcc.png'
import './login.css'
import { login } from './loginAPI'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, pass } = e.currentTarget
    const res = await login(username.value, pass.value)
    if (res) {
      // login
      console.log('Success in login')
      navigate('/admindash', { replace: true, state: {data: res } })
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
        <form className='login-form' onSubmit={event => handleSubmit(event)}>
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
          <div className='login-pass'>
            <input
              className='login-input'
              placeholder='password'
              name='pass'
              type={show ? 'text' : 'password'}
              required
            />
            {show ? (
              <BiHide
                className='login-show'
                title='Hide password'
                onClick={() => setShow(!show)}
              />
            ) : (
              <BiShow
                className='login-show'
                title='Show Password'
                onClick={() => setShow(!show)}
              />
            )}
            <br />
          </div>
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
