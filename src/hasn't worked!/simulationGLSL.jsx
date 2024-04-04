// DOESNT WORK WITH VITE

// import React, { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import { createGLSL } from "gl-react";
// import { Shaders, Node, GLSL } from "gl-react";

// const shaders = Shaders.create({
//   simulation: {
//     frag: GLSL`
//       precision highp float;
//       varying vec2 uv;
//       uniform sampler2D positions;
//       uniform float uTime;
//       uniform float uCurlFreq;
//       #pragma glslify: curl = require(glsl-curl-noise2)
//       #pragma glslify: noise = require(glsl-noise/classic/3d.glsl)
//       void main() {
//         float t = uTime * 0.015;
//         vec3 pos = texture2D(positions, uv).rgb;
//         vec3 curlPos = texture2D(positions, uv).rgb;
//         pos = curl(pos * uCurlFreq + t);
//         curlPos = curl(curlPos * uCurlFreq + t);
//         curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
//         curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
//         curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
//         curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
//         gl_FragColor = vec4(mix(pos, curlPos, noise(pos + t)), 1.0);
//       }
//     `,
//   },
// });

// const SimulationGLSL = createGLSL(shaders.simulation);

// function SimulationGLReact({ positions, uTime, uCurlFreq }) {
//   const uniforms = useMemo(
//     () => ({ positions, uTime, uCurlFreq }),
//     [positions, uTime, uCurlFreq]
//   );

//   const uTimeRef = useRef(0);

//   useFrame((state, delta) => {
//     uTimeRef.current += delta;
//   });

//   return <SimulationGLSL {...uniforms} />;
// }

// export default SimulationGLReact;
