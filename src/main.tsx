import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PaletteProvider } from './context/PaletteContext';

// Ensure legacy keys and dark mode class are cleared
if (typeof document !== 'undefined') {
  document.documentElement.classList.remove('dark');
  try {
    localStorage.removeItem('theme');
    // Remove old palette storage key — new default is cloud-grey (v3)
    localStorage.removeItem('abisola_portfolio_palette_v2');
    localStorage.removeItem('cabinet_palette');
  } catch (_) {}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </React.StrictMode>
);
