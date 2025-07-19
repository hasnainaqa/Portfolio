"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Laptop, Server, Paintbrush } from "lucide-react"

const featuredSkills = [
  {
    title: "Frontend Development",
    icon: Laptop,
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "MongoDB", "RESTful APIs"],
    color: "from-green-500 to-emerald-500",
  },
  // {
  //   title: "UI/UX Design",
  //   icon: Paintbrush,
  //   skills: ["Figma", "Adobe XD", "Responsive Design", "User-Centered Design"],
  //   color: "from-purple-500 to-pink-500",
  // },
]

export function FeaturedSkills() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Skills</h2>
          <p className="mt-4 text-lg text-gray-600">Key areas where I excel and continuously improve</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSkills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold">
                    <skill.icon className={`h-8 w-8 mr-2 bg-gradient-to-r ${skill.color} rounded-full p-1`} />
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((item) => (
                      <Badge key={item} variant="secondary">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

