"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const globeRef = useRef(null);
  const texture = useLoader(THREE.TextureLoader, "/texture/bumi3.jpg");
  const isCompact = useThree((state) => state.size.width < 640);

  useFrame((_, delta) => {
    if (globeRef.current) globeRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[isCompact ? 1.35 : 2, 96, 96]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function Bumi3d() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[min(82vw,600px)] w-[min(82vw,600px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.34)_0%,rgba(59,130,246,0.12)_45%,transparent_72%)] blur-2xl" />
      <Canvas
        className="relative z-10"
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        fallback={<div className="absolute inset-0 bg-transparent" />}
      >
        <directionalLight position={[0, 0, 3]} intensity={1.5} />
        <ambientLight intensity={0.75} />
        <Suspense fallback={null}>
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  );
}
