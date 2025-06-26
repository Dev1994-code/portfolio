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
  category: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [filter, setFilter] = useState("all")

  const projects: Project[] = [
    {
  "id": 1,
  "title": "Church Donation Platform",
  "description": "A secure and user-friendly platform for church donations with payment integration",
  "longDescription": "A robust church donation platform developed using React and Node.js, designed to streamline contributions with features like user authentication, donation tracking, payment processing via Stripe, donor management, and an admin dashboard. The system ensures secure transactions, provides real-time donation updates, and sends confirmation emails to donors, fostering transparency and engagement within the church community.",
  "tech": ["Flutter", "Spring-boot", "Mysql", "Nahu Pay", "JWT"],
  "images": [
    "/donation/d1.png?height=100&width=200&text=Church+Donation+Home",
    "/donation/d2.png?height=100&width=200&text=Donation+Tracker",
    "/donation/d3.png?height=100&width=200&text=Donor+Management",
    "/donation/d4.png?height=100&width=00&text=Admin+Dashboard",
    "/donation/d5.png?height=100&width=00&text=Admin+Dashboard",
    "/donation/d6.png?height=100&width=00&text=Admin+Dashboard",
    "/donation/d7.png?height=100&width=00&text=Admin+Dashboard",
  ],
  "github": "https://github.com/dawit/church-donation",
  "category": "fullstack"
},
    {
  id: 2,
  title: "Spare Part Selling App",
  description: "E-commerce platform for automotive spare parts",
  longDescription:
    "An online spare part selling application built with the MERN stack. The platform allows users to browse and search for automotive spare parts, add items to their cart, manage orders, and securely complete purchases. Admins can manage inventory, update product details, and monitor sales analytics. Real-time updates ensure stock levels and order statuses are always current.",
  tech: ["Laravel", "Next.js", "Mysql", "Tailwind CSS", "GitHub Actions"],
  images: [
    "/spare/s1.png?height=400&width=600&text=Product+Listing",
    "/spare/s2.png?height=400&width=600&text=Product+Detail",
    "/spare/s3.png?height=400&width=600&text=Cart+&+Checkout"
  ],
  github: "https://github.com/dawit/spareparts-app",
  category: "backend",
},
    {
  id: 3,
  title: "Nahu Payment Processor Documentation",
  description: "Comprehensive developer documentation and SDKs for Nahu Payment",
  longDescription:
    "A complete documentation portal for the Nahu Payment Processor, designed to help developers easily integrate secure payment services into their applications. The documentation includes API references, authentication guides, request/response samples, error handling details, and SDKs for multiple languages. It also provides a testing sandbox, Postman collections, and quick-start tutorials for common use cases like mobile, web, and backend integrations.",
  tech: ["Markdown", "Docusaurus","GitHub"],
  images: [
    "/documentation/d1.png?height=400&width=600&text=API+Docs+Overview",
    "/documentation/d2.png?height=400&width=600&text=Authentication+Guide",
    "/documentation/d3.png?height=400&width=600&text=SDKs+and+Examples",
    "/documentation/d4.png?height=400&width=600&text=Integration+Tutorials",
    "/documentation/d5.png?height=400&width=600&text=Integration+Tutorials",
    "/documentation/d6.png?height=400&width=600&text=Integration+Tutorials",
  ],
  github: "https://github.com/dawit/nahu-payment-docs",
  category: "documentation",
},
    {
  id: 4,
  title: "Remittance App",
  description: "Cross-platform remittance solution with secure transfers",
  longDescription:
    "A full-featured cross-platform remittance application built using Flutter for the frontend and Spring Boot for the backend. The app enables users to send and receive money securely, manage transactions, and view real-time transfer statuses. Features include user authentication, multi-currency support, transaction history, and integration with secure payment gateways.",
  tech: ["Flutter", "Dart", "Spring Boot", "Java", "MySQL", "REST API"],
  images: [
    "/remit/r1.png?height=400&width=600&text=Send+Money+Screen",
    "/remit/r2.png?height=400&width=600&text=Transaction+History",
    "/remit/r3.png?height=400&width=600&text=User+Dashboard",
    "/remit/r4.png?height=400&width=600&text=Login+and+Security",
    "/remit/r5.png?height=400&width=600&text=Login+and+Security",
    "/remit/r6.png?height=400&width=600&text=Login+and+Security",
    "/remit/r7.png?height=400&width=600&text=Login+and+Security",
    "/remit/r8.png?height=400&width=600&text=Login+and+Security",
    "/remit/r9.png?height=400&width=600&text=Login+and+Security",
    "/remit/r10.png?height=400&width=600&text=Login+and+Security",
  ],
  github: "https://github.com/dawit/remittance-app", // Replace with actual repo if different
  category: "fullstack",
},
    // {
    //   id: 5,
    //   title: "REST API Server",
    //   description: "Scalable REST API with comprehensive documentation",
    //   longDescription:
    //     "A scalable REST API server built with Node.js and Express, featuring comprehensive CRUD operations, authentication middleware, input validation, error handling, and automated API documentation with Swagger. Includes rate limiting and security best practices.",
    //   tech: ["Node.js", "Express", "MongoDB", "Swagger", "Jest"],
    //   images: [
    //     "/placeholder.svg?height=400&width=600&text=API+Documentation",
    //     "/placeholder.svg?height=400&width=600&text=Endpoint+Testing",
    //     "/placeholder.svg?height=400&width=600&text=Authentication+Flow",
    //     "/placeholder.svg?height=400&width=600&text=Error+Handling",
    //   ],
    //   github: "https://github.com/dawit/rest-api",
    //   live: "https://api-docs-demo.com",
    //   category: "backend",
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Website",
    //   description: "Responsive portfolio with modern animations",
    //   longDescription:
    //     "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth animations, dark theme, project galleries, contact forms, and optimized performance. The site includes SEO optimization and accessibility features.",
    //   tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    //   images: [
    //     "/placeholder.svg?height=400&width=600&text=Portfolio+Home",
    //     "/placeholder.svg?height=400&width=600&text=Project+Gallery",
    //     "/placeholder.svg?height=400&width=600&text=About+Section",
    //     "/placeholder.svg?height=400&width=600&text=Contact+Form",
    //   ],
    //   github: "https://github.com/dawit/portfolio",
    //   live: "https://dawit-portfolio.vercel.app",
    //   category: "frontend",
    // },
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
                  ? "bg-orange-500 hover:bg-orange-600 rounded-xl"
                  : "border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-xl"
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
              className="bg-slate-800 border-slate-700 rounded-xl overflow-hidden group hover:border-orange-400 hover:shadow-lg hover:shadow-orange-400/20 transition-all duration-300 cursor-pointer animate-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-2 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-slate-700 text-orange-300 font-medium border border-slate-600"
                    >
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
            <div className="bg-slate-800 rounded-xl max-w-6xl w-full max-h-[95vh] overflow-y-auto border border-slate-700">
              <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <Button variant="ghost" size="sm" onClick={closeProjectModal}>
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div className="p-6">
                {/* Image Gallery */}
                <div className="relative mb-6">
                  <div className="relative h-auto min-h-[300px] max-h-[500px] rounded-xl overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center p-4">
                    <Image
                      src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg"
                      style={{ maxHeight: "70vh" }}
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                          onClick={prevImage}
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                          onClick={nextImage}
                        >
                          <ChevronRight className="w-6 h-6" />
                        </Button>
                      </>
                    )}
                  </div>

                  {/* Image Thumbnails */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {selectedProject.images.map((image, index) => (
                        <button
                          key={index}
                          className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 bg-slate-900 flex items-center justify-center ${
                            index === currentImageIndex
                              ? "border-orange-400 shadow-lg shadow-orange-400/30"
                              : "border-slate-600 hover:border-slate-500"
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`Thumbnail ${index + 1}`}
                            width={80}
                            height={64}
                            className="max-w-full max-h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-white">Description</h4>
                    <p className="text-slate-200 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-slate-700 text-orange-300 font-medium border border-slate-600"
                        >
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
