// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";
// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
//   }
// }

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// // const aspect = 1.2;
// const cameraZ = 300;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   initialPosition?: {
//     lat: number;
//     lng: number;
//   };
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }

// let numbersOfRings = [0];

// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<
//     | {
//         size: number;
//         order: number;
//         color: (t: number) => string;
//         lat: number;
//         lng: number;
//       }[]
//     | null
//   >(null);

//   const globeRef = useRef<ThreeGlobe | null>(null);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial() as unknown as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data;
//     let points = [];
//     for (let i = 0; i < arcs.length; i++) {
//       const arc = arcs[i];
//       const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     // remove duplicates for same lat and lng
//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) =>
//           ["lat", "lng"].every(
//             (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
//           )
//         ) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor((e) => {
//           return defaultProps.polygonColor;
//         });
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
//       .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
//       .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
//       .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
//       .arcColor((e: any) => (e as { color: string }).color)
//       .arcAltitude((e) => {
//         return (e as { arcAlt: number }).arcAlt * 1;
//       })
//       .arcStroke((e) => {
//         return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
//       })
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e) => (e as { order: number }).order * 1)
//       .arcDashGap(15)
//       .arcDashAnimateTime((e) => defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => (e as { color: string }).color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e: any) => (t: any) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   };

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [globeRef.current, globeData]);

//   return (
//     <>
//       <threeGlobe ref={globeRef} />
//     </>
//   );
// }

// export function WebGLRendererConfig() {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0xffaaff, 0);
//   }, []);

//   return null;
// }

// export function World(props: WorldProps) {
//   const { globeConfig } = props;
//   const { size } = useThree();
//   const scene = new Scene();
//   const aspectRatio = size.width / size.height;
//   scene.fog = new Fog(0xffffff, 400, 2000);
//   return (
//     <Canvas camera={new PerspectiveCamera(50, aspectRatio, 180, 1800)}>
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe {...props} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate={true}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// }

// export function hexToRgb(hex: string) {
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });

//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr;
// }


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { Canvas, extend, useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";

// // Extend ThreeGlobe so that it's usable as a Three.js object
// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const cameraZ = 300;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   initialPosition?: {
//     lat: number;
//     lng: number;
//   };
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }

// let numbersOfRings = [0];

// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<
//     {
//       size: number;
//       order: number;
//       color: (t: number) => string;
//       lat: number;
//       lng: number;
//     }[] | null
//   >(null);

//   const globeRef = useRef<ThreeGlobe | null>(null);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial() as unknown as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data;
//     let points = [];
//     for (let i = 0; i < arcs.length; i++) {
//       const arc = arcs[i];
//       const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     // remove duplicates for same lat and lng
//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) =>
//           ["lat", "lng"].every(
//             (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
//           )
//         ) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor(() => defaultProps.polygonColor);
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => (d as { startLat: number }).startLat)
//       .arcStartLng((d) => (d as { startLng: number }).startLng)
//       .arcEndLat((d) => (d as { endLat: number }).endLat)
//       .arcEndLng((d) => (d as { endLng: number }).endLng)
//       .arcColor((e: any) => (e as { color: string }).color)
//       .arcAltitude((e) => (e as { arcAlt: number }).arcAlt)
//       .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e) => (e as { order: number }).order)
//       .arcDashGap(15)
//       .arcDashAnimateTime(() => defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => (e as { color: string }).color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e: any) => (t: any) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   };

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [globeRef.current, globeData]);

//   return <threeGlobe ref={globeRef} />;
// }

// function SceneSetup({ globeConfig, data }: WorldProps) {
//   const { size } = useThree(); // useThree is used within the Canvas context

//   const scene = new Scene();
//   const aspectRatio = size.width / size.height;
//   scene.fog = new Fog(0xffffff, 400, 2000);

//   return (
//     <>
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe globeConfig={globeConfig} data={data} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate={globeConfig.autoRotate}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </>
//   );
// }

// export function World(props: WorldProps) {
//   return (
//     <Canvas>
//       <SceneSetup {...props} />
//     </Canvas>
//   );
// }

// export function hexToRgb(hex: string) {
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });

//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr;
// }


// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { Color, Scene, Fog, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";

// // Extend ThreeGlobe so that it's usable as a Three.js object
// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const cameraZ = 300;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   initialPosition?: {
//     lat: number;
//     lng: number;
//   };
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }

// let numbersOfRings = [0];

// // Move defaultProps outside the component if it doesn't depend on props or state
// const defaultProps = {
//   pointSize: 1,
//   atmosphereColor: "#b3d1ff",
//   showAtmosphere: true,
//   atmosphereAltitude: 5,
// //   polygonColor: "rgba(255,255,255,0.7)",
// polygonColor: "#cce0ff",
//   globeColor: "#b3d1ff",
//   emissive: "#e6f0ff",
//   emissiveIntensity: 0.1,
//   shininess: 0.9,
//   arcTime: 2000,
//   arcLength: 0.9,
//   rings: 1,
//   maxRings: 3,
// };

// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<
//     {
//       size: number;
//       order: number;
//       color: (t: number) => string;
//       lat: number;
//       lng: number;
//     }[] | null
//   >(null);

//   const globeRef = useRef<ThreeGlobe | null>(null);

//   // Merge defaultProps with globeConfig
//   const mergedProps = { ...defaultProps, ...globeConfig };

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial() as unknown as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(mergedProps.globeColor);
//     globeMaterial.emissive = new Color(mergedProps.emissive);
//     globeMaterial.emissiveIntensity = mergedProps.emissiveIntensity || 0.1;
//     globeMaterial.shininess = mergedProps.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data;
//     const points = arcs.flatMap((arc) => {
//       const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
//       return [
//         {
//           size: mergedProps.pointSize,
//           order: arc.order,
//           color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//           lat: arc.startLat,
//           lng: arc.startLng,
//         },
//         {
//           size: mergedProps.pointSize,
//           order: arc.order,
//           color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//           lat: arc.endLat,
//           lng: arc.endLng,
//         },
//       ];
//     });

//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) =>
//           ["lat", "lng"].every(
//             (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
//           )
//         ) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   // Move startAnimation above the useEffect where it's used
//   const startAnimation = useCallback(() => {
//     if (!globeRef.current || !globeData) return;
  
//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => d.startLat)
//       .arcStartLng((d) => d.startLng)
//       .arcEndLat((d) => d.endLat)
//       .arcEndLng((d) => d.endLng)
//       .arcColor((e: Position) => e.color)
//       .arcAltitude((e: Position) => e.arcAlt)
//       .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
//       .arcDashLength(mergedProps.arcLength)
//       .arcDashInitialGap((e) => e.order)
//       .arcDashGap(15)
//       .arcDashAnimateTime(() => mergedProps.arcTime);
  
//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => e.color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);
  
//     globeRef.current
//       .ringsData([])
//       .ringColor((e: Position) => e.color) // Updated line
//       .ringMaxRadius(mergedProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (mergedProps.arcTime * mergedProps.arcLength) / mergedProps.rings
//       );
//   }, [
//     globeRef,
//     globeData,
//     data,
//     mergedProps.arcLength,
//     mergedProps.arcTime,
//     mergedProps.maxRings,
//     mergedProps.rings,
//   ]);
  

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // No need to add `globeRef.current` as a dependency

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(mergedProps.showAtmosphere)
//         .atmosphereColor(mergedProps.atmosphereColor)
//         .atmosphereAltitude(mergedProps.atmosphereAltitude)
//         .hexPolygonColor(() => mergedProps.polygonColor);
//       startAnimation();
//     }
//   }, [
//     globeData,
//     startAnimation,
//     mergedProps.showAtmosphere,
//     mergedProps.atmosphereColor,
//     mergedProps.atmosphereAltitude,
//     mergedProps.polygonColor,
//   ]);

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [globeData, data.length]);

//   return <threeGlobe ref={globeRef} />;
// }

// function SceneSetup({ globeConfig, data }: WorldProps) {
// //   const { size } = useThree();
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);

//   // Merge defaultProps with globeConfig
//   const mergedProps = { ...defaultProps, ...globeConfig };

//   return (
//     <>
//       <ambientLight color={mergedProps.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={mergedProps.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={mergedProps.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={mergedProps.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe globeConfig={globeConfig} data={data} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate={mergedProps.autoRotate}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </>
//   );
// }

// export function World(props: WorldProps) {
//   return (
//     <Canvas>
//       <SceneSetup {...props} />
//     </Canvas>
//   );
// }

// export function hexToRgb(hex: string) {
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });

//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr;
// }



// Optimized ui/globe.tsx
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { useThree, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";
// import { GlobeConfig, Position, WorldProps } from "../types/globeTypes";

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const aspect = 1.2;
// const cameraZ = 300;
// let numbersOfRings = [0];

// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<Position[] | null>(null);
//   const globeRef = useRef<ThreeGlobe | null>(null);

//   const defaultProps: GlobeConfig = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;
//     const globeMaterial = globeRef.current.globeMaterial() as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(defaultProps.globeColor);
//     globeMaterial.emissive = new Color(defaultProps.emissive);
//     globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
//     globeMaterial.shininess = defaultProps.shininess;
//   };

//   const _buildData = () => {
//     const points = data.flatMap(arc => {
//       const rgb = hexToRgb(arc.color);
//       return [
//         { size: defaultProps.pointSize, order: arc.order, color: `rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, 1)`, lat: arc.startLat, lng: arc.startLng },
//         { size: defaultProps.pointSize, order: arc.order, color: `rgba(${rgb?.r}, ${rgb?.g}, ${rgb?.b}, 1)`, lat: arc.endLat, lng: arc.endLng }
//       ];
//     });

//     // Remove duplicates for same lat and lng
//     const filteredPoints = points.filter((v, i, a) => a.findIndex(v2 => v2.lat === v.lat && v2.lng === v.lng) === i);
//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor(() => defaultProps.polygonColor);
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;
//     globeRef.current
//       .arcsData(data)
//       .arcStartLat(d => d.startLat)
//       .arcStartLng(d => d.startLng)
//       .arcEndLat(d => d.endLat)
//       .arcEndLng(d => d.endLng)
//       .arcColor(e => e.color)
//       .arcAltitude(e => e.arcAlt)
//       .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap(e => e.order)
//       .arcDashGap(15)
//       .arcDashAnimateTime(() => defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor(e => e.color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor(e => t => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod((defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings);
//   };

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;
//     const interval = setInterval(() => {
//       numbersOfRings = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
//       globeRef.current.ringsData(globeData.filter((d, i) => numbersOfRings.includes(i)));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [globeRef.current, globeData]);

//   return <threeGlobe ref={globeRef} />;
// }

// export function World(props: WorldProps) {
//   const { globeConfig } = props;
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);
//   return (
//     <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight color={globeConfig.directionalLeftLight} position={new Vector3(-400, 100, 400)} />
//       <directionalLight color={globeConfig.directionalTopLight} position={new Vector3(-200, 500, 200)} />
//       <pointLight color={globeConfig.pointLight} position={new Vector3(-200, 500, 200)} intensity={0.8} />
//       <Globe {...props} />
//       <OrbitControls enablePan={false} enableZoom={false} minDistance={cameraZ} maxDistance={cameraZ} autoRotateSpeed={1} autoRotate={true} minPolarAngle={Math.PI / 3.5} maxPolarAngle={Math.PI - Math.PI / 3} />
//     </Canvas>
//   );
// }

// export function hexToRgb(hex: string) {
//   const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
//   const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : null;
// }

// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr = new Set<number>();
//   while (arr.size < count) {
//     arr.add(Math.floor(Math.random() * (max - min)) + min);
//   }
//   return Array.from(arr);
// }



// "use client";
// import { useEffect, useRef, useState, useCallback, useMemo } from "react";
// import { Color, Scene, Fog, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import {  Object3DNode, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";
// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
//   }
// }

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// // const aspect = 1.2;
// const cameraZ = 400;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   initialPosition?: {
//     lat: number;
//     lng: number;
//   };
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }

// let numbersOfRings = [0];

// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<
//     | {
//         size: number;
//         order: number;
//         color: (t: number) => string;
//         lat: number;
//         lng: number;
//       }[]
//     | null
//   >(null);

//   const globeRef = useRef<ThreeGlobe | null>(null);

//   const defaultProps = useMemo(() => ({
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   }),[globeConfig]);

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [_buildData, _buildMaterial]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial() as unknown as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data;
//     const points = [];
//     for (let i = 0; i < arcs.length; i++) {
//       const arc = arcs[i];
//       const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     // remove duplicates for same lat and lng
//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) =>
//           ["lat", "lng"].every(
//             (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
//           )
//         ) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor(() => {
//           return defaultProps.polygonColor;
//         });
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = useCallback (() => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
//       .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
//       .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
//       .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
//       .arcColor((e: Position) => e.color)

//       .arcAltitude((e) => {
//         return (e as { arcAlt: number }).arcAlt * 1;
//       })
//       .arcStroke(() => {
//         return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
//       })
      
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e) => (e as { order: number }).order * 1)
//       .arcDashGap(15)
//       .arcDashAnimateTime(() => defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => (e as { color: string }).color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e: any) => (t: any) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   },[globeRef.current, globeData, data, defaultProps]);

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [ globeData,
//     defaultProps.showAtmosphere,
//     defaultProps.atmosphereColor,
//     defaultProps.atmosphereAltitude,
//     defaultProps.polygonColor,
//     startAnimation,]);

//   return (
//     <>
//       <threeGlobe ref={globeRef} scale={[1.5, 1.5, 1.5]} />
//     </>
//   );
// }

// // export function WebGLRendererConfig() {
// //   const { gl, size } = useThree();

// //   useEffect(() => {
// //     gl.setPixelRatio(window.devicePixelRatio);
// //     gl.setSize(size.width, size.height);
// //     gl.setClearColor(0xffaaff, 0);
// //   }, []);

// //   return null;
// // }

// export function World(props: WorldProps) {
//   const { globeConfig } = props;
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);
//   return (
//     <Canvas scene={scene} camera={{
//       position: [0, 0, cameraZ],
//     fov: 50,
//     near: 180,
//     far: 1800,
//   }}
//       >
//       {/* <WebGLRendererConfig /> */}
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.1}
//       />
//       <Globe {...props}/>
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate={true}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// }

// export function hexToRgb(hex: string) {
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });

//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr;
// }


"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";
declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
// const aspect = 1.2;
const cameraZ = 400;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

export function Globe({ globeConfig, data }: WorldProps) {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.startLat,
        lng: arc.startLng,
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: arc.endLat,
        lng: arc.endLng,
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
          )
        ) === i
    );

    setGlobeData(filteredPoints);
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        // .hexPolygonColor(() => {
        //   return defaultProps.polygonColor;
        // });
        .hexPolygonColor(() => "#ffffff");

        
      startAnimation();
    }
  }, [globeData]);

  type RingDataItem = {
    color: (t: number) => string;
    // If there are other properties in your data, include them here
  };
  
  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
      .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
      .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
      .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
      .arcColor((e: Position) => e.color)
      .arcAltitude((e) => {
        return (e as { arcAlt: number }).arcAlt * 1;
      })
      .arcStroke(() => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((e) => e.order * 1)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(data)
      .pointColor((e) => e.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
    .ringsData([])
    .ringColor((e: RingDataItem) => (t: number) => e.color(t))
    .ringMaxRadius(defaultProps.maxRings)
    .ringPropagationSpeed(RING_PROPAGATION_SPEED)
    .ringRepeatPeriod(
      (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
    );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );

      globeRef.current.ringsData(
        globeData.filter((d, i) => numbersOfRings.includes(i))
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, []);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas 
    scene={scene} 
    camera={{
      position: [0, 0, cameraZ],
      fov: 50,
      near: 180,
      far: 1800,
    }}
      >
      {/* <WebGLRendererConfig /> */}
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

