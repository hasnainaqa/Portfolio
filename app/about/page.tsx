"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Languages, User, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Timeline } from "@/components/timeline"
import { PersonalValues } from "@/components/personal-values"

export default function AboutPage() {
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Me</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get to know more about my journey, passions, and aspirations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Who I Am</h2>
                </div>

                <p className="text-lg leading-relaxed">
                  I'm Hasnain Afzal, a dedicated Bachelor of Computer Science student at the University of Gujrat
                  (2021–2025). My passion lies in web development, and I'm on a journey to become a proficient
                  full-stack developer. With a strong foundation in modern frameworks like React.js and Next.js, I've
                  honed my skills in both frontend and backend technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach to development is user-centric, always striving to create applications that not only
                  function flawlessly but also provide an exceptional user experience. I believe in the power of clean,
                  efficient code and continuously explore new technologies to stay at the forefront of web development.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond coding, I have a deep love for writing novels. This creative pursuit allows me to explore
                  complex themes and narratives, which in turn enhances my problem-solving skills in programming. The
                  discipline and creativity required in writing complement my technical skills, making me a well-rounded
                  developer.
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg bg-card">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-80" />
                        <div className="p-6 relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="bg-background p-3 rounded-full shadow-md">
                              <GraduationCap className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl">Education</h3>
                              <p className="text-muted-foreground">Bachelor in Computer Science</p>
                              <p className="text-muted-foreground">University of Gujrat</p>
                              <p className="text-sm text-muted-foreground">2021 – 2025</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg bg-card">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-primary/20 opacity-80" />
                        <div className="p-6 relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="bg-background p-3 rounded-full shadow-md">
                              <Languages className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl">Languages</h3>
                              <p className="text-muted-foreground">English (Proficient)</p>
                              <p className="text-muted-foreground">Urdu (Native)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg bg-card">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-80" />
                        <div className="p-6 relative z-10">
                          <div className="flex items-center gap-4">
                            <div className="bg-background p-3 rounded-full shadow-md">
                              <BookOpen className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold text-xl">Hobbies</h3>
                              <p className="text-muted-foreground">Writing Urdu Novels</p>
                              <p className="text-muted-foreground">Exploring New Technologies</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

            <Timeline />
            <PersonalValues />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">My Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                From my early fascination with computers to my current pursuit of a degree in Computer Science, my
                journey in technology has been driven by curiosity and a desire to create. Each project and challenge
                has been a stepping stone, helping me grow not just as a developer, but as a problem solver and
                innovator.
              </p>
              <Button asChild className="rounded-full px-8">
                <Link href="/skills">
                  Explore My Skills
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

