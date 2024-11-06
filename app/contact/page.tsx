// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import Footer from "@/components/Footer";
// import { navItems } from "@/data";
// import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
// import Contact from "@/components/Contact";


// export default function AboutPage() {
//   const { scrollYProgress } = useScroll();
//   const [logoVisible, setLogoVisible] = useState(true);
//   const heroRef = useRef<HTMLElement | null>(null);

//   useEffect(() => {
//     const heroSection = heroRef.current;
//     if (!heroSection) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setLogoVisible(entry.isIntersecting);
//       },
//       { threshold: 1.0 }
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
//         setLogoVisible(direction < 0);
//       }
//     }
//   });

//   return (
//     <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
//       <div className="max-w-7xl w-full">
//         {/* Floating Navigation Bar */}
//         <FloatingNav navItems={navItems} className="z-50" />

//         <AnimatePresence mode="wait">
//           {logoVisible && (
//             <motion.header
//               initial={{ opacity: 1, y: -100 }}
//               animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
//               transition={{ duration: 0.2 }}
//               className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40"
//             >
//               {/* Logo with animation matching the navbar */}
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className="text-xl font-bold pl-4"
//               >
//                 <span className="text-3xl text-black-100">DOCKYARD</span>
//                 <span className="text-purple bg-p_glassy px-1 rounded">SOFTWARE</span>
//               </motion.div>
//             </motion.header>
//           )}
//         </AnimatePresence>

//         {/* About Section */}
//         <section className="relative w-full flex-grow pt-40" ref={heroRef}>
//           <Contact/>
//         </section>

//         {/* Footer */}
//         <Footer className="relative  w-full mt-20" />
//       </div>
//     </main>
//   );
// }





// app/contact/page.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Contact from "@/components/Contact";

export default function ContactPage() {
  const { scrollYProgress } = useScroll();
  const [logoVisible, setLogoVisible] = useState(true);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const heroSection = heroRef.current;
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setLogoVisible(entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    observer.observe(heroSection);

    return () => {
      if (heroSection) observer.unobserve(heroSection);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        setLogoVisible(true);
      } else {
        setLogoVisible(direction < 0);
      }
    }
  });

  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Floating Navigation Bar */}
        <FloatingNav navItems={navItems} className="z-50" />

        <AnimatePresence mode="wait">
          {logoVisible && (
            <motion.header
              initial={{ opacity: 1, y: -100 }}
              animate={{ y: logoVisible ? 0 : -100, opacity: logoVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between py-4 fixed top-10 left-0 right-0 z-40"
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
            </motion.header>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section className="relative w-full flex-grow pt-40" ref={heroRef}>
          <Contact />
        </section>

        {/* Footer */}
        <Footer className="relative w-full mt-20" />
      </div>
    </main>
  );
}
