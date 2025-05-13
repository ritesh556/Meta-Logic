import React from 'react';
import { motion } from 'framer-motion';

interface BoxProps {
  title: string;
  description: string;
  side: 'left' | 'right';
}

const Box: React.FC<BoxProps> = ({ title, description, side }) => {
  return (
    <motion.div
      className={`flex ${
        side === 'left' ? 'justify-start' : 'justify-end'
      } items-center relative`}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <motion.div
        className={`absolute w-6 h-6 bg-red-500 rounded-full ${
          side === 'left' ? 'right-full mr-4' : 'left-full ml-4'
        }`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      ></motion.div>

      <motion.div
        className={`${
          side === 'left' ? 'text-left' : 'text-right'
        } bg-gray-50 shadow-lg p-6 rounded-xl w-1/2`}
        initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-blue-600">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Box;