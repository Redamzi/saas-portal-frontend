import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Wie funktioniert die automatisierte Lead-Generierung?",
      answer: "Voyanero nutzt fortschrittliche KI-Algorithmen und Web-Scraping-Technologien, um automatisch relevante Kontaktdaten aus verschiedenen Online-Quellen zu extrahieren. Die Plattform analysiert Ihre Zielgruppen-Kriterien und findet passende Leads, die dann automatisch in Ihr CRM-System übertragen werden."
    },
    {
      question: "Ist Voyanero DSGVO-konform?",
      answer: "Ja, absolut. Voyanero wurde von Grund auf mit Fokus auf Datenschutz und DSGVO-Compliance entwickelt. Alle Datenverarbeitungsprozesse entsprechen den europäischen Datenschutzbestimmungen. Wir verwenden nur öffentlich verfügbare Daten und bieten umfassende Opt-out-Mechanismen."
    },
    {
      question: "Welche CRM-Systeme werden unterstützt?",
      answer: "Voyanero integriert sich nahtlos mit allen gängigen CRM-Systemen wie Salesforce, HubSpot, Pipedrive, Zoho CRM, Microsoft Dynamics und vielen anderen. Zusätzlich bieten wir eine REST-API für benutzerdefinierte Integrationen."
    },
    {
      question: "Wie schnell kann ich mit Voyanero starten?",
      answer: "Sie können sofort loslegen! Nach der Registrierung dauert die Einrichtung nur wenige Minuten. Unser Onboarding-Prozess führt Sie durch die wichtigsten Schritte, und Sie können bereits am ersten Tag Ihre ersten Leads generieren."
    },
    {
      question: "Gibt es eine kostenlose Testphase?",
      answer: "Ja, alle Pläne beinhalten eine 14-tägige kostenlose Testphase. Sie können alle Features uneingeschränkt nutzen, ohne Kreditkarte anzugeben. Nach der Testphase können Sie entscheiden, welcher Plan am besten zu Ihnen passt."
    },
    {
      question: "Wie hoch ist die Qualität der generierten Leads?",
      answer: "Unsere KI-Algorithmen sind darauf optimiert, hochqualifizierte Leads zu identifizieren. Durchschnittlich erreichen unsere Kunden eine Conversion-Rate von 15-25%, was deutlich über dem Branchendurchschnitt liegt. Sie können außerdem spezifische Filter und Kriterien definieren."
    },
    {
      question: "Welchen Support bietet Voyanero?",
      answer: "Wir bieten umfassenden Support über verschiedene Kanäle: E-Mail-Support für alle Pläne, Prioritäts-Support für Professional-Kunden und 24/7 Premium-Support für Enterprise-Kunden. Zusätzlich haben wir eine ausführliche Wissensdatenbank und Video-Tutorials."
    },
    {
      question: "Kann ich meinen Plan jederzeit ändern?",
      answer: "Ja, Sie können Ihren Plan jederzeit upgraden oder downgraden. Änderungen werden sofort wirksam, und die Abrechnung erfolgt anteilig. Es gibt keine langfristigen Verträge oder Kündigungsfristen."
    },
    {
      question: "Wie sicher sind meine Daten bei Voyanero?",
      answer: "Datensicherheit hat für uns höchste Priorität. Wir verwenden Enterprise-Grade-Verschlüsselung, sichere Cloud-Infrastruktur und regelmäßige Sicherheitsaudits. Alle Daten werden in ISO 27001-zertifizierten Rechenzentren in Deutschland gespeichert."
    },
    {
      question: "Bietet Voyanero auch Schulungen an?",
      answer: "Ja, wir bieten verschiedene Schulungsoptionen: Online-Webinare, persönliche Schulungen für Enterprise-Kunden und eine umfangreiche Bibliothek mit Video-Tutorials und Best-Practice-Guides. Unser Customer Success Team unterstützt Sie beim Erreichen Ihrer Ziele."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="py-24 bg-gray-50">
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
            Häufig gestellte
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Fragen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hier finden Sie Antworten auf die wichtigsten Fragen zu Voyanero. 
            Falls Sie weitere Fragen haben, kontaktieren Sie gerne unser Support-Team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl p-12 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Haben Sie weitere Fragen?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Unser Support-Team steht Ihnen gerne zur Verfügung und beantwortet 
              alle Ihre Fragen zu Voyanero und unseren Services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Support kontaktieren
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Live-Demo buchen
              </button>
            </div>
          </div>
        </motion.div>

        {/* Help resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Wissensdatenbank</h4>
              <p className="text-gray-600">Umfassende Dokumentation und Anleitungen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Video-Tutorials</h4>
              <p className="text-gray-600">Schritt-für-Schritt Anleitungen</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community Forum</h4>
              <p className="text-gray-600">Austausch mit anderen Nutzern</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

