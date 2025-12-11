import Image from 'next/image';
import React from 'react';
type   Props = {
    icon: string;
    name: string;
    description: string;
};

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div data-aos="fade-right" className=" opacity-100 bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-2xl">
      <Image src={icon} alt="img" width={60} height={60} className="mx-auto" />
      <h1 className="mt-8 text-center z-[9999] text-xl md:text-2xl font-bold text-gray-200">
        {name}
        
        </h1>
      <p className="mt-4 text-center text-gray-400 font-roboto text-md">{description}</p>
    </div>
  )
}

export default ServiceCard
