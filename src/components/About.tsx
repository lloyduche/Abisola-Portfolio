import React, { useState, useEffect } from 'react';
import { ABOUT_DATA, SKILLS, TOOLS } from '../data/portfolioData';
import { MapPin, GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = ABOUT_DATA.typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 25 : 50;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % ABOUT_DATA.typewriterPhrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section id="about" className="py-20 lg:py-28 border-b border-[var(--cabinet-rule)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Archival Folder Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 mb-12 border-b border-[var(--cabinet-rule)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-2 text-[var(--ink-secondary)]">
              <span className="font-bold text-[var(--cabinet-brass)]">&para; DRAWER I</span>
              <span>/</span>
              <span>THE AUTHOR'S DOSSIER &bull; CURATED BIOGRAPHY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--cabinet-burgundy)]">
              The Craft Behind the Words.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="dossier-stamp">ARCHIVAL RECORD</span>
          </div>
        </div>

        {/* Two-Column Archival Folder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Author Narrative with Drop-Cap */}
          <div className="lg:col-span-7 space-y-6 font-serif text-lg sm:text-xl text-[var(--ink)]/90 leading-relaxed font-normal">
            <p>
              <span className="cabinet-drop-cap">I</span>
              am a writer and communications specialist whose work spans brand marketing, corporate communications, content development, and creative nonfiction. I believe that good writing is not simply decorative—it is the structural clarity that allows complex commercial ideas and human experiences to be understood.
            </p>

            <p>
              In corporate communications and marketing, I help companies articulate what they do, why it matters, and how their products create tangible value. Whether crafting an enterprise regulatory compliance email, framing financial infrastructure, or developing thought leadership, my focus is always on clarity, precision, and commercial persuasion.
            </p>

            <p>
              Beyond corporate work, I am the author of <strong className="font-semibold text-[var(--cabinet-burgundy)]">Abisola Writes</strong>, an independent Substack publication exploring love, womanhood, memory, and adulthood through literary prose and personal essays.
            </p>

            {/* Typewritten Real-time Observation */}
            <div className="p-5 rounded-sm border border-[var(--cabinet-brass)] bg-[var(--cabinet-cream-dark)] mt-8 font-mono text-xs text-[var(--ink)] flex items-center gap-3">
              <span className="font-bold text-[var(--cabinet-brass)] uppercase shrink-0">
                CURRENT FOCUS //
              </span>
              <span className="italic text-[var(--cabinet-burgundy)] font-serif text-sm">
                "{currentText}"
              </span>
              <span className="w-1.5 h-4 bg-[var(--cabinet-burgundy)] animate-pulse" />
            </div>
          </div>

          {/* Right Column: Credentials Card & Capabilities Ledger */}
          <div className="lg:col-span-5 lg:border-l lg:border-[var(--cabinet-rule)] lg:pl-10 space-y-8">

            {/* Academic & Location Plate */}
            <div className="p-6 rounded-sm border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--cabinet-rule)] font-mono text-xs uppercase text-[var(--cabinet-brass)] font-bold">
                <span>OFFICIAL CREDENTIALS</span>
                <span>VERIFIED</span>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[var(--cabinet-brass)] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif font-bold text-base text-[var(--ink)]">
                    B.A. English Language
                  </div>
                  <div className="font-serif italic text-xs text-[var(--ink-secondary)]">
                    Kwara State University &bull; Second Class Upper Division
                  </div>
                  <div className="text-xs font-serif text-[var(--ink-secondary)] mt-1">
                    Specialised training in syntactic composition, textual analysis, and rhetoric.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-5 h-5 text-[var(--cabinet-brass)] shrink-0 mt-0.5" />
                <div>
                  <div className="font-serif font-bold text-base text-[var(--ink)]">
                    Lagos, Nigeria
                  </div>
                  <div className="font-serif text-xs text-[var(--ink-secondary)]">
                    Operating remotely across global corporate, tech, and editorial engagements.
                  </div>
                </div>
              </div>
            </div>

            {/* Disciplinary Lexicon */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--cabinet-brass)] font-bold mb-3">
                CORE DISCIPLINES &amp; COMPETENCIES
              </div>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono border border-[var(--cabinet-rule)] bg-[var(--cabinet-cream-dark)] text-[var(--ink)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software & Systems */}
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-[var(--cabinet-brass)] font-bold mb-3">
                TOOLSTACK &amp; PLATFORMS
              </div>
              <div className="flex flex-wrap gap-2">
                {TOOLS.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-mono border border-[var(--cabinet-brass)] text-[var(--cabinet-burgundy)] font-bold bg-[var(--cabinet-cream-dark)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
