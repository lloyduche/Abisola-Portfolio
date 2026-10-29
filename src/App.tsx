import React, { useState, useEffect } from 'react';
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
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
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
    <div className="min-h-screen bg-[#FAF4EC] text-[#38272D] font-body selection:bg-[#72213A] selection:text-white relative">
      {/* Delicate Girly & Professional Page Load Animation */}
      {showIntro && (
        <EditorialIntro onComplete={() => setShowIntro(false)} />
      )}

      {/* Top Rose & Gold Reading Progress Thread */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[60] transition-all duration-100"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #72213A, #D995A9, #E5B86B)',
        }}
      />

      {/* Navigation Masthead */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <FeaturedWork onSelectProject={(p) => setSelectedProject(p)} />
        <CaseStudies />
        <SkillsTools />
        <ResumeExpertise onOpenResume={() => setResumeOpen(true)} />
        <Contact />
      </main>

      {/* Footer Colophon */}
      <Footer />

      {/* Detailed Modals */}
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
