import React from 'react';
import ServiceCard from '../components/ui/ServiceCard';
import {
  AcademicCapIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  CheckCircleIcon,
  PaintBrushIcon,
  CogIcon,
  WrenchIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid'; // Import Heroicons

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your needs.',
      icon: <AcademicCapIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Web Development',
      description: 'Websites that work on all devices.',
      icon: <CodeBracketIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Apps for phones and tablets.',
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Cloud Computing Services',
      description: 'Use the internet to improve your business.',
      icon: <CloudIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Quality Assurance and Testing',
      description: 'Checking software for reliability.',
      icon: <CheckCircleIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'UI/UX Designing',
      description: 'Creating user-friendly interfaces.',
      icon: <PaintBrushIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Maintenance and Support',
      description: 'Keeping your software running smoothly.',
      icon: <WrenchIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Dev Ops',
      description: 'Faster and safer software delivery.',
      icon: <CogIcon className="h-10 w-10 text-blue-500" />,
    },
    {
      title: 'Blockchain Solutions',
      description: 'Secure technology for your business.',
      icon: <LockClosedIcon className="h-10 w-10 text-blue-500" />,
    },
  ];

  return (
    <div className="bg-blue-900 text-white py-16 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;