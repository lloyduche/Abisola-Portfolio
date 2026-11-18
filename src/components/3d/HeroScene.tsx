import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { WebGLBoundary } from './WebGLFallback';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

// ── Interactive Centerpiece Mesh ─────────────────────────────────────────────
const HologramCenterpiece: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Mouse damping target
    const targetX = state.pointer.x * 0.45;
    const targetY = state.pointer.y * 0.45;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetX + state.clock.elapsedTime * 0.15,
        2.5,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -targetY,
        2.5,
        delta
      );
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.2;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.3;
      wireframeRef.current.rotation.z += delta * 0.25;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.5;
      ring1Ref.current.rotation.y += delta * 0.3;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.6;
      ring2Ref.current.rotation.z -= delta * 0.4;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.7;
      ring3Ref.current.rotation.x -= delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Gem / Icosahedron Core */}
      <mesh ref={coreRef} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshPhysicalMaterial
          color="#00F2FE"
          emissive="#0284C7"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.65}
          ior={1.5}
        />
      </mesh>

      {/* Outer Wireframe Geodesic Lattice */}
      <mesh ref={wireframeRef} scale={1.55}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0369A1"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Futuristic Gimbal Cyber Ring 1 (Cyan) */}
      <mesh ref={ring1Ref} scale={2.05}>
        <torusGeometry args={[1, 0.02, 16, 80]} />
        <meshStandardMaterial
          color="#00F2FE"
          emissive="#00F2FE"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Futuristic Gimbal Cyber Ring 2 (Electric Sky) */}
      <mesh ref={ring2Ref} scale={2.4}>
        <torusGeometry args={[1, 0.015, 16, 80]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#0284C7"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Futuristic Outer Ring 3 (Neon Indigo / Violet) */}
      <mesh ref={ring3Ref} scale={2.75}>
        <torusGeometry args={[1, 0.012, 16, 80]} />
        <meshStandardMaterial
          color="#818CF8"
          emissive="#6366F1"
          emissiveIntensity={0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Floating Orbital Satellites */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.8}>
        <mesh position={[2.2, 1.4, -0.6]} scale={0.32}>
          <octahedronGeometry />
          <meshStandardMaterial color="#00F2FE" emissive="#0284C7" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1.8} floatIntensity={1.4}>
        <mesh position={[-2.3, -1.2, 0.8]} scale={0.28}>
          <tetrahedronGeometry />
          <meshStandardMaterial color="#FBBF24" emissive="#D97706" emissiveIntensity={0.5} metalness={0.7} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[1.8, -1.8, 1.2]} scale={0.24}>
          <icosahedronGeometry />
          <meshStandardMaterial color="#F472B6" emissive="#DB2777" emissiveIntensity={0.4} metalness={0.7} />
        </mesh>
      </Float>
    </group>
  );
};

// ── Particle Field ────────────────────────────────────────────────────────────
const HeroParticles: React.FC = () => {
  const count = 90;
  const pointsRef = useRef<THREE.Points>(null);

  const [positions] = React.useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  });

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#38BDF8"
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
};

// ── Hero Scene Canvas ─────────────────────────────────────────────────────────
export const HeroScene: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/30 to-indigo-500/20 blur-xl animate-pulse" />
      </div>
    );
  }

  return (
    <WebGLBoundary>
      <div className="w-full h-[380px] sm:h-[460px] lg:h-[520px] relative pointer-events-auto">
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          dpr={[1, 1.8]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-6, 4, 3]} intensity={2.2} color="#00F2FE" />
          <pointLight position={[6, -4, -2]} intensity={2.5} color="#3B82F6" />
          <pointLight position={[0, -5, 4]} intensity={1.5} color="#818CF8" />

          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
              <HologramCenterpiece />
            </Float>
            <HeroParticles />
          </Suspense>
        </Canvas>
      </div>
    </WebGLBoundary>
  );
};
