"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  images: string[]
  github: string
  live: string
  category: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription:
        "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. The application includes real-time inventory updates and email notifications.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      images: [
        "/placeholder.svg?height=400&width=600&text=E-commerce+Home",
        "/placeholder.svg?height=400&width=600&text=Product+Catalog",
        "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
        "/placeholder.svg?height=400&width=600&text=Admin+Dashboard",
      ],
      github: "https://github.com/dawit/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      longDescription:
        "A collaborative task management application built with Laravel and Vue.js. Features include project creation, task assignment, real-time notifications, file attachments, time tracking, and team collaboration tools. The app supports multiple workspaces and role-based permissions.",
      tech: ["Laravel", "Vue.js", "MySQL", "WebSockets", "Redis"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Task+Dashboard",
        "/placeholder.svg?height=400&width=600&text=Project+View",
        "/placeholder.svg?height=400&width=600&text=Team+Collaboration",
        "/placeholder.svg?height=400&width=600&text=Analytics",
      ],
      github: "https://github.com/dawit/taskmanager",
      live: "https://taskmanager-demo.com",
      category: "fullstack",
    },
    {
      id: 3,
      title: "API Gateway Service",
      description: "Microservices API gateway with authentication",
      longDescription:
        "A robust API gateway built with Spring Boot that handles routing, authentication, rate limiting, and load balancing for microservices architecture. Includes JWT token validation, request/response transformation, logging, and monitoring capabilities.",
      tech: ["Spring Boot", "Java", "PostgreSQL", "Redis", "Docker"],
      images: [
        "/placeholder.svg?height=400&width=600&text=API+Gateway+Architecture",
        "/placeholder.svg?height=400&width=600&text=Monitoring+Dashboard",
        "/placeholder.svg?height=400&width=600&text=Rate+Limiting",
        "/placeholder.svg?height=400&width=600&text=Load+Balancer",
      ],
      github: "https://github.com/dawit/api-gateway",
      live: "https://api-gateway-demo.com",
      category: "backend",
    },
    {
      id: 4,
      title: "React Dashboard",
      description: "Modern admin dashboard with data visualization",
      longDescription:
        "A responsive admin dashboard built with React and TypeScript, featuring interactive charts, data tables, user management, and real-time analytics. The dashboard includes dark/light theme switching, customizable widgets, and export functionality.",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Dashboard+Overview",
        "/placeholder.svg?height=400&width=600&text=Analytics+Charts",
        "/placeholder.svg?height=400&width=600&text=User+Management",
        "/placeholder.svg?height=400&width=600&text=Settings+Panel",
      ],
      github: "https://github.com/dawit/react-dashboard",
      live: "https://dashboard-demo.vercel.app",
      category: "frontend",
    },
    {
      id: 5,
      title: "REST API Server",
      description: "Scalable REST API with comprehensive documentation",
      longDescription:
        "A scalable REST API server built with Node.js and Express, featuring comprehensive CRUD operations, authentication middleware, input validation, error handling, and automated API documentation with Swagger. Includes rate limiting and security best practices.",
      tech: ["Node.js", "Express", "MongoDB", "Swagger", "Jest"],
      images: [
        "/placeholder.svg?height=400&width=600&text=API+Documentation",
        "/placeholder.svg?height=400&width=600&text=Endpoint+Testing",
        "/placeholder.svg?height=400&width=600&text=Authentication+Flow",
        "/placeholder.svg?height=400&width=600&text=Error+Handling",
      ],
      github: "https://github.com/dawit/rest-api",
      live: "https://api-docs-demo.com",
      category: "backend",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio with modern animations",
      longDescription:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark theme, project galleries, contact forms, and optimized performance. The site includes SEO optimization and accessibility features.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      images: [
        "/placeholder.svg?height=400&width=600&text=Portfolio+Home",
        "/placeholder.svg?height=400&width=600&text=Project+Gallery",
        "/placeholder.svg?height=400&width=600&text=About+Section",
        "/placeholder.svg?height=400&width=600&text=Contact+Form",
      ],
      github: "https://github.com/dawit/portfolio",
      live: "https://dawit-portfolio.vercel.app",
      category: "frontend",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const openProjectModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-12 h-1 bg-orange-400 mx-auto mb-8"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and showcases
            different aspects of my development skills.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`${
                filter === category.id
                  ? "bg-orange-500 hover:bg-orange-600"
                  : "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
              } transition-all duration-300`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-800 border-slate-700 overflow-hidden group hover:border-orange-400 transition-all duration-300 cursor-pointer animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-700 text-orange-400">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="bg-slate-700 text-slate-400">
                      +{project.tech.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-slate-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <Button variant="ghost" size="sm" onClick={closeProjectModal}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="p-6">
                {/* Image Gallery */}
                <div className="relative mb-6">
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Image Thumbnails */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            index === currentImageIndex ? "border-orange-400" : "border-slate-600"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-slate-300 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-700 text-orange-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600"
                      onClick={() => window.open(selectedProject.live, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
