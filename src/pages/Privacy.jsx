import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Privacy = () => {
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
              <h1 className="text-2xl font-bold text-gray-900">Datenschutzerklärung</h1>
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
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Datenschutzerklärung</h2>
                <p className="text-gray-600">Nach DSGVO (EU-Datenschutz-Grundverordnung)</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Wir freuen uns über Ihr Interesse an unserem SaaS-Portal. Der Schutz Ihrer Privatsphäre ist für uns 
              sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
          </div>

          {/* Data Controller */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              1. Verantwortlicher
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                [Ihr Firmenname] GmbH<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Stadt]<br />
                Deutschland<br /><br />
                
                Telefon: +49 (0) [Ihre Telefonnummer]<br />
                E-Mail: info@voyanero.com<br />
                Website: https://portal.voyanero.com
              </p>
            </div>
          </div>

          {/* Data Collection */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <Database className="h-4 w-4 text-purple-600" />
              </div>
              2. Erhebung und Speicherung personenbezogener Daten
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2.1 Beim Besuch der Website</h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser 
                  automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden 
                  temporär in einem sog. Logfile gespeichert.
                </p>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Folgende Informationen werden erfasst:</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• IP-Adresse des anfragenden Rechners</li>
                    <li>• Datum und Uhrzeit des Zugriffs</li>
                    <li>• Name und URL der abgerufenen Datei</li>
                    <li>• Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                    <li>• Verwendeter Browser und ggf. das Betriebssystem</li>
                    <li>• Name Ihres Access-Providers</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2.2 Bei der Registrierung</h4>
                <p className="text-gray-600 leading-relaxed">
                  Für die Nutzung unseres SaaS-Portals ist eine Registrierung erforderlich. Dabei erheben wir 
                  folgende Daten: Name, E-Mail-Adresse, Unternehmen (optional), Telefonnummer (optional).
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2.3 Bei der Nutzung des Services</h4>
                <p className="text-gray-600 leading-relaxed">
                  Während der Nutzung unseres SaaS-Portals verarbeiten wir die von Ihnen eingegebenen Daten 
                  zur Erbringung der vereinbarten Leistungen.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Basis */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <Lock className="h-4 w-4 text-orange-600" />
              </div>
              3. Rechtsgrundlage für die Datenverarbeitung
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Art. 6 Abs. 1 lit. a DSGVO</h4>
                <p className="text-gray-600">Einwilligung für Newsletter und Marketing</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Art. 6 Abs. 1 lit. b DSGVO</h4>
                <p className="text-gray-600">Vertragserfüllung und vorvertragliche Maßnahmen</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">Art. 6 Abs. 1 lit. f DSGVO</h4>
                <p className="text-gray-600">Berechtigte Interessen (Website-Sicherheit, Analyse)</p>
              </div>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <Globe className="h-4 w-4 text-red-600" />
              </div>
              4. Weitergabe von Daten
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten 
              Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <p className="text-gray-600">eine gesetzliche Verpflichtung zur Weitergabe besteht</p>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <Eye className="h-4 w-4 text-indigo-600" />
              </div>
              5. Ihre Rechte
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recht auf Auskunft</h4>
                <p className="text-gray-600 text-sm">Art. 15 DSGVO</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recht auf Berichtigung</h4>
                <p className="text-gray-600 text-sm">Art. 16 DSGVO</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recht auf Löschung</h4>
                <p className="text-gray-600 text-sm">Art. 17 DSGVO</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recht auf Einschränkung</h4>
                <p className="text-gray-600 text-sm">Art. 18 DSGVO</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recht auf Datenübertragbarkeit</h4>
                <p className="text-gray-600 text-sm">Art. 20 DSGVO</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Recht auf Widerspruch</h4>
                <p className="text-gray-600 text-sm">Art. 21 DSGVO</p>
              </div>
            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">6. Cookies</h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser 
              automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite besuchen.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Cookie-Kategorien:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• <strong>Technisch notwendige Cookies:</strong> Für die Grundfunktionen der Website</li>
                <li>• <strong>Analyse-Cookies:</strong> Zur Verbesserung unserer Website (nur mit Einwilligung)</li>
                <li>• <strong>Marketing-Cookies:</strong> Für personalisierte Werbung (nur mit Einwilligung)</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">7. Datensicherheit</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in 
              Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. 
              Zusätzlich sichern wir unsere Website und sonstigen Systeme durch technische und organisatorische 
              Maßnahmen gegen Verlust, Zerstörung, Zugriff, Veränderung oder Verbreitung Ihrer Daten durch 
              unbefugte Personen.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">8. Kontakt</h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
              Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                E-Mail: datenschutz@voyanero.com<br />
                Telefon: +49 (0) [Ihre Telefonnummer]
              </p>
            </div>
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

export default Privacy

