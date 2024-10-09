"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

export function Careers() {
  return (
    <LampContainer >
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 50 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-black-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
      >
        Build your Career <br /> With Us!
      </motion.h1>

    </LampContainer>
  );
}


// "use client";
// import React, { useState} from "react";
// import { motion } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { LampContainer } from "./ui/lamp";

// export function Careers() {
//   const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 50 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-black-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
//       >
//         Build your Career <br /> With Us!
//       </motion.h1>

//       <div className="mt-8 flex justify-center">
//         <Player
//           autoplay
//           keepLastFrame
//           src="/developer-in-reveal.json"
//           style={{ height: "300px", width: "300px" }}
//           onEvent={(event) => {
//             if (event === "complete") {
//               setIsInitialAnimationComplete(true);
//             }
//           }}
//         />
//       </div>

//       {isInitialAnimationComplete && (
//         <div className="mt-8 flex justify-center">
//           <Player
//             autoplay
//             loop
//             src="/developer-hover-pinch.json"
//             style={{ height: "300px", width: "300px" }}
//           />
//         </div>
//       )}
//     </LampContainer>
//   );
// }


// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { LampContainer } from "./ui/lamp";

// export function Careers() {
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 50 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-black-100 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-8xl"
//       >
//         Build your Career <br /> With Us!
//       </motion.h1>

//       <div className="mt-8 flex justify-center">
//         <Player
//           autoplay
//           loop
//           src="/developer-in-reveal.json"
//           style={{ height: "300px", width: "300px" }}
//         />
//       </div>
//     </LampContainer>
//   );
// }
