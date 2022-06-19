import { useState } from 'react'
import { Iinput } from './types'
import './login.css'
import image from './../../images/simcc.png'
import { login } from './loginAPI'
import { Link } from 'react-router-dom'
import { Iuserdata } from './types/userdata.type'

const LoginPage: React.FC = () => {
  const [userdata, setUserdata] = useState<Iuserdata>()
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
      <img className="login-image" src={image} width="20%" height="90%"/>
      <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
      <h1 className='login-title'>Login</h1>
        <span>Username</span>
        <br />
        <input
          className='login-textbox'
          name='username'
          type='text'
          placeholder='username'
          required
        />{' '}
        <br />
        <span>Password</span> <br />
        <input
          className='login-textbox'
          placeholder='password'
          name='pass'
          type='password'
          required
        />
        <br />
        {error && (
          <span className='login-error'>Invalid username or password</span>
        )}{' '}
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
  )
}

export default LoginPage
