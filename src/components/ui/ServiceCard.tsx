import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Icon passed as a prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white text-center p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;