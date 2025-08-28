import { motion } from 'framer-motion'
import { ArrowLeft, FileText, AlertTriangle, CreditCard, Shield, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Terms = () => {
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
              <h1 className="text-2xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h1>
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
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h2>
                <p className="text-gray-600">Für die Nutzung des Voyanero SaaS-Portals</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) regeln die Nutzung des SaaS-Portals von Voyanero. 
              Mit der Registrierung und Nutzung unserer Dienste erklären Sie sich mit diesen Bedingungen einverstanden.
            </p>
          </div>

          {/* Scope */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <Users className="h-4 w-4 text-green-600" />
              </div>
              1. Geltungsbereich
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der [Ihr Firmenname] GmbH 
                (nachfolgend "Anbieter" oder "wir") und dem Nutzer (nachfolgend "Kunde" oder "Sie") über die 
                Bereitstellung und Nutzung des SaaS-Portals "Voyanero".
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Wichtiger Hinweis:</h4>
                <p className="text-gray-600">
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden 
                  werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <Shield className="h-4 w-4 text-purple-600" />
              </div>
              2. Leistungsumfang
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2.1 SaaS-Dienste</h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Der Anbieter stellt dem Kunden eine webbasierte Software-Anwendung (Software as a Service) 
                  zur Verfügung, die folgende Funktionen umfasst:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Lead-Management</h5>
                    <p className="text-gray-600 text-sm">Verwaltung und Bearbeitung von Kundenanfragen</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Automatisierung</h5>
                    <p className="text-gray-600 text-sm">Workflow-Automatisierung und Integration</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Analytics</h5>
                    <p className="text-gray-600 text-sm">Berichte und Datenanalyse</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">API-Zugang</h5>
                    <p className="text-gray-600 text-sm">Programmatischer Zugriff auf Daten</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2.2 Verfügbarkeit</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Anbieter bemüht sich um eine Verfügbarkeit der Dienste von 99,5% im Jahresmittel. 
                  Ausgenommen sind geplante Wartungsarbeiten, die in der Regel außerhalb der Geschäftszeiten 
                  durchgeführt werden.
                </p>
              </div>
            </div>
          </div>

          {/* Registration */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">3. Registrierung und Vertragsschluss</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3.1 Registrierung</h4>
                <p className="text-gray-600 leading-relaxed">
                  Die Nutzung der Dienste erfordert eine Registrierung. Der Kunde verpflichtet sich, 
                  wahrheitsgemäße und vollständige Angaben zu machen und diese aktuell zu halten.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3.2 Vertragsschluss</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Vertrag kommt durch die Bestätigung der Registrierung durch den Anbieter zustande. 
                  Der Anbieter behält sich vor, Registrierungen ohne Angabe von Gründen abzulehnen.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                <CreditCard className="h-4 w-4 text-yellow-600" />
              </div>
              4. Preise und Zahlungsbedingungen
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">4.1 Preise</h4>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Die aktuellen Preise sind auf der Website einsehbar. Alle Preise verstehen sich zzgl. 
                  der gesetzlichen Mehrwertsteuer.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Aktuelle Preispläne:</h5>
                  <ul className="text-gray-600 space-y-1">
                    <li>• <strong>Starter:</strong> 29€/Monat - Bis zu 1.000 Leads</li>
                    <li>• <strong>Professional:</strong> 79€/Monat - Bis zu 5.000 Leads</li>
                    <li>• <strong>Enterprise:</strong> 199€/Monat - Unbegrenzte Leads</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">4.2 Zahlungsbedingungen</h4>
                <p className="text-gray-600 leading-relaxed">
                  Die Abrechnung erfolgt monatlich oder jährlich im Voraus, je nach gewähltem Tarif. 
                  Die Zahlung erfolgt per SEPA-Lastschrift oder Kreditkarte.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">4.3 Zahlungsverzug</h4>
                <p className="text-gray-600 leading-relaxed">
                  Bei Zahlungsverzug können wir nach Mahnung den Zugang zu den Diensten sperren. 
                  Verzugszinsen werden in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
                </p>
              </div>
            </div>
          </div>

          {/* Customer Obligations */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              5. Pflichten des Kunden
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">5.1 Ordnungsgemäße Nutzung</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Kunde verpflichtet sich, die Dienste nur für rechtmäßige Zwecke zu nutzen und 
                  keine Inhalte zu übertragen, die gegen geltendes Recht verstoßen.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">5.2 Datenschutz</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Kunde ist für die Einhaltung der Datenschutzbestimmungen bei der Verarbeitung 
                  personenbezogener Daten über unsere Plattform verantwortlich.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">5.3 Zugangsdaten</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Kunde ist verpflichtet, seine Zugangsdaten geheim zu halten und uns unverzüglich 
                  über jeden Missbrauch zu informieren.
                </p>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                <Clock className="h-4 w-4 text-orange-600" />
              </div>
              6. Laufzeit und Kündigung
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">6.1 Laufzeit</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Vertrag wird auf unbestimmte Zeit geschlossen. Die Mindestlaufzeit beträgt einen Monat.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">6.2 Ordentliche Kündigung</h4>
                <p className="text-gray-600 leading-relaxed">
                  Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Monatsende kündigen. 
                  Die Kündigung muss schriftlich oder per E-Mail erfolgen.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">6.3 Außerordentliche Kündigung</h4>
                <p className="text-gray-600 leading-relaxed">
                  Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt. 
                  Ein wichtiger Grund liegt insbesondere bei erheblichen Vertragsverletzungen vor.
                </p>
              </div>
            </div>
          </div>

          {/* Liability */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">7. Haftung</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">7.1 Haftungsausschluss</h4>
                <p className="text-gray-600 leading-relaxed">
                  Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                  Für leichte Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">7.2 Datenverlust</h4>
                <p className="text-gray-600 leading-relaxed">
                  Der Anbieter haftet nicht für Datenverluste, soweit diese durch angemessene Datensicherungsmaßnahmen 
                  des Kunden vermeidbar gewesen wären.
                </p>
              </div>
            </div>
          </div>

          {/* Final Provisions */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">8. Schlussbestimmungen</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">8.1 Anwendbares Recht</h4>
                <p className="text-gray-600 leading-relaxed">
                  Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">8.2 Gerichtsstand</h4>
                <p className="text-gray-600 leading-relaxed">
                  Gerichtsstand für alle Streitigkeiten ist [Ihr Gerichtsstand], sofern der Kunde Kaufmann, 
                  juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">8.3 Salvatorische Klausel</h4>
                <p className="text-gray-600 leading-relaxed">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der 
                  übrigen Bestimmungen unberührt.
                </p>
              </div>
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

export default Terms

