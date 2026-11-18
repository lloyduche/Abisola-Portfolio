import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { WebGLBoundary } from './WebGLFallback';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface FloatingShapeProps {
  type: 'icosahedron' | 'torusKnot' | 'octahedron' | 'dodecahedron';
  color?: string;
  wireframe?: boolean;
  scale?: number;
}

const FloatingMesh: React.FC<FloatingShapeProps> = ({
  type,
  color = '#FF5E36',
  wireframe = false,
  scale = 1.2,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <mesh ref={meshRef} scale={scale}>
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {type === 'torusKnot' && <torusKnotGeometry args={[0.7, 0.22, 64, 16]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        {type === 'dodecahedron' && <dodecahedronGeometry args={[1, 0]} />}

        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.35}
          metalness={0.8}
          roughness={0.2}
          wireframe={wireframe}
        />
      </mesh>
    </Float>
  );
};

export const FloatingScene: React.FC<{
  type?: 'icosahedron' | 'torusKnot' | 'octahedron' | 'dodecahedron';
  color?: string;
  wireframe?: boolean;
  className?: string;
  scale?: number;
}> = ({
  type = 'torusKnot',
  color = '#00F2FE',
  wireframe = false,
  className = 'w-36 h-36',
  scale = 1.2,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) return null;

  return (
    <div className={`relative pointer-events-none ${className}`}>
      <WebGLBoundary fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-3, -3, 2]} intensity={2} color={color} />
          <FloatingMesh type={type} color={color} wireframe={wireframe} scale={scale} />
        </Canvas>
      </WebGLBoundary>
    </div>
  );
};
