import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { WebGLBoundary } from './WebGLFallback';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { usePalette } from '../../context/PaletteContext';

const Particles: React.FC<{ count?: number }> = ({ count = 180 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const { paletteOption } = usePalette();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorChoices = [
      new THREE.Color(paletteOption.colors.c10.hex), // 10% Accent
      new THREE.Color(paletteOption.colors.c30.hex), // 30% Structure
      new THREE.Color(paletteOption.colors.c60.hex), // 60% Canvas
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 26;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;

      const chosenColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count, paletteOption]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
      // Mouse interaction
      pointsRef.current.position.x = THREE.MathUtils.damp(
        pointsRef.current.position.x,
        state.pointer.x * 0.8,
        1.5,
        delta
      );
      pointsRef.current.position.y = THREE.MathUtils.damp(
        pointsRef.current.position.y,
        state.pointer.y * 0.8,
        1.5,
        delta
      );
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        blending={THREE.NormalBlending}
      />
    </points>
  );
};

export const ParticleBackground: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
      <WebGLBoundary fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        >
          <Particles />
        </Canvas>
      </WebGLBoundary>
    </div>
  );
};
