// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { team } from "../data/index"; // Import the team array
// import Image from "next/image";

// const TeamSection: React.FC = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // List of hidden IDs
//   const hiddenIds = new Set([1, 4, 19, 20, 21, 25, 26, 27]); // IDs to hide completely

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.getElementById("team-section");
//       const rect = section?.getBoundingClientRect();
//       setIsVisible(rect && rect.top < window.innerHeight && rect.bottom > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const generateCircularPositions = (radius: number, count: number) => {
//     return Array.from({ length: count }).map((_, index) => {
//       const angle = (index / count) * 2 * Math.PI;
//       return {
//         x: Math.cos(angle) * radius,
//         y: Math.sin(angle) * radius,
//       };
//     });
//   };

//   const positions = [
//     ...generateCircularPositions(200, 6), // Inner circle
//     ...generateCircularPositions(350, 10), // Middle circle
//     ...generateCircularPositions(500, 12), // Outer circle
//   ];

//   return (
//     <div
//       id="team-section"
//       className="relative h-screen bg-white overflow-hidden flex items-center justify-center"
//     >
//       <motion.h1
//         className="absolute text-center text-4xl font-bold z-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={isVisible ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//       >
//         Meet Our <span className="text-purple">Amazing Team</span>
//       </motion.h1>

//       {positions.map((position, index) => {
//         const member = team[index % team.length]; // Get the current team member

//         // Skip rendering if the member ID is in the hiddenIds set
//         if (hiddenIds.has(member.id)) {
//           return null;
//         }

//         return (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={
//               isVisible
//                 ? {
//                     opacity: 1,
//                     scale: 1,
//                     x: position.x,
//                     y: position.y,
//                   }
//                 : { opacity: 0, scale: 0 }
//             }
//             transition={{
//               duration: 0.4,
//               delay: index * 0.2,
//             }}
//             className="absolute rounded-full overflow-hidden shadow-lg w-24 h-24"
//             whileHover={{ scale: 1.1 }} // Add hover effect
//             whileTap={{ scale: 0.9 }} // Add tap effect
//           >
//             <Image
//               src={member.img}
//               alt={`Team member ${member.id}`}
//               className="object-cover"
//               width={100}
//               height={100}
//               unoptimized // Bypass optimization for debugging
//             />
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default TeamSection;






import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { team } from "../data/index"; // Import the team array
import Image from "next/image";

const TeamSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // List of hidden IDs
  const hiddenIds = new Set([1, 4, 19, 20, 21, 25, 26, 27]); // IDs to hide completely

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      const rect = section?.getBoundingClientRect();
      setIsVisible(rect && rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const generateCircularPositions = (radius: number, count: number) => {
    return Array.from({ length: count }).map((_, index) => {
      const angle = (index / count) * 2 * Math.PI;
      return {
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  };

  const positions = [
    ...generateCircularPositions(200, 6), // Inner circle
    ...generateCircularPositions(350, 10), // Middle circle
    ...generateCircularPositions(520, 12), // Outer circle
  ];

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
        Meet Our <span className="text-purple">Amazing Team</span>
      </motion.h1>

      {positions.map((position, index) => {
        const member = team[index % team.length]; // Get the current team member

        // Skip rendering if the member ID is in the hiddenIds set
        if (hiddenIds.has(member.id)) {
          return null;
        }

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: position.x, y: position.y }} // Start at the circular position with opacity 0
            animate={
              isVisible
                ? {
                    opacity: 1, // Fade in
                    x: position.x, // Retain x position
                    y: position.y, // Retain y position
                  }
                : { opacity: 0, x: position.x, y: position.y }
            }
            transition={{
              duration: 0.6,
              delay: index * 0.2, // Staggered delay for each image
            }}
            className="absolute rounded-full overflow-hidden shadow-lg w-24 h-24"
            whileHover={{ scale: 1.1 }} // Add hover effect
            whileTap={{ scale: 0.9 }} // Add tap effect
          >
            <Image
              src={member.img}
              alt={`Team member ${member.id}`}
              className="object-cover"
              width={100}
              height={100}
              unoptimized // Bypass optimization for debugging
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default TeamSection;
