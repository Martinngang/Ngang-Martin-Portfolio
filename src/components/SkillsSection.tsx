import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { motion } from 'motion/react'
import { Mesh } from 'three'

interface Skill3DProps {
  skill: {
    name: string
    category: string
    color: string
    icon: string
  }
  position: [number, number, number]
}

function Skill3D({ skill, position }: Skill3DProps) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.3
      if (hovered) {
        meshRef.current.scale.setScalar(1.2)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={skill.color} 
            transparent 
            opacity={hovered ? 0.9 : 0.7}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </mesh>

      </group>
    </Float>
  )
}

export function SkillsSection() {
  const skills = {
    "Graphic Design": [
      { name: "Adobe Photoshop", icon: "PS", color: "#31A8FF" },
      { name: "Adobe Illustrator", icon: "AI", color: "#FF9A00" },
      { name: "InDesign", icon: "ID", color: "#FF3366" },
      { name: "Canva", icon: "CV", color: "#00C4CC" }
    ],
    "Animation": [
      { name: "After Effects", icon: "AE", color: "#9999FF" },
      { name: "Adobe Animate", icon: "AN", color: "#FF3366" },
      { name: "Powtoon", icon: "PT", color: "#FF6B6B" },
      { name: "Heygen", icon: "HG", color: "#4ECDC4" }
    ],
    "Video Editing": [
      { name: "Premiere Pro", icon: "PR", color: "#9999FF" },
      { name: "CapCut", icon: "CC", color: "#000000" }
    ],
    "UI/UX Design": [
      { name: "Figma", icon: "FG", color: "#F24E1E" },
      { name: "Adobe XD", icon: "XD", color: "#FF61F6" }
    ],
    "Web Development": [
      { name: "HTML", icon: "H5", color: "#E34F26" },
      { name: "CSS", icon: "C3", color: "#1572B6" },
      { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
      { name: "React", icon: "RC", color: "#61DAFB" },
      { name: "Node.js", icon: "ND", color: "#339933" },
      { name: "Next.js", icon: "NX", color: "#000000" }
    ],
    "Cloud & Database": [
      { name: "Firebase", icon: "FB", color: "#FFCA28" },
      { name: "Supabase", icon: "SB", color: "#3ECF8E" }
    ]
  }

  const allSkills = Object.entries(skills).flatMap(([category, skillList]) =>
    skillList.map(skill => ({ ...skill, category }))
  )

  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Mastering diverse technologies and tools to bring creative visions to life
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-96 mb-16 backdrop-blur-md bg-white/5 rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
        >
          <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
            
            {allSkills.slice(0, 12).map((skill, index) => {
              const angle = (index / 12) * Math.PI * 2
              const radius = 4
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              const z = Math.sin(index * 0.5) * 2
              
              return (
                <Skill3D
                  key={skill.name}
                  skill={skill}
                  position={[x, y, z]}
                />
              )
            })}
          </Canvas>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                    className="relative group cursor-pointer"
                  >
                    <div 
                      className="p-6 rounded-2xl border border-white/20 text-center transition-all duration-300 group-hover:border-white/40"
                      style={{ backgroundColor: `${skill.color}20` }}
                    >
                      <div 
                        className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <h4 className="text-white font-medium text-sm">{skill.name}</h4>
                      
                      {/* Glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-md bg-white/10 dark:bg-black/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          
          <div className="space-y-6">
            {[
              { category: "Design & Animation", level: 95 },
              { category: "Frontend Development", level: 90 },
              { category: "Backend Development", level: 85 },
              { category: "Mobile Development", level: 80 },
              { category: "Cloud Technologies", level: 75 }
            ].map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between text-white">
                  <span>{item.category}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}