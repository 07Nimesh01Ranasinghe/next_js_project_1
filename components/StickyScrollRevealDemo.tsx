// "use client";
// import React from "react";
// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
// import Image from "next/image";

// const content = [
//   {
//     title: "Collaborative Editing",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     title: "Real time changes",
//     description:
//       "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];
// export function StickyScrollRevealDemo() {
//   return (
//     <div className="p-10">
//       <StickyScroll content={content} />
//     </div>
//   );
// }




"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { allProjects } from "@/data/index"; // Adjust the import path as necessary
import Image from 'next/image';

// Define background colors and gradients
const backgroundColors = [
  // "#ffebcd",
  // "#8a2be2",
  // "#5f9ea0",
  // "#7fff00",
  // "#d2691e",
  // "#ff7f50",
  // "#6495ed",
  // "#dc143c",
  // "#00ffff",
  // "#00008b",
  // "#008b8b",
  // "#b8860b",
  // "#a9a9a9",
  // "#006400",
  // "#bdb76b",
  // "#8b008b",
  // "#556b2f",
  // "#ff8c00",
  // "#9932cc",
];

const linearGradients = [
  "linear-gradient(to bottom right, #ff7e5f, #feb47b)",
  "linear-gradient(to bottom right, #6a11cb, #2575fc)",
  "linear-gradient(to bottom right, #ff4e50, #f9d423)",
  "linear-gradient(to bottom right, #00c6ff, #0072ff)",
  "linear-gradient(to bottom right, #f7971e, #ffd200)",
  "linear-gradient(to bottom right, #24c6dc, #514a9d)",
  "linear-gradient(to bottom right, #de6161, #2657eb)",
  "linear-gradient(to bottom right, #00b09b, #96c93d)",
  "linear-gradient(to bottom right, #e44d26, #f16529)",
  "linear-gradient(to bottom right, #b24592, #f15f79)",
  "linear-gradient(to bottom right, #5f2c82, #49a09d)",
  "linear-gradient(to bottom right, #2980b9, #6dd5fa)",
  "linear-gradient(to bottom right, #56ab2f, #a8e063)",
  "linear-gradient(to bottom right, #ff5f6d, #ffc371)",
  "linear-gradient(to bottom right, #c94b4b, #4b134f)",
  "linear-gradient(to bottom right, #d66d75, #e29587)",
  "linear-gradient(to bottom right, #200122, #6f0000)",
  "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
  "linear-gradient(to bottom right, #355c7d, #6c5b7b, #c06c84)",
];

// Map your project data to the content array
const content = allProjects.map((project) => ({
  title: project.title,
  description: [
    project.des1,
    project.des2,
    project.des3,
    project.des4,
    project.des5,
    project.des6,
    project.des7,
    project.des8,
  ]
    .filter(Boolean)
    .join("\n\n"), // Use double line breaks for better readability
  content: (
    <div className="flex flex-wrap items-center justify-center space-x-2 p-4">
      {project.icon.map((iconItem) => {
        const iconSrc = iconItem.img;
        return (
          <Image
            key={iconItem.id}
            src={iconSrc}
            alt="Technology Icon"
            width={30}
            height={30}
            className="w-12 h-12"
          />
        );
      })}
    </div>
  ),
}));

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll
        content={content}
        // backgroundColors={backgroundColors}
        backgroundColors= {["#ffffff"]}
        linearGradients={linearGradients}
      />
    </div>
  );
}

export default StickyScrollRevealDemo;
