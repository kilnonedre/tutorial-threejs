'use client'

import React from 'react'
import Experience from './component/experience'
import { Canvas } from '@react-three/fiber'

const ScrollAnimation = () => {
  return (
    <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
      <Experience />
    </Canvas>
  )
}

export default ScrollAnimation
