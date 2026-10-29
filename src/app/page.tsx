'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import dynamic from 'next/dynamic';

const Full3DBackground = dynamic(
  () => import('@/components/three/Full3DBackground'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Full3DBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
