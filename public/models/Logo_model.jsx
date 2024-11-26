/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 logo_model.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model(props) {
  const { nodes, materials } = useGLTF('models/logo_model.gltf')
  const groupRef = useRef()

  useFrame((state, delta) => {
    groupRef.current.rotation.x += delta * 0.6
    groupRef.current.rotation.y -= delta * 0.5
  })

  const material = new THREE.MeshStandardMaterial({
    metalness: 1,
    roughness: 0.1,
    color: '#ffffff'
  })

  return (
    <>
      <Environment files="models/brown_photostudio_02_1k.hdr" />
      <group ref={groupRef} {...props} dispose={null}>
        <mesh geometry={nodes.Curve004.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} scale={-35.102} />
      </group>
    </>
  )
}

useGLTF.preload('models/logo_model.gltf')
