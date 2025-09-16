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
import AnonymousRoute from './components/shared/AnonymousRoute'
import { AuthProvider } from './contexts/auth.context'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomerLayout><Home /></CustomerLayout>} />
          <Route path="/about" element={<CustomerLayout><About /></CustomerLayout>} />
          <Route path="/contact" element={<CustomerLayout><Contact /></CustomerLayout>} />

          {/* Unauthenticated Pages */}
          <Route element={<AnonymousRoute />}>
            {/* Auth Router */}
            <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
            <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
          </Route>

          {/* Admin Routing */}
          <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
        </Routes>

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
