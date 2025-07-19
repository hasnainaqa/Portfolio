"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const pages = [
  {
    name: "Home",
    path: "/",
    children: [
      { name: "Hero", path: "/#hero" },
      { name: "About", path: "/#about" },
      { name: "Skills", path: "/#skills" },
      { name: "Projects", path: "/#projects" },
      { name: "Testimonials", path: "/#testimonials" },
      { name: "Call to Action", path: "/#cta" },
    ],
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Who I Am", path: "/about#who-i-am" },
      { name: "Education", path: "/about#education" },
      { name: "Languages", path: "/about#languages" },
      { name: "Hobbies", path: "/about#hobbies" },
      { name: "My Journey", path: "/about#journey" },
    ],
  },
  {
    name: "Skills",
    path: "/skills",
    children: [
      { name: "Frontend", path: "/skills#frontend" },
      { name: "Backend", path: "/skills#backend" },
      { name: "Tools", path: "/skills#tools" },
      { name: "Continuous Learning", path: "/skills#learning" },
    ],
  },
  {
    name: "Projects",
    path: "/projects",
    children: [
      { name: "SEO Analytics", path: "/projects#seo-analytics" },
      { name: "Feedback Collector", path: "/projects#feedback-collector" },
      { name: "EuPak Education", path: "/projects#eupak-education" },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
    children: [
      { name: "Contact Form", path: "/contact#form" },
      { name: "Contact Information", path: "/contact#info" },
      { name: "Social Links", path: "/contact#social" },
    ],
  },
]

export function SiteMap() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Site Map</h2>
          <p className="mt-4 text-lg text-gray-600">Navigate through the structure of my portfolio website</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <motion.div
              key={page.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    <Link href={page.path} className="hover:text-primary transition-colors">
                      {page.name}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {page.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          href={child.path}
                          className="flex items-center text-gray-600 hover:text-primary transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 mr-2" />
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

