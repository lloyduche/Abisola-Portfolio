import React, { useState, useEffect } from 'react';
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
import { EnvelopeLoader } from './components/EnvelopeLoader';
import { Project } from './types';

export const App: React.FC = () => {
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
    <div className="min-h-screen bg-theme-bg text-theme-ink transition-colors duration-300 relative selection:bg-theme-accent selection:text-white">
      {/* Interactive Envelope / Curtain Loader */}
      <EnvelopeLoader />

      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-theme-accent via-theme-secondary to-theme-accent z-50 transition-all duration-150 border-b border-theme-border/20"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating subtle background shapes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div className="absolute top-[15%] left-[8%] w-6 h-6 border-2 border-theme-accent/40 rounded-full animate-drift" />
        <div className="absolute top-[35%] right-[10%] w-8 h-8 rotate-45 border-2 border-theme-ribbon animate-pulse" />
        <div className="absolute top-[65%] left-[5%] w-7 h-7 border-2 border-theme-secondary rounded-lg animate-drift" />
        <div className="absolute top-[85%] right-[6%] w-5 h-5 rounded-full bg-theme-accent/30 animate-pulse" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Section A: Home */}
        <Hero />

        {/* Ribbons */}
        <MarqueeRibbon />

        {/* Section B: About Me */}
        <About />

        {/* Section C: Skills & Tools */}
        <SkillsTools />

        {/* Section D: Featured Work */}
        <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section E: Case Studies */}
        <CaseStudies />

        {/* Section F: Resume & Expertise */}
        <ResumeExpertise onOpenResume={() => setResumeOpen(true)} />

        {/* Section G: Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>

      {/* Modals */}
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

export default App;
