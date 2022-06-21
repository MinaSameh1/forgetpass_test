import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { RequireLogin } from './components/login'
import { AdminDashboard } from './pages/admindash'
import ForgotPass from './components/ForgotPass/forgotpass'
import LoginPage from './components/login/LoginPage'
import { Logout } from './components/logout/logout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/forgotpass' element={<ForgotPass />} />
        <Route
          path='/admindash'
          element={
            <RequireLogin>
              <AdminDashboard />
            </RequireLogin>
          }
        />
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
