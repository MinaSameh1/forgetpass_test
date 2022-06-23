import { useEffect, useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { axiosOnline, updatePassAPI } from './../../api'
import './resetpass.css'

interface show {
  showPass: boolean
  showConfPass: boolean
}

export const ResetPass: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [showPass, setShowPass] = useState<show>({
    showPass: false,
    showConfPass: false,
  })
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

  useEffect(() => {
      const verifyToken = async () => {
      const token = params.token
      // Check that the token is correct
      const res = await axiosOnline.get(`/api/user/${token}`)
      console.log(res) // TODO: Remove debug msg
      if (res.status === 200) {
        setError(false)
      }
      else {
        // If not navigate back
        navigate('/404', { replace: true })
      }
    }

    verifyToken()
  }, [params])

  return (
    <>
      <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
        <p className='resetpass-title'>Reset Password</p>
        <div className='resetpass-underscore'></div>
        <span className='login-text'>New Password</span>
        <br />
        <div className='login_form-pass'>
          <input
            className='login-input'
            name='pass'
            type={showPass.showPass ? 'text' : 'password'}
            placeholder='Your New password'
            required
          />
          {showPass.showPass ? (
            <BiShow
              className='login-show'
              title='Show Password'
              onClick={() =>
                setShowPass({
                  showPass: !showPass.showPass,
                  showConfPass: showPass.showConfPass,
                })
              }
            />
          ) : (
            <BiHide
              className='login-show'
              title='Hide password'
              onClick={() =>
                setShowPass({
                  showPass: !showPass.showPass,
                  showConfPass: showPass.showConfPass,
                })
              }
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
            type={showPass.showConfPass ? 'text' : 'password'}
            required
          />
          {showPass.showConfPass ? (
            <BiShow
              className='login-show'
              title='Show Password'
              onClick={() => setShowPass({
                showPass: showPass.showPass,
                showConfPass: !showPass.showConfPass
              })}
            />
          ) : (
            <BiHide
              className='login-show'
              title='Hide password'
              onClick={() => setShowPass({
                showPass: showPass.showPass,
                showConfPass: !showPass.showConfPass
              })}
            />
          )}
          <br />
        </div>
        {error && (
          <span className='login-error'>Your Passwords don't match</span>
        )}
        <Link className='resetpass-link' to='/login'>
          Login
        </Link>
        <br />
        <br />
        <button type='submit' className='resetpass-button'>
          Change Password
        </button>
      </form>
    </>
  )
}

export default ResetPass
