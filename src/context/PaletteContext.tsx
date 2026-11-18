/* ============================================================
   PALETTE THEME CONTEXT — 60-30-10 CURATED COLOR SYSTEMS
   1. Custard Silk 60% / Bordeaux Lacquer 30% / Electric Sapphire 10%
   2. Swiss Cream 60% / Petrol Ink 30% / Persimmon Spark 10%
   3. Cream 60% / Coffee Brown 30% / Bubblegum Pink 10%
   4. Sage 60% / Forest Green 30% / Tangerine 10%
   5. Midnight Navy 60% / Powder Blue 30% / Sunflower Yellow 10%
   6. Cloud Grey 60% / Jet Black 30% / Electric Violet 10%
   ============================================================ */

import React, { createContext, useContext, useState, useEffect } from 'react';

export type PaletteId =
  | 'custard-silk'
  | 'swiss-cream'
  | 'cream-coffee'
  | 'sage-forest'
  | 'midnight-navy'
  | 'cloud-grey';

export interface PaletteOption {
  id: PaletteId;
  name: string;
  tagline: string;
  isDark?: boolean;
  colors: {
    c60: { label: string; hex: string };
    c30: { label: string; hex: string };
    c10: { label: string; hex: string };
  };
}

export const PALETTES: Record<PaletteId, PaletteOption> = {
  'custard-silk': {
    id: 'custard-silk',
    name: 'Custard Silk & Bordeaux',
    tagline: 'Custard Silk 60% • Bordeaux Lacquer 30% • Electric Sapphire 10%',
    isDark: false,
    colors: {
      c60: { label: 'Custard Silk', hex: '#FAF3E3' },
      c30: { label: 'Bordeaux Lacquer', hex: '#4A0E1C' },
      c10: { label: 'Electric Sapphire', hex: '#0D5BEB' },
    },
  },
  'swiss-cream': {
    id: 'swiss-cream',
    name: 'Swiss Cream & Petrol',
    tagline: 'Swiss Cream 60% • Petrol Ink 30% • Persimmon Spark 10%',
    isDark: false,
    colors: {
      c60: { label: 'Swiss Cream', hex: '#F7F5F0' },
      c30: { label: 'Petrol Ink', hex: '#18303D' },
      c10: { label: 'Persimmon Spark', hex: '#FF5E36' },
    },
  },
  'cream-coffee': {
    id: 'cream-coffee',
    name: 'Cream & Coffee',
    tagline: 'Cream 60% • Coffee Brown 30% • Bubblegum Pink 10%',
    isDark: false,
    colors: {
      c60: { label: 'Cream', hex: '#FAF5ED' },
      c30: { label: 'Coffee Brown', hex: '#4A3525' },
      c10: { label: 'Bubblegum Pink', hex: '#FF6584' },
    },
  },
  'sage-forest': {
    id: 'sage-forest',
    name: 'Sage & Forest Green',
    tagline: 'Sage 60% • Forest Green 30% • Tangerine 10%',
    isDark: false,
    colors: {
      c60: { label: 'Sage', hex: '#EFF4EF' },
      c30: { label: 'Forest Green', hex: '#1E3F2D' },
      c10: { label: 'Tangerine', hex: '#FF7A00' },
    },
  },
  'midnight-navy': {
    id: 'midnight-navy',
    name: 'Midnight Navy & Powder Blue',
    tagline: 'Midnight Navy 60% • Powder Blue 30% • Sunflower Yellow 10%',
    isDark: true,
    colors: {
      c60: { label: 'Midnight Navy', hex: '#0B132B' },
      c30: { label: 'Powder Blue', hex: '#8EBAE5' },
      c10: { label: 'Sunflower Yellow', hex: '#FFD100' },
    },
  },
  'cloud-grey': {
    id: 'cloud-grey',
    name: 'Cloud Grey & Jet Black',
    tagline: 'Cloud Grey 60% • Jet Black 30% • Electric Violet 10%',
    isDark: false,
    colors: {
      c60: { label: 'Cloud Grey', hex: '#ECEEF2' },
      c30: { label: 'Jet Black', hex: '#14171A' },
      c10: { label: 'Electric Violet', hex: '#8B5CF6' },
    },
  },
};

export const PALETTE_LIST = Object.values(PALETTES);

interface PaletteContextType {
  palette: PaletteId;
  paletteOption: PaletteOption;
  setPalette: (id: PaletteId) => void;
  nextPalette: () => void;
}

const PaletteContext = createContext<PaletteContextType>({
  palette: 'cloud-grey',
  paletteOption: PALETTES['cloud-grey'],
  setPalette: () => {},
  nextPalette: () => {},
});

const STORAGE_KEY = 'abisola_portfolio_palette_v3';

export const PaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPaletteState] = useState<PaletteId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as PaletteId;
      if (saved && PALETTES[saved]) return saved;
    } catch (_) {}
    return 'cloud-grey'; // Default to Cloud Grey (60% Cloud Grey, 30% Jet Black, 10% Electric Violet)
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-palette', palette);
    if (PALETTES[palette]?.isDark) {
      root.classList.add('palette-dark');
    } else {
      root.classList.remove('palette-dark');
    }
    try {
      localStorage.setItem(STORAGE_KEY, palette);
    } catch (_) {}
  }, [palette]);

  const setPalette = (id: PaletteId) => {
    if (PALETTES[id]) {
      setPaletteState(id);
    }
  };

  const nextPalette = () => {
    const keys = Object.keys(PALETTES) as PaletteId[];
    const currentIndex = keys.indexOf(palette);
    const nextIndex = (currentIndex + 1) % keys.length;
    setPaletteState(keys[nextIndex]);
  };

  const paletteOption = PALETTES[palette] || PALETTES['custard-silk'];

  return (
    <PaletteContext.Provider
      value={{
        palette,
        paletteOption,
        setPalette,
        nextPalette,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};

export const usePalette = () => useContext(PaletteContext);
