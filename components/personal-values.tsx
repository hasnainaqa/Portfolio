"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Lightbulb, Users, Rocket } from "lucide-react"

const values = [
  {
    title: "Continuous Learning",
    description: "Embracing new technologies and methodologies to stay at the forefront of web development.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "Believing in the power of teamwork and open communication to achieve exceptional results.",
    icon: Users,
  },
  {
    title: "Code Quality",
    description: "Striving for clean, efficient, and maintainable code in every project I undertake.",
    icon: Code,
  },
  {
    title: "Innovation",
    description: "Pushing boundaries and thinking outside the box to create unique and impactful solutions.",
    icon: Rocket,
  },
]

export function PersonalValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Personal Values</h2>
          <p className="mt-4 text-lg text-gray-600">The principles that guide my work and professional growth</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold">
                    <value.icon className="h-8 w-8 mr-2 text-primary" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

