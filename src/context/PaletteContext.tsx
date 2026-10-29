/* Palette toggle context — The Writer's Cabinet: Burgundy Bookcloth & Nocturne Obsidian */
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Palette = 'burgundy' | 'ivory' | 'nocturne';

interface PaletteCtx {
  palette: Palette;
  toggle: () => void;
  togglePalette: () => void;
}

const Ctx = createContext<PaletteCtx>({
  palette: 'burgundy',
  toggle: () => {},
  togglePalette: () => {},
});

export const PaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPalette] = useState<Palette>(() => {
    const saved = localStorage.getItem('cabinet_palette');
    if (saved === 'nocturne') return 'nocturne';
    return 'burgundy';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('cabinet_palette', palette);
  }, [palette]);

  const toggle = () => setPalette((p) => (p === 'nocturne' ? 'burgundy' : 'nocturne'));

  return (
    <Ctx.Provider value={{ palette, toggle, togglePalette: toggle }}>
      {children}
    </Ctx.Provider>
  );
};

export const usePalette = () => useContext(Ctx);
