import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { allProjects } from "@/data/index"; // Adjust the path based on your folder structure
import Image from 'next/image';

const ProjectsShowcase = () => {
  const [visibleProject, setVisibleProject] = useState(0);

  // Scroll event to handle changing the visible project based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const projectHeight = window.innerHeight / 1.2;
      const currentProject = Math.min(
        allProjects.length - 1,
        Math.floor(scrollY / projectHeight)
      );
      setVisibleProject(currentProject);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-gray-50">
      <AnimatePresence>
        {allProjects.map(
          (project, index) =>
            index === visibleProject && (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="fixed max-w-lg w-full px-6 py-8 bg-white shadow-lg rounded-lg text-center"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h2>
                <ul className="mb-6 space-y-2 text-gray-600">
                  {[project.des1, project.des2, project.des3, project.des4, project.des5, project.des6, project.des7].map((desc, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-blue-500">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center gap-4">
                  {project.icon.map((techIcon: { id: number; react?: string; dotNet?: string }) => (
                    <Image
                      key={techIcon.id}
                      src={techIcon.react || techIcon.dotNet}
                      alt="Tech Icon"
                      width={30}
                      height={30}
                      className="w-8 h-8"
                    />
                  ))}
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsShowcase;
