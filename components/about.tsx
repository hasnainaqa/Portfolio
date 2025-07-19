"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Languages, User, BookOpen } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      <Image
        src="/hoe.avif"
        alt="About background"
        fill
        style={{ objectFit: "cover" }}
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
              About Me
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Background
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Get to know more about me and my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div style={{ y, opacity }} className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Who I Am</h3>
            </div>

            <p className="text-lg leading-relaxed">
              I'm a dedicated Bachelor of Computer Science from the
              University of Gujrat (2021–2025), passionate about web development
              and aspiring to become a proficient full-stack developer. I'm
              skilled in modern frameworks like React.js and Next.js, with
              hands-on experience in backend technologies and a focus on
              building user-centric applications.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-80" />
                    <div className="p-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-background/90 p-3 rounded-full shadow-md">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">Education</h3>
                          <p className="text-foreground/80">
                            Bachelor in Computer Science
                          </p>
                          <p className="text-foreground/80">
                            University of Gujrat
                          </p>
                          <p className="text-sm text-foreground/60">
                            2021 – 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 opacity-80" />
                    <div className="p-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-background/90 p-3 rounded-full shadow-md">
                          <Languages className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">Languages</h3>
                          <p className="text-foreground/80">
                            English (Proficient)
                          </p>
                          <p className="text-foreground/80">Urdu (Native)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-80" />
                    <div className="p-6 relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="bg-background/90 p-3 rounded-full shadow-md">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">Hobbies</h3>
                          <p className="text-foreground/80">
                            Writing Urdu Novels
                          </p>
                          <p className="text-foreground/80">
                            Exploring New Technologies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
