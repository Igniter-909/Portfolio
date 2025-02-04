"use client"

import type React from "react"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"
import type * as THREE from "three"

const StarField = () => {
  const ref = useRef<THREE.Points>(null)
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 })

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const StarryBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
    </div>
  )
}

export default StarryBackground

