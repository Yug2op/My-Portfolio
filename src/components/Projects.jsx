import React from 'react'
import weather from '../../public/weather.png'
import ImageSearch from '../../public/imageSearch.png'
import QRGenerator from '../../public/qrGenerator.png'
import myPortfolio from '../../public/myPortfolio.png'
import BlogApp from '../../public/BlogApp.png'
import pasteHub from '../../public/pasteHub.png'
import VideoSphere from '../../public/VideoSphere.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Working on it to make it more responsive and interactive. It is a simple portfolio website with a dark theme.',
          image: myPortfolio,
          live: "https://my-portfolio-git-main-yugank-tripathis-projects.vercel.app/",
          github: "https://github.com/Yug2op/My-Portfolio"
        },
        {
          title: 'Image-Search',
          desc: ' Created a website where you can search for images using the Unsplash API. It is a simple website.',
          image: ImageSearch,
          live: "https://image-search-engine-bay.vercel.app",
          github: "https://github.com/Yug2op/Image-Search-Engine"
        },
        {
          title: 'Paste-Hub',
          desc: 'A minimalistic paste website for effortlessly writing and reading your daily notes. Simple, fast, and convenient.',
          image: pasteHub,
          live: "https://paste-hub-yugank-tripathis-projects.vercel.app/",
          github: "https://github.com/Yug2op/PasteHub"
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
        {
          title: 'Blog-App',
          desc: 'Blog App is a simple and efficient blogging platform built using React and Appwrite. It allows users to create, edit, delete, and manage blog posts with a clean and responsive UI.',
          image: BlogApp,
          live: "https://blog-app-six-orpin.vercel.app/",
          github: "https://github.com/Yug2op/Blog-App"
        },
        {
          title: 'VideoSphere-One sphere, infinite videos',
          desc: 'VidioSphere is a modern video streaming platform built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides users with a seamless experience to upload, stream, like, comment, and subscribe to channels, tweet, similar to popular platforms like YouTube.',
          image: VideoSphere,
          live: "https://vidio-sphere-app.vercel.app/",
          github: "https://github.com/Yug2op/VidioSphere-App"
        }
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