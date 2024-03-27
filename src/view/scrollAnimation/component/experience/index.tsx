'use client'

import React from 'react'
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Office from './component/office'
import Overlay from './component/overlay'

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  )
}

export default Experience
