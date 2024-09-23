// "use client";

// import RetroGrid from "@/components/ui/retro-grid";

// export default function About() {
//   return (
//     <div className="relative flex items-center justify-center overflow-hidden bg-background text-black-100 h-screen">
//       {/* Retro Grid Background */}
//       <RetroGrid
//         speed="10s"
//         gridColor="rgba(255,0,255,1)"
//         darkGridColor="rgba(255, 0, 0, 0.2)"
//       />

//       {/* Main Content */}
//       <div className="relative z-10 flex w-full max-w-7xl px-1 py-20 md:py-16 lg:py-5">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 pr-2">
//           {/* Section Header */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
//             [Who Are We?]
//           </h1>

//           {/* Main Heading
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
//             We want to make your <br className="hidden md:block" /> business easier
//           </h1> */}

//           {/* Description Paragraph */}
//           <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-8 text-black-100">
//           Dockyard Total Solutions (Pvt) Ltd (DTS) is a fully owned subsidiary of Colombo 
//           Dockyard PLC, leveraging over 35% government ownership and extensive ICT systems 
//           engineering expertise.<br/><br/> Registered under the Companies Act of 2007, DTS offers 
//           comprehensive ICT solutions through its Integrated ICT Solution Center, serving 
//           diverse external entities. With a team of over 25 highly qualified software and 
//           hardware engineers, DTS provides round-the-clock service, combining deep industry 
//           knowledge with a commitment to excellence.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-1/2 pl-6">
//           <div className="grid gap-10">
//             {/* Vision */}
//             <div>
//               <h3 className="text-3xl font-semibold mb-4">Vision</h3>
//               <p className="text-lg leading-relaxed text-black-100">
//                 Un-detachable partner in total solutuins.
//               </p>
//             </div>

//             {/* Values */}
//             <div>
//               <h3 className="text-3xl font-semibold mb-4">Values</h3>
//               <p className="text-lg leading-relaxed">
//                 We add value to the industry as the business partner through diversified business solutions derived from state of the art technology blended with our well.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// 
// “The main business is developing software for general purposes and for specific purposes to various clients. The company has a research and development center with in place training services and also offer technical support in line with the business.”

"use client";

import { cards } from "@/data/index";
import { CardStack } from "@/components/ui/card-stack";
import RetroGrid from "@/components/ui/retro-grid";
import Image from "next/image";

export default function About() {
  // Transform the card data to include the JSX <Image> element
  const cardItems = cards.map((card) => ({
    id: card.id,
    content: (
      <Image
        src={card.image}
        alt={`Image ${card.id}`}
        layout="fill" // Adjust based on your requirements
        objectFit="cover" // Ensure the image covers the card area
        priority // Optionally add priority if these images are important for LCP
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    ),
  }));

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-background text-black-100 h-screen">
      {/* Retro Grid Background */}
      <RetroGrid
        speed="15s"
        gridColor="rgba(255,0,255,1)"
        darkGridColor="rgba(255, 0, 0, 0.2)"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col w-full max-w-7xl mt-28 px-1 py-20 md:py-16 lg:py-5">
        {/* Main Section */}
        <div className="flex flex-col md:flex-row w-full px-6">
          {/* Left Section (CardStack) */}
          <div className="w-full md:w-1/2 pr-2 self-center">
            <CardStack items={cardItems} scaleFactor={0.2} topCardScale={1.1}/>
          </div>

          {/* Right Section (Who We Are) */}
          <div className="w-full md:w-1/2 pl-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-purple">
              Who Are We?
            </h1>
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed mb-8 text-black-100">
              Dockyard Total Solutions (Pvt) Ltd (DTS) is a fully owned subsidiary of Colombo
              Dockyard PLC, leveraging over 35% government ownership and extensive ICT systems
              engineering expertise.
              <br /><br />
              Registered under the Companies Act of 2007, DTS offers comprehensive ICT solutions
              through its Integrated ICT Solution Center, serving diverse external entities. With a
              team of over 25 highly qualified software and hardware engineers, DTS provides
              round-the-clock service, combining deep industry knowledge with a commitment to
              excellence.
            </p>
          </div>
        </div>

        {/* Bottom Section (Vision and Values) */}
        <div className="flex flex-col md:flex-row w-full mt-10">
          {/* Vision */}
          <div className="w-full md:w-1/2 pr-6 mb-10 md:mb-0">
            <h3 className="text-3xl font-semibold mb-4 text-purple">Vision</h3>
            <p className="text-lg leading-relaxed text-black-100">
              Un-detachable partner in total solutions.
            </p>
          </div>

          {/* Values */}
          <div className="w-full md:w-1/2 pl-6">
            <h3 className="text-3xl font-semibold mb-4 text-purple">Values</h3>
            <p className="text-lg leading-relaxed">
              We add value to the industry as the business partner through diversified business
              solutions derived from state of the art technology blended with our well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
