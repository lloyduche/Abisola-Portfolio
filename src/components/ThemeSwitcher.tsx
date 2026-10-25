import React, { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';

export type ThemeName = 'olive' | 'terracotta' | 'midnight' | 'berry';

interface ThemeOption {
  id: ThemeName;
  name: string;
  preview: string;
  dotColor: string;
}

const THEMES: ThemeOption[] = [
  { id: 'olive', name: 'Editorial Olive', preview: 'Warm linen & terracotta', dotColor: '#C85A32' },
  { id: 'terracotta', name: 'Warm Amber', preview: 'Deep roast & terracotta', dotColor: '#D4583B' },
  { id: 'midnight', name: 'Midnight Iris', preview: 'High-contrast luxury', dotColor: '#4338CA' },
  { id: 'berry', name: 'Playful Berry', preview: 'Whakee classic pink', dotColor: '#D93A72' },
];

export const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('olive');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('abisola_theme') as ThemeName;
    if (saved && ['olive', 'terracotta', 'midnight', 'berry'].includes(saved)) {
      setTheme(saved);
    } else {
      setTheme('olive');
    }
  }, []);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
    localStorage.setItem('abisola_theme', theme);
    const root = document.documentElement;
    if (theme === 'olive') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-semibold rounded-full border-2 border-theme-border bg-theme-card text-theme-ink hover:bg-theme-ribbon transition-all shadow-sm"
        aria-label="Change Color Palette"
        title="Change Palette"
      >
        <Palette className="w-4 h-4 text-theme-accent" />
        <span className="hidden sm:inline">Theme:</span>
        <span
          className="w-3 h-3 rounded-full border border-theme-border"
          style={{
            backgroundColor: THEMES.find((t) => t.id === currentTheme)?.dotColor,
          }}
        />
        <span className="capitalize">{currentTheme}</span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-2xl bg-theme-card border-2 border-theme-border shadow-xl p-2 animate-fadeIn z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="px-3 py-1.5 text-xs font-bold text-theme-muted uppercase tracking-wider">
            Select Color Palette
          </div>
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                currentTheme === t.id
                  ? 'bg-theme-ribbon text-theme-ink font-bold'
                  : 'hover:bg-theme-bg text-theme-ink'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-theme-border"
                  style={{ backgroundColor: t.dotColor }}
                />
                <span>{t.name}</span>
              </div>
              {currentTheme === t.id && <span className="text-xs text-theme-accent">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
