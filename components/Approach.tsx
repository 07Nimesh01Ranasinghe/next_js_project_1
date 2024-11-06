// "use client";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
// import { FaMobileAlt, FaGlobe, FaDesktop, FaChartLine, FaPencilRuler, FaRobot, FaBullhorn, FaPalette } from "react-icons/fa";

// const Approach = () => {
//   return (
//     <section className="w-full py-20">
//       <h1 className="heading">
//         Our <span className="text-purple">work flow</span>
//       </h1>
//       <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center w-full">
//         <Card
//           title="Mobile App Development"
//           icon={<FaMobileAlt className="text-6xl text-white" />}
//           des="Developing Mobile applications which are Responsive, Optimized, User Friendly mobile applications using Latest technology."
//         >
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
//           />
//         </Card>
//         <Card
//           title="Web Application Development"
//           icon={<FaGlobe className="text-6xl text-white" />}
//           des="Designing fully Responsive Web applications, User friendly, User attractive using Latest technology."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[[255, 166, 158], [221, 255, 247]]}
//             dotSize={2}
//           />
//         </Card>
//         <Card
//           title="Desktop Applications"
//           icon={<FaDesktop className="text-6xl text-white" />}
//           des="Developing Desktop Applications for windows, with more Utilization, and functionalities to do more tasks using Latest Tech."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Business Intelligence"
//           icon={<FaChartLine className="text-6xl text-white" />}
//           des="Business Analytics, Data Mining, Data Visualization, Data tools and Infrastructure, and Best Practices to help organizations make more data-driven Decisions."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="UI/UX"
//           icon={<FaPencilRuler className="text-6xl text-white" />}
//           des="Solving User Problems and Creating relevant, easy, Enjoyable and accessible experiences. And it covers all the Visual and Interactive properties of websites, Software and Apps - from Colors and Typography to Buttons, Scroll Functions, Animations and more."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Robotics, ML and IOT"
//           icon={<FaRobot className="text-6xl text-white" />}
//           des="Smart alarming systems, Sensors, GSM Modules."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Digital Marketing"
//           icon={<FaBullhorn className="text-6xl text-white" />}
//           des="Digital Marketing, SEO, Social Media Advertising, Video Marketing, email Marketing, Web Analytics."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Graphic & Design"
//           icon={<FaPalette className="text-6xl text-white" />}
//           des="Logo Design, Brand Styles, Business Cards."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Approach;

// interface CardProps {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
//   des: string;
// }

// const Card: React.FC<CardProps> = ({ title, icon, children, des }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border border-black/[0.2] group/canvas-card flex items-center justify-center
//        dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
//       style={{
//         // background: "rgb(4,7,29)",
//         // backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//         background: "#CBACF9",
//       }}
//     >
//       <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20 px-10">
//         <div
//           className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
//         group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
//         >
//           {icon}
//         </div>
//         <h2
//           className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//         >
//           {title}
//         </h2>
//         <p
//           className="text-sm opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//           style={{ color: "#E4ECFF" }}
//         >
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };

// // const AceternityIcon = ({ order }: { order: string }) => {
// //   return (
// //     <div>
// //       <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
// //         <span
// //           className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
// //          bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
// //         />
// //         <span
// //           className="inline-flex h-full w-full cursor-pointer items-center 
// //         justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
// //         >
// //           {order}
// //         </span>
// //       </button>
// //     </div>
// //   );
// // };

// interface IconProps {
//   className: string;
//   [key: string]: unknown; // For accepting additional props
// }

// export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };






// "use client";
// import React, { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
// import {
//   FaMobileAlt,
//   FaGlobe,
//   FaDesktop,
//   FaChartLine,
//   FaPencilRuler,
//   FaRobot,
//   FaBullhorn,
//   FaPalette,
// } from "react-icons/fa";

// const Approach = () => {
//   return (
//     <section className="w-full py-10">
//       <h1 className="heading">
//         Our <span className="text-purple">workflow</span>
//       </h1>
//       {/* Grid layout adjusted for smaller cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center px-4 mt-12">
//         {/* Reduced card sizes */}
//         <Card
//           title="Mobile App Development"
//           icon={<FaMobileAlt className="text-7xl text-p-500" />}
//           des="Developing mobile applications that are responsive and user-friendly using the latest technology."
//         >
//           <CanvasRevealEffect
//             animationSpeed={5.1}
//             containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
//           />
//         </Card>
//         <Card
//           title="Web Application Development"
//           icon={<FaGlobe className="text-7xl text-p-500" />}
//           des="Designing fully responsive web applications with user-friendly interfaces."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-xl overflow-hidden"
//             colors={[[255, 166, 158], [221, 255, 247]]}
//             dotSize={2}
//           />
//         </Card>
//         <Card
//           title="Desktop Applications"
//           icon={<FaDesktop className="text-7xl text-p-500" />}
//           des="Developing high-functionality desktop applications for windows."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Business Intelligence"
//           icon={<FaChartLine className="text-7xl text-p-500" />}
//           des="Providing analytics and visualization tools for data-driven decisions."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="UI/UX"
//           icon={<FaPencilRuler className="text-7xl text-p-500" />}
//           des="Creating engaging and easy-to-use user experiences for websites and apps."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Robotics, ML, and IoT"
//           icon={<FaRobot className="text-7xl text-p-500" />}
//           des="Developing smart systems using IoT and ML."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-sky-600 rounded-xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Digital Marketing"
//           icon={<FaBullhorn className="text-7xl text-p-500" />}
//           des="Offering SEO and digital marketing services."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//         <Card
//           title="Graphic & Design"
//           icon={<FaPalette className="text-7xl text-p-500" />}
//           des="Providing creative design services, including logos and branding."
//         >
//           <CanvasRevealEffect
//             animationSpeed={3}
//             containerClassName="bg-pink-900 rounded-xl overflow-hidden"
//             colors={[[125, 211, 252]]}
//           />
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default Approach;

// interface CardProps {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
//   des: string;
// }

// const Card: React.FC<CardProps> = ({ title, icon, children, des }) => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-2 relative h-[20rem] rounded-xl"
//       style={{
//         background: "rgba(255, 255, 255, 0.8)",  //card background
//       }}
//     >
//       <Icon className="absolute h-8 w-8 -top-2 -left-2 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-8 w-8 -bottom-2 -left-2 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-8 w-8 -top-2 -right-2 dark:text-white text-black opacity-30" />
//       <Icon className="absolute h-8 w-8 -bottom-2 -right-2 dark:text-white text-black opacity-30" />

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="relative z-20 px-5">
//         <div
//           className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
//         group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
//         >
//           {icon}
//         </div>
//         <h2
//           className="dark:text-white text-center text-lg opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//         >
//           {title}
//         </h2>
//         <p
//           className="text-xs opacity-0 group-hover/canvas-card:opacity-100
//          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
//          group-hover/canvas-card:-translate-y-2 transition duration-200"
//           style={{ color: "#E4ECFF" }}
//         >
//           {des}
//         </p>
//       </div>
//     </div>
//   );
// };

// interface IconProps {
//   className: string;
//   [key: string]: unknown; // For accepting additional props
// }

// export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };



"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import Image from 'next/image';

const Approach = () => {
  return (
    <section className="w-full py-10">
      <h1 className="heading">
        Our <span className="text-purple">Workflow</span>
      </h1>
      {/* Grid layout adjusted for smaller cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center justify-center px-4 mt-12">
        {/* Reduced card sizes */}
        <Card
          title="Mobile App Development"
          imageSrc="/mobile.png"
          des="Developing mobile applications that are responsive and user-friendly using the latest technology."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
          />
        </Card>
        <Card
          title="Web Application Development"
          imageSrc="/webApp.png"
          des="Designing fully responsive web applications with user-friendly interfaces."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-xl overflow-hidden"
            colors={[[255, 166, 158], [221, 255, 247]]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Desktop Applications"
          imageSrc="/desktop.png"
          des="Developing high-functionality desktop applications for windows."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="Business Intelligence"
          imageSrc="/BI.png"
          des="Providing analytics and visualization tools for data-driven decisions."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="UI/UX"
          imageSrc="/ui.png"
          des="Creating engaging and easy-to-use user experiences for websites and apps."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="Robotics, ML, and IoT"
          imageSrc="/iot.png"
          des="Developing smart systems using IoT and ML."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="Digital Marketing"
          imageSrc="/marketing.png"
          des="Offering SEO and digital marketing services."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-emerald-900 rounded-xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
        <Card
          title="Graphic & Design"
          imageSrc="/design.png"
          des="Providing creative design services, including logos and branding."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

interface CardProps {
  title: string;
  imageSrc: string;
  children?: React.ReactNode;
  des: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, children, des }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-p-500 group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-2 relative h-[20rem] rounded-xl"
      style={{
        background: "rgba(255, 255, 255, 0.8)", // Card background
      }}
    >
      {/* Removed the Icon components that added the plus signs */}
      {/* <Icon className="absolute h-8 w-8 -top-2 -left-2 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-8 w-8 -bottom-2 -left-2 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-8 w-8 -top-2 -right-2 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-8 w-8 -bottom-2 -right-2 dark:text-white text-black opacity-30" /> */}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-5">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
          group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          <Image
            src={imageSrc}
            alt={title}
            width={1000}
            height={100}
            // className="rounded-full"
          />
        </div>
        <h2
          className="dark:text-white text-center text-lg opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white 
          group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-xs opacity-0 group-hover/canvas-card:opacity-100
          relative z-10 mt-4 group-hover/canvas-card:text-white text-center
          group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};


