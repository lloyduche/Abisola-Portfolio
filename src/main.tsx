import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PaletteProvider } from './context/PaletteContext';

// Ensure legacy dark mode class is cleared
if (typeof document !== 'undefined') {
  document.documentElement.classList.remove('dark');
  try {
    localStorage.removeItem('theme');
  } catch (_) {}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </React.StrictMode>
);
