import React from 'react'
import { motion } from 'motion/react'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

export function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Developer",
      company: "The Technique Coach",
      period: "Present",
      location: "Remote",
      type: "Full-time",
      description: "Leading the development of an innovative coaching platform, architecting scalable solutions and implementing modern web technologies to enhance user experience.",
      technologies: ["React", "Node.js", "Next.js", "Supabase"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Video Editor & Animator",
      company: "Yakili",
      period: "2023 - Present",
      location: "Remote",
      type: "Freelance",
      description: "Creating engaging video content and animations for digital marketing campaigns, utilizing advanced editing techniques and motion graphics.",
      technologies: ["Adobe Premiere Pro", "After Effects", "CapCut"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Graphic Designer",
      company: "Onefmedia - Global Gigz",
      period: "Since 2023",
      location: "Remote",
      type: "Freelance",
      description: "Designing compelling visual content for various clients, including brand identity, marketing materials, and digital assets.",
      technologies: ["Adobe Photoshop", "Illustrator", "InDesign", "Figma"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "UI/UX Designer",
      company: "Freelance",
      period: "Present",
      location: "Remote",
      type: "Freelance",
      description: "Crafting user-centered design solutions for web and mobile applications, focusing on intuitive interfaces and seamless user experiences.",
      technologies: ["Figma", "Adobe XD", "Prototype Tools"],
      color: "from-orange-500 to-red-600"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="experience" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A journey of continuous growth and innovation across multiple disciplines
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-30"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center shadow-lg`}>
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                        <motion.div
                          whileHover={{ rotate: 45 }}
                          className="p-2 bg-white/10 rounded-lg cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4 text-cyan-400" />
                        </motion.div>
                      </div>
                      
                      <h4 className={`text-xl bg-gradient-to-r ${experience.color} bg-clip-text text-transparent font-semibold mb-3`}>
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <span className={`px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 rounded-full text-xs`}>
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="text-cyan-400 font-medium">Technologies & Tools</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white/90 text-xs hover:bg-white/20 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Let's collaborate and bring your creative vision to life with cutting-edge design and development solutions.
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}