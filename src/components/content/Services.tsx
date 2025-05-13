import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';

const ServicesSection: React.FC = () => {
  const services = [
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
  ];

  return (
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
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
            logo={service.logo}
            offset={service.offset}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;