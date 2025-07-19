"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "EuPak Education",
    description:
    "A comprehensive platform connecting Pakistani students with educational opportunities in Europe. This project aims to simplify the process of finding, applying to, and preparing for higher education programs in European institutions.",
    technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Send grid API"],
    contribution:
    "Developed a full-stack application with dynamic content management, user authentication, and personalized dashboards for students and institutions. Implemented responsive design principles to ensure accessibility across all devices.",
    challenges:
    "Overcame hurdles in integrating multiple external APIs for university data and implemented a secure payment gateway for application fees.",
    outcome:
    "Since its launch, the platform has facilitated over 1000 successful student applications, significantly increasing the number of Pakistani students pursuing education in Europe.",
    demoLink: "https://www.eupakeducation.com/",
    githubLink: "#",
    image: "eupak.png",
  },
  {
    title: "ALM Quran Academy",
    description:
    "An online platform for Quranic education, offering accessible and comprehensive courses for students worldwide. The academy provides a unique blend of traditional Islamic education with modern e-learning methodologies.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    contribution:
    "Designed and developed the entire web application, focusing on creating an intuitive user interface and seamless learning experience. Implemented responsive design and ensured cross-browser compatibility.",
    challenges:
    "Addressed the challenge of presenting Arabic text and Quranic content accurately across different devices and browsers. Implemented a robust scheduling system for online classes across multiple time zones.",
    outcome:
    "Successfully launched the platform, attracting over 2,000 students globally. The academy has received positive feedback for its user-friendly interface and comprehensive curriculum.",
    demoLink: "https://alm-ten.vercel.app/",
    githubLink: "#",
    image:
    "almquran.png",
  },
  {
    title: "SEO Analytics ",
    description:
      "A comprehensive web-based platform designed to analyze and optimize website SEO performance. This tool provides in-depth insights into various SEO metrics, helping businesses improve their online visibility and search engine rankings.",
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Chart.js",
      "Google Search Console API",
      "OpenAI API",
      "LemonSqueezy Payment API"
    ],
    contribution:
      "Led the frontend development using React.js and Next.js, creating responsive and interactive dashboards. Developed and consumed RESTful APIs to handle SEO data and analytics. Integrated Google Search Console API to fetch real-time performance data, OpenAI API for content suggestions and keyword generation, and LemonSqueezy API for managing payments.",
    challenges:
      "Overcame challenges in processing and visualizing large datasets in real-time, ensuring optimized performance for a seamless user experience. Handled API rate limits and authentication for third-party services.",
    outcome:
      "The platform has helped numerous businesses improve their SEO strategies, resulting in an average 30% increase in organic traffic for users.",
    demoLink: "#",
    githubLink: "https://github.com/hasnainaqa/seo",
    image: "seo.png",
    
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-24 relative overflow-hidden themed-section">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 text-center mb-16"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">My Projects</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore a collection of my most significant and innovative projects
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-10">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg bg-card">
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 object-cover object-center"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <CardHeader>
                          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4">{project.description}</p>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">My Contribution:</h4>
                              <p className="text-sm text-muted-foreground">{project.contribution}</p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Challenges Overcome:</h4>
                              <p className="text-sm text-muted-foreground">{project.challenges}</p>
                            </div>
                            <div>
                              <h4 className="font-medium mb-2">Outcome:</h4>
                              <p className="text-sm text-muted-foreground">{project.outcome}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex gap-4 mt-4">
                          <Button variant="default" size="sm" asChild className="rounded-full">
                            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Live Demo
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild className="rounded-full">
                            
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">More Projects</h2>
              <p className="text-lg text-muted-foreground mb-8">
                These are just a few highlights from my portfolio. I'm constantly working on new and exciting projects.
                Check out my GitHub for more!
              </p>
              <Button asChild className="rounded-full px-8">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

