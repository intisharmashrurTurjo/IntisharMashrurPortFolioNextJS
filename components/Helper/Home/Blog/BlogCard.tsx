import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    title: string;

}
const BlogCard = ({ image, title }: Props) => {
    return (
        <div className="bg-slate-900 lg:p-6 p-4 m-2 rounded-lg hover:shadow-[0_0_20px_1px_rgba(0,229,255,0.9)]">
            <Image src={image} alt="blog" width={500} height={500} className="object-cover" />
            <p className="mt-5 text-gray-500 font-medium text-base sm:text-lg">
                5 July 2025
            </p>
            <h1 className="mt-5 text-lg sm:text-xl font-bold text-white hover:underline hover:text-cyan-300 cursor-pointer transition-all duration-300">{title}</h1>
            <div className="mt-4 flex gap-2 items-center">
                <p className="px-1.5 py-1.5 bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)] via-pink-900 to-purple-900 border-1 border-indigo-900 text-black text-sm sm:text-base font-bold rounded-full text-gray-900">React</p>

                <p className="px-4 py-1.5 bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)] border-1 border-indigo-900 text-black text-sm sm:text-base font-bold font-roboto-mono rounded-full text-gray-900">Next JS</p>
                <p className="px-4 py-1.5 bg-[linear-gradient(90deg,#007BFF,#00E5FF,#5A00A8)] border-1 border-indigo-900 text-black text-sm sm:text-base font-bold font-roboto-mono rounded-full text-gray-900">Laravel</p>
            </div>
        </div>
    )
}

export default BlogCard
