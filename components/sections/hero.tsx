"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  const technologies = ["React", "Node.js", "Laravel", "Spring Boot","Next.js", "JavaScript", "PHP", "Java", "Git"]

  const handleDownloadResume = () => {
    // Add your resume download logic here
    console.log("Downloading resume...")
  }

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hello<span className="text-orange-400">.</span>
              </h1>
              <div className="border-l-4 border-orange-400 pl-4">
                <h2 className="text-2xl md:text-3xl font-light">I'm Dawit</h2>
              </div>
              <div className="text-3xl md:text-5xl font-bold">
                <TypeAnimation
                  sequence={[
                    "Software Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "React Developer",
                    2000,
                    "Backend Developer",
                    2000,
                  ]}
                  wrapper="h3"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-lg">
              Passionate about creating scalable web applications and solving complex problems with modern technologies.
              Let's build something amazing together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                onClick={handleContactClick}
              >
                Got a project?
              </Button>
              <Button
                variant="outline"
                className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                onClick={handleDownloadResume}
              >
                My resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-1000">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-red-500 p-2 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
                  <Image
                    src="/profile.jpg?height=400&width=400"
                    alt="Dawit - Software Developer"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 text-orange-400 text-6xl opacity-20 animate-pulse">{"<"}</div>
              <div className="absolute -bottom-4 -right-4 text-orange-400 text-6xl opacity-20 animate-pulse">{">"}</div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-16 animate-in slide-in-from-bottom duration-1000 delay-500">
          <h4 className="text-center text-slate-400 mb-8">Technologies I work with</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 rounded-lg bg-slate-800/50 group-hover:bg-slate-700 transition-all duration-300 group-hover:scale-110">
                  <span className="text-sm group-hover:text-orange-400 transition-colors duration-300">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
