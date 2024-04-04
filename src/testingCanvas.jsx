import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";
import { CameraShake } from "@react-three/drei";
import { useControls } from "leva";
import { render, events, extend } from "@react-three/fiber";
import { Particles } from "./Particles";

extend(THREE);

const customRenderer = new THREE.WebGL1Renderer({
  antialias: true,
  alpha: true,
});

function TestingCanvas() {
  const props = useControls({
    focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
    speed: { value: 100, min: 0.1, max: 100, step: 0.1 },
    aperture: { value: 1.8, min: 1, max: 5.6, step: 0.1 },
    fov: { value: 20, min: 0, max: 200 },
    curl: { value: 0.25, min: 0.01, max: 0.5, step: 0.01 },
  });
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 45 }}
      linear={true}
      gl={customRenderer}
    >
      <Suspense fallback={null}>
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={0.5}
          zoomSpeed={0.1}
        />
        <CameraShake
          yawFrequency={1}
          maxYaw={0.05}
          pitchFrequency={1}
          maxPitch={0.05}
          rollFrequency={0.5}
          maxRoll={0.5}
          intensity={0.2}
        />
        <Particles {...props} />
      </Suspense>
    </Canvas>
  );
}

export default TestingCanvas;
