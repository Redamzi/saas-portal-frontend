import { motion } from 'framer-motion'
import { 
  Bot, 
  Mail, 
  Database, 
  Zap, 
  Shield, 
  BarChart3,
  Target,
  Clock,
  Users
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "KI-gestütztes Web-Scraping",
      description: "Automatische Extraktion von Kontaktdaten aus verschiedenen Online-Quellen mit modernster KI-Technologie.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Intelligente E-Mail-Automatisierung",
      description: "Personalisierte E-Mail-Kampagnen mit automatischer Nachfassung und A/B-Testing für maximale Conversion.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Nahtlose CRM-Integration",
      description: "Direkte Synchronisation mit Ihren bestehenden CRM-Systemen und Marketing-Tools.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Präzise Zielgruppen-Analyse",
      description: "Erweiterte Filterung und Segmentierung für hochqualifizierte Leads basierend auf Ihren Kriterien.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Echtzeit-Verarbeitung",
      description: "Sofortige Lead-Erfassung und -Verarbeitung für maximale Reaktionsgeschwindigkeit.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "DSGVO-konform & sicher",
      description: "Vollständige Compliance mit Datenschutzbestimmungen und höchste Sicherheitsstandards.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart3,
      title: "Detaillierte Analytics",
      description: "Umfassende Berichte und Dashboards zur Optimierung Ihrer Lead-Generierung-Strategie.",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "24/7 Automatisierung",
      description: "Kontinuierliche Lead-Generierung rund um die Uhr ohne manuelle Eingriffe.",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Team-Kollaboration",
      description: "Nahtlose Zusammenarbeit im Team mit Rollen-Management und geteilten Dashboards.",
      color: "from-violet-500 to-purple-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Alles was Sie für erfolgreiche
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Lead-Generierung </span>
            benötigen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Voyanero kombiniert modernste Technologien zu einer All-in-One-Lösung für 
            automatisierte Lead-Generierung und Customer Acquisition.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Bereit für automatisierte Lead-Generierung?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Starten Sie noch heute und erleben Sie, wie Voyanero Ihr Business transformiert.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Jetzt kostenlos testen
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features

