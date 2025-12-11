// components/Helper/Home/Home.tsx

"use client";
import React, { useEffect } from 'react';
import Hero from './Hero/Hero'; // default import of Hero component
import Services from './Services/Services';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import ClientReview from './ClientReview/ClientReview';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import 'aos/dist/aos.css'; 

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  }, []);

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills /> 
      <ClientReview />  
      <Blog />
      <Contact />     
    </div>
  );
};

export default Home;
