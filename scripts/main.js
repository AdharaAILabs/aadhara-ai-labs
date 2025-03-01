/**
 * Main JavaScript for Ādhāra AI Labs
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize animations
    initAnimations()
  
    // Initialize scroll reveal
    initScrollReveal()
  
    // Initialize mobile menu
    initMobileMenu()
  
    // Initialize typing animation
    initTypingAnimation()
  
    // Initialize form validation
    initFormValidation()
  })
  
  /**
   * Initialize animations for elements
   */
  function initAnimations() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(".animate")
  
    animatedElements.forEach((element) => {
      const animationType = element.dataset.animation || "fade-in"
      const delay = element.dataset.delay || 0
  
      element.classList.add(animationType)
  
      if (delay) {
        element.style.animationDelay = `${delay}s`
      }
    })
  }
  
  /**
   * Initialize scroll reveal animations
   */
  function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal")
  
    function checkReveal() {
      const windowHeight = window.innerHeight
      const revealPoint = 150
  
      revealElements.forEach((element) => {
        const revealTop = element.getBoundingClientRect().top
  
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active")
        }
      })
    }
  
    // Check on load
    checkReveal()
  
    // Check on scroll
    window.addEventListener("scroll", checkReveal)
  }
  
  /**
   * Initialize mobile menu
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
  
    if (!menuToggle || !mobileMenu) return
  
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active")
      mobileMenu.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  
    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a")
  
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
      })
    })
  }
  
  /**
   * Initialize typing animation
   */
  function initTypingAnimation() {
    const typingElements = document.querySelectorAll(".typing")
  
    typingElements.forEach((element) => {
      const text = element.textContent
      element.textContent = ""
      element.classList.add("typing-animation")
  
      let i = 0
      const speed = element.dataset.speed || 100
  
      function typeWriter() {
        if (i < text.length) {
          element.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, speed)
        }
      }
  
      // Start typing when element is in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typeWriter()
            observer.unobserve(element)
          }
        })
      })
  
      observer.observe(element)
    })
  }
  
  /**
   * Initialize form validation
   */
  function initFormValidation() {
    const forms = document.querySelectorAll("form")
  
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        let valid = true
  
        // Check required fields
        const requiredFields = form.querySelectorAll("[required]")
  
        requiredFields.forEach((field) => {
          if (!field.value.trim()) {
            valid = false
            field.classList.add("error")
  
            // Add error message if not exists
            let errorMessage = field.nextElementSibling
            if (!errorMessage || !errorMessage.classList.contains("error-message")) {
              errorMessage = document.createElement("div")
              errorMessage.className = "error-message"
              errorMessage.textContent = "This field is required"
              field.parentNode.insertBefore(errorMessage, field.nextSibling)
            }
          } else {
            field.classList.remove("error")
  
            // Remove error message if exists
            const errorMessage = field.nextElementSibling
            if (errorMessage && errorMessage.classList.contains("error-message")) {
              errorMessage.remove()
            }
          }
        })
  
        // Check email format
        const emailFields = form.querySelectorAll('input[type="email"]')
  
        emailFields.forEach((field) => {
          if (field.value.trim() && !isValidEmail(field.value)) {
            valid = false
            field.classList.add("error")
  
            // Add error message if not exists
            let errorMessage = field.nextElementSibling
            if (!errorMessage || !errorMessage.classList.contains("error-message")) {
              errorMessage = document.createElement("div")
              errorMessage.className = "error-message"
              errorMessage.textContent = "Please enter a valid email address"
              field.parentNode.insertBefore(errorMessage, field.nextSibling)
            }
          }
        })
  
        if (!valid) {
          event.preventDefault()
        }
      })
    })
  }
  
  /**
   * Validate email format
   */
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }
  
  /**
   * Initialize expertise tabs
   */
  function initExpertiseTabs() {
    const tabButtons = document.querySelectorAll(".tab-button")
    const tabContents = document.querySelectorAll(".tab-content")
  
    if (!tabButtons.length || !tabContents.length) return
  
    // Set first tab as active by default
    tabButtons[0].classList.add("active")
    tabContents[0].classList.add("active")
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        tabContents.forEach((content) => content.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        // Show corresponding content
        const tabId = button.dataset.tab
        const tabContent = document.querySelector(`.tab-content[data-tab="${tabId}"]`)
  
        if (tabContent) {
          tabContent.classList.add("active")
        }
      })
    })
  }
  
  /**
   * Initialize project filters
   */
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-button")
    const projects = document.querySelectorAll(".project-card")
  
    if (!filterButtons.length || !projects.length) return
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        // Filter projects
        const filter = button.dataset.filter
  
        projects.forEach((project) => {
          if (filter === "all" || project.dataset.category === filter) {
            project.style.display = "block"
          } else {
            project.style.display = "none"
          }
        })
      })
    })
  }
  
  // Call additional initializations when components are loaded
  window.addEventListener("load", () => {
    // Initialize expertise tabs
    initExpertiseTabs()
  
    // Initialize project filters
    initProjectFilters()
  })
  
  