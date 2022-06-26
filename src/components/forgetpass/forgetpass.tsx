import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { requestResetPassAPI } from '../../api'
import './forgetpass.css'

export const ForgetPass: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email } = e.currentTarget
    try {
      requestResetPassAPI(email.value).then(
        res => {
          if (res.status === 200) {
            toast.success('Sent email')
            setTimeout(() => {
              navigate('/login', { replace: true })
            }, 5000)
            return
          }
        }
      ).catch(e => {
        console.log(e)
        return toast.error(`Didn't send mail!\n ${e.response.data.message}`)
      })
    } catch (e: unknown) {
      console.log(e)
      return toast.error(`Didn't send mail!`)
    }
  }

  return (<>
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
      />
      <form className='forgetpass-form' onSubmit={(e) => handleSubmit(e)}>
        <p className='forgetpass-title'>
          Forget Password?
        </p>
        <div className='forgetpass-underscore'></div>
        <div className='forgetpass-info'>
          <p>Please enter your registered email address.<br /></p>
          <div className='forgetpass-gray'>
            We will send a verification code to your registered email address.
          </div>
        </div>
        <p className='login-text'>Email</p>
        <input
          type='email'
          name='email'
          className='login-input'
          placeholder='Your Email'
          required
        />
        <button className='forgetpass-button'>Next</button>
      </form>
    </div>

  </>)
}

export default ForgetPass