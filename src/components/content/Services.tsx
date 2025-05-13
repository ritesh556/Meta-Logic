import React from 'react';
import Card from '../ui/Card';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'UI/UX',
      description:
        'Discover how we design interfaces that blend visual appeal with intuitiveness, driving conversions and enhancing user experience seamlessly.',
      link: '#uiux',
      logo: '🎨',
    },
    {
      title: 'Web Development',
      description:
        'Witness the synergy of our creative designers and skilled developers, crafting stunning websites that captivate visitors and foster customer loyalty.',
      link: '#webdev',
      logo: '💻',
    },
    {
      title: 'Mobile Development',
      description:
        'Explore how our tailored solutions drive operational efficiency and leverage data insights for your business in the digital age.',
      link: '#mobiledev',
      logo: '📱',
    },
    {
      title: 'Internship/Training',
      description:
        'Explore our comprehensive training programs and workshops, spanning software utilization to design principles, elevating your team\'s skills and productivity.',
      link: '#training',
      logo: '📚',
    },
  ];

  return (
    <section className="py-8 px-4 md:py-16 md:px-8 text-center" id="services">
      <h2 className="text-2xl md:text-4xl font-semibold text-blue-800 mb-8 md:mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            link={service.link}
            logo={service.logo} offset={''}          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;