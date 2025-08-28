import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8"
          >
            🚀 Automatisierte Lead-Generierung der nächsten Generation
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Verwandeln Sie
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Daten </span>
            in qualifizierte Leads
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Voyanero automatisiert Ihre Lead-Generierung mit KI-gestütztem Web-Scraping, 
            intelligenter E-Mail-Automatisierung und nahtloser CRM-Integration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Kostenlos starten
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 group"
            >
              <Play className="mr-2 h-5 w-5" />
              Demo ansehen
            </Button>
          </motion.div>

          {/* Video container placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg font-medium">Produkt-Demo Video</p>
                  <p className="text-gray-500 text-sm mt-2">Sehen Sie Voyanero in Aktion</p>
                </div>
              </div>
              {/* Video overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 text-sm mb-6">Vertraut von über 1.000+ Unternehmen weltweit</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
              <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

