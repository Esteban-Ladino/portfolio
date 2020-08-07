import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

import { Main } from './styles'
import { Card } from '../../components/Card'
import pokeguiaImg from '../../assets/images/pokeguia.png'
import kumpelImg from '../../assets/images/kumpelMockup.png'
import countriesImg from '../../assets/images/countries.png'
import easybankImg from '../../assets/images/easybank.png'
import manageImg from '../../assets/images/managelanding.png'
import socialMediaImg from '../../assets/images/socialmedia.png'
import exchange from '../../assets/images/exchange.png'
import smoke from '../../assets/images/smoke.png'

export const Work = () => {
  const mount = useRef(null)

  useEffect(() => {
    let delta
    // Field of view
    const fov = 75
    // Aspect ratio
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    width = width < 320 ? 320 : width
    height = height < 400 ? 400 : height
    const aspect = width / height
    const near = 1
    const far = 10000
    const particlesNumber = 70
    const clock = new THREE.Clock()

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)

    // Create scene
    const scene = new THREE.Scene()
    // Camera setup
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 1000
    scene.add(camera)

    const light = new THREE.DirectionalLight(0xffffff, 0.6)
    light.position.set(-1, 0, 1)
    scene.add(light)

    // Load texture
    const smokeTexture = new THREE.TextureLoader().load(smoke)
    const smokeMaterial = new THREE.MeshLambertMaterial({ color: 0x00dddd, opacity: 0.5, map: smokeTexture, transparent: true })
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

    const handleResize = () => {
      let width = document.documentElement.clientWidth
      let height = document.documentElement.clientHeight
      width = width < 320 ? 320 : width
      height = height < 400 ? 400 : height

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    const evolveSmoke = () => {
      let sp = smokeParticles.length
      while (sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2)
      }
    }

    window.addEventListener('resize', handleResize)

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
      <h2>MY WORK</h2>
      <ul>
        <li><Card title='kumpel' description='Kumpel is a web application to search and rent rooms. This project consists of generating a platform where the user can open a request or offer hosting.' image={kumpelImg} link='https://www.youtube.com/watch?v=-iHEr1Ds1SE&list=PLk4Q1VrB4bbc24Na7vyakwVzEUK4rzLYp&index=2' /></li>
        <li><Card title='pokeguia' description='Pokedex is a site for consulting information on interactive Pokémon with hundreds of Pokémon to filter and explore. This is a project of the Platzi Master program' image={pokeguiaImg} link='https://www.youtube.com/watch?v=8sy8N-TmzPM&list=PLk4Q1VrB4bbc24Na7vyakwVzEUK4rzLYp&index=2&t=3s' /></li>
        <li><Card title='countries' description='This is the REST Countries API with color theme switcher coding challenge by Frontend Mentor Created using ReactJS. To see more visit my GitHub repository' image={countriesImg} link='https://loving-dubinsky-9b7d47.netlify.app/' /></li>
        <li><Card title='easybank' description='This the the Easybank landing page coding challenge by Fontend Mentor. Created using ReactJS. To see more visit my GitHub repository' image={easybankImg} link='https://esteban-ladino.github.io/easybank-landing-page/' /></li>
        <li><Card title='Manage page' description='This is the Manage landing page coding challenge by Frontend Mentor. Created using ReactJS. To see more visit my GitHub repository' image={manageImg} link='https://relaxed-borg-a653d7.netlify.app/' /></li>
        <li><Card title='social media' description='This is the Social Media Dashboard coding challenge by Frontend Mentor. Created using ReactJS. To see more visit my GitHub repository' image={socialMediaImg} link='https://esteban-ladino.github.io/social-media-dashboard/' /></li>
        <li><Card title='exchange page' description='This is a platform that will serve you to visualize all cryptocurrencies in real time, it was created at the Vue.js basic course from Platzi. Created using VueJS' image={exchange} link='https://esteban-exchange-project.netlify.app/' /></li>
      </ul>
    </Main>
  )
}
