"use client";

import React from 'react';
import Image from 'next/image';
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind Words From
        <span className="text-purple"> Satisfied Clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // Adjusted height and removed unnecessary background classes
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div className="flex items-center gap-4" key={company.id}>
              <Image
                src={company.img}
                alt={company.name}
                width={90} // Adjusted width for better responsiveness
                height={90} // Adjusted height to match width
                className="object-contain"
              />
              <span className="text-black-100 md:text-lg text-sm font-semibold">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
