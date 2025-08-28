import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Mail, 
  Target, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  Clock,
  Shield,
  Database,
  Activity,
  DollarSign,
  UserCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Crown,
  Zap
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const AdminDashboard = () => {
  const { user, signOut } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  const [users, setUsers] = useState([])
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    const mockUsers = [
      {
        id: 1,
        name: 'Max Mustermann',
        email: 'max@mustermann.de',
        company: 'Mustermann GmbH',
        plan: 'Professional',
        status: 'active',
        created_at: '2025-08-20T10:30:00Z',
        last_login: '2025-08-24T15:45:00Z',
        leads_count: 156,
        revenue: 149
      },
      {
        id: 2,
        name: 'Anna Schmidt',
        email: 'anna@techstart.de',
        company: 'TechStart AG',
        plan: 'Enterprise',
        status: 'active',
        created_at: '2025-08-18T09:15:00Z',
        last_login: '2025-08-24T14:20:00Z',
        leads_count: 892,
        revenue: 399
      },
      {
        id: 3,
        name: 'Thomas Weber',
        email: 'thomas@innovation.com',
        company: 'Innovation Hub',
        plan: 'Starter',
        status: 'trial',
        created_at: '2025-08-22T08:45:00Z',
        last_login: '2025-08-24T11:30:00Z',
        leads_count: 23,
        revenue: 0
      },
      {
        id: 4,
        name: 'Lisa Müller',
        email: 'lisa@startup.de',
        company: 'StartUp Solutions',
        plan: 'Professional',
        status: 'inactive',
        created_at: '2025-08-15T16:20:00Z',
        last_login: '2025-08-20T09:10:00Z',
        leads_count: 67,
        revenue: 149
      }
    ]

    const mockLeads = [
      {
        id: 1,
        name: 'Peter Schneider',
        email: 'peter@example.com',
        company: 'Example Corp',
        user_id: 1,
        user_name: 'Max Mustermann',
        status: 'new',
        source: 'Website',
        created_at: '2025-08-24T10:30:00Z',
        score: 85
      },
      {
        id: 2,
        name: 'Maria Garcia',
        email: 'maria@demo.com',
        company: 'Demo Industries',
        user_id: 2,
        user_name: 'Anna Schmidt',
        status: 'qualified',
        source: 'LinkedIn',
        created_at: '2025-08-24T09:15:00Z',
        score: 92
      }
    ]
    
    setTimeout(() => {
      setUsers(mockUsers)
      setLeads(mockLeads)
      setLoading(false)
    }, 1000)
  }, [])

  const adminStats = [
    {
      title: 'Aktive Benutzer',
      value: '247',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Monatlicher Umsatz',
      value: '€24,580',
      change: '+18%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Gesamt Leads',
      value: '12,847',
      change: '+25%',
      changeType: 'positive',
      icon: Target,
      color: 'purple'
    },
    {
      title: 'System-Uptime',
      value: '99.9%',
      change: '+0.1%',
      changeType: 'positive',
      icon: Activity,
      color: 'orange'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'trial':
        return 'bg-blue-100 text-blue-800'
      case 'inactive':
        return 'bg-red-100 text-red-800'
      case 'suspended':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'active':
        return 'Aktiv'
      case 'trial':
        return 'Testphase'
      case 'inactive':
        return 'Inaktiv'
      case 'suspended':
        return 'Gesperrt'
      default:
        return status
    }
  }

  const getPlanColor = (plan) => {
    switch (plan) {
      case 'Starter':
        return 'bg-gray-100 text-gray-800'
      case 'Professional':
        return 'bg-blue-100 text-blue-800'
      case 'Enterprise':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <Crown className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Voyanero Management Console</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Admin: {user?.user_metadata?.first_name || user?.email}
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Abmelden
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Übersicht', icon: BarChart3 },
              { id: 'users', label: 'Benutzer', icon: Users },
              { id: 'leads', label: 'Alle Leads', icon: Target },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'system', label: 'System', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Admin Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {adminStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-6 shadow-sm border"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm ${
                          stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change} vs. letzter Monat
                        </p>
                      </div>
                      <div className={`p-3 rounded-lg ${
                        stat.color === 'blue' ? 'bg-blue-50' :
                        stat.color === 'green' ? 'bg-green-50' :
                        stat.color === 'purple' ? 'bg-purple-50' :
                        'bg-orange-50'
                      }`}>
                        <Icon className={`h-6 w-6 ${
                          stat.color === 'blue' ? 'text-blue-600' :
                          stat.color === 'green' ? 'text-green-600' :
                          stat.color === 'purple' ? 'text-purple-600' :
                          'text-orange-600'
                        }`} />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <UserCheck className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="font-medium text-blue-900">Neue Benutzer genehmigen</span>
                    </div>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">3</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3" />
                      <span className="font-medium text-yellow-900">System-Warnungen</span>
                    </div>
                    <span className="bg-yellow-600 text-white text-xs px-2 py-1 rounded-full">1</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-green-600 mr-3" />
                      <span className="font-medium text-green-900">Backup erstellen</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">API Server</span>
                    </div>
                    <span className="text-green-600 font-medium">Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Datenbank</span>
                    </div>
                    <span className="text-green-600 font-medium">Verbunden</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">E-Mail Service</span>
                    </div>
                    <span className="text-green-600 font-medium">Aktiv</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700">Scraping Engine</span>
                    </div>
                    <span className="text-yellow-600 font-medium">Wartung</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Letzte Admin-Aktivitäten</h3>
              <div className="space-y-4">
                {[
                  { action: 'Benutzer-Account aktiviert', details: 'Max Mustermann - Professional Plan', time: 'vor 1 Stunde', type: 'user' },
                  { action: 'System-Backup erstellt', details: 'Vollständiges Backup - 2.4 GB', time: 'vor 3 Stunden', type: 'system' },
                  { action: 'Neue Zahlung erhalten', details: 'Anna Schmidt - €399 Enterprise Plan', time: 'vor 5 Stunden', type: 'payment' },
                  { action: 'API-Limit erhöht', details: 'TechStart AG - 5000 → 10000 Requests/Tag', time: 'vor 8 Stunden', type: 'api' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        activity.type === 'user' ? 'bg-blue-500' :
                        activity.type === 'system' ? 'bg-green-500' :
                        activity.type === 'payment' ? 'bg-purple-500' :
                        'bg-orange-500'
                      }`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.details}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Users Header */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Benutzer-Verwaltung</h2>
                  <p className="text-gray-600 mt-1">Verwalten Sie alle Benutzer-Accounts und Abonnements</p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                  <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Plus className="h-4 w-4 mr-2" />
                    Benutzer hinzufügen
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Benutzer durchsuchen..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Benutzer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Plan
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Leads
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Umsatz
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Letzter Login
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Aktionen
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {loading ? (
                      <tr>
                        <td colSpan="7" className="px-6 py-12 text-center">
                          <div className="flex justify-center">
                            <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              <div className="text-sm text-gray-500">{user.email}</div>
                              <div className="text-xs text-gray-400">{user.company}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPlanColor(user.plan)}`}>
                              {user.plan}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                              {getStatusText(user.status)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {user.leads_count.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            €{user.revenue}/Monat
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(user.last_login).toLocaleDateString('de-DE')}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <div className="flex items-center justify-end space-x-2">
                              <button className="text-purple-600 hover:text-purple-900">
                                <Eye className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-gray-600 hover:text-gray-900">
                                <MoreHorizontal className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other tabs content */}
        {activeTab === 'leads' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-8 text-center border"
          >
            <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Alle Leads</h3>
            <p className="text-gray-600">Systemweite Lead-Übersicht wird hier verfügbar sein.</p>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-8 text-center border"
          >
            <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">Detaillierte Berichte und Analysen werden hier verfügbar sein.</p>
          </motion.div>
        )}

        {activeTab === 'system' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-sm p-8 text-center border"
          >
            <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">System-Einstellungen</h3>
            <p className="text-gray-600">Erweiterte System-Konfiguration wird hier verfügbar sein.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard

