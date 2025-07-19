"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 relative overflow-hidden bg-background text-foreground">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <Link href="/" className="font-bold text-xl mb-2 inline-block">
              H.A.Q.A
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hasnain Afzal. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://github.com/hasnainaqa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hasnainaqa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground">Made with Next.js and Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

