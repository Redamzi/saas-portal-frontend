import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      period: "monat",
      description: "Perfekt für kleine Unternehmen und Startups",
      features: [
        "Bis zu 500 Leads pro Monat",
        "Basis Web-Scraping",
        "E-Mail-Automatisierung",
        "Standard CRM-Integration",
        "E-Mail Support",
        "Basis Analytics"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Professional",
      price: "149",
      period: "monat",
      description: "Ideal für wachsende Unternehmen",
      features: [
        "Bis zu 2.000 Leads pro Monat",
        "Erweiterte KI-Algorithmen",
        "Multi-Channel Automatisierung",
        "Premium CRM-Integrationen",
        "Prioritäts-Support",
        "Erweiterte Analytics",
        "A/B Testing",
        "Custom Workflows",
        "Team-Kollaboration"
      ],
      popular: true,
      color: "border-blue-500 ring-2 ring-blue-500 ring-opacity-20"
    },
    {
      name: "Enterprise",
      price: "399",
      period: "monat",
      description: "Für große Unternehmen mit hohen Anforderungen",
      features: [
        "Unbegrenzte Leads",
        "KI-gestützte Personalisierung",
        "White-Label Lösung",
        "Alle CRM-Integrationen",
        "24/7 Premium Support",
        "Custom Analytics Dashboard",
        "Advanced A/B Testing",
        "API-Zugang",
        "Dedicated Account Manager",
        "Custom Integrations",
        "SLA Garantie"
      ],
      popular: false,
      color: "border-purple-200"
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
            Transparente Preise für
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> jeden Bedarf</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Wählen Sie den Plan, der perfekt zu Ihrem Unternehmen passt. 
            Alle Pläne beinhalten eine 14-tägige kostenlose Testphase.
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
            <button className="px-6 py-2 rounded-lg bg-white text-gray-900 font-medium shadow-sm">
              Monatlich
            </button>
            <button className="px-6 py-2 rounded-lg text-gray-600 font-medium">
              Jährlich
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.color} hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'scale-105' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Beliebtester Plan
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">€{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">zzgl. MwSt.</p>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Button
                className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200'
                }`}
              >
                {plan.popular ? (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    Jetzt starten
                  </>
                ) : (
                  'Plan wählen'
                )}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Haben Sie Fragen zu unseren Plänen?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Unser Sales-Team hilft Ihnen gerne dabei, den perfekten Plan für Ihr Unternehmen zu finden. 
              Vereinbaren Sie ein kostenloses Beratungsgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="px-8 py-4">
                Kostenlose Beratung
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                FAQ ansehen
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              Benötigen Sie eine maßgeschneiderte Lösung?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Für Unternehmen mit speziellen Anforderungen bieten wir individuelle Enterprise-Lösungen 
              mit benutzerdefinierten Features und Integrationen.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Enterprise-Lösung anfragen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

