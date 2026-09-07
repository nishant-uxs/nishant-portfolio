"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";

function MorphBlob() {
  const mesh = useRef<THREE.Mesh>(null);
  const light = useRef<THREE.PointLight>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.12 + mouse.current.y * 0.15;
      mesh.current.rotation.y = t * 0.18 + mouse.current.x * 0.2;
      mesh.current.position.x = THREE.MathUtils.lerp(
        mesh.current.position.x,
        mouse.current.x * 0.35,
        0.04,
      );
      mesh.current.position.y = THREE.MathUtils.lerp(
        mesh.current.position.y,
        mouse.current.y * 0.2,
        0.04,
      );
    }
    if (light.current) {
      light.current.position.x = mouse.current.x * 3;
      light.current.position.y = mouse.current.y * 2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight ref={light} intensity={2.2} distance={12} color="#4F7DFF" />
      <pointLight position={[-3, -2, -2]} intensity={1.2} color="#7B61FF" />
      <mesh ref={mesh} scale={1.55}>
        <sphereGeometry args={[1, 96, 96]} />
        <MeshDistortMaterial
          color="#c8c8c8"
          emissive="#1a2240"
          emissiveIntensity={0.35}
          roughness={0.22}
          metalness={0.55}
          distort={0.42}
          speed={2.2}
        />
      </mesh>
      <mesh scale={1.72}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#4F7DFF" wireframe transparent opacity={0.08} />
      </mesh>
    </>
  );
}

export function HeroBlob() {
  const reduced = useReducedMotion();
  const mobile = useIsMobile();

  if (reduced) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle_at_30%_30%,#d0d0d0,#4F7DFF55_45%,transparent_70%)] blur-[2px]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        dpr={[1, mobile ? 1.2 : 1.6]}
        camera={{ position: [0, 0, 4.2], fov: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <MorphBlob />
      </Canvas>
    </div>
  );
}
