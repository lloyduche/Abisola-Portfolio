import React, { useState, useEffect } from 'react';
import { PaletteProvider } from './context/PaletteContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeRibbon } from './components/MarqueeRibbon';
import { About } from './components/About';
import { SkillsTools } from './components/SkillsTools';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudies } from './components/CaseStudies';
import { ResumeExpertise } from './components/ResumeExpertise';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './types';

const AppInner: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
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
    <div
      className="min-h-screen relative"
      style={{
        background: 'var(--bg)',
        color: 'var(--ink)',
        transition: 'background 0.4s ease, color 0.3s ease',
      }}
    >
      {/* Top Precision Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[60] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'var(--accent)',
        }}
      />

      {/* Main Structural Layout */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeRibbon />
        <About />
        <SkillsTools />
        <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />
        <CaseStudies />
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
    <AppInner />
  </PaletteProvider>
);

export default App;
