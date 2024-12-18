// import React from "react";

// const StepCard: React.FC = () => {
//   return (
//     <div className="relative flex items-center justify-center w-full h-screen">
//       {/* Outer Container */}
//       <div className="relative flex flex-col items-center justify-center w-60 h-60 rounded-full shadow-lg bg-white">
//         {/* Step Text */}
//         <h2 className="text-orange-500 text-2xl font-bold mb-2">Step 01</h2>
//         {/* Description */}
//         <p className="text-center text-gray-600 px-4 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium.
//         </p>
//       </div>

//       {/* Partial Circular Line */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 100 100"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="22"
//             fill="none"
//             stroke="#FF7A00"
//             strokeWidth="1"
//             strokeDasharray="70 100"
//             transform="rotate(-105 50 50)"
//           />
//         </svg>
//       </div>

//       {/* Icon */}
//       <div className="bottom-16 right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
//         {/* Lightbulb Icon */}
//         <svg
//           className="w-6 h-6 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.75 20h4.5m-2.25-1v-1m4.5-7a4.5 4.5 0 10-9 0c0 1.326.58 2.52 1.5 3.32v.18a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.18a4.5 4.5 0 001.5-3.32z"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default StepCard;






// import React from "react";

// const StepCard: React.FC = () => {
//   return (
//     <div className="relative flex items-center justify-center w-full h-screen">
//       {/* Outer Container */}
//       <div className="relative flex flex-col items-center justify-center w-60 h-60 rounded-full shadow-lg bg-white">
//         {/* Step Text */}
//         <h2 className="text-orange-500 text-2xl font-bold mb-2">Step 01</h2>
//         {/* Description */}
//         <p className="text-center text-gray-600 px-4 text-sm">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium.
//         </p>
//       </div>

//       {/* Partial Circular Line (Outside the Circle) */}
//       <div className="absolute w-80 h-80">
//         <svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Partial Circle Path */}
//           <circle
//             cx="100" /* Center X */
//             cy="100" /* Center Y */
//             r="95" /* Radius to place it outside */
//             fill="none"
//             stroke="#FF7A00"
//             strokeWidth="3"
//             strokeDasharray="160 320" /* Adjust stroke to get a partial circle */
//             strokeLinecap="round"
//             transform="rotate(-25 100 100)" /* Rotate to align */
//           />
//         </svg>

//         {/* Icon Positioned on the Circle */}
//         <div
//           className="absolute w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
//           style={{
//             top: "50%",
//             left: "98%",
//             transform: "translate(-50%, -50%)", // Center the icon
//           }}
//         >
//           {/* Lightbulb Icon */}
//           <svg
//             className="w-7 h-7 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9.75 20h4.5m-2.25-1v-1m4.5-7a4.5 4.5 0 10-9 0c0 1.326.58 2.52 1.5 3.32v.18a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.18a4.5 4.5 0 001.5-3.32z"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepCard;



// import React from "react";
// import { motion } from "framer-motion";

// const StepCard: React.FC = () => {
//   return (
//     <div className="relative flex items-center justify-center w-[480px] h-[480px] overflow-hidden">
//       {/* Outer Circle Appears with Fade and Scale */}
//       <motion.div
//         className="relative flex flex-col items-center justify-center w-60 h-60 rounded-full shadow-lg bg-white z-10"
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         {/* Step Text */}
//         <motion.h2
//           className="text-orange-500 text-2xl font-bold mb-2"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
//         >
//           Step 01
//         </motion.h2>

//         {/* Description */}
//         <motion.p
//           className="text-center text-gray-600 px-4 text-sm"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
//         >
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium.
//         </motion.p>
//       </motion.div>

//       {/* Partial Circular Line with Draw Animation */}
//       <div className="absolute w-80 h-80">
//         <motion.svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.circle
//             cx="100"
//             cy="100"
//             r="95"
//             fill="none"
//             stroke="#FF7A00"
//             strokeWidth="3"
//             strokeDasharray="160 300"
//             strokeDashoffset="300"
//             strokeLinecap="round"
//             initial={{ strokeDashoffset: 300 }} // Starts fully hidden
//             animate={{ strokeDashoffset: 0 }} // Line gets drawn
//             transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
//           />
//         </motion.svg>
//       </div>

//       {/* Icon Moving Along the Circle Path */}
//       <motion.div
//         className="absolute w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg z-20"
//         initial={{ x: 50, y: -50, opacity: 0 }}
//         animate={{ x: 122, y: -30, opacity: 1 }}
//         transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         {/* Lightbulb Icon */}
//         <svg
//           className="w-7 h-7 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.75 20h4.5m-2.25-1v-1m4.5-7a4.5 4.5 0 10-9 0c0 1.326.58 2.52 1.5 3.32v.18a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.18a4.5 4.5 0 001.5-3.32z"
//           />
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// export default StepCard;


// "use client"
// import React from "react";
// import { motion } from "framer-motion";
// import { workFlow } from "@/data/index"; // Adjust the import path

// interface StepCardProps {
//   step: {
//     id: number;
//     title: string;
//     description: string;
//     icon: string;
//   };
// }

// const StepCard: React.FC<StepCardProps> = ({ step }) => {
//   return (
//     <div className="relative flex items-center justify-center w-[370px] h-[320px] overflow-hidden">
//       {/* Outer Circle Appears with Fade and Scale */}
//       <motion.div
//         className="relative flex flex-col items-center justify-center w-60 h-60 rounded-full shadow-lg bg-white z-10"
//         initial={{ scale: 0, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         {/* Step Title */}
//         <motion.h2
//           className="text-p-400 text-xs font-bold mb-2"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
//         >
//           {step.title}
//         </motion.h2>

//         {/* Step Description */}
//         <motion.p
//           className="text-center text-gray-600 px-4 text-xs"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
//         >
//           {step.description}
//         </motion.p>
//       </motion.div>

//       {/* Partial Circular Line with Draw Animation */}
//       <div className="absolute w-80 h-80">
//         <motion.svg
//           className="absolute inset-0 w-full h-full"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <motion.circle
//             cx="100"
//             cy="100"
//             r="95"
//             fill="none"
//             stroke="#CBACF9"
//             strokeWidth="3"
//             strokeDasharray="160 300"
//             strokeDashoffset="300"
//             strokeLinecap="round"
//             initial={{ strokeDashoffset: 300 }}
//             animate={{ strokeDashoffset: 0 }}
//             transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
//           />
//         </motion.svg>
//       </div>

//       {/* Icon Moving Along the Circle Path */}
//       <motion.div
//         className="absolute w-14 h-14 bg-p-200 rounded-full flex items-center justify-center shadow-lg z-20"
//         initial={{ x: 50, y: -50, opacity: 0 }}
//         animate={{ x: 122, y: -30, opacity: 1 }}
//         transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
//         style={{
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//         }}
//       >
//         {/* Icon */}
//         <svg
//           className="w-7 h-7 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={step.icon || "M9.75 20h4.5m-2.25-1v-1m4.5-7a4.5 4.5 0 10-9 0c0 1.326.58 2.52 1.5 3.32v.18a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.18a4.5 4.5 0 001.5-3.32z"}
//           />
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

// const StepList: React.FC = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-8">
//       {workFlow.map((step) => (
//         <StepCard key={step.id} step={step} />
//       ))}
//     </div>
//   );
// };

// export default StepList;





"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workFlow } from "@/data/index"; // Adjust the import path

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
}

const StepCard: React.FC<StepCardProps> = ({ step }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.3 }); // Trigger when 30% of the component is visible

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center w-[370px] h-[320px] overflow-hidden"
    >
      {/* Outer Circle Appears with Fade and Scale */}
      <motion.div
        className="relative flex flex-col items-center justify-center w-60 h-60 rounded-full shadow-lg bg-white z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Step Title */}
        <motion.h2
          className="text-p-400 text-xs font-bold mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {step.title}
        </motion.h2>

        {/* Step Description */}
        <motion.p
          className="text-center text-gray-600 px-4 text-xs"
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          {step.description}
        </motion.p>
      </motion.div>

      {/* Partial Circular Line with Draw Animation */}
      <div className="absolute w-80 h-80">
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="#CBACF9"
            strokeWidth="3"
            strokeDasharray="160 300"
            strokeDashoffset="300"
            strokeLinecap="round"
            initial={{ strokeDashoffset: 300 }}
            animate={isInView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* Icon Moving Along the Circle Path */}
      <motion.div
        className="absolute w-14 h-14 bg-p-200 rounded-full flex items-center justify-center shadow-lg z-20"
        initial={{ x: 50, y: -50, opacity: 0 }}
        animate={isInView ? { x: 122, y: -30, opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Icon */}
        <svg
          className="w-7 h-7 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={
              step.icon ||
              "M9.75 20h4.5m-2.25-1v-1m4.5-7a4.5 4.5 0 10-9 0c0 1.326.58 2.52 1.5 3.32v.18a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.18a4.5 4.5 0 001.5-3.32z"
            }
          />
        </svg>
      </motion.div>
    </div>
  );
};

const StepList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10">
      {workFlow.map((step) => (
        <StepCard key={step.id} step={step} />
      ))}
    </div>
  );
};

export default StepList;
