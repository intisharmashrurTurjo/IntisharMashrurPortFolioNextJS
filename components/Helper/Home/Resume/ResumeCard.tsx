import { div } from 'framer-motion/client';
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    role: string;
    Icon: IconType;
    date?: string;
}

const ResumeCard = ({ role, Icon, date }: Props) => {
  return (
    <div className="mb-6">
    <div data-aos="fade-left" className="relative z-9999 flex items-start space-x-6 bg-slate-900 
    transition-all duration-300 p-4 sm:p-8 rounded-md shadow-xl">

  <div className="sm:w-14 sm:h-14 w-10 h-10 bg-blue-950 rounded-full 
      flex items-center justify-center flex-col relative z-[1000]">
      <Icon className="sm:w-8 sm:h-8 w-6 h-6 text-white" />
  </div>

  <div className="flex-1 relative z-[1000]">
      {date && (
        <h1 className="mb-2 sm:px-6 sm:py-1.5 px-4 py-1 rounded-full bg-gray-200 
            text-gray-600 w-fit sm:text-lg text-sm font-bold">
          {date}
        </h1>
      )}

      <h1 className="text-gray-200 text-xl sm:text-2xl pt-2 font-semibold">
        {role}
      </h1>

      <p className="text-gray-400 tracking-wide text-sm sm:text-base pt-3 font-roboto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas harum fugiat nesciunt commodi necessitatibus.
      </p>
  </div>

</div>

    </div>
  )
}

export default ResumeCard
