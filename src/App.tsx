import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ForgotPass from './components/ForgotPass/forgotpass'
import LoginPage from './components/login/LoginPage'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        {/* <Route path="/adminboard" element={<AdminDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
