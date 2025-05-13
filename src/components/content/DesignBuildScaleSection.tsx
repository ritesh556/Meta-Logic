import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Box from '../ui/Box';


const DesignBuildScaleSection: React.FC = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: 'Ideate',
      description: "Let's brainstorm together and explore creative ideas.",
      side: 'left',
    },
    {
      title: 'Design',
      description: 'Craft visually appealing and intuitive designs.',
      side: 'right',
    },
    {
      title: 'Develop',
      description: 'Bring your ideas to life with robust development.',
      side: 'left',
    },
    {
        title:'Launch',
        
      description: `We'll meticulously prepare for a successful launch,
ensuring a smooth transition from development to
deployment.`,
      side: 'right',
        
    },
    {
        title:'Scale',
        
      description: `As your business grows, we'll work with you to
scale your software and accommodate increasing
demands.`,
      side: 'left',
        
    },
  ];

  return (
    <section
      className="py-24 px-8 bg-white text-gray-800 relative overflow-hidden"
      ref={stepsRef}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
      >
        Design, Build, and Scale Your Vision with Us
      </motion.h2>

      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-red-500"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      ></motion.div>

      <motion.div
        className="grid gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            title={step.title}
            description={step.description}
            side={step.side}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default DesignBuildScaleSection;