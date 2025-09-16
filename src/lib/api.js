// API Service for Flask Backend Communication
import { config, getApiUrl } from './config'

class ApiService {
  constructor() {
    this.baseURL = config.api.baseUrl
    this.timeout = config.api.timeout
  }

  // Helper method to make authenticated requests
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    // Add authentication token if available (from Supabase)
    const token = localStorage.getItem('supabase.auth.token')
    if (token) {
      defaultOptions.headers['Authorization'] = `Bearer ${token}`
    }

    const config = {
      ...defaultOptions,
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        return await response.json()
      }
      
      return await response.text()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' })
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }

  // Lead Management API calls
  async getLeads(params = {}) {
    const queryString = new URLSearchParams(params).toString()
    const endpoint = queryString ? `/leads?${queryString}` : '/leads'
    return this.get(endpoint)
  }

  async getLead(id) {
    return this.get(`/leads/${id}`)
  }

  async createLead(leadData) {
    return this.post('/leads', leadData)
  }

  async updateLead(id, leadData) {
    return this.put(`/leads/${id}`, leadData)
  }

  async deleteLead(id) {
    return this.delete(`/leads/${id}`)
  }

  // Dashboard Statistics
  async getDashboardStats() {
    return this.get('/dashboard/stats')
  }

  // Campaign Management
  async getCampaigns() {
    return this.get('/campaigns')
  }

  async createCampaign(campaignData) {
    return this.post('/campaigns', campaignData)
  }

  // User Profile
  async getUserProfile() {
    return this.get('/user/profile')
  }

  async updateUserProfile(profileData) {
    return this.put('/user/profile', profileData)
  }
}

// Export singleton instance
export const apiService = new ApiService()
export default apiService

