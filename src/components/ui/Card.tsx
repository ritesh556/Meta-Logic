import React from 'react';
import { motion } from 'framer-motion';
import useIsMobile from '../../hooks/useIsMobile'; // Adjust the path if needed

interface CardProps {
  title: string;
  description: string;
  link: string;
  logo: string;
  offset: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, logo, offset }) => {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className={`relative h-64 w-full max-w-lg mx-auto bg-red-200/30 backdrop-blur-md text-gray-800 shadow-lg rounded-xl overflow-hidden ${offset}`}
      whileHover={isMobile ? {} : { rotateY: 180 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{ perspective: isMobile ? undefined : '1000px' }}
    >
      <motion.div
        className="absolute inset-0 flex justify-center items-center text-7xl font-bold bg-red-300/70"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <span>{logo}</span>
      </motion.div>

      <motion.div
        className={`absolute inset-0 ${isMobile ? 'opacity-100' : 'opacity-0 hover:opacity-100'} bg-red-400/90 p-6 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl`}
        style={{
          transform: isMobile ? 'none' : 'rotateY(-180deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-center text-sm">{description}</p>
        <a
          href={link}
          className="mt-4 block text-red-600 hover:text-red-800 text-sm"
        >
          See More
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Card;
