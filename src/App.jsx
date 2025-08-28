import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'

// Legal pages
import Impressum from './pages/Impressum'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth()
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
  
  return user ? children : <Navigate to="/" replace />
}

// Landing page component
const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Privacy />} />
          <Route path="/agb" element={<Terms />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

