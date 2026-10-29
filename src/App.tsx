import React, { useState } from 'react';
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
import { Project } from './types';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF4EC] text-[#38272D] font-body selection:bg-[#72213A] selection:text-white">
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
