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






import React from "react";

const StepCard: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      {/* Outer Container */}
      <div className="relative flex flex-col items-center justify-center w-60 h-60 rounded-full shadow-lg bg-white">
        {/* Step Text */}
        <h2 className="text-orange-500 text-2xl font-bold mb-2">Step 01</h2>
        {/* Description */}
        <p className="text-center text-gray-600 px-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium.
        </p>
      </div>

      {/* Partial Circular Line (Outside the Circle) */}
      <div className="absolute w-80 h-80">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Partial Circle Path */}
          <circle
            cx="100" /* Center X */
            cy="100" /* Center Y */
            r="95" /* Radius to place it outside */
            fill="none"
            stroke="#FF7A00"
            strokeWidth="3"
            strokeDasharray="160 320" /* Adjust stroke to get a partial circle */
            strokeLinecap="round"
            transform="rotate(-25 100 100)" /* Rotate to align */
          />
        </svg>

        {/* Icon Positioned on the Circle */}
        <div
          className="absolute w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg"
          style={{
            top: "50%",
            left: "98%",
            transform: "translate(-50%, -50%)", // Center the icon
          }}
        >
          {/* Lightbulb Icon */}
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
              d="M9.75 20h4.5m-2.25-1v-1m4.5-7a4.5 4.5 0 10-9 0c0 1.326.58 2.52 1.5 3.32v.18a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.18a4.5 4.5 0 001.5-3.32z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StepCard;


