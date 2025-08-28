import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mueller",
      role: "Marketing Director",
      company: "TechStart GmbH",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Voyanero hat unsere Lead-Generierung revolutioniert. Wir generieren jetzt 300% mehr qualifizierte Leads bei 50% weniger Aufwand. Die Automatisierung ist einfach fantastisch!"
    },
    {
      name: "Michael Weber",
      role: "Geschäftsführer",
      company: "Digital Solutions AG",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Die KI-gestützte Zielgruppen-Analyse von Voyanero ist beeindruckend. Unsere Conversion-Rate hat sich verdoppelt, seit wir die Plattform nutzen."
    },
    {
      name: "Lisa Schmidt",
      role: "Sales Manager",
      company: "Growth Marketing Pro",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Endlich eine Lösung, die wirklich funktioniert! Die nahtlose Integration in unser CRM und die automatisierten E-Mail-Kampagnen sparen uns täglich Stunden."
    },
    {
      name: "Thomas Bauer",
      role: "Head of Sales",
      company: "Innovation Hub",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Voyanero ist ein Game-Changer. Die Qualität der generierten Leads ist außergewöhnlich und der ROI hat unsere Erwartungen bei weitem übertroffen."
    },
    {
      name: "Anna Richter",
      role: "Marketing Managerin",
      company: "StartUp Accelerator",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Die 24/7 Automatisierung bedeutet, dass wir auch nachts und am Wochenende Leads generieren. Unser Pipeline ist konstant gefüllt mit hochwertigen Prospects."
    },
    {
      name: "David Klein",
      role: "Vertriebsleiter",
      company: "B2B Solutions",
      image: "/api/placeholder/64/64",
      rating: 5,
      text: "Die detaillierten Analytics und Berichte helfen uns, unsere Strategie kontinuierlich zu optimieren. Voyanero ist unverzichtbar für unser Wachstum geworden."
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
            Was unsere Kunden über
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Voyanero </span>
            sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Über 1.000+ Unternehmen vertrauen bereits auf Voyanero für ihre Lead-Generierung. 
            Lesen Sie, wie wir ihnen geholfen haben, ihr Wachstum zu beschleunigen.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
                <div className="text-blue-100">Zufriedene Kunden</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">2.5M+</div>
                <div className="text-blue-100">Generierte Leads</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">300%</div>
                <div className="text-blue-100">Durchschnittliche ROI-Steigerung</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Automatisierte Betreuung</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video testimonial placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Sehen Sie, wie Voyanero Unternehmen transformiert
            </h3>
            <div className="relative max-w-3xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg font-medium">Kunden-Erfolgsgeschichten</p>
                  <p className="text-gray-500 text-sm mt-2">3:45 Min</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

