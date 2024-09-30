// "use client";

// import * as React from 'react';
// import * as THREE from 'three';
// import { extend, MeshProps, ReactThreeFiber } from '@react-three/fiber';
// import { useMemo } from 'react';
// import { mergeVertices, TextGeometry, TextGeometryParameters } from 'three-stdlib';
// import { useFont } from '@react-three/drei';
// import { Font } from 'three-stdlib';

// extend({ TextGeometry });

// /* eslint-disable @typescript-eslint/no-namespace */
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
//     }
//   }
// }
// /* eslint-enable @typescript-eslint/no-namespace */

// type Text3DProps = {
//   font: string | THREE.Font;
//   letterSpacing?: number;
//   lineHeight?: number;
//   bevelSegments?: number; 
//   smooth?: number;
// } & Omit<TextGeometryParameters, 'font'> &
//   MeshProps;

// const types = ['string', 'number'];
// const getTextFromChildren = (children: React.ReactNode) => {
//   let label = '';
//   const rest: React.ReactNode[] = [];
//   React.Children.forEach(children, (child) => {
//     if (types.includes(typeof child)) label += child + '';
//     else rest.push(child);
//   });
//   return [label, ...rest];
// };

// export const Text3D = React.forwardRef<THREE.Mesh, React.PropsWithChildren<Text3DProps>>(
//   (
//     {
//       font: _font,
//       letterSpacing = 0,
//       lineHeight = 1,
//       size = 1,
//       height = 0.2,
//       bevelThickness = 0.1,
//       bevelSize = 0.01,
//       bevelEnabled = false,
//       bevelOffset = 0,
//       bevelSegments = 4,
//       curveSegments = 8,
//       smooth,
//       children,
//       ...props
//     },
//     fref
//   ) => {
//     const ref = React.useRef<THREE.Mesh>(null!);
//     const font = useFont(_font);

//     const opts = useMemo(() => {
//       return {
//         font,
//         size,
//         height,
//         bevelThickness,
//         bevelSize,
//         bevelEnabled,
//         bevelSegments,
//         bevelOffset,
//         curveSegments,
//         letterSpacing,
//         lineHeight,
//       };
//     }, [
//       font,
//       size,
//       height,
//       bevelThickness,
//       bevelSize,
//       bevelEnabled,
//       bevelSegments,
//       bevelOffset,
//       curveSegments,
//       letterSpacing,
//       lineHeight,
//     ]);

//     const [label, ...rest] = useMemo(() => getTextFromChildren(children), [children]);
//     const args = React.useMemo(() => [label, opts], [label, opts]);

//     React.useLayoutEffect(() => {
//       if (smooth && ref.current) {
//         ref.current.geometry = mergeVertices(ref.current.geometry, smooth);
//         ref.current.geometry.computeVertexNormals();
//       }
//     }, [args, smooth]);

//     React.useImperativeHandle(fref, () => ref.current, []);

//     return (
//       <mesh {...props} ref={ref}>
//         <textGeometry args={args} />
//         {rest}
//       </mesh>
//     );
//   }
// );

// // Assign displayName for better debugging
// Text3D.displayName = 'Text3D';



// "use client";

// import * as React from 'react';
// import { extend, MeshProps, ReactThreeFiber } from '@react-three/fiber';
// import { useMemo } from 'react';
// import { mergeVertices, TextGeometry, TextGeometryParameters, FontLoader } from 'three-stdlib';
// import { useFont } from '@react-three/drei';
// import * as THREE from 'three';

// extend({ TextGeometry });

// /* eslint-disable @typescript-eslint/no-namespace */
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       textGeometry: ReactThreeFiber.Object3DNode<TextGeometry, typeof TextGeometry>;
//     }
//   }
// }
// /* eslint-enable @typescript-eslint/no-namespace */

// type Text3DProps = {
//   font: string | ReturnType<FontLoader['parse']>;
//   letterSpacing?: number;
//   lineHeight?: number;
//   bevelSegments?: number;
//   smooth?: number;
// } & Omit<TextGeometryParameters, 'font'> &
//   MeshProps;

// const types = ['string', 'number'];
// const getTextFromChildren = (children: React.ReactNode) => {
//   let label = '';
//   const rest: React.ReactNode[] = [];
//   React.Children.forEach(children, (child) => {
//     if (types.includes(typeof child)) label += child + '';
//     else rest.push(child);
//   });
//   return [label, ...rest];
// };

// export const Text3D = React.forwardRef<THREE.Mesh, React.PropsWithChildren<Text3DProps>>(
//   (
//     {
//       font: _font,
//       letterSpacing = 0,
//       lineHeight = 1,
//       size = 1,
//       height = 0.2,
//       bevelThickness = 0.1,
//       bevelSize = 0.01,
//       bevelEnabled = false,
//       bevelOffset = 0,
//       bevelSegments = 0,
//       curveSegments = 0,
//       smooth,
//       children,
//       ...props
//     },
//     fref
//   ) => {
//     const ref = React.useRef<THREE.Mesh>(null!);
//     const font = useFont(_font);

//     const opts = useMemo(() => {
//       return {
//         font,
//         size,
//         height,
//         bevelThickness,
//         bevelSize,
//         bevelEnabled,
//         bevelSegments,
//         bevelOffset,
//         curveSegments,
//         letterSpacing,
//         lineHeight,
//       };
//     }, [
//       font,
//       size,
//       height,
//       bevelThickness,
//       bevelSize,
//       bevelEnabled,
//       bevelSegments,
//       bevelOffset,
//       curveSegments,
//       letterSpacing,
//       lineHeight,
//     ]);

//     const [label, ...rest] = useMemo(() => getTextFromChildren(children), [children]);
//     const args = React.useMemo(() => [label, opts], [label, opts]);

//     React.useLayoutEffect(() => {
//       if (smooth && ref.current) {
//         ref.current.geometry = mergeVertices(ref.current.geometry, smooth);
//         ref.current.geometry.computeVertexNormals();
//       }
//     }, [args, smooth]);

//     React.useImperativeHandle(fref, () => ref.current, []);

//     return (
//       <mesh {...props} ref={ref}>
//         <textGeometry args={args} />
//         {rest}
//       </mesh>
//     );
//   }
// );

// // Assign displayName for better debugging
// Text3D.displayName = 'Text3D';
