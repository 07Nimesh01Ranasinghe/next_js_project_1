// "use client";

// import * as React from 'react';
// import * as THREE from 'three';
// import { Canvas } from '@react-three/fiber';
// import { Text3D } from '@/components/ui/Text3D';
// import myFont from '@/public/fonts/helvetiker_regular.typeface.json';

// interface Text3DProps {
//     text: string; // Define a prop for passing the text
//   }

//   const Text_3D: React.FC<Text3DProps> = ({ text }) => {
//   return (
//     <Canvas camera={{ position: [-1, 0, 10] }} className='w-auto h-auto'>
//       {/* Ambient Light */}
//       <ambientLight intensity={0.1} />

//       {/* Main Light Source */}
//       <pointLight position={[10, 10, 14]} intensity={500} color="#ffd5fe" />
//       <pointLight position={[0, 0, 15]} intensity={10} color="#ff69b4" />

//       {/* Colored Lights for Shadow Effect */}
//       <pointLight position={[-10, -10, -10]} intensity={700} color="#ff69b4" /> 
//        {/* <pointLight position={[5, -5, -5]} intensity={230} color="#c2c2c2" /> */}
      

//       {/* <Text3D
//         font={myFont}
//         size={2}
//         height={0.5}
//         curveSegments={1}
//         bevelEnabled
//         bevelThickness={0.6}
//         bevelSize={0.1}
//         bevelSegments={10}
//         letterSpacing={0.1}
//         position={[-7.7, 0, 0]}
//       > */}
//       <Text3D
//         font={myFont}
//         size={1.3}
//         height={0.4}  // Reduced height to make it less bulky
//         curveSegments={40}
//         bevelEnabled
//         bevelThickness={0.1}
//         bevelSize={0.02}
//         bevelSegments={20}
//         letterSpacing={0.01}
//         position={[-5, 2, 1]}
//       >
//          {text}
//         <meshStandardMaterial
//           color="#CBACF9"  // Change this value to adjust text color 
//           roughness={0.5}   // Adjust roughness for surface texture 
//           metalness={0.7}   // Adjust metalness for a metallic look 
//         />
//       </Text3D>
//     </Canvas>
//   );
// }

// export default Text_3D;


// "use client";

// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Text3D, OrbitControls } from '@react-three/drei';

// export default function TechSoftwareText() {
//   return (
//     <div className="w-full h-screen">
//       <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
//         {/* Ambient and directional lights for better illumination */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />

//         <pointLight position={[5, 0, 0]} intensity={500} color="#CE93D8" />
//         <pointLight position={[-6, 0, 0]} intensity={500} color="#CE93D8" />

//         {/* OrbitControls for interactive rotation */}
//         <OrbitControls />

//         {/* Group to center the texts */}
//         <group position={[-5, 0, 0]}>
//           {/* "Tech" text */}
//           <Text3D
//             font="/fonts/helvetiker_regular.typeface.json"
//             size={1}
//             height={0.5}
//             bevelEnabled
//             bevelThickness={0.02}
//             bevelSize={0.01}
//             bevelSegments={5}
//             position={[-0.5, 0, 0]}
//           >
//             Dockyard
//             <meshStandardMaterial 
//             color="#9C27B0"
//             roughness={0.9}
//             metalness={0.6} />
//           </Text3D>

//           {/* "Software" text */}
//           <Text3D
//             font="/fonts/helvetiker_regular.typeface.json"
//             size={0.6}
//             height={0.3}
//             bevelEnabled
//             bevelThickness={0.02}
//             bevelSize={0.01}
//             bevelSegments={5}
//             position={[5.7, 0, 0]} // Adjust position based on estimation
//           >
//             Software
//             <meshStandardMaterial 
//             color="#CBACF9"
//             roughness={0.9}
//             metalness={0.6} />
//           </Text3D>
//         </group>
//       </Canvas>
//     </div>
//   );
// }

