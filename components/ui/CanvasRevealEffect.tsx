// "use client";
// import { cn } from "@/lib/utils";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import React, { useMemo, useRef } from "react";
// import * as THREE from "three";

// export const CanvasRevealEffect = ({
//   animationSpeed = 0.4,
//   opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
//   colors = [[0, 255, 255]],
//   containerClassName,
//   dotSize,
//   showGradient = true,
// }: {
//   animationSpeed?: number;
//   opacities?: number[];
//   colors?: number[][];
//   containerClassName?: string;
//   dotSize?: number;
//   showGradient?: boolean;
// }) => {
//   return (
//     <div className={cn("h-full relative bg-white w-full", containerClassName)}>
//       <div className="h-full w-full">
//         <DotMatrix
//           colors={colors ?? [[0, 255, 255]]}
//           dotSize={dotSize ?? 3}
//           opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
//           shader={`
//             float animation_speed_factor = ${animationSpeed.toFixed(1)};
//             float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
//             opacity *= step(intro_offset, u_time * animation_speed_factor);
//             opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
//           `}
//           center={["x", "y"]}
//         />
//       </div>
//       {showGradient && (
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
//       )}
//     </div>
//   );
// };

// interface DotMatrixProps {
//   colors?: number[][];
//   opacities?: number[];
//   totalSize?: number;
//   dotSize?: number;
//   shader?: string;
//   center?: ("x" | "y")[];
// }

// const DotMatrix: React.FC<DotMatrixProps> = ({
//   colors = [[0, 0, 0]],
//   opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
//   totalSize = 4,
//   dotSize = 2,
//   shader = "",
//   center = ["x", "y"],
// }) => {
//   const uniforms: Uniforms = useMemo(() => {
//     let colorsArray = [
//       colors[0],
//       colors[0],
//       colors[0],
//       colors[0],
//       colors[0],
//       colors[0],
//     ];
//     if (colors.length === 2) {
//       colorsArray = [
//         colors[0],
//         colors[0],
//         colors[0],
//         colors[1],
//         colors[1],
//         colors[1],
//       ];
//     } else if (colors.length === 3) {
//       colorsArray = [
//         colors[0],
//         colors[0],
//         colors[1],
//         colors[1],
//         colors[2],
//         colors[2],
//       ];
//     }

//     return {
//       u_colors: {
//         value: colorsArray.map((color) => [
//           color[0] / 255,
//           color[1] / 255,
//           color[2] / 255,
//         ]),
//         type: "uniform3fv",
//       },
//       u_opacities: {
//         value: opacities,
//         type: "uniform1fv",
//       },
//       u_total_size: {
//         value: totalSize,
//         type: "uniform1f",
//       },
//       u_dot_size: {
//         value: dotSize,
//         type: "uniform1f",
//       },
//     };
//   }, [colors, opacities, totalSize, dotSize]);

//   return (
//     <Shader
//       source={`
//         precision mediump float;
//         in vec2 fragCoord;

//         uniform float u_time;
//         uniform float u_opacities[10];
//         uniform vec3 u_colors[6];
//         uniform float u_total_size;
//         uniform float u_dot_size;
//         uniform vec2 u_resolution;
//         out vec4 fragColor;
//         float PHI = 1.61803398874989484820459;
//         float random(vec2 xy) {
//             return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
//         }
//         float map(float value, float min1, float max1, float min2, float max2) {
//             return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
//         }
//         void main() {
//             vec2 st = fragCoord.xy;
//             ${
//               center.includes("x")
//                 ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));"
//                 : ""
//             }
//             ${
//               center.includes("y")
//                 ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));"
//                 : ""
//             }
//             float opacity = step(0.0, st.x);
//             opacity *= step(0.0, st.y);

//             vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));

//             float frequency = 5.0;
//             float show_offset = random(st2);
//             float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
//             opacity *= u_opacities[int(rand * 10.0)];
//             opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
//             opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

//             vec3 color = u_colors[int(show_offset * 6.0)];

//             ${shader}

//             fragColor = vec4(color, opacity);
//             fragColor.rgb *= fragColor.a;
//         }`}
//       uniforms={uniforms}
//       maxFps={60}
//     />
//   );
// };

// type Uniforms = {
//   [key: string]: {
//     value: number[] | number[][] | number;
//     type: string;
//   };
// };

// const ShaderMaterial = ({
//   source,
//   uniforms,
//   maxFps = 60,
// }: {
//   source: string;
//   maxFps?: number;
//   uniforms: Uniforms;
// }) => {
//   const { size } = useThree();
//   const ref = useRef<THREE.Mesh>();
//   let lastFrameTime = 0;

//   useFrame(({ clock }) => {
//     if (!ref.current) return;
//     const timestamp = clock.getElapsedTime();
//     if (timestamp - lastFrameTime < 1 / maxFps) {
//       return;
//     }
//     lastFrameTime = timestamp;

//     const material: any = ref.current.material;
//     const timeLocation = material.uniforms.u_time;
//     timeLocation.value = timestamp;
//   });

//   const getUniforms = () => {
//     const preparedUniforms: any = {};

//     for (const uniformName in uniforms) {
//       const uniform: any = uniforms[uniformName];

//       switch (uniform.type) {
//         case "uniform1f":
//           preparedUniforms[uniformName] = { value: uniform.value, type: "1f" };
//           break;
//         case "uniform3f":
//           preparedUniforms[uniformName] = {
//             value: new THREE.Vector3().fromArray(uniform.value),
//             type: "3f",
//           };
//           break;
//         case "uniform1fv":
//           preparedUniforms[uniformName] = { value: uniform.value, type: "1fv" };
//           break;
//         case "uniform3fv":
//           preparedUniforms[uniformName] = {
//             value: uniform.value.map((v: number[]) =>
//               new THREE.Vector3().fromArray(v)
//             ),
//             type: "3fv",
//           };
//           break;
//         case "uniform2f":
//           preparedUniforms[uniformName] = {
//             value: new THREE.Vector2().fromArray(uniform.value),
//             type: "2f",
//           };
//           break;
//         default:
//           console.error(`Invalid uniform type for '${uniformName}'.`);
//           break;
//       }
//     }

//     preparedUniforms["u_time"] = { value: 0, type: "1f" };
//     preparedUniforms["u_resolution"] = {
//       value: new THREE.Vector2(size.width * 2, size.height * 2),
//     }; // Initialize u_resolution
//     return preparedUniforms;
//   };

//   // Shader material
//   const material = useMemo(() => {
//     const materialObject = new THREE.ShaderMaterial({
//       vertexShader: `
//       precision mediump float;
//       in vec2 coordinates;
//       uniform vec2 u_resolution;
//       out vec2 fragCoord;
//       void main(){
//         float x = position.x;
//         float y = position.y;
//         gl_Position = vec4(x, y, 0.0, 1.0);
//         fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
//         fragCoord.y = u_resolution.y - fragCoord.y;
//       }
//       `,
//       fragmentShader: source,
//       uniforms: getUniforms(),
//       glslVersion: THREE.GLSL3,
//       blending: THREE.CustomBlending,
//       blendSrc: THREE.SrcAlphaFactor,
//       blendDst: THREE.OneFactor,
//     });

//     return materialObject;
//   }, [size.width, size.height, source]);

//   return (
//     <mesh ref={ref as any}>
//       <planeGeometry args={[2, 2]} />
//       <primitive object={material} attach="material" />
//     </mesh>
//   );
// };

// const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => {
//   return (
//     <Canvas className="absolute inset-0  h-full w-full">
//       <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
//     </Canvas>
//   );
// };

// interface ShaderProps {
//   source: string;
//   uniforms: Uniforms;
//   maxFps?: number;
// }



// "use client";
// import { cn } from "@/lib/utils";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import React, { useMemo, useRef } from "react";
// import * as THREE from "three";

// export const CanvasRevealEffect = ({
//   animationSpeed = 0.4,
//   opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
//   colors = [[0, 255, 255]],
//   containerClassName,
//   dotSize,
//   showGradient = true,
// }: {
//   animationSpeed?: number;
//   opacities?: number[];
//   colors?: number[][];
//   containerClassName?: string;
//   dotSize?: number;
//   showGradient?: boolean;
// }) => {
//   return (
//     <div className={cn("h-full relative bg-white w-full", containerClassName)}>
//       <div className="h-full w-full">
//         <DotMatrix
//           colors={colors ?? [[0, 255, 255]]}
//           dotSize={dotSize ?? 3}
//           opacities={opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]}
//           shader={`
//             float animation_speed_factor = ${animationSpeed.toFixed(1)};
//             float intro_offset = distance(u_resolution / 2.0 / u_total_size, st2) * 0.01 + (random(st2) * 0.15);
//             opacity *= step(intro_offset, u_time * animation_speed_factor);
//             opacity *= clamp((1.0 - step(intro_offset + 0.1, u_time * animation_speed_factor)) * 1.25, 1.0, 1.25);
//           `}
//           center={["x", "y"]}
//         />
//       </div>
//       {showGradient && (
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
//       )}
//     </div>
//   );
// };

// interface DotMatrixProps {
//   colors?: number[][];
//   opacities?: number[];
//   totalSize?: number;
//   dotSize?: number;
//   shader?: string;
//   center?: ("x" | "y")[];
// }

// const DotMatrix: React.FC<DotMatrixProps> = ({
//   colors = [[0, 0, 0]],
//   opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
//   totalSize = 4,
//   dotSize = 2,
//   shader = "",
//   center = ["x", "y"],
// }) => {
//   const uniforms = useMemo(() => {
//     let colorsArray: number[][] = [
//       colors[0],
//       colors[0],
//       colors[0],
//       colors[0],
//       colors[0],
//       colors[0],
//     ];
//     if (colors.length === 2) {
//       colorsArray = [
//         colors[0],
//         colors[0],
//         colors[0],
//         colors[1],
//         colors[1],
//         colors[1],
//       ];
//     } else if (colors.length === 3) {
//       colorsArray = [
//         colors[0],
//         colors[0],
//         colors[1],
//         colors[1],
//         colors[2],
//         colors[2],
//       ];
//     }

//     return {
//       u_colors: {
//         value: colorsArray.map((color) => [
//           color[0] / 255,
//           color[1] / 255,
//           color[2] / 255,
//         ]),
//       },
//       u_opacities: {
//         value: opacities,
//       },
//       u_total_size: {
//         value: totalSize,
//       },
//       u_dot_size: {
//         value: dotSize,
//       },
//     };
//   }, [colors, opacities, totalSize, dotSize]);

//   return (
//     <Shader
//       source={`
//         precision mediump float;
//         in vec2 fragCoord;

//         uniform float u_time;
//         uniform float u_opacities[10];
//         uniform vec3 u_colors[6];
//         uniform float u_total_size;
//         uniform float u_dot_size;
//         uniform vec2 u_resolution;
//         out vec4 fragColor;
//         float PHI = 1.61803398874989484820459;
//         float random(vec2 xy) {
//             return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
//         }
//         float map(float value, float min1, float max1, float min2, float max2) {
//             return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
//         }
//         void main() {
//             vec2 st = fragCoord.xy;
//             ${center.includes("x") ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));" : ""}
//             ${center.includes("y") ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));" : ""}
//             float opacity = step(0.0, st.x);
//             opacity *= step(0.0, st.y);

//             vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));

//             float frequency = 5.0;
//             float show_offset = random(st2);
//             float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
//             opacity *= u_opacities[int(rand * 10.0)];
//             opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
//             opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));

//             vec3 color = u_colors[int(show_offset * 6.0)];

//             ${shader}

//             fragColor = vec4(color, opacity);
//             fragColor.rgb *= fragColor.a;
//         }`}
//       uniforms={uniforms}
//       maxFps={60}
//     />
//   );
// };

// type Uniforms = {
//   [key: string]: {
//     value: number[] | THREE.Vector2 | THREE.Vector3 | number[][];
//   };
// };

// const ShaderMaterial = ({
//   source,
//   uniforms,
//   maxFps = 60,
// }: {
//   source: string;
//   maxFps?: number;
//   uniforms: Uniforms;
// }) => {
//   const { size } = useThree();
//   const ref = useRef<THREE.Mesh>();
//   let lastFrameTime = 0;

//   useFrame(({ clock }) => {
//     if (!ref.current) return;
//     const timestamp = clock.getElapsedTime();
//     if (timestamp - lastFrameTime < 1 / maxFps) {
//       return;
//     }
//     lastFrameTime = timestamp;

//     const material = ref.current.material as THREE.ShaderMaterial;
//     material.uniforms.u_time.value = timestamp;
//   });

//   const getUniforms = useMemo(() => {
//     const preparedUniforms: Uniforms = {};

//     for (const uniformName in uniforms) {
//       const uniform = uniforms[uniformName];

//       switch (uniformName) {
//         case "u_colors":
//           preparedUniforms[uniformName] = {
//             value: uniform.value.map((v) => new THREE.Vector3().fromArray(v)),
//           };
//           break;
//         case "u_opacities":
//         case "u_total_size":
//         case "u_dot_size":
//           preparedUniforms[uniformName] = {
//             value: uniform.value,
//           };
//           break;
//         default:
//           console.error(`Invalid uniform type for '${uniformName}'.`);
//           break;
//       }
//     }

//     preparedUniforms["u_time"] = { value: 0 };
//     preparedUniforms["u_resolution"] = {
//       value: new THREE.Vector2(size.width * 2, size.height * 2),
//     };
//     return preparedUniforms;
//   }, [uniforms, size.width, size.height]);

//   return (
//     <mesh ref={ref as any}>
//       <planeGeometry args={[2, 2]} />
//       <shaderMaterial
//         vertexShader={`
//           precision mediump float;
//           in vec2 coordinates;
//           uniform vec2 u_resolution;
//           out vec2 fragCoord;
//           void main(){
//             float x = position.x;
//             float y = position.y;
//             gl_Position = vec4(x, y, 0.0, 1.0);
//             fragCoord = (position.xy + vec2(1.0)) * 0.5 * u_resolution;
//             fragCoord.y = u_resolution.y - fragCoord.y;
//           }
//         `}
//         fragmentShader={source}
//         uniforms={getUniforms}
//         glslVersion={THREE.GLSL3}
//         blending={THREE.CustomBlending}
//         blendSrc={THREE.SrcAlphaFactor}
//         blendDst={THREE.OneFactor}
//       />
//     </mesh>
//   );
// };

// const Shader: React.FC<ShaderProps> = ({ source, uniforms, maxFps = 60 }) => {
//   return (
//     <Canvas className="absolute inset-0 h-full w-full">
//       <ShaderMaterial source={source} uniforms={uniforms} maxFps={maxFps} />
//     </Canvas>
//   );
// };

// interface ShaderProps {
//   source: string;
//   uniforms: Uniforms;
//   maxFps?: number;
// }





"use client";
import { cn } from "@/lib/utils";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef, useCallback } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <Canvas className="h-full w-full">
        <DotMatrix
          colors={colors}
          dotSize={dotSize}
          opacities={opacities}
          animationSpeed={animationSpeed}
          showGradient={showGradient}
        />
      </Canvas>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-p-500 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
  animationSpeed?: number;
  showGradient?: boolean;
}

type Uniforms = {
  u_colors: {
    value: THREE.Vector3[];
    type: string;
  };
  u_opacities: {
    value: number[];
    type: string;
  };
  u_total_size: {
    value: number;
    type: string;
  };
  u_dot_size: {
    value: number;
    type: string;
  };
  [key: string]: {
    value: number | number[] | THREE.Vector2 | THREE.Vector3 | THREE.Vector3[];
    type: string;
  };
};

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  shader = "",
  center = ["x", "y"],
  // animationSpeed,
  // showGradient,
}) => {
  const { size } = useThree();

  const uniforms = useMemo<Uniforms>(() => {
    let colorsArray: THREE.Vector3[] = colors.map(
      (color) => new THREE.Vector3(color[0] / 255, color[1] / 255, color[2] / 255)
    );

    if (colors.length === 2) {
      colorsArray = [
        colorsArray[0],
        colorsArray[0],
        colorsArray[0],
        colorsArray[1],
        colorsArray[1],
        colorsArray[1],
      ];
    } else if (colors.length === 3) {
      colorsArray = [
        colorsArray[0],
        colorsArray[0],
        colorsArray[1],
        colorsArray[1],
        colorsArray[2],
        colorsArray[2],
      ];
    }

    return {
      u_colors: {
        value: colorsArray,
        type: "uniform3fv",
      },
      u_opacities: {
        value: opacities,
        type: "uniform1fv",
      },
      u_total_size: {
        value: totalSize,
        type: "uniform1f",
      },
      u_dot_size: {
        value: dotSize,
        type: "uniform1f",
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  const getUniforms = useCallback((): Uniforms => {
    const preparedUniforms: Uniforms = {
      u_colors: uniforms.u_colors,
      u_opacities: uniforms.u_opacities,
      u_total_size: uniforms.u_total_size,
      u_dot_size: uniforms.u_dot_size,
    };

    preparedUniforms["u_time"] = { value: 0, type: "uniform1f" };
    preparedUniforms["u_resolution"] = {
      value: new THREE.Vector2(size.width * 2, size.height * 2),
      type: "uniform2f",
    };

    return preparedUniforms;
  }, [size, uniforms]);

  return (
    <Shader
      source={`precision mediump float;
        in vec2 fragCoord;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;
        float PHI = 1.61803398874989484820459;
        float random(vec2 xy) {
            return fract(tan(distance(xy * PHI, xy) * 0.5) * xy.x);
        }
        float map(float value, float min1, float max1, float min2, float max2) {
            return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
        }
        void main() {
            vec2 st = fragCoord.xy;
            ${
              center.includes("x")
                ? "st.x -= abs(floor((mod(u_resolution.x, u_total_size) - u_dot_size) * 0.5));"
                : ""
            }
            ${
              center.includes("y")
                ? "st.y -= abs(floor((mod(u_resolution.y, u_total_size) - u_dot_size) * 0.5));"
                : ""
            }
            float opacity = step(0.0, st.x);
            opacity *= step(0.0, st.y);
            vec2 st2 = vec2(int(st.x / u_total_size), int(st.y / u_total_size));
            float frequency = 5.0;
            float show_offset = random(st2);
            float rand = random(st2 * floor((u_time / frequency) + show_offset + frequency) + 1.0);
            opacity *= u_opacities[int(rand * 10.0)];
            opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.x / u_total_size));
            opacity *= 1.0 - step(u_dot_size / u_total_size, fract(st.y / u_total_size));
            vec3 color = u_colors[int(show_offset * 6.0)];
            ${shader}
            fragColor = vec4(color, opacity);
            fragColor.rgb *= fragColor.a;
        }`}
      uniforms={getUniforms()}
      maxFps={60}
    />
  );
};

const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  maxFps?: number;
  uniforms: Uniforms;
}) => {
  const { size } = useThree();
  const ref = useRef<THREE.Mesh>(null); 

  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) {
      return;
    }
    lastFrameTime = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    const timeLocation = material.uniforms.u_time;
    timeLocation.value = timestamp;
  });

  const material = useMemo(() => {
    const materialObject = new THREE.ShaderMaterial({
      vertexShader: `...`, 
      fragmentShader: source,
      uniforms,
      glslVersion: THREE.GLSL3,
      blending: THREE.CustomBlending,
      blendSrc: THREE.SrcAlphaFactor,
      blendDst: THREE.OneFactor,
    });

    return materialObject;
  }, [source, uniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[size.width, size.height]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const Shader = React.memo(ShaderMaterial);
