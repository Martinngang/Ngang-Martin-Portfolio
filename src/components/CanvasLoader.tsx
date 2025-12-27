import { Html, useProgress } from '@react-three/drei'

export function CanvasLoader() {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-black/20 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl">
        <div className="relative w-20 h-20">
          {/* Background circle */}
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          {/* Spinning gradient circle */}
          <div className="absolute inset-0 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          {/* Inner spinning circle (reverse) */}
          <div className="absolute inset-3 border-4 border-purple-500 border-b-transparent rounded-full animate-spin [animation-direction:reverse]"></div>
        </div>
        
        <p className="mt-6 text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          {progress.toFixed(0)}%
        </p>
        <p className="text-xs text-white/50 mt-1">Loading 3D Assets...</p>
      </div>
    </Html>
  )
}