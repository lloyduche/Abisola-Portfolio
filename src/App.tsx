import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudies } from './components/CaseStudies';
import { SkillsTools } from './components/SkillsTools';
import { ResumeExpertise } from './components/ResumeExpertise';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { EditorialIntro } from './components/EditorialIntro';
import { SmoothScroll } from './components/SmoothScroll';
import { Project } from './types';
import { motion } from 'framer-motion';

// Lazy-load the floating particle background (heavy WebGL canvas)
const ParticleBackground = lazy(() =>
  import('./components/3d/ParticleBackground').then((m) => ({ default: m.ParticleBackground }))
);

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeCvUrl, setActiveCvUrl] = useState('/cv-content-writing.pdf');
  const [activeCvTitle, setActiveCvTitle] = useState('CV — Abisola Oluwatoyin');
  const [showIntro, setShowIntro] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[#F7F5F0] text-[#0F1D24] font-body selection:bg-[#FF5E36] selection:text-white relative overflow-x-hidden">

        {/* Cinematic Intro Screen */}
        {showIntro && (
          <EditorialIntro onComplete={() => setShowIntro(false)} />
        )}

        {/* Global Particle Field Background — WebGL */}
        {!showIntro && (
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        )}

        {/* Persimmon Spark Scroll Progress Thread */}
        <motion.div
          className="fixed top-0 left-0 h-[3px] z-[60] origin-left"
          style={{
            width: `${scrollProgress}%`,
            background: 'linear-gradient(to right, #E6441A, #FF5E36, #FFA07A)',
            boxShadow: '0 0 12px rgba(255, 94, 54, 0.55)',
          }}
        />

        {/* Navigation Masthead */}
        <Navbar />

        {/* Main Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />
          <CaseStudies />
          <SkillsTools />
          <ResumeExpertise
            onOpenResume={(url, title) => {
              setActiveCvUrl(url);
              setActiveCvTitle(title);
              setResumeOpen(true);
            }}
          />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Cinematic Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
          cvUrl={activeCvUrl}
          cvTitle={activeCvTitle}
        />
      </div>
    </SmoothScroll>
  );
};

export default App;
