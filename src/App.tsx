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
import { PaletteSelector } from './components/PaletteSelector';
import { Project } from './types';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Prevent scroll jump on page load/refresh
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (showIntro) return;

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
  }, [showIntro]);

  const handleIntroComplete = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setShowIntro(false);
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        /* Welcome intro screen renders strictly FIRST with zero main page flash */
        <EditorialIntro key="welcome-intro" onComplete={handleIntroComplete} />
      ) : (
        /* Main page mounts and smoothly fades in ONLY after intro completes */
        <motion.div
          key="main-portfolio"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-body)] font-body relative overflow-x-hidden transition-colors duration-300"
        >
          <SmoothScroll>
            {/* Global Particle Field Background — WebGL */}
            <Suspense fallback={null}>
              <ParticleBackground />
            </Suspense>

            {/* Accent Spark Scroll Progress Thread */}
            <motion.div
              className="fixed top-0 left-0 h-[3px] z-[60] origin-left bg-[var(--accent-spark)]"
              style={{
                width: `${scrollProgress}%`,
                boxShadow: '0 0 14px var(--accent-glow)',
              }}
            />

            {/* Navigation Masthead with Dropdown Palette Selector */}
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

            {/* Floating Quick Palette Selector */}
            <PaletteSelector variant="floating" />

            {/* Modals */}
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
          </SmoothScroll>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
