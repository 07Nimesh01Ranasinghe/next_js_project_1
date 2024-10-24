// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import Image from "next/image";
// import { projects } from "@/data";
// import { PinContainer } from "./ui/3d-pin";

// const RecentProjects = () => {
//   return (
//     <div
//       id="projects"
//       className="py-20 relative"
//       style={{ zIndex: 1 }}
//     >
//       <h1 className="heading">
//         A small selection of <span className="text-purple">recent projects</span>
//       </h1>
//       <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
//         {projects.map((item) => (
//           <div
//             className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            
//             key={item.id}
//           >
//             <PinContainer title="Visit" href={item.link || "https://twitter.com/mannupaaji"}>
//               <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
//                 {/* <div
//                   className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
//                 >
//                   <Image 
//                   src="/bg.png" 
//                   alt="Background"
//                   width={720} // Set an appropriate width
//                   height={720} // Set an appropriate height
//                   className="object-cover w-full h-full"
//                   />
//                 </div> */}
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   width={720}
//                   height={720}
//                   className="object-fit z-10 absolute bottom-0"
//                 />
//               </div>

//               <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
//                 {item.title}
//               </h1>

//               <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-1">
//                 {item.des}
//               </p>

//               <div className="flex items-center justify-between mt-7 mb-3">
//                 <div className="flex items-center">
//                   {item.iconLists.map((icon, index) => (
//                     <div
//                       key={index}
//                       className="border border-black-300/[0.1] rounded-full bg-[#d9d9e3] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       <Image src={icon} alt={`icon-${index}`} width={20} height={20} />
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center">
//                   <p className="flex lg:text-xl md:text-xs text-sm text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ms-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;




"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 relative" style={{ zIndex: 1 }}>
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>

      {/* Flex container for the cards */}
      <div className="flex flex-wrap justify-between p-4 gap-x-6 mt-48 mb-10 lg:gap-x-8">
        {projects.map((item) => (
          <div
            key={item.id}
            className="w-[100%] sm:w-[48%] lg:w-[23%] flex items-center justify-center h-[250px]" // Updated for 4 cards to fit in the view
          >
            <PinContainer title="Visit" href={item.link || "https://twitter.com/mannupaaji"}>
              <div className="relative flex items-center justify-center w-full overflow-hidden h-[250px] mb-10">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={720}
                  height={720}
                  className="object-fit z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-1">
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-black-300/[0.1] rounded-full bg-[#d9d9e3] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt={`icon-${index}`} width={20} height={20} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
