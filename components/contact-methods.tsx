"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, MessageCircle, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    title: "Email",
    description: "For detailed inquiries and project proposals",
    icon: Mail,
    action: "Send an Email",
    link: "mailto:muhammedhasnain3356@gmail.com",
  },
  {
    title: "Phone",
    description: "For urgent matters and quick consultations",
    icon: Phone,
    action: "Call Now",
    link: "tel:+923256244441",
  },
  {
    title: "Instagram",
    description: "Book a time for an in-depth discussion",
    icon: Instagram,
    action: "Instagram",
    link: "https://www.instagram.com/hasnainaqa", 
  },
  {
    title: "Linkdin",
    description: "Get quick answers to your questions",
    icon: Linkedin,
    action: "Start Chat",
    link: "https://www.linkedin.com/in/hasnainaqa/", 
  },
]

export function ContactMethods() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ways to Connect</h2>
          <p className="mt-4 text-lg text-gray-600">Choose the method that works best for you</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold">
                    <method.icon className="h-8 w-8 mr-2 text-primary" />
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <Button asChild className="w-full">
                    <Link href={method.link}>{method.action}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

