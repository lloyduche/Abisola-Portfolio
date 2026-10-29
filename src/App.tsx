import React, { useState, useEffect } from 'react';
import { PaletteProvider } from './context/PaletteContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudies } from './components/CaseStudies';
import { PersonalWriting } from './components/PersonalWriting';
import { ResumeExpertise } from './components/ResumeExpertise';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { CabinetLoader } from './components/CabinetLoader';
import { Project } from './types';

const CabinetInner: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showCabinetLoader, setShowCabinetLoader] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setReadingProgress((totalScroll / windowHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: 'var(--cabinet-cream)',
        color: 'var(--ink)',
        transition: 'background 0.4s ease, color 0.3s ease',
      }}
    >
      {/* Archival Label Opening Screen */}
      {showCabinetLoader && (
        <CabinetLoader onComplete={() => setShowCabinetLoader(false)} />
      )}

      {/* Top Gilt Thread Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[60] transition-all duration-100"
        style={{
          width: `${readingProgress}%`,
          background: 'var(--cabinet-brass)',
        }}
      />

      {/* Main Writer's Cabinet Architecture */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />
        <CaseStudies />
        <PersonalWriting />
        <ResumeExpertise onOpenResume={() => setResumeOpen(true)} />
        <Contact />
        <Footer />
      </div>

      {/* Detail Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => (
  <PaletteProvider>
    <CabinetInner />
  </PaletteProvider>
);

export default App;
