import { motion } from 'framer-motion'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Impressum</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Voyanero</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Introduction */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Impressum nach § 5 TMG
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Angaben gemäß § 5 TMG und Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </p>
          </div>

          {/* Company Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Company Details */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </div>
                Firmeninformationen
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Firmenname:</h4>
                  <p className="text-gray-600">[Ihr Firmenname] GmbH</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Geschäftsführer:</h4>
                  <p className="text-gray-600">[Ihr Name]</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Anschrift:</h4>
                  <p className="text-gray-600">
                    [Straße und Hausnummer]<br />
                    [PLZ] [Stadt]<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-green-600" />
                </div>
                Kontaktdaten
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon:</h4>
                    <p className="text-gray-600">+49 (0) [Ihre Telefonnummer]</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-Mail:</h4>
                    <p className="text-gray-600">info@voyanero.com</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Website:</h4>
                  <p className="text-gray-600">https://portal.voyanero.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Rechtliche Angaben
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Handelsregister:</h4>
                <p className="text-gray-600">
                  Amtsgericht [Ort]<br />
                  HRB [Nummer]
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Umsatzsteuer-ID:</h4>
                <p className="text-gray-600">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE [Ihre USt-IdNr.]
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Wirtschafts-ID:</h4>
                <p className="text-gray-600">DE [Ihre Wirtschafts-ID]</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Aufsichtsbehörde:</h4>
                <p className="text-gray-600">[Zuständige Aufsichtsbehörde]</p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Haftungsausschluss
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Haftung für Inhalte</h4>
                <p className="text-gray-600 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Haftung für Links</h4>
                <p className="text-gray-600 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Urheberrecht</h4>
                <p className="text-gray-600 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>

          {/* EU Dispute Resolution */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              EU-Streitschlichtung
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:text-blue-700 ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
              an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          {/* Last Updated */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default Impressum

