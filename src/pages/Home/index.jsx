import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Text, Main } from './styles'
import smoke from '../../assets/images/smoke.png'

export const Home = () => {
  const mount = useRef(null)

  useEffect(() => {
    let delta

    // Field of view
    const fov = 75
    // Aspect ratio
    const aspect = window.innerWidth / window.innerHeight
    const near = 1
    const far = 10000
    const particlesNumber = 130
    const clock = new THREE.Clock()

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)

    // Create scene
    const scene = new THREE.Scene()
    // Camera setup
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 1000
    scene.add(camera)

    const light = new THREE.DirectionalLight(0xffffff, 1)
    light.position.set(-1, 0, 1)
    scene.add(light)

    // Load texture
    const smokeTexture = new THREE.TextureLoader().load(smoke)
    const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x00dddd, opacity: 0.4, map: smokeTexture, transparent: true })
    const smokeGeo = new THREE.PlaneGeometry(300, 300)
    const smokeParticles = []

    // Add particles
    for (let p = 0; p < particlesNumber; p++) {
      const particle = new THREE.Mesh(smokeGeo, smokeMaterial)
      particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100)
      particle.rotation.z = Math.random() * 360
      scene.add(particle)
      smokeParticles.push(particle)
    }

    mount.current.appendChild(renderer.domElement)

    const evolveSmoke = () => {
      let sp = smokeParticles.length
      while (sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2)
      }
    }

    const animate = () => {
      delta = clock.getDelta()
      // eslint-disable-next-line no-undef
      requestAnimationFrame(animate)
      evolveSmoke()
      renderer.render(scene, camera)
    }

    animate()
  }, [])

  return (
    <Main ref={mount}>
      <Text>ESTEBAN LADINO</Text>
    </Main>
  )
}
