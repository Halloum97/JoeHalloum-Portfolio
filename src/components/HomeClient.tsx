"use client";

import AuroraBackground from "@/components/background/AuroraBackground";
import ParticlesCanvas from "@/components/background/ParticlesCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Now from "@/components/sections/Now";
import Contact from "@/components/sections/Contact";

export default function HomeClient() {
  return (
    <main className="min-h-screen">
      <AuroraBackground />
      <ParticlesCanvas />

      <Navbar />
      <Hero />

      <About />
      <Skills />
      <Projects />
      <Now />
      <Contact />

      <footer className="mx-auto max-w-6xl px-6 pb-16 pt-6 text-xs text-white/40">
        © {new Date().getFullYear()} Joe Halloum
      </footer>
    </main>
  );
}
