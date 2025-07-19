"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Server, Code, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 85, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React.js", level: 80, category: "frontend" },
  { name: "Next.js", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "shadcn/ui", level: 75, category: "frontend" },
  // { name: "Framer Motion", level: 70, category: "frontend" },
  // { name: "Responsive Design", level: 85, category: "frontend" },
  // { name: "Form Libraries (React Hook Form)", level: 70, category: "frontend" },
  { name: "API Integration (REST )", level: 75, category: "frontend" },
  
  { name: "Node.js", level: 70, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Mongoose", level: 70, category: "backend" },
  { name: "SQL", level: 65, category: "backend" },
  { name: "RESTful APIs", level: 75, category: "backend" },
  { name: "Authentication (JWT, OAuth)", level: 70, category: "backend" },
  { name: "LemonSqueezy API", level: 60, category: "backend" },
  { name: "Google Search Console API", level: 65, category: "backend" },
  { name: "OpenAI API", level: 65, category: "backend" },
  {name: "File Upload (Cloudinary Basics)", level: 60, category: "backend", },
  { name: "Server-Side Rendering (Next.js)", level: 75, category: "backend" },

  { name: "Git", level: 80, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "Chrome DevTools", level: 80, category: "tools" },
  { name: "ESLint / Prettier", level: 70, category: "tools" },
  { name: "MongoDB Compass", level: 70, category: "tools" },
];

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "frontend":
      return <Laptop className="h-6 w-6" />;
    case "backend":
      return <Server className="h-6 w-6" />;
    case "tools":
      return <Terminal className="h-6 w-6" />;
    default:
      return <Code className="h-6 w-6" />;
  }
};

export default function SkillsPage() {
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                My Skills
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore the technologies and tools I've mastered on my journey
                as a full-stack developer
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["frontend", "backend", "tools"].map((category) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="overflow-hidden border-none shadow-lg bg-card">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-6">
                      <CardTitle className="text-2xl font-bold flex items-center gap-2">
                        <span className="bg-background p-2 rounded-lg">
                          <SkillIcon category={category} />
                        </span>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {skills
                          .filter((skill) => skill.category === category)
                          .map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="space-y-2"
                            >
                              <div className="flex justify-between items-center">
                                <h4 className="font-medium">{skill.name}</h4>
                                <Badge
                                  variant="outline"
                                  className="bg-primary/10 text-primary"
                                >
                                  {skill.level}%
                                </Badge>
                              </div>
                              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full"
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{
                                    duration: 1,
                                    delay: index * 0.1,
                                  }}
                                />
                              </div>
                            </motion.div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
              <p className="text-lg text-muted-foreground mb-8">
                In the ever-evolving world of web development, I'm committed to
                continuous learning and improvement. I'm always exploring new
                technologies and best practices to enhance my skill set and
                deliver cutting-edge solutions.
              </p>
              <Button asChild className="rounded-full px-8">
                <Link href="/projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
