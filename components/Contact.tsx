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


// ----------------------------------------------------------------------------------------------------------------------------------------
// "use client";
// import Image from "next/image";
// import { contactDetails } from "@/data/index";
// import { Player } from "@lottiefiles/react-lottie-player";

// export default function Contact() {
//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row items-start justify-between mb-10">
//         {/* Left Side: Contact Us */}
//         <div className="w-full md:w-2/5">
//           <h2 className="text-4xl mb-4 text-purple">Contact Us</h2>
//           <p className="text-sm text-gray-600 mb-9">
//             Any questions? We would be happy to help you!
//           </p>
//           <div className="space-y-6">
//             {contactDetails.map((detail) => (
//               <div key={detail.id} className="flex items-start space-x-4">
//                 {detail.thumbnail.endsWith(".json") ? (
//                   <Player
//                     autoplay
//                     loop
//                     src={detail.thumbnail}
//                     style={{ height: "50px", width: "50px" }}
//                     className="flex-shrink-0"
//                   />
//                 ) : (
//                   <Image
//                     src={detail.thumbnail}
//                     alt={detail.title}
//                     width={50}
//                     height={50}
//                     className="flex-shrink-0"
//                   />
//                 )}
//                 <div className="text-left">
//                   <p className="text-lg text-black font-semibold">
//                     {detail.title}
//                   </p>
//                   <p className="text-sm text-black">{detail.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Google Map */}
//         <div className="w-full md:w-1/2 mt-6 md:mt-0">
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
//           <form className="space-y-4 text-black-200">
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block lg:text-base font-medium sm:text-sm">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your first name"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block lg:text-base font-medium  sm:text-sm">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your last name"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block lg:text-base font-medium  sm:text-sm">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="youremail@email.com"
//               />
//             </div>
//             <div>
//               <label className="block lg:text-base font-medium  sm:text-sm">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="+9876543210"
//               />
//             </div>
//             <div>
//               <label className="block lg:text-base font-medium  sm:text-sm">
//                 Message
//               </label>
//               <textarea
//                 className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="Type your message here..."
//                 rows={4}
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-purple text-white py-2 rounded-md hover:bg-p-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// ----------------------------------------------------------------------------------------------------------------

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




// components/Contact.tsx

// components/Contact.tsx

// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { contactDetails } from "@/data/index";
// import { Player } from "@lottiefiles/react-lottie-player";

// interface ContactFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   message: string;
// }

// interface StatusMessage {
//   type: "success" | "error";
//   message: string;
// }

// export default function Contact() {
//   const [formData, setFormData] = useState<ContactFormData>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const [status, setStatus] = useState<StatusMessage | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

//   // Handle input changes
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setIsSubmitting(true);
//     setStatus(null); // Reset status message

//     try {
//       const response = await fetch("http://localhost:3001/api/sendEmail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         setStatus({ type: "success", message: "Message sent successfully!" });
//         // Reset form
//         setFormData({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phoneNumber: "",
//           message: "",
//         });
//       } else {
//         setStatus({
//           type: "error",
//           message: result.message || "Failed to send message.",
//         });
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setStatus({
//         type: "error",
//         message: "An unexpected error occurred. Please try again later.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-10">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row items-start justify-between mb-10">
//         {/* Left Side: Contact Us */}
//         <div className="w-full md:w-2/5">
//           <h2 className="text-4xl mb-4 text-purple">Contact Us</h2>
//           <p className="text-sm text-gray-600 mb-9">
//             Any questions? We would be happy to help you!
//           </p>
//           <div className="space-y-6">
//             {contactDetails.map((detail) => (
//               <div key={detail.id} className="flex items-start space-x-4">
//                 {detail.thumbnail.endsWith(".json") ? (
//                   <Player
//                     autoplay
//                     loop
//                     src={detail.thumbnail}
//                     style={{ height: "50px", width: "50px" }}
//                     className="flex-shrink-0"
//                   />
//                 ) : (
//                   <Image
//                     src={detail.thumbnail}
//                     alt={detail.title}
//                     width={50}
//                     height={50}
//                     className="flex-shrink-0"
//                   />
//                 )}
//                 <div className="text-left">
//                   <p className="text-lg text-black font-semibold">
//                     {detail.title}
//                   </p>
//                   <p className="text-sm text-black">{detail.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Google Map */}
//         <div className="w-full md:w-1/2 mt-6 md:mt-0">
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
//           <form
//             className="space-y-4 text-black-200"
//             onSubmit={handleSubmit}
//           >
//             <div className="flex space-x-4">
//               <div className="w-1/2">
//                 <label className="block lg:text-base font-medium sm:text-sm" htmlFor="firstName">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your first name"
//                 />
//               </div>
//               <div className="w-1/2">
//                 <label className="block lg:text-base font-medium sm:text-sm" htmlFor="lastName">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   placeholder="Your last name"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block lg:text-base font-medium sm:text-sm" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="youremail@email.com"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block lg:text-base font-medium sm:text-sm" htmlFor="phoneNumber">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 value={formData.phoneNumber}
//                 onChange={handleChange}
//                 className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="+9876543210"
//               />
//             </div>
//             <div>
//               <label className="block lg:text-base font-medium sm:text-sm" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 placeholder="Type your message here..."
//                 rows={4}
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full bg-purple text-white py-2 rounded-md hover:bg-purple-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
//                 isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>

//             {/* Display success or error message */}
//             {status && (
//               <p
//                 className={`mt-4 text-center ${
//                   status.type === "success" ? "text-green-500" : "text-red-500"
//                 }`}
//               >
//                 {status.message}
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }




// Contact.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { contactDetails } from "@/data/index";
import { Player } from "@lottiefiles/react-lottie-player";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface StatusMessage {
  type: "success" | "error";
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState<StatusMessage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus(null); // Reset status message

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-start justify-between mb-10">
        {/* Left Side: Contact Us */}
        <div className="w-full md:w-2/5">
          <h2 className="text-4xl mb-4 text-purple">Contact Us</h2>
          <p className="text-sm text-gray-600 mb-9">
            Any questions? We would be happy to help you!
          </p>
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.id} className="flex items-start space-x-4">
                {detail.thumbnail.endsWith(".json") ? (
                  <Player
                    autoplay
                    loop
                    src={detail.thumbnail}
                    style={{ height: "50px", width: "50px" }}
                    className="flex-shrink-0"
                  />
                ) : (
                  <Image
                    src={detail.thumbnail}
                    alt={detail.title}
                    width={50}
                    height={50}
                    className="flex-shrink-0"
                  />
                )}
                <div className="text-left">
                  <p className="text-lg text-black font-semibold">
                    {detail.title}
                  </p>
                  <p className="text-sm text-black">{detail.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Google Map */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
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
          <form
            className="space-y-4 text-black-200"
            onSubmit={handleSubmit}
          >
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  className="block lg:text-base font-medium sm:text-sm"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your first name"
                />
              </div>
              <div className="w-1/2">
                <label
                  className="block lg:text-base font-medium sm:text-sm"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label
                className="block lg:text-base font-medium sm:text-sm"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="youremail@email.com"
                required
              />
            </div>
            <div>
              <label
                className="block lg:text-base font-medium sm:text-sm"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="+9876543210"
              />
            </div>
            <div>
              <label
                className="block lg:text-base font-medium sm:text-sm"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-1 bg-p_glassy block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Type your message here..."
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-purple text-white py-2 rounded-md hover:bg-purple-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Display success or error message */}
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
