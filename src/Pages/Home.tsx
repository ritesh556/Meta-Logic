import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AchievementsSection from '../components/content/achievements';
import ServicesSection from '../components/content/Services';
import DesignBuildScaleSection from '../components/content/DesignBuildScaleSection';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  
  

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-600 to-indigo-700/70 text-white py-32 text-center overflow-hidden"
        onMouseMove={handleMouseMove}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.3) 5%, rgba(0, 0, 0, 0) 20%)`,
          }}
        ></motion.div>

        <h1 className="text-5xl font-extrabold leading-tight mb-6 mt-16">
          <span className="block">Welcome to the</span>
          <span className="block text-6xl bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Future of Technology
          </span>
        </h1>
        <p className="text-xl mb-8">
          We are committed to offering state-of-the-art software solutions that
          enable companies to prosper in the digital world.
        </p>
        <motion.a
          href="#services"
          className="inline-block bg-red-600 text-white py-3 px-8 rounded-xl text-lg hover:bg-red-700 transition"
          whileHover={{ scale: 1.1 }}
        >
          Explore Services
        </motion.a>
      </motion.section>

      {/* Design, Build, and Scale Section */}
     <DesignBuildScaleSection/>
       
        {/*Achievements Section */}
        <AchievementsSection/>
       
      
      
       {/* Services Section */}
      <ServicesSection/>

    </div>
  );
};

export default Home;