import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email, password, userData = {}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
          emailRedirectTo: `${window.location.origin}/dashboard`
        }
      })
      
      // If email confirmation is disabled, user will be automatically signed in
      if (data.user && !data.user.email_confirmed_at && !error) {
        // Try to sign in immediately if email confirmation is not required
        const signInResult = await signIn(email, password)
        if (signInResult.data.user) {
          return { data: signInResult.data, error: null }
        }
      }
      
      return { data, error }
    } catch (err) {
      return { data: null, error: err }
    }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { data, error }
  }

  const signInDemo = async () => {
    // Demo user credentials for testing
    const demoEmail = 'demo@voyanero.com'
    const demoPassword = 'demo123456'
    
    try {
      // Try to sign in with demo credentials
      let { data, error } = await supabase.auth.signInWithPassword({
        email: demoEmail,
        password: demoPassword
      })
      
      // If demo user doesn't exist, create it
      if (error && error.message.includes('Invalid login credentials')) {
        const signUpResult = await supabase.auth.signUp({
          email: demoEmail,
          password: demoPassword,
          options: {
            data: {
              firstName: 'Demo',
              lastName: 'User',
              company: 'Voyanero Demo'
            }
          }
        })
        
        if (signUpResult.data.user) {
          // Try to sign in again
          const signInResult = await supabase.auth.signInWithPassword({
            email: demoEmail,
            password: demoPassword
          })
          return signInResult
        }
        
        return signUpResult
      }
      
      return { data, error }
    } catch (err) {
      return { data: null, error: err }
    }
  }

  const updateProfile = async (updates) => {
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    })
    return { data, error }
  }

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInDemo,
    signOut,
    resetPassword,
    updateProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

