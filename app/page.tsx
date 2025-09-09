"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Building } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: "#e3e6e8" }}>
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large floating circles */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl animate-pulse"
          style={{ backgroundColor: "#38BDF8", opacity: 0.05 }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full blur-lg animate-bounce"
          style={{ backgroundColor: "#0F172A", opacity: 0.1, animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full blur-2xl animate-pulse"
          style={{ backgroundColor: "#38BDF8", opacity: 0.08, animationDelay: "1s" }}
        ></div>

        {/* Medium floating shapes */}
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full blur-md animate-bounce"
          style={{ backgroundColor: "#334155", opacity: 0.05, animationDuration: "4s", animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-10 w-20 h-20 rounded-full blur-lg animate-pulse"
          style={{ backgroundColor: "#38BDF8", opacity: 0.06, animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/2 w-12 h-12 rounded-full blur-sm animate-bounce"
          style={{ backgroundColor: "#0F172A", opacity: 0.08, animationDuration: "5s" }}
        ></div>

        {/* Small floating dots */}
        <div
          className="absolute top-1/4 left-3/4 w-6 h-6 rounded-full blur-sm animate-pulse"
          style={{ backgroundColor: "#38BDF8", opacity: 0.1, animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-8 h-8 rounded-full blur-sm animate-bounce"
          style={{ backgroundColor: "#334155", opacity: 0.06, animationDuration: "6s", animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/4 w-10 h-10 rounded-full blur-md animate-pulse"
          style={{ backgroundColor: "#38BDF8", opacity: 0.07, animationDelay: "2.5s" }}
        ></div>

        {/* Geometric shapes */}
        <div
          className="absolute top-1/2 left-20 w-14 h-14 rotate-45 blur-lg animate-spin"
          style={{ backgroundColor: "#0F172A", opacity: 0.04, animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-18 h-18 rotate-12 blur-xl animate-pulse"
          style={{ backgroundColor: "#38BDF8", opacity: 0.05, animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className="sticky top-0 z-50 backdrop-blur-sm border-b"
          style={{ backgroundColor: "rgba(241, 245, 249, 0.8)", borderColor: "#334155" }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold" style={{ color: "#0F172A" }}>
                Abewe Vanessa
              </h1>
              <div className="hidden md:flex space-x-6">
  <a
    href="#about"
    className="text-slate-600 hover:text-slate-900 transition-colors"
  >
    About
  </a>
  <a
    href="#experience"
    className="text-slate-600 hover:text-slate-900 transition-colors"
  >
    Experience
  </a>
  <a
    href="#skills"
    className="text-slate-600 hover:text-slate-900 transition-colors"
  >
    Skills
  </a>
  <a
    href="#contact"
    className="text-slate-600 hover:text-slate-900 transition-colors"
  >
    Contact
  </a>
</div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance" style={{ color: "#0F172A" }}>
                Full Stack Developer
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-pretty" style={{ color: "#334155" }}>
                Passionate Full Stack Developer with expertise in both frontend and backend development, including
                React.js, Express.js, and MongoDB. Creating dynamic, responsive, and user-friendly applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-white hover:opacity-90" style={{ backgroundColor: "#0F172A" }}>
                  <a href="#contact" className="flex items-center gap-2">
                    Get In Touch
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
               
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4" style={{ backgroundColor: "rgba(15, 23, 42, 0.03)" }}>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0F172A" }}>
                About Me
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="leading-relaxed mb-6" style={{ color: "#334155" }}>
                    I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend
                    technologies. My journey in software development has been marked by continuous learning and
                    collaboration with talented teams.
                  </p>
                  <p className="leading-relaxed mb-6" style={{ color: "#334155" }}>
                    Known for my strong problem-solving abilities, quick learning curve, and effective communication in
                    collaborative environments. I thrive on creating robust, scalable applications that deliver
                    exceptional user experiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="text-white" style={{ backgroundColor: "#334155" }}>
                      Problem Solver
                    </Badge>
                    <Badge className="text-white" style={{ backgroundColor: "#334155" }}>
                      Quick Learner
                    </Badge>
                    <Badge className="text-white" style={{ backgroundColor: "#334155" }}>
                      Team Player
                    </Badge>
                    <Badge className="text-white" style={{ backgroundColor: "#334155" }}>
                      Effective Communicator
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <Card className="bg-white border" style={{ borderColor: "#334155" }}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Building className="w-5 h-5" style={{ color: "#38BDF8" }} />
                        <h3 className="font-semibold" style={{ color: "#0F172A" }}>
                          Education
                        </h3>
                      </div>
                      <p className="text-sm" style={{ color: "#334155" }}>
                        Bachelor of International Relations
                      </p>
                      <p className="text-sm" style={{ color: "#334155" }}>
                        University of Rwanda, Butare
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border" style={{ borderColor: "#334155" }}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5" style={{ color: "#38BDF8" }} />
                        <h3 className="font-semibold" style={{ color: "#0F172A" }}>
                          Location
                        </h3>
                      </div>
                      <p className="text-sm" style={{ color: "#334155" }}>
                        Kibagabaga, Kigali
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0F172A" }}>
                Experience
              </h2>
              <div className="space-y-8">
                {/* IgaCode Organisation */}
                <Card className="border-l-4 bg-white" style={{ borderLeftColor: "#38BDF8", borderColor: "#334155" }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl" style={{ color: "#0F172A" }}>
                          Front-End Developer
                        </CardTitle>
                        <CardDescription className="font-medium" style={{ color: "#38BDF8" }}>
                          IgaCode Organisation
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
                        <Calendar className="w-4 h-4" />
                        March 2024 - Present
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed mb-4" style={{ color: "#334155" }}>
                      Collaborating with a team of professionals to develop modern day software that largely improved
                      overall technical skills. Collaborating to develop a user-friendly dashboard for managing agents.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        TypeScript
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Next.js
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Redux Toolkit
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Ant Design
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        NextUI
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Prisma ORM
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Technika */}
                <Card className="border-l-4 bg-white" style={{ borderLeftColor: "#38BDF8", borderColor: "#334155" }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl" style={{ color: "#0F172A" }}>
                          Back-End Developer
                        </CardTitle>
                        <CardDescription className="font-medium" style={{ color: "#38BDF8" }}>
                          Technika
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
                        <Calendar className="w-4 h-4" />
                        July 2024 - October 2024
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed mb-4" style={{ color: "#334155" }}>
                      Developed key modules for managing classes, tracking attendance, and recording health incidents.
                      Integrated Cloudinary for secure image handling in talent management. Enhanced data reliability
                      and system performance through efficient error handling, and API documentation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Node.js
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Express.js
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        MongoDB
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Cloudinary
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        API Development
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* SheCanCode Bootcamp */}
                <Card className="border-l-4 bg-white" style={{ borderLeftColor: "#38BDF8", borderColor: "#334155" }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl" style={{ color: "#0F172A" }}>
                          Back-End Developer
                        </CardTitle>
                        <CardDescription className="font-medium" style={{ color: "#38BDF8" }}>
                          SheCanCode Bootcamp
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
                        <Calendar className="w-4 h-4" />
                        February 2024 - May 2024
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed mb-4" style={{ color: "#334155" }}>
                      Learned about Javascript Algorithms and Structures. Learned Node.js and Node Package Manager.
                      Created Back-End Server, Apps and APIs using Express.js. Managed Database using MongoDB Atlas.
                      Learned Application Deployment.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        JavaScript
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Node.js
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Express.js
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        MongoDB Atlas
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Deployment
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Andela Apprenticeship */}
                <Card className="border-l-4 bg-white" style={{ borderLeftColor: "#38BDF8", borderColor: "#334155" }}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle className="text-xl" style={{ color: "#0F172A" }}>
                          Front-End Developer
                        </CardTitle>
                        <CardDescription className="font-medium" style={{ color: "#38BDF8" }}>
                          Andela Apprenticeship Program
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
                        <Calendar className="w-4 h-4" />
                        November 2022 - November 2023
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="leading-relaxed mb-4" style={{ color: "#334155" }}>
                      Used Server-Side Rendering and Static Site Generation with Next.js. Used CSS Frameworks for
                      styling with Tailwind CSS. Implemented a comprehensive UI Framework with Figma. APIs Integration:
                      fetched and displayed data from APIs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Next.js
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Tailwind CSS
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        Figma
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        API Integration
                      </Badge>
                      <Badge variant="outline" style={{ borderColor: "#38BDF8", color: "#38BDF8" }}>
                        SSR/SSG
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4" style={{ backgroundColor: "rgba(15, 23, 42, 0.03)" }}>
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: "#0F172A" }}>
                Technical Skills
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white border" style={{ borderColor: "#334155" }}>
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ color: "#38BDF8" }}>
                      Frontend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          React.js
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Next.js
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          TypeScript
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Tailwind CSS
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Ant Design
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Redux
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border" style={{ borderColor: "#334155" }}>
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ color: "#38BDF8" }}>
                      Backend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Node.js
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Express.js
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          RESTful APIs
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          JWT
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Session Management
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Access Control
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border" style={{ borderColor: "#334155" }}>
                  <CardHeader>
                    <CardTitle className="text-lg" style={{ color: "#38BDF8" }}>
                      Database
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          MongoDB
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Prisma ORM
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          MongoDB Atlas
                        </Badge>
                        <Badge className="text-white" style={{ backgroundColor: "#0F172A" }}>
                          Postgress
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Languages */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-center mb-8" style={{ color: "#0F172A" }}>
                  Languages
                </h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl">
                    <div className="text-center">
                      <h4 className="font-semibold" style={{ color: "#0F172A" }}>
                        English
                      </h4>
                      <p className="text-sm" style={{ color: "#334155" }}>
                      Proficient
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold" style={{ color: "#0F172A" }}>
                        German
                      </h4>
                      <p className="text-sm" style={{ color: "#334155" }}>
                        Basic User
                      </p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold" style={{ color: "#0F172A" }}>
                        French
                      </h4>
                      <p className="text-sm" style={{ color: "#334155" }}>
                        Fluent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8" style={{ color: "#0F172A" }}>
                Get In Touch
              </h2>
              <p className="mb-12 leading-relaxed" style={{ color: "#334155" }}>
                I'm always open to discussing new opportunities and interesting projects. Feel free to reach out if
                you'd like to work together!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="hover:shadow-lg transition-shadow bg-white border" style={{ borderColor: "#334155" }}>
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "#38BDF8" }} />
                    <h3 className="font-semibold mb-2" style={{ color: "#0F172A" }}>
                      Email
                    </h3>
                    <a
                      href="mailto:vanessabewe@gmail.com"
                      className="transition-colors"
                      style={{ color: "#334155" }}
                      onMouseEnter={(e) => (e.target.style.color = "#38BDF8")}
                      onMouseLeave={(e) => (e.target.style.color = "#334155")}
                    >
                      vanessabewe@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow bg-white border" style={{ borderColor: "#334155" }}>
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: "#38BDF8" }} />
                    <h3 className="font-semibold mb-2" style={{ color: "#0F172A" }}>
                      Phone
                    </h3>
                    <a
                      href="tel:+250787800619"
                      className="transition-colors"
                      style={{ color: "#334155" }}
                      onMouseEnter={(e) => (e.target.style.color = "#38BDF8")}
                      onMouseLeave={(e) => (e.target.style.color = "#334155")}
                    >
                      +250787800619
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow bg-white border" style={{ borderColor: "#334155" }}>
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: "#38BDF8" }} />
                    <h3 className="font-semibold mb-2" style={{ color: "#0F172A" }}>
                      Location
                    </h3>
                    <p style={{ color: "#334155" }}>Kibagabaga, Kigali</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-center gap-4">
                
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:opacity-90 bg-transparent"
                  style={{ borderColor: "#38BDF8", color: "#38BDF8" }}
                >
                  <a
                    href="https://github.com/Vanessa-abewe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:opacity-90 bg-transparent"
                  style={{ borderColor: "#38BDF8", color: "#38BDF8" }}
                >
                  <a
                    href="https://linkedin.com/in/vanessa-abewe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-8 px-4 border-t"
          style={{ borderColor: "#334155", backgroundColor: "rgba(15, 23, 42, 0.03)" }}
        >
          <div className="container mx-auto text-center">
            <p style={{ color: "#334155" }}>© 2024 Abewe Vanessa.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
