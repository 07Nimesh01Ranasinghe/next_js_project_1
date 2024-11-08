import React from 'react';
import Image from 'next/image';
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`w-full pt-20 pb-10 relative overflow-hidden ${className}`} id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:lahiru@dockyardsolution.lk">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Dockyard Software
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-white rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt={`${info.id} icon`} // Updated alt text for accessibility
                width={40}
                height={40}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;




