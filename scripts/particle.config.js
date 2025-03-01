/**
 * Particle Configuration for Ādhāra AI Labs
 * This file configures the particle system for the website background
 */

class ParticleSystem {
    constructor(options = {}) {
      this.options = Object.assign(
        {
          container: "#particles-container",
          count: 100,
          color: "#6E56CF",
          minSize: 2,
          maxSize: 5,
          speed: 1,
          connectParticles: true,
          connectDistance: 150,
          responsive: [
            {
              breakpoint: 768,
              options: {
                count: 50,
                connectDistance: 100,
              },
            },
            {
              breakpoint: 480,
              options: {
                count: 30,
                connectDistance: 80,
              },
            },
          ],
        },
        options,
      )
  
      this.container = document.querySelector(this.options.container)
      this.canvas = document.createElement("canvas")
      this.context = this.canvas.getContext("2d")
      this.particles = []
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.devicePixelRatio = window.devicePixelRatio || 1
  
      this.init()
    }
  
    init() {
      // Apply responsive options
      this.applyResponsiveOptions()
  
      // Set up canvas
      this.container.appendChild(this.canvas)
      this.canvas.width = this.width * this.devicePixelRatio
      this.canvas.height = this.height * this.devicePixelRatio
      this.canvas.style.width = `${this.width}px`
      this.canvas.style.height = `${this.height}px`
      this.context.scale(this.devicePixelRatio, this.devicePixelRatio)
  
      // Create particles
      this.createParticles()
  
      // Start animation
      this.animate()
  
      // Handle window resize
      window.addEventListener("resize", this.resize.bind(this))
    }
  
    applyResponsiveOptions() {
      if (!this.options.responsive) return
  
      const currentWidth = window.innerWidth
  
      this.options.responsive.forEach((config) => {
        if (currentWidth <= config.breakpoint) {
          this.options = Object.assign(this.options, config.options)
        }
      })
    }
  
    createParticles() {
      this.particles = []
  
      for (let i = 0; i < this.options.count; i++) {
        const particle = {
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          size: Math.random() * (this.options.maxSize - this.options.minSize) + this.options.minSize,
          color: this.getRandomColor(),
          speedX: (Math.random() - 0.5) * this.options.speed,
          speedY: (Math.random() - 0.5) * this.options.speed,
          opacity: Math.random() * 0.5 + 0.3,
        }
  
        this.particles.push(particle)
      }
    }
  
    getRandomColor() {
      // Choose between primary colors
      const colors = [
        "#6E56CF", // Primary
        "#9E8CFC", // Primary Light
        "#10B981", // Secondary
      ]
  
      return colors[Math.floor(Math.random() * colors.length)]
    }
  
    animate() {
      this.context.clearRect(0, 0, this.width, this.height)
  
      // Update and draw particles
      this.particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
  
        // Bounce off edges
        if (particle.x < 0 || particle.x > this.width) {
          particle.speedX *= -1
        }
  
        if (particle.y < 0 || particle.y > this.height) {
          particle.speedY *= -1
        }
  
        // Draw particle
        this.context.beginPath()
        this.context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        this.context.fillStyle = this.hexToRgba(particle.color, particle.opacity)
        this.context.fill()
  
        // Connect particles
        if (this.options.connectParticles) {
          this.connectParticles(particle)
        }
      })
  
      requestAnimationFrame(this.animate.bind(this))
    }
  
    connectParticles(particle) {
      for (let i = 0; i < this.particles.length; i++) {
        const otherParticle = this.particles[i]
  
        if (particle === otherParticle) continue
  
        const distance = this.getDistance(particle, otherParticle)
  
        if (distance > this.options.connectDistance) continue
  
        // Calculate opacity based on distance
        const opacity = 1 - distance / this.options.connectDistance
  
        // Draw connection
        this.context.beginPath()
        this.context.moveTo(particle.x, particle.y)
        this.context.lineTo(otherParticle.x, otherParticle.y)
        this.context.strokeStyle = this.hexToRgba("#6E56CF", opacity * 0.2)
        this.context.lineWidth = 1
        this.context.stroke()
      }
    }
  
    getDistance(particle1, particle2) {
      const dx = particle1.x - particle2.x
      const dy = particle1.y - particle2.y
      return Math.sqrt(dx * dx + dy * dy)
    }
  
    hexToRgba(hex, opacity) {
      hex = hex.replace("#", "")
      const r = Number.parseInt(hex.substring(0, 2), 16)
      const g = Number.parseInt(hex.substring(2, 4), 16)
      const b = Number.parseInt(hex.substring(4, 6), 16)
  
      return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
  
    resize() {
      this.width = window.innerWidth
      this.height = window.innerHeight
  
      this.canvas.width = this.width * this.devicePixelRatio
      this.canvas.height = this.height * this.devicePixelRatio
      this.canvas.style.width = `${this.width}px`
      this.canvas.style.height = `${this.height}px`
      this.context.scale(this.devicePixelRatio, this.devicePixelRatio)
  
      // Apply responsive options
      this.applyResponsiveOptions()
  
      // Recreate particles
      this.createParticles()
    }
  }
  
  // Initialize particle system when the DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    const particleSystem = new ParticleSystem()
  
    // Create neural network visualization
    const neuralNetworkContainer = document.createElement("div")
    neuralNetworkContainer.className = "neural-network-container"
    document.querySelector("#particles-container").appendChild(neuralNetworkContainer)
  
    // Create grid background
    const gridBackground = document.createElement("div")
    gridBackground.className = "grid-background"
    document.querySelector("#particles-container").appendChild(gridBackground)
  
    // Initialize Three.js scene if available
    if (typeof THREE !== "undefined") {
      initThreeScene()
    }
  })
  
  // Initialize Three.js scene
  function initThreeScene() {
    // Check if Three.js is already loaded
    if (typeof THREE === "undefined") {
      console.error("Three.js is not loaded. Please include it in your HTML.")
      return
    }
  
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
  
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.querySelector("#particles-container").appendChild(renderer.domElement)
  
    // Create particles
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const colors = []
  
    for (let i = 0; i < 1000; i++) {
      // Position
      const x = (Math.random() - 0.5) * 2
      const y = (Math.random() - 0.5) * 2
      const z = (Math.random() - 0.5) * 2
  
      vertices.push(x, y, z)
  
      // Color
      const color = new THREE.Color()
      if (Math.random() > 0.5) {
        color.set("#6E56CF")
      } else if (Math.random() > 0.5) {
        color.set("#9E8CFC")
      } else {
        color.set("#10B981")
      }
  
      colors.push(color.r, color.g, color.b)
    }
  
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  
    const material = new THREE.PointsMaterial({
      size: 0.05,
      transparent: true,
      opacity: 0.7,
      vertexColors: true,
    })
  
    const points = new THREE.Points(geometry, material)
    scene.add(points)
  
    camera.position.z = 1
  
    const clock = new THREE.Clock()
  
    function animate() {
      requestAnimationFrame(animate)
  
      const time = clock.getElapsedTime() * 0.1
  
      points.rotation.x = time * 0.3
      points.rotation.y = time * 0.2
  
      renderer.render(scene, camera)
    }
  
    animate()
  
    // Handle window resize
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }
  
  