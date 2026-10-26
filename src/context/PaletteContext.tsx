/* Palette toggle context shared across the whole app */
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Palette = 'lilac' | 'pistachio';

interface PaletteCtx {
  palette: Palette;
  toggle: () => void;
}

const Ctx = createContext<PaletteCtx>({ palette: 'lilac', toggle: () => {} });

export const PaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPalette] = useState<Palette>(() => {
    return (localStorage.getItem('ed_palette') as Palette) || 'lilac';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('ed_palette', palette);
  }, [palette]);

  const toggle = () => setPalette(p => p === 'lilac' ? 'pistachio' : 'lilac');

  return <Ctx.Provider value={{ palette, toggle }}>{children}</Ctx.Provider>;
};

export const usePalette = () => useContext(Ctx);
