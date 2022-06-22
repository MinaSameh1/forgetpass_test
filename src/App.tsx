import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AdminDashboard } from './pages/admindash'
import { ResetPass } from './components/Resetpass'
import { Logout } from './components/logout/logout'
import LoginPage from './pages/login/LoginPage'
import LoginForm from './components/login/LoginForm'
import ForgotPass from './components/forgetpass/forgetpass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LoginPage />}>
          <Route path='/' element={<LoginForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/resetpass' element={<ResetPass />} />
          <Route path='/forgotpass' element={<ForgotPass />} />
        </Route>
        <Route path='/setup' element={<AdminDashboard />} />
        <Route path='/logout' element={<Logout />} />
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
