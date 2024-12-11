
"use client"
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Upflex",
    description:
      "What if you could instantly book an office anywhere in the world, anytime?",
    achievements: "USD 34.1M · Raised from investors over multiple rounds",
    category: "Workspace",
    img: "/images/project1.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Project X",
    description: "A cutting-edge solution for modern problems.",
    achievements: "USD 12.4M · First round of funding",
    category: "Technology",
    img: "/images/project2.jpg", // Replace with actual image path
  },
  {
    id: 3,
    title: "EcoHome",
    description: "Revolutionizing sustainable living.",
    achievements: "USD 20.5M · Series B funding",
    category: "Sustainability",
    img: "/images/project3.jpg", // Replace with actual image path
  },
];

const ProjectShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Swap projects every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleHover = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 animate-gradient" />

      <AnimatePresence>
        <motion.div
          key={projects[currentIndex].id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="relative flex w-11/12 max-w-6xl h-4/5 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Left Section: Image */}
          <div className="w-1/2 h-full relative">
            <img
              src={projects[currentIndex].img}
              alt={projects[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-1/2 h-full flex flex-col justify-center p-10">
            <h2 className="text-3xl font-bold text-gray-800">
              {projects[currentIndex].title}
            </h2>
            <p className="mt-4 text-gray-600">{projects[currentIndex].description}</p>
            <p className="mt-6 font-medium text-gray-800">
              {projects[currentIndex].achievements}
            </p>
            <p className="mt-2 text-gray-500 text-sm">{projects[currentIndex].category}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Hover Navigation */}
      <div className="absolute bottom-10 flex gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => handleHover(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
