import React, { useState, useEffect } from 'react';
import { PaletteProvider } from './context/PaletteContext';
import { Masthead } from './components/Navbar';
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
import { EnvelopeLoader } from './components/EnvelopeLoader';
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
        transition: 'background 0.5s ease, color 0.3s ease',
      }}
    >
      {/* Envelope / Curtain Loader */}
      <EnvelopeLoader />

      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[60] transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          background: 'var(--accent)',
        }}
      />

      {/* Floating background shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ opacity: 0.18 }}>
        <div
          className="absolute top-[15%] left-[8%] w-6 h-6 rounded-full animate-drift"
          style={{ border: '2px solid var(--accent)' }}
        />
        <div
          className="absolute top-[35%] right-[10%] w-8 h-8 rotate-45 animate-pulse"
          style={{ border: '2px solid var(--ribbon)' }}
        />
        <div
          className="absolute top-[65%] left-[5%] w-7 h-7 rounded-lg animate-drift"
          style={{ border: '2px solid var(--accent2)' }}
        />
        <div
          className="absolute top-[85%] right-[6%] w-5 h-5 rounded-full animate-pulse"
          style={{ background: 'var(--accent)' }}
        />
      </div>

      <div className="relative z-10">
        <Masthead />
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
