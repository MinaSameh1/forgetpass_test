import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AdminDashboard } from './pages/admindash'
import ForgotPass from './components/ForgotPass/forgotpass'
import { Logout } from './components/logout/logout'
import LoginPage from './pages/login/LoginPage'
import LoginForm from './components/login/LoginForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LoginPage />} >
          <Route path='/login' element={<LoginForm />} />
          <Route path='/forgotpass' element={<ForgotPass />} />
        </Route>
        <Route
          path='/setup'
          element={
              <AdminDashboard />
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
