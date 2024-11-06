// components/Workflow.tsx

"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaGlobe, FaDesktop, FaChartLine, FaPencilRuler, FaRobot } from 'react-icons/fa';

const workflowItems = [
  {
    id: 1,
    title: 'Mobile App Development',
    description: 'Developing mobile applications that are responsive and user-friendly using the latest technology.',
    icon: <FaMobileAlt size={50} className="text-purple-500" />,
  },
  {
    id: 2,
    title: 'Web Application Development',
    description: 'Designing fully responsive web applications with user-friendly interfaces.',
    icon: <FaGlobe size={50} className="text-blue-500" />,
  },
  {
    id: 3,
    title: 'Desktop Applications',
    description: 'Developing high-functionality desktop applications for Windows.',
    icon: <FaDesktop size={50} className="text-green-500" />,
  },
  {
    id: 4,
    title: 'Business Intelligence',
    description: 'Providing analytics and visualization tools for data-driven decisions.',
    icon: <FaChartLine size={50} className="text-yellow-500" />,
  },
  {
    id: 5,
    title: 'UI/UX Design',
    description: 'Creating engaging and easy-to-use user experiences for websites and apps.',
    icon: <FaPencilRuler size={50} className="text-red-500" />,
  },
  {
    id: 6,
    title: 'Robotics, ML, and IoT',
    description: 'Developing smart systems using IoT and Machine Learning.',
    icon: <FaRobot size={50} className="text-indigo-500" />,
  },
];

const Workflow: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-12">
        Our <span className="text-purple-500">Work Flow</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workflowItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Workflow;
