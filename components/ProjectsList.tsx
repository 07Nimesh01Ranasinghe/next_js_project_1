// "use client";
// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
// import { allProjects } from "@/data/index"; // adjust the path based on your folder structure
// import Image from 'next/image';

// const ProjectsList = () => {
//   return (
//     <section className="flex flex-col items-center space-y-12 py-12">
//       {allProjects.map((project) => (
//         <ProjectCard key={project.id} project={project} />
//       ))}
//     </section>
//   );
// };

// const ProjectCard = ({ project }: { project: any }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: 'easeOut' },
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={cardVariants}
//       className="bg-white rounded-lg shadow-md p-6 max-w-lg w-full mx-auto"
//     >
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
//       <ul className="mb-4 space-y-2 text-gray-600">
//         {[project.des1, project.des2, project.des3, project.des4, project.des5, project.des6, project.des7].map((desc, index) => (
//           <li key={index} className="flex items-start space-x-2">
//             <span className="text-blue-500">•</span>
//             <span>{desc}</span>
//           </li>
//         ))}
//       </ul>
//       <div className="flex flex-wrap gap-2">
//         {project.icon.map((techIcon: { id: number; react?: string; dotNet?: string }) => (
//           <Image
//             key={techIcon.id}
//             src={techIcon.react || techIcon.dotNet}
//             alt="Tech Icon"
//             width={30}
//             height={30}
//             className="w-8 h-8"
//           />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectsList;



// components/Projects.tsx


// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC } from "react";
// import Image from 'next/image';

// const ProjectsList: FC = () => {
//   return (
//     <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
//       {allProjects.map((project) => (
//         <motion.section
//           key={project.id}
//           className="h-screen snap-start flex flex-col items-center justify-center p-8"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -50 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-4xl font-bold">{project.title}</h1>
//           <div className="mt-4">
//             <ul className="list-disc text-left">
//               <li>{project.des1}</li>
//               <li>{project.des2}</li>
//               <li>{project.des3}</li>
//               <li>{project.des4}</li>
//               <li>{project.des5}</li>
//               <li>{project.des6}</li>
//             </ul>
//           </div>
//           <div className="mt-4 flex space-x-4">
//             {project.icon.map((icon) => (
//               <Image
//                 key={icon.id}
//                 src={icon.img}
//                 width={30}
//                 height={30}
//                 alt=""
//                 className="w-8 h-8"
//               />
//             ))}
//           </div>
//         </motion.section>
//       ))}
//     </div>
//   );
// };

// export default ProjectsList;





// "use client";
// import { allProjects } from "@/data/index";
// import { AnimatePresence, motion } from "framer-motion";
// import { FC } from "react";
// import Image from 'next/image';

// const ProjectsList: FC = () => {
//   return (
//     <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
//       <AnimatePresence mode="wait">
//       {allProjects.map((project) => {
//           // Combine the descriptions into an array for easier mapping
//           const descriptions = [
//             project.des1,
//             project.des2,
//             project.des3,
//             project.des4,
//             project.des5,
//             project.des6,
//             //project.des7, // Include des7 if it exists
//           ].filter(Boolean); // Remove undefined values in case des7 doesn't exist

//           return (
//             <motion.section
//               key={project.id}
//               className="h-screen snap-start flex flex-col items-center justify-center p-8"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 1.5 }}
//             >

//               {/* Background Icons */}
//               {project.bgIcon && project.bgIcon.map((icon, index) => (
//                 <motion.div
//                   key={icon.id}
//                   className="absolute"
//                   initial={{ opacity: 0, rotate: -180, scale: 0 }}
//                   whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
//                   transition={{ duration: 1, delay: index * 0.2 }}
//                   style={{
//                     top: icon.top,
//                     left: icon.left,
//                   }}
//                 >
//                   <Image
//                     src={icon.img}
//                     width={50}
//                     height={50}
//                     alt="Background Icon"
//                   />
//                 </motion.div>
//               ))}

//               <h1 className="text-black-100 text-4xl font-bold text-center mb-5">{project.title}</h1>
//               <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {descriptions.map((description, index) => (
//                   <div
//                     key={index}
//                     className="inline-block text-center bg-purple-500 text-p-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
//                   >
//                     {description}
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-8 flex space-x-4">
//               {project.icon.map((icon, index) => (
//                   <motion.div
//                     key={icon.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <Image
//                       src={icon.img}
//                       width={40}
//                       height={40}
//                       alt="Technology Icon"
//                       // className="w-8 h-8"
//                     />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>
//           );
//         })}
//       </AnimatePresence>
      
//     </div>
//   );
// };

// export default ProjectsList;


"use client";
import { allProjects } from "@/data/index";
import { motion } from "framer-motion";
import { FC } from "react";
import Image from 'next/image';

// Variant definitions for Framer Motion animations
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },    // Initial state when the section is hidden
  visible: { opacity: 1, y: 0 },    // State when the section is visible
};

const bgIconVariants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 }, // Initial state for bgIcons
  visible: { opacity: 1, rotate: 0, scale: 1 },   // State when bgIcons are visible
};

const techIconVariants = {
  hidden: { opacity: 0, y: 20 },    // Initial state for tech icons
  visible: { opacity: 1, y: 0 },    // State when tech icons are visible
};

const ProjectsList: FC = () => {
  return (
    <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
      {allProjects.map((project) => {
        const descriptions = [
          project.des1,
          project.des2,
          project.des3,
          project.des4,
          project.des5,
          project.des6,
        ].filter(Boolean);

        return (
          <motion.section
            key={project.id}
            className="h-screen snap-start flex flex-col items-center justify-center p-8 relative"
            variants={sectionVariants}
            initial="hidden"
            // initial={false}
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.5 }}
          >
            {/* Background Icons */}
            {project.bgIcon && project.bgIcon.map((icon, index) => (
              <motion.div
                key={icon.id}
                className="absolute"
                variants={bgIconVariants}
                transition={{ duration: 1, delay: index * 0.2 }}
                style={{
                  top: icon.top,
                  left: icon.left,
                }}
              >
                <Image
                  src={icon.img}
                  width={50}
                  height={50}
                  alt="Background Icon"
                />
              </motion.div>
            ))}

            {/* Project Title */}
            <h1 className="text-black-100 text-4xl font-bold text-center mb-5 lg:text-5xl">{project.title}</h1>

            {/* Descriptions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {descriptions.map((description, index) => (
                <div
                  key={index}
                  className="inline-block text-center bg-purple-500 text-p-500 text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 lg:text-lg"
                >
                  {description}
                </div>
              ))}
            </div>

            {/* Technology Icons */}
            <div className="mt-8 flex space-x-4">
              {project.icon.map((icon, index) => (
                <motion.div
                  key={icon.id}
                  variants={techIconVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    src={icon.img}
                    width={50}
                    height={50}
                    alt="Technology Icon"
                    className="lg:h-16 lg:w-16 "
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default ProjectsList;

