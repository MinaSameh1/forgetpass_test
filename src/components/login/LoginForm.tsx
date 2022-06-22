import { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import './login_form.css'
import { login } from './../../api'
import { useAuth } from '../../common/hooks'

const LoginForm: React.FC = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState<boolean>(false)
  const { setAuth } = useAuth()
  const [error, setError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, pass } = e.currentTarget
    const res = await login(username.value.trim(), pass.value.trim())
    if (res) {
      // login
      console.log('Success in login')

      if (setAuth) setAuth({
        accessToken: res.accessToken,
        refreshToken: res.refreshToken,
        user: {
          username: res.username,
          role: res.role,
          isAdmin: res.isAdmin,
          img: res.img ? res.img : null
        }
      })
      navigate('/setup', { replace: true })
      return
    }
    setError(true)
  }

  return (
    <>
      <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
        <h1 className='login-title'>LOGIN</h1>
        <span className='login-text'>Username</span>
        <br />
        <input
          className='login-input'
          name='username'
          type='text'
          placeholder='Your Username'
          required
        />
        <br />
        <br />
        <span className='login-text'>Password</span> <br />
        <div className='login_form-pass'>
          <input
            className='login-input'
            placeholder='Your Password'
            name='pass'
            type={show ? 'text' : 'password'}
            required
          />
          {show ? (
            <BiShow
              className='login-show'
              title='Show Password'
              onClick={() => setShow(!show)}
            />
          ) : (
            <BiHide
              className='login-show'
              title='Hide password'
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
        <button type='submit' className='login_form-button'>
          Login
        </button>
      </form>
    </>
  )
}

export default LoginForm
