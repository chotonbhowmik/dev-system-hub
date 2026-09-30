import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleCloud({ color }: { color: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const positions = useMemo(() => {
    const count = 520;
    const values = new Float32Array(count * 3);

    for (let index = 0; index < count; index += 1) {
      const radius = 0.8 + seededRandom(index + 1) * 2.1;
      const angle = seededRandom(index + 211) * Math.PI * 2;
      const spread = (seededRandom(index + 907) - 0.5) * 2.5;
      values[index * 3] = Math.cos(angle) * radius + 1.25;
      values[index * 3 + 1] = spread;
      values[index * 3 + 2] = Math.sin(angle) * radius - 1.5;
    }

    return values;
  }, []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 0.35;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 0.25;
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  useFrame(({ clock }, rawDelta) => {
    const group = groupRef.current;
    if (!group) return;

    const delta = Math.min(rawDelta, 0.05);
    const damping = 1 - Math.exp(-2.8 * delta);
    group.rotation.y = THREE.MathUtils.lerp(
      group.rotation.y,
      pointer.current.x + clock.elapsedTime * 0.025,
      damping,
    );
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.current.y, damping);
    group.position.y = Math.sin(clock.elapsedTime * 0.22) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={color}
          size={0.026}
          sizeAttenuation
          transparent
          opacity={0.62}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export function HeroParticleField() {
  const [primaryColor, setPrimaryColor] = useState<string>();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const primary = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim();
    setCanAnimate(!reducedMotion);
    setPrimaryColor(primary ? `hsl(${primary})` : undefined);
  }, []);

  if (!canAnimate || !primaryColor) return null;

  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
      <Canvas
        dpr={1}
        flat
        camera={{ position: [0, 0, 5], fov: 52 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <ParticleCloud color={primaryColor} />
      </Canvas>
    </div>
  );
}