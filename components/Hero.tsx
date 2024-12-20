
//working section
// import React from 'react'
// import { Spotlight } from './ui/Spotlight'
// // import { TextGenerateEffect } from './ui/text-generate-effect'
// // import MagicButton from './ui/MagicButton'
// // import { FaLocationArrow } from 'react-icons/fa'
// // import { GlobeDemo } from './GlobeDemo'


// const Hero = () => {
//   return (
//     <div id="hero" className='relative pb-20 pt-36 h-screen'>
//         <div className=" top-5 left-5 z-[100] p-3  shadow-lg">
//           <div className="flex flex-col items-end leading-tight text-black-100">
//             <span className="text-2xl font-bold ">Dockyard</span>
//             <span className="text-xl font-semibold">Software</span>
//           </div>
//         </div>

//         <div>
//             <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='purple'/> 
//             <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
//             <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
//             <Spotlight className='top-40 left-130 h-[80vh] w-[50vw]' fill='blue'/>
//         </div>

//         <div className="h-screen w-full bg-white bg-grid-purple/[0.2] flex items-center justify-center absolute top-0 left-0">
//             <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
//         </div>

//         {/* 3D Component */}
//         {/* <div className="absolute inset-0 flex  items-center justify-center z--30 mt-52">
//             <GlobeDemo/>
//         </div> */}

        

//         {/* <div className='flex justify-center relative md:mt-[-120px] lg:mt-[-40px] z-10'>
            
//             <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mt-0'>
                
                
//                 <TextGenerateEffect 
//                     className='text-center md:text-[10px] lg:text-[50px] md:text-xl lg:text-6xl'
//                     // words='Transforming Concepts Into Seamless User Experiences'
//                     words='Designing Digital Solutions That Simplify Your Life'
//                 />

//                 <p className='text-center text-black-100 md:tracking-wider mb-0 text-sm md:text-lg lg:text-2xl'>
//                     Hey, We are Dockyard Software
//                 </p>
//                 <a href='#projects' className='justify-center md:mt-[-5px] lg:mt-0'>
//                     <MagicButton
//                         title="Our Works"
//                         icon={<FaLocationArrow/>}
//                         position='right'
//                     />
//                 </a>
//             </div>
//         </div> */}
//     </div>
//   )
// }

// export default Hero

//------------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Spotlight } from './ui/Spotlight';
// import { TextGenerateEffect } from './ui/text-generate-effect';
// import MagicButton from './ui/MagicButton';
// import { FaLocationArrow } from 'react-icons/fa';

// const Hero = () => {
//   return (
//     <div id="hero" className='fixed inset-0 h-screen z-0 flex flex-col items-center justify-center'>
//       <div className="fixed top-5 left-5 z-[100] p-3 rounded-3xl shadow-lg">
//         <div className="flex flex-col items-end leading-tight">
//           <span className="text-2xl font-bold font-[YourFontFamily]">Dockyard</span>
//           <span className="text-xl font-semibold font-[YourFontFamily]">Software</span>
//         </div>
//       </div>

//       {/* Spotlight effects */}
//       <div>
//         <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='purple' /> 
//         <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
//         <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
//         <Spotlight className='top-40 left-130 h-[80vh] w-[50vw]' fill='blue' />
//       </div>

//       <div className="h-screen w-full bg-white bg-grid-purple/[0.2] flex items-center justify-center absolute top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//       </div>

//       <div className='flex justify-center relative my-20 z-10'>
//         <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
//           <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
//             Dynamic Web Magic with Dockyard Software
//           </h2>
          
//           <TextGenerateEffect 
//             className='text-center text-[40px] md:text-5xl lg:text-6xl'
//             words='Transforming Concepts Into Seamless User Experiences'
//           />

//           <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
//             Hai, We are, Dockyard Software
//           </p>
//           <a href='#about'>
//             <MagicButton
//               title="Show Work"
//               icon={<FaLocationArrow />}
//               position='right'
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;




// New change part

import React from 'react';
import { Spotlight } from './ui/Spotlight';
import './MirrorText.css';
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => {
  return (
    <div id="hero" className='relative pb-20 pt-36 h-screen'>
      <div className=" top-5 left-5 z-[100] p-3 shadow-lg">
        <div className="flex flex-col items-end leading-tight text-black-100">
          <span className="text-2xl font-bold">Dockyard</span>
          <span className="text-xl font-semibold">Software</span>
        </div>
      </div>

      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='purple' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        <Spotlight className='top-40 left-130 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div className="h-screen w-full bg-white bg-grid-purple/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col items-center justify-center h-full -mt-16">
         {/* Mirror Text with animation */}
        <motion.h1
          id="dockyard-text"
          data-text="Dockyard"
          className="effect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 1 }}
        >
          Dockyard
        </motion.h1>
        <motion.h1
          id="software-text"
          data-text="Software"
          className="effect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 8, delay: 1 }}
        >
          Software
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;