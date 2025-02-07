import React from 'react'
import HeroLogo from '../assets/hero.png'
import facebook from '../assets/facebook.png'
import githubLogo from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/reactLogo.png'
import reduxLogo from '../assets/reduxLogo.png'
import Tailwind from '../assets/tailwind.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-6xl text-4xl font-bold lg:leading-snug'>Hi There, <br/>I'm <span className='text-red-500'>Yugank</span> Tripathi</h1>
               <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
               <p className='mb-4'>I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional website that solve real world problems.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1N6tia2EHHWXydte4SZDdY9rw2PxdQiKB/view?usp=sharing" download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={HeroLogo} alt="" className='lg:h-[90vh] h-96' />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={Tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'> 
        <a href="https://www.facebook.com/yugank.tri.111" target='_blank'>
          <img src={facebook} alt="" className='w-20'/>
          </a>
        <a href="https://www.instagram.com/_yugank__.__tripathi_/" target='_blank'>
          <img src={instagram} alt="" className='w-20'/>
          </a>
        <a href="https://github.com/Yug2op" target='_blank'>
          <img src={githubLogo} alt="" className='w-16 mx-2 bg-red-500 rounded-xl'/>
          </a>
        <a href="https://www.linkedin.com/in/yugank-tripathi-830b7a23a/" target='_blank'>
          <img src={linkedin} alt="" className='w-20'/>
          </a>
      </div>
    </section>
  )
}

export default Hero