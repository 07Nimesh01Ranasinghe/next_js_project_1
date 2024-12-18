// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects/>
//       </div>
//     </main>
//   );
// }

//changed bg-black-100 to white-100
//Nimesh

//--------------------
//Proper one

// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid/> {/* Ensure Grid is directly below Hero for the scroll effect */}
//         <RecentProjects />
//         <TeamPreview />
//         <Clients /> 
//         <Experience />
//         <Approach />
//         <Footer />
//       </div>
//     </main>
//   );
// }


// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       {/* Fixed Text at the top left corner */}
//       <div className="fixed top-5 left-5 z-50">
//         <span className="text-xl font-bold">Dockyard</span> 
//         <span className="text-xl font-semibold">Software</span>
//       </div>

//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid />
//         <RecentProjects />
//             <Clients/>
//       </div>
//     </main>
//   );
// }


// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";

// export default function Home() {
//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <FloatingNav navItems={navItems} />
//         <Hero />
//         <Grid /> {/* Ensure Grid is directly below Hero for the scroll effect */}
//         <RecentProjects /> {/* Add bg-white to every section */}
//         <TeamPreview />
//         <Clients/>
//         <Experience/>
//         <Approach/>
//         <Footer/>
//       </div>
//     </main>
//   );
// }





// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";


// export default function Home() {
//   const { scrollYProgress } = useScroll();
//   const [logoVisible, setLogoVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setLogoVisible(true);
//         } else {
//           setLogoVisible(false);
//         }
//       },
//       {
//         threshold: 1.0,
//       }
//     );

//     observer.observe(heroSection);

//     return () => {
//       if (heroSection) observer.unobserve(heroSection);
//     };
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       const direction = current - scrollYProgress.getPrevious()!;
  
//       if (scrollYProgress.get() < 0.05) {
//         setLogoVisible(true);
//       } else {
//         if (direction < 0) {
//           setLogoVisible(true);
//         } else {
//           setLogoVisible(false);
//         }
//       }
//     }
//   });
  

//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <AnimatePresence mode="wait">
//           {/* {logoVisible && (
//             <motion.header
//               initial={{ opacity: 1, y: -100 }}
//               animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
//               transition={{ duration: 0.2 }}
//               className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-50"
//             > */}
//               {/* Logo with animation matching the navbar */}
//               {/* <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-xl font-bold pl-4"
//               >
//                 <span className="text-3xl text-black-100">DOCKYARD</span>
//                 <span className="text-purple bg-p_glassy px-1 rounded">SOFTWARE</span>
//               </motion.div>
//               <FloatingNav navItems={navItems} />
//             </motion.header>
//           )} */}
//         </AnimatePresence>
//         <Hero />
//         <Grid />
//         <RecentProjects />
//         <TeamPreview />
//         <Clients />
//         <Experience />
//         <Approach />
//         <Footer />
//       </div>
//     </main>
//   );
// }



// Working
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { navItems } from "@/data";
// import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
// import RecentProjects from "@/components/RecentProjects";
// import Clients from "@/components/Clients";
// import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
// import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";
// import BackToTopButton from "@/components/BackToTopButton";



// export default function Home() {
//   const { scrollYProgress } = useScroll();
//   const [logoVisible, setLogoVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setLogoVisible(true);
//         } else {
//           setLogoVisible(false);
//         }
//       },
//       {
//         threshold: 1.0,
//       }
//     );

//     observer.observe(heroSection);

//     return () => {
//       if (heroSection) observer.unobserve(heroSection);
//     };
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       const direction = current - scrollYProgress.getPrevious()!;
  
//       if (scrollYProgress.get() < 0.05) {
//         setLogoVisible(true);
//       } else {
//         if (direction < 0) {
//           setLogoVisible(true);
//         } else {
//           setLogoVisible(false);
//         }
//       }
//     }
//   });
  

//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         <AnimatePresence mode="wait">
//           {logoVisible && (
//             <motion.header
//               initial={{ opacity: 1, y: -100 }}
//               animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
//               transition={{ duration: 0.2 }}
//               className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-50"
//             >
//               {/* Logo with animation matching the navbar */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0, y: -17 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-xl font-bold pl-4"
//               >
//                 <span className="text-3xl text-black-100">DOCKYARD</span>
//                 <span className="text-purple bg-p_glassy px-1 rounded">SOFTWARE</span>
//               </motion.div>
//               <FloatingNav navItems={navItems} />
//             </motion.header>
//           )}
//         </AnimatePresence>
//         <Hero />
//         <Grid />
//         <RecentProjects />
//         <TeamPreview />
//         <Clients />
//         <Experience />
//         <Approach />
//         <Footer />
//         <BackToTopButton/>
//       </div>
//     </main>
//   );
// }


// Working Code 12/11/2024
"use client";
import Head from 'next/head';
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
// import { TeamPreview } from "@/components/TeamPreview";
import BackToTopButton from "@/components/BackToTopButton";
import TeamNew from '@/components/TeamNew';
import { AnimatedCardDemo } from '@/components/AnimatedCardDemo';
import StepCard from '@/components/StepCard';
// import StepCategories from '@/components/StepCategories';
// import { StickyScrollRevealDemo } from '@/components/StickyScrollRevealDemo';
// import ProjectShowcase from '@/components/ProjectShowcase';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [logoVisible, setLogoVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogoVisible(true);
        } else {
          setLogoVisible(false);
        }
      },
      {
        threshold: 1.0,
      }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setLogoVisible(true);
      } else {
        if (direction < 0) {
          setLogoVisible(true);
        } else {
          setLogoVisible(false);
        }
      }
    }
  });

  // BackToTopButton visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Home",
              "url": "https://dockyardsoftware.com",
              "description": "Welcome to Dockyard Software, where we specialize in innovative solutions for software development. Meet our team, explore our projects, and discover career opportunities.",
              "publisher": {
                "@type": "Organization",
                "name": "Dockyard Software",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://yourwebsite.com/logo.png"
                }
              }
            }),
          }}
        />
      </Head>

      <main className="relative dark:bg-black-100 bg-white flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <AnimatePresence mode="wait">
            {logoVisible && (
              <motion.header
                initial={{ opacity: 1, y: -100 }}
                animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-[1000]"
              >
                {/* Logo with animation matching the navbar */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, y: -17 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold pl-4"
                >
                  <span className="text-3xl text-black-100">DOCKYARD</span>
                  <span className="text-purple bg-p_glassy px-1 rounded">SOFTWARE</span>
                </motion.div>
                <FloatingNav navItems={navItems} />
              </motion.header>
            )}
          </AnimatePresence>
          <Hero />
          <Grid />
          {/* <RecentProjects /> */}
          <AnimatedCardDemo/>
          {/* <StickyScrollRevealDemo/> */}
          {/* <TeamPreview /> */}
          <TeamNew/>
          <Clients />
          <Experience />
          {/* <Approach /> */}
          <StepCard/>
          {/* <StepCategories/> */}
          <Footer />

          {/* BackToTopButton */}
          {showBackToTop && (
            <div className="fixed bottom-10 right-4 z-50">
              <BackToTopButton />
            </div>
          )}
        </div>
      </main>
    </>
  );
}





// import React from 'react';
// import styled from 'styled-components';

// const Button = () => {
//   return (
//     <StyledWrapper>
//       <button className="button">
//         <svg viewBox="0 0 384 512" className="svgIcon">
//           <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
//         </svg>
//       </button>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .button {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background-color: rgb(20, 20, 20);
//     border: none;
//     font-weight: 600;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
//     cursor: pointer;
//     transition-duration: 0.3s;
//     overflow: hidden;
//     position: relative;
//   }

//   .svgIcon {
//     width: 12px;
//     transition-duration: 0.3s;
//   }

//   .svgIcon path {
//     fill: white;
//   }

//   .button:hover {
//     width: 140px;
//     border-radius: 50px;
//     transition-duration: 0.3s;
//     background-color: rgb(181, 160, 255);
//     align-items: center;
//   }

//   .button:hover .svgIcon {
//     /* width: 20px; */
//     transition-duration: 0.3s;
//     transform: translateY(-200%);
//   }

//   .button::before {
//     position: absolute;
//     bottom: -20px;
//     content: "Back to Top";
//     color: white;
//     /* transition-duration: .3s; */
//     font-size: 0px;
//   }

//   .button:hover::before {
//     font-size: 13px;
//     opacity: 1;
//     bottom: unset;
//     /* transform: translateY(-30px); */
//     transition-duration: 0.3s;
//   }`;

// export default Button;










