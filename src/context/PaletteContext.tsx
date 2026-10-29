/* Palette toggle context — Fitting Editorial Paper: Ivory Vellum & Carbon Nocturne */
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Palette = 'ivory' | 'nocturne';

interface PaletteCtx {
  palette: Palette;
  toggle: () => void;
}

const Ctx = createContext<PaletteCtx>({ palette: 'ivory', toggle: () => {} });

export const PaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPalette] = useState<Palette>(() => {
    const saved = localStorage.getItem('ed_palette');
    if (saved === 'nocturne' || saved === 'pistachio') return 'nocturne';
    return 'ivory';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('ed_palette', palette);
  }, [palette]);

  const toggle = () => setPalette((p) => (p === 'ivory' ? 'nocturne' : 'ivory'));

  return <Ctx.Provider value={{ palette, toggle }}>{children}</Ctx.Provider>;
};

export const usePalette = () => useContext(Ctx);
