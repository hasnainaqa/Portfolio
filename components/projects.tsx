"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "ALM Quran Academy",
    description: "An online platform for Quranic education, offering accessible and comprehensive courses for students worldwide.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    contribution: "Designed and developed the entire web application, focusing on creating an intuitive user interface.",
    demoLink: "https://alm-ten.vercel.app/",
    githubLink: "#",
    image: "almquran.png",
  },
  {
    title: "EuPak Education",
    description: "A comprehensive platform for Pakistani students seeking education opportunities in Europe.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    contribution: "Developed a full-stack application with dynamic content management and user authentication.",
    demoLink: "https://www.eupakeducation.com/",
    githubLink: "#",
    image: "eupak.png",
  },
  {
    title: "SEO Analytics(In Progress)",
    description: "A web-based platform to analyze and optimize website SEO performance.",
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB"],
    contribution: "Designed and implemented user-friendly dashboards and developed RESTful APIs for data handling.",
    demoLink: "#",
    githubLink: "#",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">Showcasing my recent work and contributions</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <CardHeader className="absolute bottom-0 left-0 right-0 p-6">
                    <CardTitle className="text-2xl font-bold text-white">{project.title}</CardTitle>
                  </CardHeader>
                </div>
                <CardContent className="flex-grow p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Contribution:</h4>
                      <p className="text-sm text-muted-foreground">{project.contribution}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4 p-6 pt-0">
                  <Button variant="default" size="sm" asChild className="rounded-full group/btn">
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button asChild variant="outline" className="rounded-full px-8 border-primary hover:bg-primary/10">
            <Link href="https://github.com/hasnainaqa" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

