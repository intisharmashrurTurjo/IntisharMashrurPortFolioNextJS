import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center tracking-wider text-4xl md:text-5xl font-extrabold font-roboto-mono text-white">A small selection of <br />recent <span className="text-cyan-200 tracking-wider">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Project 1 */}
        <div>
          <Image
            src="/images/p1.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Modern CRM Dashboard UI</h1>
          <h1 className="pt-2 font-medium text-white/80">Apps , UI/UX</h1>
        </div>
        {/* Project 2 */}
        <div>
          <Image
            src="/images/p2.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Portfolio Website For Creatives</h1>
          <h1 className="pt-2 font-medium text-white/80">Branding , Motion</h1>
        </div>
        {/* Project 3 */}
        <div>
          <Image
            src="/images/p3.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Brand Identity For Startupss</h1>
          <h1 className="pt-2 font-medium text-white/80">Branding , UI/UX</h1>
        </div>
        {/* Project 4 */}
        <div>
          <Image
            src="/images/p4.jpg"
            alt="img"
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">SaaS Dashboard Development</h1>
          <h1 className="pt-2 font-medium text-white/80">Apps , UI/UX</h1>
        </div>
      </div>
    </div>
  )
}

export default Projects
