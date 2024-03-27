'use client'

import React, { useLayoutEffect, useRef } from 'react'
import types from './officeTypes.d'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'
import { formatPublicPath } from '@/hook/frontend'

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3
export const glbPath = formatPublicPath('/scrollAnimation/wawaOffice.glb')

const Office = () => {
  const { nodes, materials } = useGLTF(
    glbPath
  ) as unknown as types.ConfigGLTFObj

  const groupRef = useRef<Group>(null)
  const libraryRef = useRef<Group>(null)
  const atticRef = useRef<Group>(null)
  const tl = useRef<gsap.core.Timeline | null>(null)

  const scroll = useScroll()

  useFrame(() => {
    tl.current!.seek(scroll.offset * tl.current!.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline()
    tl.current.to(
      groupRef.current!.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    )

    // OFFICE ROTATION
    tl.current.to(
      groupRef.current!.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    )
    tl.current.to(
      groupRef.current!.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    )

    // OFFICE MOVEMENT
    tl.current.to(groupRef.current!.position, { duration: 1, x: -1, z: 2 }, 0)
    tl.current.to(groupRef.current!.position, { duration: 1, x: 1, z: 2 }, 1)

    // LIBRARY FLOOR
    tl.current.from(libraryRef.current!.position, { duration: 0.5, x: -2 }, 0.5)
    tl.current.from(
      libraryRef.current!.rotation,
      { duration: 0.5, y: -Math.PI / 2 },
      0
    )

    // ATTIC FLOOR
    tl.current.from(atticRef.current!.position, { duration: 1.5, y: 2 }, 0)
    tl.current.from(
      atticRef.current!.rotation,
      { duration: 0.5, y: Math.PI / 2 },
      1
    )
    tl.current.from(atticRef.current!.position, { duration: 0.5, z: -2 }, 1.5)
  }, [])

  return (
    <group
      dispose={null}
      ref={groupRef}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh
            geometry={nodes['02_library'].geometry}
            material={materials['02']}
          />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes['03_attic'].geometry}
            material={materials['03']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(glbPath)

export default Office
