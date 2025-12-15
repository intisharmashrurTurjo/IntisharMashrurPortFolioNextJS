"use client";

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './ClientReviewCard';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ClientReview = () => {
  return (
    <div className="pt-16 mt-10 pb-16">
      <h1 className="text-center font-roboto-mono tracking-wider leading-16 text-4xl md:text-4xl xl:text-5xl font-extrabold text-white">Kind Word From Satisfied <br /><span className="text-cyan-200 tracking-wider">Clients</span> </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={2500}
>
  <ClientReviewCard image="/images/c1.png" role="CEO, Landscape" name="Janny Doe" />
  <ClientReviewCard image="/images/c2.png" role="UI UX Designer" name="John Doe" />
  <ClientReviewCard image="/images/c3.png" role="CEO, AlgoSoft" name=" Jane Doe" />
  <ClientReviewCard image="/images/c4.png" role="MT, AmricanExpress" name="Jack Doe" />
  <ClientReviewCard image="/images/c5.png" role="SWT, Meta" name="Jara Doe" />

</Carousel>;
      </div>
    </div>
  )
}

export default ClientReview
