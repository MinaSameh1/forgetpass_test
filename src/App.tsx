import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { RequireLogin } from './components/login'
import AdminDashboard from './components/admindash/AdminDashboard'
import ForgotPass from './components/ForgotPass/forgotpass'
import LoginPage from './components/login/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route path='/admindash' element={
          <RequireLogin>
            <AdminDashboard />
          </RequireLogin>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
