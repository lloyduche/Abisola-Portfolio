import React, { useState, useEffect, ReactNode } from 'react';

interface WebGLBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
}

export const WebGLBoundary: React.FC<WebGLBoundaryProps> = ({ children, fallback }) => {
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    setHasWebGL(isWebGLAvailable());
  }, []);

  if (!hasWebGL) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="w-full h-full flex items-center justify-center bg-slate-950/40 rounded-3xl border border-cyan-500/20 p-8 text-center">
        <div className="space-y-2">
          <div className="text-cyan-400 font-mono text-sm uppercase tracking-wider">3D Core Active</div>
          <p className="text-xs text-slate-400">Hardware accelerated graphics optimized for modern browsers</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
