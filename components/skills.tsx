"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Laptop, Server, Code, Terminal } from "lucide-react"
import Image from "next/image"

const skills = [
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React.js", level: 70, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Git", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
]

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "frontend":
      return <Laptop className="h-6 w-6" />
    case "backend":
      return <Server className="h-6 w-6" />
    case "tools":
      return <Terminal className="h-6 w-6" />
    default:
      return <Code className="h-6 w-6" />
  }
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative overflow-hidden">
      <Image
        src="hoe3.avif"
        alt="Skills background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-10"
      />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-2 text-center mb-16"
        >
          <div className="inline-block mb-2">
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/50 text-secondary-foreground border border-secondary/20">
              My Expertise
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div style={{ y, opacity }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["frontend", "backend", "tools"].map((category) => (
            <div key={category} className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-2xl backdrop-blur-sm border border-primary/10">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="bg-primary/20 p-2 rounded-lg mr-3">
                    <SkillIcon category={category} />
                  </span>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className="space-y-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{skill.name}</h4>
                          <Badge variant="outline" className="bg-background/50 backdrop-blur-sm">
                            {skill.level}%
                          </Badge>
                        </div>
                        <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <div className="px-4 py-2 rounded-full text-sm font-medium bg-muted text-muted-foreground">
              Always learning and exploring new technologies
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

