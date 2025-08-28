import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight, User } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './auth/AuthModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' })
  const { user, signOut } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontakt', href: '#contact' }
  ]

  const openAuthModal = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode })
  }

  const closeAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'login' })
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const handleDashboardClick = () => {
    window.location.href = '/dashboard'
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">V</span>
                </div>
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Voyanero
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex items-center space-x-8"
            >
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </motion.nav>

            {/* Desktop Auth Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex items-center space-x-4"
            >
              {user ? (
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    onClick={handleDashboardClick}
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleSignOut}
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Abmelden
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => openAuthModal('login')}
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    Anmelden
                  </Button>
                  <Button 
                    onClick={() => openAuthModal('register')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Kostenlos starten
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </>
              )}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="px-4 pt-4 border-t border-gray-100 space-y-3">
                {user ? (
                  <>
                    <Button
                      variant="ghost"
                      onClick={handleDashboardClick}
                      className="w-full justify-center text-gray-700 hover:text-blue-600"
                    >
                      <User className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleSignOut}
                      className="w-full justify-center text-gray-700 hover:text-blue-600"
                    >
                      Abmelden
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      onClick={() => openAuthModal('login')}
                      className="w-full justify-center text-gray-700 hover:text-blue-600"
                    >
                      Anmelden
                    </Button>
                    <Button 
                      onClick={() => openAuthModal('register')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg"
                    >
                      Kostenlos starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={closeAuthModal}
        initialMode={authModal.mode}
      />
    </>
  )
}

export default Header

