import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { team } from "../data/index"; // Import the team array
import Image from "next/image";

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      const rect = section?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getRandomPosition = () => ({
    x: Math.random() * (window.innerWidth - 100),
    y: Math.random() * (window.innerHeight - 100),
  });

  const sizes = ["w-16 h-16", "w-20 h-20", "w-24 h-24", "w-28 h-28"];

  return (
    <div
      id="team-section"
      className="relative h-screen bg-white overflow-hidden flex items-center justify-center"
    >
      <motion.h1
        className="absolute text-center text-4xl font-bold z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Meet Our <span className="text-purple-500">Amazing Team</span>
      </motion.h1>

      {team.map((member, index) => {
        const randomPosition = getRandomPosition();
        const randomSize = sizes[index % sizes.length];

        return (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isVisible
                ? { opacity: 1, scale: 1, x: randomPosition.x, y: randomPosition.y }
                : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className={`absolute rounded-full overflow-hidden shadow-lg ${randomSize}`}
          >
            <Image
              src={member.img}
              alt=""
              className="object-cover"
              width={100}
              height={100}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default TeamSection;
