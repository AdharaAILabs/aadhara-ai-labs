/**
 * Blog functionality for Ādhāra AI Labs
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize blog posts
    loadBlogPosts()
  
    // Initialize blog filters
    initBlogFilters()
  
    // Initialize pagination
    initPagination()
  })
  
  /**
   * Sample blog posts data
   * In a real implementation, this would be fetched from a backend API
   */
  const blogPosts = [
    {
      id: 1,
      title: "Advancements in Large Language Model Fine-Tuning",
      excerpt:
        "Exploring the latest techniques for fine-tuning LLMs to achieve better performance with less data and computational resources.",
      category: "llm",
      image: "assets/images/blog-1.jpg",
      date: "2023-10-15",
      author: "Prathamesh Devadiga",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Building Agentic AI Systems: Challenges and Opportunities",
      excerpt:
        "An in-depth look at the development of autonomous AI agents that can perform complex tasks with minimal human intervention.",
      category: "agentic-ai",
      image: "assets/images/blog-2.jpg",
      date: "2023-09-28",
      author: "Prathamesh Devadiga",
      readTime: "12 min read",
    },
    {
      id: 3,
      title: "Retrieval-Augmented Generation: Enhancing LLM Accuracy",
      excerpt:
        "How RAG systems are revolutionizing the way we build AI applications by combining the power of retrieval systems with generative models.",
      category: "rag",
      image: "assets/images/blog-3.jpg",
      date: "2023-09-10",
      author: "Prathamesh Devadiga",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Deep Learning Architectures for Computer Vision",
      excerpt:
        "A comprehensive overview of the latest neural network architectures for image recognition, object detection, and segmentation.",
      category: "deep-learning",
      image: "assets/images/blog-4.jpg",
      date: "2023-08-22",
      author: "Prathamesh Devadiga",
      readTime: "15 min read",
    },
    {
      id: 5,
      title: "Optimizing Transformer Models for Production",
      excerpt:
        "Practical techniques for deploying transformer-based models in production environments with considerations for latency, throughput, and cost optimization.",
      category: "llm",
      image: "assets/images/blog-5.jpg",
      date: "2023-08-05",
      author: "Prathamesh Devadiga",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "The Future of Multimodal AI",
      excerpt:
        "Exploring how AI systems that can process and generate multiple types of data are changing the landscape of artificial intelligence.",
      category: "deep-learning",
      image: "assets/images/blog-6.jpg",
      date: "2023-07-18",
      author: "Prathamesh Devadiga",
      readTime: "11 min read",
    },
  ]
  
  /**
   * Load blog posts with pagination
   */
  function loadBlogPosts(page = 1, filter = "all") {
    const postsPerPage = 6
    const container = document.getElementById("blog-posts-container")
  
    if (!container) return
  
    // Clear container
    container.innerHTML = ""
  
    // Filter posts
    let filteredPosts = blogPosts
    if (filter !== "all") {
      filteredPosts = blogPosts.filter((post) => post.category === filter)
    }
  
    // Calculate pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
    const startIndex = (page - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex)
  
    // Update pagination UI
    updatePagination(page, totalPages)
  
    // No posts found
    if (paginatedPosts.length === 0) {
      container.innerHTML = `
              <div class="no-posts">
                  <h3>No posts found</h3>
                  <p>Try a different filter or check back later for new content.</p>
              </div>
          `
      return
    }
  
    // Create post cards
    paginatedPosts.forEach((post) => {
      const postCard = document.createElement("div")
      postCard.className = "blog-card"
      postCard.dataset.category = post.category
  
      postCard.innerHTML = `
              <img src="${post.image}" alt="${post.title}" class="blog-card-image">
              <div class="blog-card-content">
                  <div class="blog-card-meta">
                      <span>${post.date}</span>
                      <span>${post.readTime}</span>
                  </div>
                  <h3 class="blog-card-title">${post.title}</h3>
                  <p class="blog-card-excerpt">${post.excerpt}</p>
                  <a href="blog-post.html?id=${post.id}" class="btn btn-secondary">Read More</a>
              </div>
          `
  
      container.appendChild(postCard)
    })
  }
  
  /**
   * Initialize blog filters
   */
  function initBlogFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn")
  
    if (!filterButtons.length) return
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"))
  
        // Add active class to clicked button
        button.classList.add("active")
  
        // Filter posts
        const filter = button.dataset.filter
        loadBlogPosts(1, filter)
      })
    })
  }
  
  /**
   * Initialize pagination
   */
  function initPagination() {
    const prevButton = document.getElementById("prev-page")
    const nextButton = document.getElementById("next-page")
  
    if (!prevButton || !nextButton) return
  
    let currentPage = 1
  
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--
        const activeFilter = document.querySelector(".filter-btn.active")
        const filter = activeFilter ? activeFilter.dataset.filter : "all"
        loadBlogPosts(currentPage, filter)
      }
    })
  
    nextButton.addEventListener("click", () => {
      const activeFilter = document.querySelector(".filter-btn.active")
      const filter = activeFilter ? activeFilter.dataset.filter : "all"
  
      let filteredPosts = blogPosts
      if (filter !== "all") {
        filteredPosts = blogPosts.filter((post) => post.category === filter)
      }
  
      const totalPages = Math.ceil(filteredPosts.length / 6)
  
      if (currentPage < totalPages) {
        currentPage++
        loadBlogPosts(currentPage, filter)
      }
    })
  }
  
  /**
   * Update pagination UI
   */
  function updatePagination(currentPage, totalPages) {
    const prevButton = document.getElementById("prev-page")
    const nextButton = document.getElementById("next-page")
    const currentPageElement = document.getElementById("current-page")
    const totalPagesElement = document.getElementById("total-pages")
  
    if (!prevButton || !nextButton || !currentPageElement || !totalPagesElement) return
  
    // Update page numbers
    currentPageElement.textContent = currentPage
    totalPagesElement.textContent = totalPages
  
    // Update button states
    prevButton.disabled = currentPage === 1
    nextButton.disabled = currentPage === totalPages
  }
  
  /**
   * Load featured blog posts for homepage
   */
  function loadFeaturedPosts() {
    const container = document.getElementById("blog-posts-container")
  
    if (!container) return
  
    // Clear container
    container.innerHTML = ""
  
    // Get latest 3 posts
    const featuredPosts = blogPosts.slice(0, 3)
  
    // Create post cards
    featuredPosts.forEach((post) => {
      const postCard = document.createElement("div")
      postCard.className = "blog-card"
  
      postCard.innerHTML = `
              <img src="${post.image}" alt="${post.title}" class="blog-card-image">
              <div class="blog-card-content">
                  <div class="blog-card-meta">
                      <span>${post.date}</span>
                      <span>${post.readTime}</span>
                  </div>
                  <h3 class="blog-card-title">${post.title}</h3>
                  <p class="blog-card-excerpt">${post.excerpt}</p>
                  <a href="blog-post.html?id=${post.id}" class="btn btn-secondary">Read More</a>
              </div>
          `
  
      container.appendChild(postCard)
    })
  }
  
  // Check if we're on the homepage or blog page
  if (window.location.pathname === "/" || window.location.pathname.includes("index.html")) {
    window.addEventListener("load", loadFeaturedPosts)
  }
  
  