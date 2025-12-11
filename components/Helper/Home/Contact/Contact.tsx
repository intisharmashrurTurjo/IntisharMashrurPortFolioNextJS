import React from 'react'
import { BiEnvelope, BiEnvelopeOpen, BiMap, BiPhone } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { FaFacebookF, FaGit, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="pt-16 pb-16 mt-10">
            <div className="w-[90%] md:w-[80%] p-3 lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Contact Text Section */}
                <div>
                    <h1 className="text-4xl sm:text-4xl leading-15 lg:text-5xl font-bold tracking-wider text-gray-200"><span className="text-cyan-200">Schedule a call</span> with me to see if i can help</h1>
                    <p className="text-gray-400 mt-6 text-base sm:text-lg tracking-wider">Reach out to me today
                        let's discuss how i can help you achieve your goals.</p>
                    <div className="mt-7">
                        <div className="flex items-center space-x-3 mb-4">
                            <BiPhone className="text-cyan-300 w-7 h-7" />
                            <p className="text-md font-bold text-gray-400">+880 13081-63999</p>
                        </div>
                        <div className="flex items-center space-x-3 mb-4">
                            <BiEnvelope className="text-cyan-300 w-7 h-7" />
                            <p className="text-md font-bold text-gray-400">dev.intisharmashrur@gmail.com</p>
                        </div>
                          <div className="flex items-center space-x-3 mb-4">
                    <BiMap className="text-cyan-300 w-7 h-7"/>
                    <p className="text-md font-bold text-gray-400">Avenue 5, Mirpur 11, Dhaka-1216, Bangladesh</p>
                </div>
                    </div>
                        {/*Social Icons */}
                        <div className="flex items-center mt-8 space-x-3">
                            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300">
                            <FaFacebookF className="mx-auto text-white w-6 h-6"/>
                            </div>
                            
                            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-red-800 transition-all duration-300">
                            <FaYoutube className="mx-auto text-white w-6 h-6"/>
                            </div>
                            
                            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-slate-950 transition-all duration-300">
                            <FaGithub className="mx-auto text-white w-6 h-6"/>
                            </div>
                            <div className="w-14 h-14 bg-blue-950/60 rounded-full flex justify-center items-center cursor-pointer flex-col hover:bg-sky-900 transition-all duration-300">
                            <FaLinkedin className="mx-auto text-white w-6 h-6"/>
                            </div>
                        </div>
                </div>
                {/* Contact Form Section */}
                <div className='md:p-10 p-8 bg-[#131332] rounded-lg'>
                    <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
                    <input type="email" placeholder='Email Address' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
                    <input type="text" placeholder='Mobile Number' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70' />
                    <textarea placeholder='Your Message' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'></textarea>
                        <button className='mt-8'>
                            <a
                              href="#"
                              className="
                                px-4 py-2.5 sm:mt-5 text-base font-medium rounded-full
                                bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)]
                                hover:bg-[linear-gradient(90deg,#5A00A8,#00E5FF,#007BFF)]
                                hover:text-black transition-all duration-200 text-white
                                shadow-[0_0_8px_1px_rgba(0,229,255,0.6)]
                                hover:shadow-[0_0_15px_3px_rgba(0,229,255,0.9)]
                             items-center gap-3 z-30
                              "
                            >
                              
                              <span className="font-bold">Send Messages</span>
                            </a>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Contact
