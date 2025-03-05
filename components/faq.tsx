"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development, offering services from frontend design and development to backend implementation and database management. This includes creating responsive websites, developing web applications, and integrating APIs.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines can vary depending on the scope and complexity. A simple website might take 2-4 weeks, while a more complex web application could take 2-3 months. I always provide a detailed timeline during the initial project discussion.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, I offer ongoing support and maintenance packages for all projects I develop. This includes regular updates, bug fixes, and minor feature additions to ensure your website or application continues to perform optimally.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I believe in clear and consistent communication. Throughout the project, we'll have regular check-ins via email, video calls, or your preferred project management tool. I'm always available to answer questions and provide updates on progress.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about my services and process</p>
        </motion.div>
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

