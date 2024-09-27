"use client";

import * as React from 'react';
// import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { Text3D } from '@/components/ui/Text3D';
import myFont from '@/public/fonts/helvetiker_regular.typeface.json';

interface Text3DProps {
    text: string; // Define a prop for passing the text
  }

  const Text_3D: React.FC<Text3DProps> = ({ text }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }} className='w-fit h-fit'>
      {/* Ambient Light */}
      <ambientLight intensity={0.4} />

      {/* Main Light Source */}
      <pointLight position={[10, 10, 14]} intensity={500} color="#ffd5fe" />
      <pointLight position={[0, 0, 15]} intensity={300} color="#ff69b4" />

      {/* Colored Lights for Shadow Effect */}
      <pointLight position={[-10, -10, -10]} intensity={700} color="#ff69b4" />
      <pointLight position={[5, -5, -5]} intensity={230} color="#c2c2c2" />
      

      <Text3D
        font={myFont}
        size={2}
        height={0.5}
        curveSegments={20}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.1}
        bevelSegments={10}
        letterSpacing={0.1}
        position={[-7.7, 0, 0]}
      >
         {text}
        <meshStandardMaterial
          color="#CBACF9"  // Change this value to adjust text color 
          roughness={0.5}   // Adjust roughness for surface texture 
          metalness={0.7}   // Adjust metalness for a metallic look 
        />
      </Text3D>
    </Canvas>
  );
}

export default Text_3D;


