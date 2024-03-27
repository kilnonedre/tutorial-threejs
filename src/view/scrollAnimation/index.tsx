'use client'

import React from 'react'
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Office from './component/office'
import Overlay from './component/overlay'
import { Canvas } from '@react-three/fiber'

const ScrollAnimation = () => {
  return (
    <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </Canvas>
  )
}

export default ScrollAnimation
