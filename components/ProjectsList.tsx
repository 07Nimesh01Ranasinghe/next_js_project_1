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


// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC } from "react";
// import Image from 'next/image';

// // Variant definitions for Framer Motion animations
// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },    // Initial state when the section is hidden
//   visible: { opacity: 1, y: 0 },    // State when the section is visible
// };

// const bgIconVariants = {
//   hidden: { opacity: 0, rotate: -180, scale: 0 }, // Initial state for bgIcons
//   visible: { opacity: 1, rotate: 0, scale: 1 },   // State when bgIcons are visible
// };

// const techIconVariants = {
//   hidden: { opacity: 0, y: 20 },    // Initial state for tech icons
//   visible: { opacity: 1, y: 0 },    // State when tech icons are visible
// };

// const ProjectsList: FC = () => {
//   return (
//     <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
//       {allProjects.map((project) => {
//         const descriptions = [
//           project.des1,
//           project.des2,
//           project.des3,
//           project.des4,
//           project.des5,
//           project.des6,
//         ].filter(Boolean);

//         return (
//           <motion.section
//             key={project.id}
//             className="h-screen snap-start flex flex-col items-center justify-center p-8 relative"
//             variants={sectionVariants}
//             initial="hidden"
//             // initial={false}
//             whileInView="visible"
//             viewport={{ amount: 0.5 }}
//             transition={{ duration: 1.5 }}
//           >
//             {/* Background Icons */}
//             {project.bgIcon && project.bgIcon.map((icon, index) => (
//               <motion.div
//                 key={icon.id}
//                 className="absolute"
//                 variants={bgIconVariants}
//                 transition={{ duration: 1, delay: index * 0.2 }}
//                 style={{
//                   top: icon.top,
//                   left: icon.left,
//                 }}
//               >
//                 <Image
//                   src={icon.img}
//                   width={50}
//                   height={50}
//                   alt="Background Icon"
//                 />
//               </motion.div>
//             ))}

//             {/* Project Title */}
//             <h1 className="text-black-100 text-4xl font-bold text-center mb-5 lg:text-5xl">{project.title}</h1>
//             <h3 className="text-sm text-center my-5">{project.secondTitle}</h3>

//             {/* Descriptions */}
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {descriptions.map((description, index) => (
//                 <div
//                   key={index}
//                   className="inline-block text-center bg-purple-500 text-p-500 text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 lg:text-lg"
//                 >
//                   {description}
//                 </div>
//               ))}
//             </div>

//             {/* Technology Icons */}
//             <div className="mt-8 flex space-x-4 py-3 px-5 border  rounded-lg shadow-md">
//               {project.icon.map((icon, index) => (
//                 <motion.div
//                   key={icon.id}
//                   variants={techIconVariants}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Image
//                     src={icon.img}
//                     width={40}
//                     height={40}
//                     alt="Technology Icon"
//                     // className="lg:h-16 lg:w-16 "
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsList;

// "use client";
// import { allProjects } from "@/data/index";
// import { motion } from "framer-motion";
// import { FC } from "react";
// import Image from "next/image";

// // Variant definitions for Framer Motion animations
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1 },
// };

// const imageVariants = {
//   hidden: { opacity: 0, y: 100 }, // Start from the bottom
//   visible: { opacity: 1, y: 0 }, // Slide up into view
// };

// const textVariants = {
//   hidden: { opacity: 0, y: -100 }, // Start from the top
//   visible: { opacity: 1, y: 0 },  // Slide down into view
// };

// const ProjectsList: FC = () => {
//   return (
//     <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
//       {allProjects.map((project) => {
//         const descriptions = [
//           project.des1,
//           project.des2,
//           project.des3,
//           project.des4,
//           project.des5,
//           project.des6,
//         ].filter(Boolean);

//         return (
//           <motion.section
//             key={project.id}
//             className="h-screen snap-start flex flex-col items-center justify-center p-8 relative"
//             variants={sectionVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ duration: 1 }}
//           >
//             {/* Image Animation */}
//             <motion.div
//               className="relative mb-8"
//               variants={imageVariants}
//               transition={{ duration: 1 }}
//             >
//               <Image
//                 src={project.img} // Ensure `project.image` exists in your data
//                 alt={project.title}
//                 width={200}
//                 height={200}
//                 className="rounded-lg shadow-lg"
//               />
//             </motion.div>

//             {/* Project Title Animation */}
//             <motion.h1
//               className="text-black-100 text-4xl font-bold text-center mb-5 lg:text-5xl"
//               variants={textVariants}
//               transition={{ duration: 1, delay: 0.2 }}
//             >
//               {project.title}
//             </motion.h1>

//             <motion.h3
//               className="text-sm text-center my-5"
//               variants={textVariants}
//               transition={{ duration: 1, delay: 0.3 }}
//             >
//               {project.secondTitle}
//             </motion.h3>

//             {/* Descriptions */}
//             <motion.div
//               className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//               variants={textVariants}
//               transition={{ duration: 1, delay: 0.4 }}
//             >
//               {descriptions.map((description, index) => (
//                 <div
//                   key={index}
//                   className="inline-block text-center bg-purple-500 text-p-400 text-base font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300 lg:text-lg"
//                 >
//                   {description}
//                 </div>
//               ))}
//             </motion.div>

//             {/* Technology Icons */}
//             <motion.div
//               className="mt-8 flex space-x-4 py-3 px-5 border rounded-lg shadow-md"
//               variants={textVariants}
//               transition={{ duration: 1, delay: 0.5 }}
//             >
//               {project.icon.map((icon, index) => (
//                 <motion.div
//                   key={icon.id}
//                   variants={imageVariants}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <Image
//                     src={icon.img}
//                     width={40}
//                     height={40}
//                     alt="Technology Icon"
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.section>
//         );
//       })}
//     </div>
//   );
// };

// export default ProjectsList;



"use client";
import { allProjects } from "@/data/index";
import { motion } from "framer-motion";
import { FC, useState, useEffect } from "react";
import Image from "next/image";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const imageVariants = {
  hidden: { opacity: 0, y: -100 }, // Slide in from the left
  visible: { opacity: 1, y: 0 },
};

const contentVariants = {
  hidden: { opacity: 0, y: 100 }, // Slide in from the right
  visible: { opacity: 1, y: 0 },
};

const ProjectsList: FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(1);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentIndex = 1;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentIndex = index + 1;
      }
    });

    setCurrentProjectIndex(currentIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
      {allProjects.map((project, index) => {
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
            className="h-screen snap-start flex gap-20 items-center justify-center p-8 relative"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible" // Trigger animations when the section comes into view
            viewport={{ once: false, amount: 0.5 }} // Allow animation on repeated scrolling up or down
            transition={{ duration: 1 }}
          >
            {/* Top Left: SVG and Project Number */}
            <div className="absolute top-12 left-7 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150" width="50" height="75">
                <rect width="110" height="100" fill="#f2f2f2" />
                <polygon points="0,100 50,150 110,100" fill="#f2f2f2" />
              </svg>
              <span className="text-p-500 text-lg font-bold absolute -left-1 top-4">
                {project.id}/{allProjects.length}
              </span>
            </div>

            {/* Left Side: Image */}
            <motion.div
              className="w-1/2 h-1/2 flex justify-center items-center"
              variants={imageVariants}
              transition={{ duration: 1 }}
            >
              <Image
                src={project.img} // Ensure `project.img` exists in your data
                alt={project.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              className="w-2/3 flex flex-col items-start justify-center p-8 bg-white rounded-lg shadow-lg"
              variants={contentVariants}
              transition={{ duration: 1 }}
            >
              {/* Title */}
              <h1 className="text-black text-4xl font-bold mb-4">{project.title}</h1>
              <h3 className="text-lg text-gray-600 mb-6">{project.secondTitle}</h3>

              {/* Descriptions */}
              <ul className="list-disc pl-5 space-y-2 mb-6">
                {descriptions.map((description, idx) => (
                  <li key={idx} className="text-p-400 text-base">
                    {description}
                  </li>
                ))}
              </ul>

              {/* Technology Icons */}
              <div className="flex justify-center w-full mt-auto">
                {project.icon.map((icon, idx) => (
                  <motion.div
                    key={icon.id}
                    className="mx-2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={icon.img}
                      width={40}
                      height={40}
                      alt="Technology Icon"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>
        );
      })}
    </div>
  );
};

export default ProjectsList;



