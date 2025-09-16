import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/customer/Home'
import About from './pages/customer/About'
import Contact from './pages/customer/Contact'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import CustomerLayout from './components/layouts/CustomerLayout'
import AuthLayout from './components/layouts/AuthLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLayout from './components/layouts/AdminLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout><Home/></CustomerLayout>} />
        <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
        <Route path="/contact" element={<CustomerLayout><Contact /></CustomerLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

         {/* Admin Routing */}
        <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
