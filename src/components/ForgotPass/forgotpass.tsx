import { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { updatePassAPI } from './../../api'
import './forgotpass.css'

const ForgotPass: React.FC = () => {
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState<boolean>(false)
  const [showConfPass, setShowConfPass] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { pass, confPass } = e.currentTarget
    if (pass != confPass) {
      setError(true)
    } else {
      updatePassAPI(pass)
      navigate('/login', { replace: true })
    }
  }

  return (
    <>
      <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
        <span className='forgetpass-title'>Reset Password</span>
        <div className='forgetpass-underscore'></div>
        <span className='login-text'>New Password</span>
        <br />
        <div className='login_form-pass'>
          <input
            className='login-input'
            name='pass'
            type={showPass ? 'text' : 'password'}
            placeholder='Your New password'
            required
          />
          {showPass ? (
            <BiShow
              className='login-show'
              title='Show Password'
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <BiHide
              className='login-show'
              title='Hide password'
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>
        <br />
        <span className='login-text'>Confirm Password</span> <br />
        <div className='login_form-pass'>
          <input
            className='login-input'
            placeholder='Confirm Your password'
            name='confPass'
            type={showConfPass ? 'text' : 'password'}
            required
          />
          {showConfPass ? (
            <BiShow
              className='login-show'
              title='Show Password'
              onClick={() => setShowConfPass(!showConfPass)}
            />
          ) : (
            <BiHide
              className='login-show'
              title='Hide password'
              onClick={() => setShowConfPass(!showConfPass)}
            />
          )}
          <br />
        </div>
        {error && (
          <span className='login-error'>Your Passwords don't match</span>
        )}
        <Link className='forgetpass-link' to='/login'>
          Login
        </Link>
        <br />
        <br />
        <button type='submit' className='login_form-button'>
          Change Password
        </button>
      </form>
    </>
  )
}

export default ForgotPass
