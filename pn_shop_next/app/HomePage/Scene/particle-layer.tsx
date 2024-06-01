'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const ParticleLayer = () => {
    const mountRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!mountRef.current) return

        // Canvas
        const canvas = document.createElement('canvas')
        canvas.className = 'webgl'
        mountRef.current.appendChild(canvas)

        // Scene
        const scene = new THREE.Scene()

        // Objects
        const geometry = new THREE.TorusGeometry(1.2, 0.2, 30, 100)
        const particlesGeometry = new THREE.BufferGeometry;
        const particleCount = 3000;

        const posArray = new Float32Array(particleCount * 3)

        for(let i=0; i< particleCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5
        }

        // Materials
        const material = new THREE.PointsMaterial({
            size: 0.005,
            color: '#8F00FF',
        })

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            transparent: true,
            color: '#006EAC',
        })

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Mesh
        const sphere = new THREE.Points(geometry, material)
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(sphere, particlesMesh)

        // Lights
        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.set(2, 3, 4)
        scene.add(pointLight)

        // Sizes
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        // Camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.z = 2
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(new THREE.Color('#0F1318'), 1 );

        // Mouse
        document.addEventListener('mousemove', animateParticles)

        let mouseX = 0
        let mouseY = 0

        function animateParticles(event: any){
            mouseY = event.clientY
            mouseX = event.clientX
        }

        // Animate
        const clock = new THREE.Clock()

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            // Update objects
            sphere.rotation.y = 0.2 * elapsedTime
            particlesMesh.rotation.y = -0.02 * elapsedTime
            particlesMesh.rotation.x = -0.02 * elapsedTime
            
            if(mouseX > 0) {
                particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00002)
                particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00002)
            }

            // Update Orbital Controls
            controls.update()

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            requestAnimationFrame(tick)
        }

        tick()

        const handleResize = () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }

        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize)
            mountRef.current?.removeChild(canvas)
            renderer.dispose()
        }
    }, [])

    return <div ref={mountRef}></div>
}