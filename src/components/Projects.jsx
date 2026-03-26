import React, { useState } from 'react'
import weather from '../../public/weather.png'
import SehatByDisha from '../../public/Disha.png'
import ImageSearch from '../../public/imageSearch.png'
import QRGenerator from '../../public/qrGenerator.png'
import myPortfolio from '../../public/myPortfolio.png'
import BlogApp from '../../public/BlogApp.png'
import pasteHub from '../../public/pasteHub.png'
import VideoSphere from '../../public/VideoSphere.png'
import SkillExchange from '../../public/SkillExchange.png'
import SayIt from '../../public/SayIt.png'
import Architecture from '../../public/Architecture.png'
import Cards from './Cards'

const Projects = () => {
    const [filter, setFilter] = useState('All')

    const projectJson = [
        {
            title: 'SehatByDisha',
            desc: 'A comprehensive web platform for Disha to manage her client consultations, meal planning.',
            image: SehatByDisha,
            tags: ['Health & Wellness', 'MERN Stack'],
            live: 'https://sehatbydisha.com/',
            github: 'https://github.com/placidconsultations/SehatBYDisha',
        },{
            title: 'Databricks Medallion Pipeline',
            desc: 'An end-to-end data pipeline using Medallion Architecture on Databricks — ingesting from S3, transforming with PySpark, and serving Gold-layer insights via Delta Lake.',
            image: Architecture,
            tags: ['Databricks', 'PySpark'],
            github: 'https://github.com/Yug2op/databricks-medallion-data-pipeline',
        },
        {
            title: 'Image-Search',
            desc: 'A website where you can search for images using the Unsplash API.',
            image: ImageSearch,
            tags: ['Unsplash API', 'JavaScript'],
            live: 'https://image-search-engine-bay.vercel.app',
            github: 'https://github.com/Yug2op/Image-Search-Engine',
        },
        {
            title: 'QR-Generator',
            desc: 'Generate QR codes for any text or link using an open-source API.',
            image: QRGenerator,
            tags: ['JavaScript', 'API'],
            live: 'https://qr-generator-murex-two.vercel.app',
            github: 'https://github.com/Yug2op/QR-Generator',
        },
        {
            title: 'Blog-App',
            desc: 'A blogging platform built with React and MongoDB — create, edit, and manage posts with a clean UI.',
            image: BlogApp,
            tags: ['MERN Stack', 'MongoDB'],
            live: 'https://blog-app-three-omega-33.vercel.app/',
            github: 'https://github.com/Yug2op/Blog-App',
        },
        {
            title: 'VideoSphere',
            desc: 'A modern video streaming platform on the MERN stack — upload, stream, like, comment, and subscribe.',
            image: VideoSphere,
            tags: ['MERN Stack', 'Streaming'],
            live: 'https://vidio-sphere-app.vercel.app/',
            github: 'https://github.com/Yug2op/VidioSphere-App',
        },
        {
            title: 'SkillExchange',
            desc: 'A skill exchange platform connecting learners and teachers with real-time chat and intelligent matching.',
            image: SkillExchange,
            tags: ['MERN Stack', 'Chat'],
            live: 'https://skill-exchange-mu.vercel.app/',
            github: 'https://github.com/Yug2op/SkillExchange',
        },
        {
            title: 'SayIt',
            desc: 'An anonymous message wall where users post short positive messages — with smart content moderation.',
            image: SayIt,
            tags: ['Node.js', 'MongoDB', 'MERN Stack'],
            live: 'https://say-it-seven.vercel.app/',
            github: 'https://github.com/Yug2op/SayIt',
        },
    ]

    // Derive unique top-level filter categories
    const allTags = ['All', 'MERN Stack', 'Databricks']
    const filtered =
        filter === 'All'
            ? projectJson
            : projectJson.filter(p => p.tags?.some(t => t.toLowerCase().includes(filter.toLowerCase())))

    return (
        <section id='projects' className='relative bg-gray-700 py-16 px-4 border-t border-gray-500'>
            <div className='max-w-6xl mx-auto'>

                {/* Section header */}
                <div className='flex items-end justify-between mb-10 flex-wrap gap-4'>
                    <div>
                        <p className='text-[12px] font-mono tracking-[0.25em] uppercase text-red-500 mb-2'>
                            Selected Work
                        </p>
                        <h2 className='text-3xl font-bold text-white leading-none'>
                            Projects
                            <span className='text-red-500'>.</span>
                        </h2>
                    </div>

                    {/* Filter pills */}
                    <div className='flex flex-wrap gap-2'>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setFilter(tag)}
                                className={`text-[12px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
                                    filter === tag
                                        ? 'bg-red-500 border-red-500 text-white'
                                        : 'bg-transparent border-gray-600 text-gray-400 hover:border-red-500/50 hover:text-gray-200'
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Count */}
                <p className='text-xs text-gray-500 font-mono mb-6'>
                    Showing{' '}
                    <span className='text-red-400'>{filtered.length}</span>{' '}
                    of {projectJson.length} projects
                </p>

                {/* Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {filtered.map((item, index) => (
                        <Cards key={item.title} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects