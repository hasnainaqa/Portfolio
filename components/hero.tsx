"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import { Github, Linkedin } from "lucide-react";
import AnimatedBackground from "@/components/animated-background";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <Image
        src="/hoe.avif"
        alt="Hero background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        className="opacity-10 dark:opacity-5"
      />
      <AnimatedBackground />
      <Header />

      <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 z-10 pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-4 md:space-y-6 text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block"
          >
            <div className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 dark:bg-primary/20 dark:border-primary/30">
              Full-Stack Developer
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span>Hasnain</span> <span className="gradient-text">Afzal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-[600px] text-lg sm:text-xl text-gray-600 dark:text-gray-300 mx-auto md:mx-0"
          >
            Crafting innovative web experiences with cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 group bg-gradient-to-r from-primary to-blue-600 text-white hover:opacity-90 button-hover"
            >
              <Link href="#contact">
                Get in Touch
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                  initial={{ x: 0 }}
                  animate={{ x: 5 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1,
                    repeatType: "reverse",
                  }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </motion.svg>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full px-8 border-primary hover:bg-primary/10 button-hover dark:text-white dark:border-white dark:hover:bg-white/10"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <Link
              href="https://github.com/hasnainaqa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 transform hover:scale-110 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hasnainaqa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 transform hover:scale-110 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 rounded-full blur-2xl opacity-30 dark:opacity-40"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="myprofile.jpeg"
                alt="Hasnain Afzal"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />
    </section>
  );
}
