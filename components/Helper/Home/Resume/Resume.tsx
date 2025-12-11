import React from 'react'
import ResumeCard from './ResumeCard'
import { FaBook, FaCode, FaCodepen, FaLaravel, FaPen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'
import { FaEdge } from 'react-icons/fa6'

const Resume = () => {
    return (
        <div className="pt-20 pb-16">
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
                {   /* Work Section Part */}
                <div>
                    <h1 className="text-3xl tracking-wider sm:text-4xl font-extrabold font-roboto-mono text-white">My Work 
                        <span className="text-cyan-200"> Experience</span>
                    </h1>
                    <div className="relative top-60 opacity-80">
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl"></div>
                        <div className="absolute top-0 right-22 w-72 h-72 bg-yellow-300 rounded-full filter blur-3xl"></div>
                        <div className="absolute -bottom-28  left-20 w-72 h-72 bg-purple-300 rounded-full filter blur-3xl"></div>
                    </div>
                    <div className="mt-10">
                        <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
                        <ResumeCard Icon={FaReact} role="Front-End Developer" />
                        <ResumeCard Icon={FaLaravel} role="Back-End Developer (Laravel)" />
                    </div>
                </div>

                {   /* Education Section Part */}
                <div>
                     <h1 className="text-3xl tracking-wider sm:text-4xl font-extrabold font-roboto-mono text-white">My  
                        <span className="text-cyan-200"> Education</span>
                    </h1>
                         <div className="mt-10">
                        <ResumeCard Icon={FaPen} role="Diploma in Engineering" date="Jan 2023 - Dec 2024"/>
                        <ResumeCard Icon={FaCode} role="Certificate in Professinal Web Development" date="Jan 2022 - Jan 2023"/>
                        <ResumeCard Icon={FaBook} role="Secondary School Certificate (SSC)" date="Jan 2017 - Jan 2019" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
