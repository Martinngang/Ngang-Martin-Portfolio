import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ExternalLink, Github, Play, Eye } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = ['All', 'Web Development', 'UI/UX Design', 'Animation', 'Graphic Design']

  const projects = [
    {
      id: 1,
      title: "The Technique Coach Academy",
      category: "Mobile Development",
      description: "A comprehensive coaching platform built with modern technologies, featuring real-time collaboration tools and interactive learning modules.",
      longDescription: "Leading the development of an innovative coaching platform that revolutionizes how coaches and clients interact. The platform features real-time video calls, progress tracking, personalized workout plans, and a comprehensive dashboard for both coaches and trainees.",
      technologies: ["React Native", "Node.js", "Expo", "Supabase", "WebRTC"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 2,
      title: "Yakili Video Content",
      category: "Animation",
      description: "Creative video content and animations for digital marketing campaigns, showcasing advanced editing and motion graphics skills.",
      longDescription: "Created engaging video content series for Yakili's digital marketing campaigns. Utilized advanced editing techniques, motion graphics, and storytelling to increase audience engagement by 300%.",
      technologies: ["Adobe Premiere Pro", "After Effects", "CapCut", "Motion Graphics"],
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
      liveUrl: "#",
      featured: true,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Graphic Design",
      description: "Complete brand identity packages for various clients, including logos, color schemes, and marketing materials.",
      longDescription: "Developed comprehensive brand identity packages for multiple clients across different industries. Each project included logo design, color palette development, typography selection, and brand guidelines.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Brand Strategy"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      featured: false,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      category: "UI/UX Design",
      description: "Modern dashboard interface for e-commerce platforms with intuitive navigation and data visualization.",
      longDescription: "Designed a comprehensive dashboard interface for e-commerce platforms featuring advanced analytics, inventory management, and customer insights. The design focuses on usability and efficient workflow.",
      technologies: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      liveUrl: "#",
      featured: false,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Mobile App Interface",
      category: "UI/UX Design", 
      description: "Sleek mobile application interface design with focus on user experience and modern aesthetics.",
      longDescription: "Created a modern mobile application interface with emphasis on user experience, accessibility, and visual appeal. The design system includes components, icons, and interaction patterns.",
      technologies: ["Figma", "Mobile Design", "Prototyping", "Design Systems"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      featured: false,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Development",
      description: "Responsive corporate website with modern design and optimized performance.",
      longDescription: "Developed a fully responsive corporate website featuring modern design principles, optimized performance, and comprehensive content management system.",
      technologies: ["React", "Next.js", "Tailwind CSS", "CMS"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "from-teal-500 to-blue-600"
    }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A showcase of my creative work across design, development, and multimedia
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-lg'
                  : 'border-white/30 text-white/80 hover:border-white/50 hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
                viewport={{ once: true }}
                className={`group cursor-pointer ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                        project.featured ? 'h-64 md:h-80' : 'h-48'
                      }`}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                        <div className="flex space-x-2">
                          {project.liveUrl && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.button>
                          )}
                          {project.githubUrl && (
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                            >
                              <Github className="w-4 h-4" />
                            </motion.button>
                          )}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className={`text-xs px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 rounded-full`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white/80 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 border border-white/20 rounded text-white/80 text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl border border-white/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject)
                  if (!project) return null

                  return (
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                          <span className={`text-sm px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-30 rounded-full`}>
                            {project.category}
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-2xl mb-6"
                      />

                      <p className="text-white/80 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-cyan-400">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white/90"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 mt-8">
                        {project.liveUrl && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.button>
                        )}
                        {project.githubUrl && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 px-6 py-3 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Code</span>
                          </motion.button>
                        )}
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all duration-300"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}