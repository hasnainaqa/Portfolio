"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, Moon, Sun } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
]

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(var(--background), 0)", "rgba(var(--background), 0.9)"],
  )
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0px 0px 0px rgba(0, 0, 0, 0)", "0px 10px 20px rgba(0, 0, 0, 0.1)"],
  )

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  return (
    <motion.header
      style={{ background: headerBackground, boxShadow: headerShadow }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <Link href="/" className="font-bold text-xl md:text-2xl relative group">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            HASNAIN AFZAL
          </span>
          <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-sm font-medium relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation(item.href)
                }}
              >
                <span className="relative z-10 text-foreground group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button
              asChild
              className="rounded-full px-4 md:px-6 bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <Link
                href="/contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/contact")
                }}
              >
                Get in Touch
              </Link>
            </Button>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-2 rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xl font-medium transition-colors hover:text-primary flex items-center"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation(item.href)
                    }}
                  >
                    <span className="border-b border-primary/0 hover:border-primary/100 transition-colors pb-1">
                      {item.name}
                    </span>
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 rounded-full bg-gradient-to-r from-primary to-blue-600 text-primary-foreground hover:opacity-90"
                  onClick={() => setIsOpen(false)}
                >
                  <Link
                    href="/contact"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/contact")
                    }}
                  >
                    Get in Touch
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

