import React from 'react'
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className="pt-16 pb-16 ">
            <h1 className="text-center tracking-wider text-3xl md:text-4xl xl:text-6xl font-roboto-mono font-extrabold text-white">
                <span className="text-cyan-200">Colleborate</span> with brand
                <br /> and agencies to create
                <br /> impactful  <span className="text-cyan-200 tracking-wider">results</span>  

            </h1>
            <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 mt-20 items-center">

                <div>
                    <ServiceCard icon="/images/s1.png"
                    name="UI and UX"
                    description="Designing interfaces that are intuitive, efficient and enjoyable to use." />
                </div>

                    <div>
                    <ServiceCard icon="/images/s2.png"
                    name="Web And Mobile App"
                    description="Designing interfaces that are intuitive, efficient and enjoyable to use." />
                </div>

                    <div>
                    <ServiceCard icon="/images/s3.png"
                    name="Design And Customization"
                    description="Designing interfaces that are intuitive, efficient and enjoyable to use." />
                </div>

                    <div>
                    <ServiceCard icon="/images/s4.png"
                    name="CRM Software Solutions"
                    description="Designing interfaces that are intuitive, efficient and enjoyable to use." />
                </div>
            </div>
        </div>
    )
}

export default Services;