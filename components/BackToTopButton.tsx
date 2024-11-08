// components/BackToTopButton.tsx

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const BackToTopButton: React.FC = () => {
//   return (
//     <div>
//       <motion.button
//         initial={false}
//         whileHover={{
//           width: 140,
//           borderRadius: 50,
//           backgroundColor: "#B5A0FF",
//         }}
//         transition={{ duration: 0.3 }}
//         style={{
//           width: 50,
//           height: 50,
//           borderRadius: "50%",
//           backgroundColor: "#141414",
//           position: "relative",
//           overflow: "hidden",
//         }}
//         className="flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] cursor-pointer"
//       >
//         <motion.svg
//           viewBox="0 0 384 512"
//           className="w-[12px]"
//           initial={false}
//           whileHover={{ y: "-200%" }}
//           transition={{ duration: 0.3 }}
//         >
//           <path
//             d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//             fill="white"
//           />
//         </motion.svg>
//         <motion.span
//           className="text-white absolute"
//           initial={{ fontSize: 0, opacity: 0, bottom: -20 }}
//           whileHover={{ fontSize: 13, opacity: 1, bottom: "50%" }}
//           transition={{ duration: 0.3 }}
//           style={{ transform: "translateY(50%)" }}
//         >
//           Back to Top
//         </motion.span>
//       </motion.button>
//     </div>
//   );
// };

// export default BackToTopButton;





// components/BackToTopButton.tsx

// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// const BackToTopButton: React.FC = () => {
//   const buttonVariants = {
//     initial: {
//       width: 50,
//       borderRadius: "50%",
//       backgroundColor: "#141414",
//     },
//     hover: {
//       width: 140,
//       height: 50,
//       borderRadius: 2,
//       backgroundColor: "#B5A0FF",
//     },
//   };

//   const iconVariants = {
//     initial: { y: 0 },
//     hover: { y: "-200%" },
//   };

//   const textVariants = {
//     initial: { opacity: 0, y: "100%" },
//     hover: { opacity: 1, y: "0%" },
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <motion.button
//       onClick={scrollToTop}
//       initial="initial"
//       animate="initial"
//       whileHover="hover"
//       variants={buttonVariants}
//       transition={{ duration: 0.3 }}
//       style={{
//         height: 50,
//         position: "relative",
//         overflow: "hidden",
//       }}
//       className="flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] cursor-pointer"
//     >
//       <motion.svg
//         variants={iconVariants}
//         transition={{ duration: 0.3 }}
//         viewBox="0 0 384 512"
//         className="w-[12px]"
//         style={{ position: "absolute" }}
//       >
//         <path
//           d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
//           fill="white"
//         />
//       </motion.svg>
//       <motion.span
//         variants={textVariants}
//         transition={{ duration: 0.3 }}
//         className="text-white absolute text-sm font-medium"
//       >
//         Back to Top
//       </motion.span>
//     </motion.button>
//   );
// };

// export default BackToTopButton;






// components/BackToTopButton.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";

const BackToTopButton: React.FC = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };


  return (
    <div>
      <motion.button
        onClick={handleClick}
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={buttonVariants}
        transition={{ duration: 0.3 }}
        style={{ height: 50, overflow: "hidden" }}
        className="relative flex items-center justify-center shadow-[0_0_0_4px_rgba(180,160,255,0.253)] cursor-pointer"
      >
        {/* Arrow Icon */}
        <motion.svg
          variants={iconVariants}
          transition={{ duration: 0.3 }}
          viewBox="0 0 384 512"
          className="absolute w-[12px]"
        >
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            fill="white"
          />
        </motion.svg>
        {/* Text */}
        <motion.span
          variants={textVariants}
          transition={{ duration: 0.3 }}
          className="text-white absolute"
          style={{ fontSize: 13 }}
        >
          Back to Top
        </motion.span>
      </motion.button>
    </div>
  );
};

const buttonVariants = {
  rest: { width: 50, borderRadius: 25, backgroundColor: "#141414" },
  hover: { width: 140, borderRadius: 25, backgroundColor: "#B5A0FF" },
};

const iconVariants = {
  rest: { opacity: 1, y: 0 },
  hover: { opacity: 0, y: -20 },
};

const textVariants = {
  rest: { opacity: 0, y: 20 },
  hover: { opacity: 1, y: 0 },
};

export default BackToTopButton;
