"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Github, Send, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FAQ } from "@/components/faq"
import { ContactMethods } from "@/components/contact-methods"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create mailto link with form data
    const mailtoLink = `mailto:muhammedhasnain3356@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`

    // Simulate form submission delay for better UX
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Open the mailto link
      window.location.href = mailtoLink

      // Reset form
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 800)
  }

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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Get in Touch</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="overflow-hidden border-none shadow-lg bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background border-input focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-background border-input focus:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="bg-background border-input focus:ring-primary"
                        />
                      </div>
                      <Button type="submit" className="w-full rounded-full group" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        )}
                      </Button>

                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative dark:bg-green-900 dark:border-green-700 dark:text-green-100"
                          role="alert"
                        >
                          <strong className="font-bold">Thank you!</strong>
                          <span className="block sm:inline">
                            {" "}
                            Your message has been sent successfully. I'll get back to you soon.
                          </span>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-6"
              >
                <Card className="overflow-hidden border-none shadow-lg bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <a
                          href="mailto:muhammedhasnain3356@gmail.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          muhammedhasnain3356@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Phone</h3>
                        <a
                          href="tel:+923256244441"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +92 325 6244441
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Github className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">GitHub</h3>
                        <a
                          href="https://github.com/hasnainaqa"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          github.com/hasnainaqa
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 to-blue-600/5">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4">Connect with Me</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" asChild className="rounded-full">
                        <Link href="https://github.com/hasnainaqa" target="_blank" rel="noopener noreferrer">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild className="rounded-full">
                        <Link href="https://www.linkedin.com/in/hasnainaqa/" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-br from-primary/5 to-blue-600/5">
                  <CardContent className="p-6">
                    <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                      "I believe in creating web experiences that are not just functional but also delightful to use.
                      Let's build something amazing together!"
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <FAQ />
            <ContactMethods />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

