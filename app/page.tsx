import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import { CallToAction } from "@/components/call-to-action"
import { FeaturedSkills } from "@/components/featured-skills"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 min-h-screen bg-background text-foreground">
        <Hero />
        <FeaturedSkills />
        <About />
        <Projects />
        <Skills />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

