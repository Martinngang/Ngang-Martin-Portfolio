import React from 'react'
import { motion } from 'motion/react'
import { MapPin, Phone, Mail, Calendar } from 'lucide-react'

export function AboutSection() {
  const personalInfo = [
    // { icon: Calendar, label: "Born", value: "23/05/2003" },
    { icon: MapPin, label: "Location", value: "Yaounde, Cameroon", href: "https://www.google.com/maps/search/?api=1&query=Yaounde,Cameroon" },
    { icon: Phone, label: "Phone", value: "+237 692 919 277 | +237 672 404 928", href: "tel:+237692919277" },
    { icon: Mail, label: "Email", value: "martinngang10@gmail.com", href: "mailto:martinngang10@gmail.com" }
  ]

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "French", level: "Fluent" }
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Professional Summary</h3>
            <p className="text-white/80 leading-relaxed mb-6">
              Creative and versatile designer with 5+ years of experience in graphic design, 
              animations, video editing, UI/UX design, and web development. Passionate about 
              crafting immersive, visually stunning, and user-friendly experiences across 
              web and multimedia platforms.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">Languages</h4>
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/10"
                >
                  <span className="text-white">{lang.name}</span>
                  <span className="text-purple-400 font-medium">{lang.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-6">Personal Info</h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-purple-400 font-semibold">Higher Technician Diploma</h4>
                <p className="text-white/80">African Institute of Computer Science</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: "5+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "10+", label: "Skills Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="text-center backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-2xl p-6 border border-white/20 shadow-xl"
            >
              <motion.h4 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h4>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}