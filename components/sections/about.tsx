"use client"

import { Code, Smartphone, Server, Database, Cloud, Zap } from "lucide-react"

export default function About() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with and modern JavaScript frameworks",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Creating robust server-side applications with Laravel, Node.js, Spring-Boot and RESTful APIs",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description: "Building and improving databases with MySQL, PostgreSQL, and MongoDB to support scalable apps.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment",
      description: "Deploying applications on Render,Netlify, Vercel, and other cloud platforms with CI/CD pipelines",
    },
  ]

  const stats = [
    { number: "10+", label: "Completed Projects", icon: <Zap className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Smartphone className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Code className="w-6 h-6" /> },
  ]

  return (
    <section id="about" className="section-padding bg-slate-800/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Services */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">What I Do</h2>
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group animate-in slide-in-from-left duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-orange-400 group-hover:bg-orange-400 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  {index < services.length - 1 && (
                    <div className="absolute top-12 left-6 w-0.5 h-16 bg-gradient-to-b from-orange-400 to-transparent"></div>
                  )}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About Content */}
<div className="space-y-8 animate-in slide-in-from-right duration-700">
  <h2 className="text-4xl font-bold">About Me</h2>
  <div className="space-y-4 text-slate-300 leading-relaxed">
    <p>
      I embarked on my software development journey driven by a passion for building scalable and efficient web applications that blend strong backend logic with smooth user experiences. Specializing in Laravel and React, I enjoy creating dynamic full-stack solutions that bring ideas to life.
    </p>
    <p>
      My experience includes developing end-to-end e-commerce platforms like meriSparePart—a Telebirr-integrated marketplace with RESTful APIs—and financial software such as Lucy Remit, featuring secure transaction processing and user authentication for high-volume remittances in Ethiopia.
    </p>
    <p>
      Beyond coding, I love exploring new frameworks, optimizing Docker-based deployments, and collaborating with other developers to push forward Ethiopia’s growing tech ecosystem.
    </p>
  </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2 gradient-text">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
