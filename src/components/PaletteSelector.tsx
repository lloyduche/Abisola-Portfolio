import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePalette, PALETTE_LIST, PaletteId } from '../context/PaletteContext';

interface PaletteSelectorProps {
  variant?: 'navbar' | 'floating' | 'mobile';
  className?: string;
}

export const PaletteSelector: React.FC<PaletteSelectorProps> = ({
  variant = 'navbar',
  className = '',
}) => {
  const { palette, paletteOption, setPalette } = usePalette();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelect = (id: PaletteId) => {
    setPalette(id);
    setIsOpen(false);
  };

  // 60-30-10 Visual Multi-Bar Swatch
  const renderSwatch = (
    c60: string,
    c30: string,
    c10: string,
    size: 'sm' | 'md' = 'sm'
  ) => {
    const h = size === 'sm' ? 'h-3.5 w-10 sm:w-12' : 'h-4 w-14';
    return (
      <div
        className={`${h} rounded-full overflow-hidden flex shadow-sm border border-black/10 shrink-0`}
        title={`60% / 30% / 10%`}
      >
        <span style={{ backgroundColor: c60, width: '60%' }} className="h-full block" />
        <span style={{ backgroundColor: c30, width: '30%' }} className="h-full block" />
        <span style={{ backgroundColor: c10, width: '10%' }} className="h-full block" />
      </div>
    );
  };

  // Mobile Menu Variant (List of options)
  if (variant === 'mobile') {
    return (
      <div className={`space-y-2 pt-2 ${className}`}>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] px-1">
          <span className="flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-[var(--accent-spark)]" />
            Color Palette (60 / 30 / 10)
          </span>
          <span className="text-[10px] lowercase text-[var(--accent-spark)] font-mono">
            6 curated themes
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PALETTE_LIST.map((p) => {
            const isSelected = p.id === palette;
            return (
              <button
                key={p.id}
                onClick={() => setPalette(p.id)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'border-[var(--accent-spark)] bg-[var(--accent-spark)]/10 text-[var(--text-ink)] font-semibold shadow-sm'
                    : 'border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-body)] hover:border-[var(--accent-spark)]/40'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  {renderSwatch(p.colors.c60.hex, p.colors.c30.hex, p.colors.c10.hex, 'sm')}
                  <div className="truncate">
                    <p className="text-xs font-medium truncate">{p.name}</p>
                    <p className="text-[10px] text-[var(--text-muted)] truncate">
                      {p.colors.c10.label} 10%
                    </p>
                  </div>
                </div>
                {isSelected && (
                  <Check className="w-4 h-4 text-[var(--accent-spark)] shrink-0 ml-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Floating Corner Widget Variant
  if (variant === 'floating') {
    return (
      <div ref={containerRef} className={`fixed bottom-5 right-5 z-40 ${className}`}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-14 right-0 w-80 sm:w-88 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-3 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
              style={{
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.25), 0 0 1px 1px rgba(255,255,255,0.1)',
              }}
            >
              <div className="px-2.5 py-2 border-b border-[var(--border-color)] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-ink)] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[var(--accent-spark)]" />
                    Color Combinations
                  </h4>
                  <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                    60% Canvas &bull; 30% Structure &bull; 10% Accent
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--accent-spark)]/12 text-[var(--accent-spark)] font-bold">
                  Live Preview
                </span>
              </div>

              <div className="mt-2 space-y-1.5 max-h-80 overflow-y-auto pr-1">
                {PALETTE_LIST.map((p) => {
                  const isSelected = p.id === palette;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelect(p.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[var(--accent-spark)] bg-[var(--accent-spark)]/10 text-[var(--text-ink)] font-semibold shadow-sm'
                          : 'border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-surface)] text-[var(--text-body)]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {renderSwatch(p.colors.c60.hex, p.colors.c30.hex, p.colors.c10.hex, 'md')}
                        <div className="truncate">
                          <p className="text-xs font-semibold text-[var(--text-ink)] truncate leading-tight">
                            {p.name}
                          </p>
                          <p className="text-[10px] text-[var(--text-muted)] truncate leading-tight mt-0.5">
                            {p.colors.c60.label} / {p.colors.c30.label} / {p.colors.c10.label}
                          </p>
                        </div>
                      </div>
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-spark)] text-[var(--accent-text)] flex items-center justify-center shrink-0 ml-2">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl hover:border-[var(--accent-spark)] hover:shadow-2xl transition-all cursor-pointer backdrop-blur-xl"
          title="Switch Color Palette (60-30-10)"
          aria-label="Switch Color Palette"
        >
          <Palette className="w-4 h-4 text-[var(--accent-spark)] group-hover:rotate-12 transition-transform duration-300" />
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-ink)]">Theme</span>
            {renderSwatch(
              paletteOption.colors.c60.hex,
              paletteOption.colors.c30.hex,
              paletteOption.colors.c10.hex,
              'sm'
            )}
          </div>
          <ChevronDown
            className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-[var(--accent-spark)]' : ''
            }`}
          />
        </button>
      </div>
    );
  }

  // Default Navbar Dropdown Variant
  return (
    <div ref={containerRef} className={`relative shrink-0 ${className}`}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent-spark)]/60 text-[var(--text-ink)] text-xs font-medium shadow-sm transition-all cursor-pointer whitespace-nowrap"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title="Choose a 60-30-10 Color Combination"
      >
        <Palette className="w-3.5 h-3.5 text-[var(--accent-spark)] shrink-0" />
        <span className="hidden md:inline font-semibold text-xs leading-none">
          {paletteOption.name.split('&')[0].trim()}
        </span>
        {renderSwatch(
          paletteOption.colors.c60.hex,
          paletteOption.colors.c30.hex,
          paletteOption.colors.c10.hex,
          'sm'
        )}
        <ChevronDown
          className={`w-3 h-3 text-[var(--text-muted)] transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-[var(--accent-spark)]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full right-0 mt-2.5 w-76 sm:w-84 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] p-2.5 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden"
            style={{
              boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 0.2), 0 2px 8px -2px rgba(0,0,0,0.06)',
            }}
            role="listbox"
          >
            {/* Header info */}
            <div className="px-2.5 py-2 border-b border-[var(--border-color)] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-ink)] flex items-center gap-1.5">
                  <Palette className="w-3 h-3 text-[var(--accent-spark)]" />
                  Color Palettes (60-30-10)
                </p>
                <p className="text-[10px] text-[var(--text-muted)] mt-0.5">
                  Select a curated editorial scheme
                </p>
              </div>
              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--accent-spark)]/12 text-[var(--accent-spark)] font-bold">
                6 Styles
              </span>
            </div>

            {/* List of 6 Themes */}
            <div className="mt-1.5 space-y-1 max-h-84 overflow-y-auto pr-0.5">
              {PALETTE_LIST.map((p) => {
                const isSelected = p.id === palette;
                return (
                  <button
                    key={p.id}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(p.id)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[var(--accent-spark)] bg-[var(--accent-spark)]/10 text-[var(--text-ink)] font-semibold shadow-sm'
                        : 'border-transparent hover:border-[var(--border-color)] hover:bg-[var(--bg-surface)] text-[var(--text-body)]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {renderSwatch(p.colors.c60.hex, p.colors.c30.hex, p.colors.c10.hex, 'sm')}
                      <div className="truncate">
                        <p className="text-xs font-semibold text-[var(--text-ink)] truncate leading-tight">
                          {p.name}
                        </p>
                        <p className="text-[10px] text-[var(--text-muted)] truncate leading-tight mt-0.5">
                          {p.colors.c60.label} &bull; {p.colors.c30.label} &bull; {p.colors.c10.label}
                        </p>
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-4 h-4 rounded-full bg-[var(--accent-spark)] text-[var(--accent-text)] flex items-center justify-center shrink-0 ml-1.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
