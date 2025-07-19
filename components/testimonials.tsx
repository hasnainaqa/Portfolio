"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechInnovate",
    content:
      "Hasnain's work on our project was exceptional. His attention to detail and innovative solutions greatly improved our web application's performance and user experience.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Lee",
    role: "Product Manager, DesignCraft",
    content:
      "Working with Hasnain was a pleasure. His ability to translate complex requirements into elegant, user-friendly interfaces is truly impressive.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Systems",
    content:
      "Hasnain's full-stack expertise was crucial in developing our data visualization platform. His code is clean, efficient, and easily maintainable.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from some of the amazing people I've worked with</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-gray-700 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
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

