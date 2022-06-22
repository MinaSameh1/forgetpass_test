import './forgetpass.css'

export const ForgetPass: React.FC = () => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const { email } = e.currentTarget
    // Logic
  }

  return (<>
    <form className='forgetpass-form' onSubmit={(e) => handleSubmit(e)}>
        <p className='forgetpass-title'>
          Forget Password?
        </p>
        <div className='forgetpass-underscore'></div>
        <p className='forgetpass-info'>
          Please enter your registered email address.<br />
        <div className='forgetpass-gray'>
          We will send a verification code to your registered email address.
        </div>
        </p>
        <p className='login-text'>Email</p>
        <input
          name='email'
          className='login-input'
          placeholder='Your Email'
        />
        <button className='forgetpass-button'>Next</button>
    </form>

  </>)
}

export default ForgetPass