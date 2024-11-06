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


"use client";
import { allProjects } from "@/data/index";
import { motion } from "framer-motion";
import { FC } from "react";
import Image from 'next/image';

const ProjectsList: FC = () => {
  return (
    <div className="relative h-screen overflow-y-auto no-scrollbar snap-y snap-mandatory">
      {allProjects.map((project) => (
        <motion.section
          key={project.id}
          className="h-screen snap-start flex flex-col items-center justify-center p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div className="mt-4">
            <ul className="list-disc text-left">
              <li>{project.des1}</li>
              <li>{project.des2}</li>
              <li>{project.des3}</li>
              <li>{project.des4}</li>
              <li>{project.des5}</li>
              <li>{project.des6}</li>
              <li>{project.des7}</li>
            </ul>
          </div>
          <div className="mt-4 flex space-x-4">
            {project.icon.map((icon) => (
              <Image
                key={icon.id}
                src={icon.img}
                width={30}
                height={30}
                alt=""
                className="w-8 h-8"
              />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default ProjectsList;
