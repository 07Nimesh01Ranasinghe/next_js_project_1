// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // Use NodeJS.Timeout to type the interval correctly
// let interval: NodeJS.Timeout;

// type Card = {
//   id: number;
//   name: string;
//   designation: string;
//   content: React.ReactNode;
// };

// export const CardStack = ({
//   items,
//   offset,
//   scaleFactor,
// }: {
//   items: Card[];
//   offset?: number;
//   scaleFactor?: number;
// }) => {
//   const CARD_OFFSET = offset || 10;
//   const SCALE_FACTOR = scaleFactor || 0.06;
//   const [cards, setCards] = useState<Card[]>(items);

//   useEffect(() => {
//     startFlipping();

//     return () => clearInterval(interval);
//   }, []);

//   const startFlipping = () => {
//     interval = setInterval(() => {
//       setCards((prevCards: Card[]) => {
//         const newArray = [...prevCards]; // create a copy of the array
//         newArray.unshift(newArray.pop()!); // move the last element to the front
//         return newArray;
//       });
//     }, 5000);
//   };

//   return (
//     <div className="relative h-60 w-60 md:h-60 md:w-96">
//       {cards.map((card, index) => {
//         return (
//           <motion.div
//             key={card.id}
//             className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
//             style={{
//               transformOrigin: "top center",
//             }}
//             animate={{
//               top: index * -CARD_OFFSET,
//               scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
//               zIndex: cards.length - index, //  decrease z-index for the cards that are behind
//             }}
//           >
//             <div className="font-normal text-neutral-700 dark:text-neutral-200">
//               {card.content}
//             </div>
//             <div>
//               <p className="text-neutral-500 font-medium dark:text-white">
//                 {card.name}
//               </p>
//               <p className="text-neutral-400 font-normal dark:text-neutral-200">
//                 {card.designation}
//               </p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // Use NodeJS.Timeout to type the interval correctly
// let interval: NodeJS.Timeout;

// type Card = {
//   id: number;
//   content: React.ReactNode;
// };

// export const CardStack = ({
//   items,
//   offset,
//   scaleFactor,
// }: {
//   items: Card[];
//   offset?: number;
//   scaleFactor?: number;
// }) => {
//   const CARD_OFFSET = offset || 10;
//   const SCALE_FACTOR = scaleFactor || 0.06;
//   const [cards, setCards] = useState<Card[]>(items);

//   useEffect(() => {
//     startFlipping();

//     return () => clearInterval(interval);
//   }, []);

//   const startFlipping = () => {
//     interval = setInterval(() => {
//       setCards((prevCards: Card[]) => {
//         const newArray = [...prevCards]; // create a copy of the array
//         newArray.unshift(newArray.pop()!); // move the last element to the front
//         return newArray;
//       });
//     }, 5000);
//   };

//   return (
//     <div className="relative h-60 w-60 md:h-60 md:w-96">
//       {cards.map((card, index) => {
//         return (
//           <motion.div
//             key={card.id}
//             className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex items-center justify-center"
//             style={{
//               transformOrigin: "top center",
//             }}
//             animate={{
//               top: index * -CARD_OFFSET,
//               scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
//               zIndex: cards.length - index, //  decrease z-index for the cards that are behind
//             }}
//           >
//             {/* {card.content} */}
//             {/* Wrapper div to create padding around the image */}
//             <div className="relative w-full h-full p-4">
//               {card.content}
//             </div>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };



"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Use NodeJS.Timeout to type the interval correctly
let interval: NodeJS.Timeout;

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  topCardScale = 1.2, // New prop to control the top card scale
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  topCardScale?: number; // New prop type definition
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        const isTopCard = index === 0; // Check if the current card is the top card

        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex items-center justify-center"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: isTopCard ? topCardScale : 1 - index * SCALE_FACTOR, // Increase scale for the top card
              zIndex: cards.length - index,
            }}
          >
            <div className="relative w-full h-full p-4">
              {card.content}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
