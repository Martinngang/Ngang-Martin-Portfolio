import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import { Mesh, Vector3 } from 'three'

export function Cursor3D() {
  const sphereRef = useRef<Mesh>(null)
  const mousePosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (typeof window !== 'undefined') {
        mousePosition.current = {
          x: (event.clientX / window.innerWidth) * 2 - 1,
          y: -(event.clientY / window.innerHeight) * 2 + 1
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state, delta) => {
    if (sphereRef.current) {
      // Smooth follow mouse movement
      const targetPosition = new Vector3(
        mousePosition.current.x * 3,
        mousePosition.current.y * 3,
        0
      )
      
      sphereRef.current.position.lerp(targetPosition, delta * 2)
      
      // Gentle rotation
      sphereRef.current.rotation.x += delta * 0.5
      sphereRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Sphere ref={sphereRef} args={[0.1, 16, 16]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#06b6d4"
        transparent
        opacity={0.6}
        emissive="#06b6d4"
        emissiveIntensity={0.2}
      />
    </Sphere>
  )
}