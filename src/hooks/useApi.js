import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { apiService } from '../lib/api'

// Custom hook for API calls with loading and error states
export const useApi = (apiCall, dependencies = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      if (!user) {
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)
        const result = await apiCall()
        
        if (isMounted) {
          setData(result)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred')
          console.error('API call failed:', err)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [user, ...dependencies])

  const refetch = async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await apiCall()
      setData(result)
    } catch (err) {
      setError(err.message || 'An error occurred')
      console.error('API refetch failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, refetch }
}

// Specific hooks for common API calls
export const useLeads = (params = {}) => {
  return useApi(() => apiService.getLeads(params), [JSON.stringify(params)])
}

export const useDashboardStats = () => {
  return useApi(() => apiService.getDashboardStats())
}

export const useCampaigns = () => {
  return useApi(() => apiService.getCampaigns())
}

export const useUserProfile = () => {
  return useApi(() => apiService.getUserProfile())
}

// Hook for mutations (POST, PUT, DELETE)
export const useApiMutation = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const mutate = async (apiCall) => {
    try {
      setLoading(true)
      setError(null)
      const result = await apiCall()
      return result
    } catch (err) {
      setError(err.message || 'An error occurred')
      console.error('API mutation failed:', err)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { mutate, loading, error }
}

