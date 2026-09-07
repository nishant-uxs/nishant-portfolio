"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useThreeState } from "@/providers/ThreeProvider";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";

function Network() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const arr: THREE.Vector3[] = [];
    for (let i = 0; i < 18; i++) {
      arr.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 4.5,
          (Math.random() - 0.5) * 3.2,
          (Math.random() - 0.5) * 3,
        ),
      );
    }
    return arr;
  }, []);

  const linePositions = useMemo(() => {
    const positions: number[] = [];
    points.forEach((a, i) => {
      points.forEach((b, j) => {
        if (i >= j) return;
        if (a.distanceTo(b) < 1.8) {
          positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      });
    });
    return new Float32Array(positions);
  }, [points]);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.02;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh>
          <icosahedronGeometry args={[1.1, 0]} />
          <meshBasicMaterial color="#4F7DFF" wireframe transparent opacity={0.45} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[1.8, -0.4, -0.6]}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshBasicMaterial color="#7B61FF" wireframe transparent opacity={0.5} />
        </mesh>
      </Float>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#9bb6ff" transparent opacity={0.8} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4F7DFF" transparent opacity={0.28} />
      </lineSegments>
    </group>
  );
}

export function SceneCanvas() {
  const { enabled } = useThreeState();
  const reduced = useReducedMotion();
  const mobile = useIsMobile();

  if (!enabled || reduced) return null;

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-70">
      <Canvas
        dpr={[1, mobile ? 1.25 : 1.75]}
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Network />
      </Canvas>
    </div>
  );
}
