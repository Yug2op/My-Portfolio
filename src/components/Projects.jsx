import React from 'react'
import weather from '../assets/weather.png'
import ImageSearch from '../assets/ImageSearch.png'
import QRGenerator from '../assets/QRGenerator.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Working on it to make it more responsive and interactive. It is a simple portfolio website with a dark theme.',
          image: "",
          live: "#",
          github: "#"
        },
        {
          title: 'Image-Search',
          desc: ' Created a website where you can search for images using the Unsplash API. It is a simple website.',
          image: ImageSearch,
          live: "https://image-search-engine-bay.vercel.app",
          github: "https://github.com/Yug2op/Image-Search-Engine"
        },
        {
          title: 'Blog Website',
          desc: 'A simple blog website where you can read and write blogs. It is a simple website.',
          image: "",
          live: "#",
          github: "#"
        },
        {
          title: 'Weather Website',
          desc: 'A simple weather website where you can search for weather condition of any location. It is a simple website.',
          image: weather,
          live: "https://weather-app-yugank-tripathis-projects.vercel.app",
          github: "https://github.com/Yug2op/Weather-app"
        },
        {
          title: 'QR-Generator',
          desc: 'A simple QR code generator website where you can generate QR code of any text, link, etc. Used an open-source API to generate QR code.',
          image: QRGenerator,
          live: "https://qr-generator-murex-two.vercel.app",
          github: "https://github.com/Yug2op/QR-Generator"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items,index)=> {
                return <Cards key={index} item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects