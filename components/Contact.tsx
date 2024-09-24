// "use client";
// import Image from "next/image";
// import { contactDetails } from "@/data/index"; // Adjust the import path as needed
// import { Button } from "./ui/MovingBorders";

// export default function Contact() {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-10">
//         {/* Left Side: Contact Us */}
//         <div className="w-full md:w-1/3">
//           <h2 className="text-4xl mb-4 text-purple-700">Contact Us</h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Any questions? We would be happy to help you!
//           </p>
//           <div className="space-y-4">
//             {contactDetails.map((detail) => (
//               <Button
//                 key={detail.id}
//                 containerClassName="w-full"
//                 borderClassName="bg-gradient-to-r from-purple-500 to-indigo-500"
//               >
//                 <div className="flex items-center space-x-3">
//                   <Image
//                     src={detail.thumbnail} // Display thumbnail or icon
//                     alt={detail.title}
//                     width={24}
//                     height={24}
//                     className="text-black"
//                   />
//                   <div>
//                     <p className="text-lg text-black">{detail.title}</p>
//                     <p className="text-sm text-black">{detail.desc}</p>
//                   </div>
//                 </div>
//               </Button>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Google Map */}
//         <div className="w-full md:w-1/2">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.1960703045407!2d79.87142508850246!3d6.958921792155459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25914b1a56beb%3A0xb232f5ded53fa34a!2sDockyard%20Total%20Solutions!5e0!3m2!1sen!2slk!4v1727151522949!5m2!1sen!2slk"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen={true}
//             loading="lazy"
//             className="rounded-lg"
//           ></iframe>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side: Image */}
//         <div className="w-full md:w-1/2 mb-6 md:mb-0">
//           <Image
//             src="/contact-1.png" // Replace with your actual image path
//             alt="Contact Page Illustration"
//             width={600}
//             height={400}
//             className="rounded-lg"
//           />
//         </div>
//         {/* Right Side: Form */}
//         <div className="w-full md:w-1/2">
//           <form className="space-y-4">
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your first name"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your last name"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="youremail@email.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="+9876543210"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="Type your message here..."
//                 rows={4}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { contactDetails } from "@/data/index"; // Adjust the import path as needed
import { Button } from "./ui/MovingBorders";
import { Player } from '@lottiefiles/react-lottie-player';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        {/* Left Side: Contact Us */}
        <div className="w-full md:w-2/5">
          <h2 className="text-4xl mb-4 text-purple-700">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-6">
            Any questions? We would be happy to help you!
          </p>
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <Button
                key={detail.id}
                containerClassName="w-full"
                borderClassName="bg-gradient-to-r from-purple-500 to-indigo-500"
                className="h-24"
              >
                <div className="flex items-center space-x-4">
                  {detail.thumbnail.endsWith(".json") ? (
                    <Player
                      autoplay
                      loop
                      src={detail.thumbnail}
                      style={{ height: '50px', width: '50px' }}
                      className="justify-start"
                    />
                  ) : (
                    <Image
                      src={detail.thumbnail} // Display static image if not a Lottie
                      alt={detail.title}
                      width={24}
                      height={24}
                      className="text-black"
                    />
                  )}
                  <div>
                    <p className="text-lg text-black">{detail.title}</p>
                    <p className="text-sm text-black">{detail.desc}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Side: Google Map */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.1960703045407!2d79.87142508850246!3d6.958921792155459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25914b1a56beb%3A0xb232f5ded53fa34a!2sDockyard%20Total%20Solutions!5e0!3m2!1sen!2slk!4v1727151522949!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/contact-1.png" // Replace with your actual image path
            alt="Contact Page Illustration"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your first name"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="youremail@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="+9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Type your message here..."
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


// "use client";
// import Image from "next/image";
// import { Button } from "./ui/MovingBorders";

// function ContactDetails() {
//   return (
//     <div className="space-y-4">
//       {/* Phone Number */}
//       <Button containerClassName="w-full" borderClassName="bg-gradient-to-r from-purple-500 to-indigo-500">
//         <div className="flex items-center space-x-3 text-black">
//           <span className="material-icons">phone</span>
//           <p className="text-lg">+0123456789</p>
//         </div>
//       </Button>

//       {/* Email */}
//       <Button containerClassName="w-full" borderClassName="bg-gradient-to-r from-purple-500 to-indigo-500">
//         <div className="flex items-center space-x-3">
//           <span className="material-icons">email</span>
//           <p className="text-lg">example@email.com</p>
//         </div>
//       </Button>

//       {/* Address */}
//       <Button containerClassName="w-full" borderClassName="bg-gradient-to-r from-purple-500 to-indigo-500">
//         <div className="flex items-center space-x-3">
//           <span className="material-icons">location_on</span>
//           <p className="text-lg">775 Rolling Green Rd.</p>
//         </div>
//       </Button>
//     </div>
//   );
// }

// export default function Contact() {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between mb-10">
//         {/* Left Side: Contact Us */}
//         <div className="w-full md:w-1/3">
//           <h2 className="text-4xl mb-4 text-purple-700">Contact Us</h2>
//           <p className="text-sm text-gray-600 mb-6">
//             Any questions? We would be happy to help you!
//           </p>
//           <ContactDetails /> {/* Replaced the static contact details with the ContactDetails component */}
//         </div>

//         {/* Right Side: Google Map */}
//         <div className="w-full md:w-1/2">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.1960703045407!2d79.87142508850246!3d6.958921792155459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25914b1a56beb%3A0xb232f5ded53fa34a!2sDockyard%20Total%20Solutions!5e0!3m2!1sen!2slk!4v1727151522949!5m2!1sen!2slk"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen={true}
//             loading="lazy"
//             className="rounded-lg"
//           ></iframe>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row items-center justify-between">
//         {/* Left Side: Image */}
//         <div className="w-full md:w-1/2 mb-6 md:mb-0">
//           <Image
//             src="/contact-1.png" // Replace with your actual image path
//             alt="Contact Page Illustration"
//             width={600}
//             height={400}
//             className="rounded-lg"
//           />
//         </div>
//         {/* Right Side: Form */}
//         <div className="w-full md:w-1/2">
//           <form className="space-y-4">
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">First Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your first name"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your last name"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="youremail@email.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="+9876543210"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">Message</label>
//               <textarea
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="Type your message here..."
//                 rows={4}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
