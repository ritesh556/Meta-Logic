import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import AchievementsSection from '../components/ui/achievements';

const Home: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  
  const stepsRef = useRef<HTMLDivElement>(null);

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
          {[
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
          ].map((step, index) => (
            <motion.div
              key={index}
              className={`flex ${
                step.side === 'left' ? 'justify-start' : 'justify-end'
              } items-center relative`}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                className={`absolute w-6 h-6 bg-red-500 rounded-full ${
                  step.side === 'left' ? 'right-full mr-4' : 'left-full ml-4'
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              ></motion.div>

              <motion.div
                className={`${
                  step.side === 'left' ? 'text-left' : 'text-right'
                } bg-gray-50 shadow-lg p-6 rounded-xl w-1/2`}
                initial={{ opacity: 0, x: step.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
       <section>
        {/*Achivement */}
        <AchievementsSection/>
       </section>
      
      
       {/* Services Section */}
       <section className="py-16 px-8 text-center" id="services">
        <motion.h2
          className="text-4xl font-semibold text-blue-800 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[
            {
              title: 'UI/UX',
              description:
                'Discover how we design interfaces that blend visual appeal with intuitiveness, driving conversions and enhancing user experience seamlessly.',
              link: '#uiux',
              logo: '🎨', // Example emoji for UI/UX
              offset: 'translate-y-6',
            },
            {
              title: 'Web Development',
              description:
                'Witness the synergy of our creative designers and skilled developers, crafting stunning websites that captivate visitors and foster customer loyalty.',
              link: '#webdev',
              logo: '💻', // Example emoji for Web Development
              offset: '-translate-y-6',
            },
            {
              title: 'Mobile Development',
              description:
                'Explore how our tailored solutions drive operational efficiency and leverage data insights for your business in the digital age.',
              link: '#mobiledev',
              logo: '📱', // Example emoji for Mobile Development
              offset: 'translate-y-4',
            },
            {
              title: 'Internship/Training',
              description:
                'Explore our comprehensive training programs and workshops, spanning software utilization to design principles, elevating your team\'s skills and productivity.',
              link: '#training',
              logo: '📚', // Example emoji for Internship/Training
              offset: '-translate-y-4',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className={`service-card relative h-64 w-full max-w-lg mx-auto bg-red-200/30 backdrop-blur-md text-gray-800 shadow-lg rounded-xl overflow-hidden ${service.offset}`}
              whileHover={{ rotateY: 180 }} // Rotate the whole card on hover
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{
                perspective: '1000px', // Add perspective for 3D effect
              }}
            >
              <motion.div
                className="absolute inset-0 flex justify-center items-center text-7xl font-bold bg-red-300/70"
                style={{
                  transformStyle: 'preserve-3d', // Preserve 3D for child elements
                }}
              >
                <span>{service.logo}</span>
              </motion.div>
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 bg-red-400/90 p-6 flex flex-col justify-center items-center transition-opacity duration-300 rounded-xl"
                style={{
                  transform: 'rotateY(-180deg)', // Counter-rotate the content to keep it readable
                  transformStyle: 'preserve-3d',
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-center">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-4 block text-red-600 hover:text-red-800"
                >
                  See More
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default Home;