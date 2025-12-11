import React from 'react'
import BlogCard from './BlogCard';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center font-roboto-mono tracking-wider text-2xl md:text-4xl xl:text-5xl font-extrabold text-white">My Latest <span className="text-cyan-200 tracking-wider">Blogs</span> </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-4 items-center mt-16">
        {/* Blog 1 */}
        <div>
            <BlogCard image="/images/b1.jpg" title="learn how to build a Portfolio website using Next.js" />
        </div>
        <div>
            <BlogCard image="/images/b2.jpg" title="learn how to build a Blog website using Next.js" />
        </div>
        <div>
            <BlogCard image="/images/b3.jpg" title="learn how to build an amazing social media website using Next.js" />
        </div>
      
      </div>
    </div>
  )
}

export default Blog;
