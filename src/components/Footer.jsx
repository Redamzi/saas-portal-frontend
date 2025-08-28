import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Preise', href: '#pricing' },
      { name: 'Integrationen', href: '#integrations' },
      { name: 'API', href: '#api' },
      { name: 'Sicherheit', href: '#security' }
    ],
    company: [
      { name: 'Über uns', href: '#about' },
      { name: 'Karriere', href: '#careers' },
      { name: 'Blog', href: '#blog' },
      { name: 'Presse', href: '#press' },
      { name: 'Partner', href: '#partners' }
    ],
    support: [
      { name: 'Hilfe-Center', href: '#help' },
      { name: 'Dokumentation', href: '#docs' },
      { name: 'API-Referenz', href: '#api-docs' },
      { name: 'Status', href: '#status' },
      { name: 'Kontakt', href: '#contact' }
    ],
    legal: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
      { name: 'AGB', href: '/agb' },
      { name: 'Cookie-Richtlinie', href: '/cookies' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold mb-4">
              Bleiben Sie auf dem Laufenden
            </h3>
            <p className="text-gray-400 mb-8 text-lg">
              Erhalten Sie die neuesten Updates, Tipps und Insights zur Lead-Generierung 
              direkt in Ihr Postfach.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                Abonnieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            
            <p className="text-gray-500 text-sm mt-4">
              Keine Spam-Mails. Jederzeit abbestellbar.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Voyanero</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Die führende Plattform für automatisierte Lead-Generierung. 
                Wir helfen Unternehmen dabei, ihre Vertriebsprozesse zu optimieren 
                und nachhaltiges Wachstum zu erzielen.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">hello@voyanero.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+49 (0) 30 12345678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Berlin, Deutschland</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Product links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Legal links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              © 2025 Voyanero. Alle Rechte vorbehalten.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Gemacht mit ❤️ in Deutschland</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400 text-sm">Alle Systeme betriebsbereit</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

