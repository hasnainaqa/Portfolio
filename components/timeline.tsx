"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2021",
    title: "Started Computer Science Degree",
    description: "Began my journey in Computer Science at the University of Gujrat.",
  },
  {
    year: "2022",
    title: "First Web Development Project",
    description: "Completed my first full-stack web application using React and Node.js.",
  },
  {
    year: "2023",
    title: "Internship at Tech Innovators",
    description: "Gained practical experience in software development during a summer internship.",
  },
  {
    year: "2024",
    title: "Launched Personal Portfolio",
    description: "Designed and developed my personal portfolio website showcasing my projects and skills.",
  },
]

export function Timeline() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
          <p className="mt-4 text-lg text-gray-600">Key milestones in my development career</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-blue-600" />
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <Card className={`w-1/2 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <span className="text-sm text-primary font-semibold">{event.year}</span>
                  </CardContent>
                </Card>
                <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

