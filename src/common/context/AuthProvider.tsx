import { createContext, useState } from 'react'
import { Iuserdata } from './../types'

interface context {
  auth: Auth
  setAuth: React.Dispatch<
    React.SetStateAction<Partial<Auth>>
  >
}

interface Auth {
    accessToken?: string
    refreshToken?: string
    user?: Omit<Iuserdata, 'pass'>
  }

const AuthContext = createContext<Partial<context>>({})

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [auth, setAuth] = useState<Partial<Auth>>({})

  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthContext
