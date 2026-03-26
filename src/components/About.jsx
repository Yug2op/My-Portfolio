import React from 'react'
import mernstack from '../../public/mernstack.png'
import JS from '../../public/javaScript.png'
import ReactLogo from '../../public/reactLogo.png'
import ReduxLogo from '../../public/reduxLogo.png'
import Tailwind from '../../public/tailwind.png'
import NodeLogo from '../../public/nodeLogo.png'
import mongodb from '../../public/mongodb.svg'
import Express from '../../public/express.png'
import PySpark from '../../public/PySpark.webp'
import Databricks from '../../public/Databricks.png'

const skills = [
    { img: Databricks, label: 'Databricks', wide: true },
    { img: PySpark, label: 'PySpark' },
    { img: JS, label: 'JavaScript' },
    { img: ReactLogo, label: 'React', rounded: true },
    { img: ReduxLogo, label: 'Redux' },
    { img: Tailwind, label: 'Tailwind', rounded: true },
    { img: NodeLogo, label: 'Node.js' },
    { img: mongodb, label: 'MongoDB' },
    { img: Express, label: 'Express.js' },
]

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-700 py-16 px-4'>
                <div className='max-w-6xl mx-auto'>

                    {/* Section header — matches Projects style */}
                    <div className='mb-12'>
                        <p className='text-[12px] font-mono tracking-[0.25em] uppercase text-red-500 mb-2'>
                            Who I Am
                        </p>
                        <h2 className='text-3xl font-bold text-white leading-none'>
                            About
                            <span className='text-red-500'>.</span>
                        </h2>
                    </div>

                    {/* Main grid */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

                        {/* Left — Journey card */}
                        <div className='bg-gray-800/60 border border-gray-700 rounded-2xl p-6 flex flex-col gap-5 hover:border-red-500/40 transition-colors duration-300'>
                            <div>
                                <p className='text-[9px] font-mono tracking-[0.2em] uppercase text-red-500/70 mb-2'>
                                    My Journey
                                </p>
                                <h3 className='text-xl font-bold text-white'>
                                    Hi, I'm Yugank Tripathi
                                </h3>
                                <p className='text-xs text-gray-400 mt-0.5'>
                                    A Fresher in the world of Tech.
                                </p>
                            </div>

                            <p className='text-sm text-gray-400 leading-relaxed'>
                                I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack, I've built projects ranging from a Blog Website and Paste App to full-scale streaming platforms — integrating powerful backends with sleek, user-friendly frontends.
                            </p>

                            {/* MERN badge */}
                            <div className='mt-auto pt-4 border-t border-gray-700 flex items-center gap-3'>
                                <img src={mernstack} alt='MERN Stack' className='h-8 object-contain opacity-80' />
                                <span className='text-[12px] text-gray-500 font-mono tracking-wider'>Core Stack</span>
                            </div>
                        </div>

                        {/* Right — Skills card */}
                        <div className='bg-gray-800/60 border border-gray-700 rounded-2xl p-6 flex flex-col gap-5 hover:border-red-500/40 transition-colors duration-300'>
                            <div>
                                <p className='text-[9px] font-mono tracking-[0.2em] uppercase text-red-500/70 mb-2'>
                                    Tech Stack
                                </p>
                                <h3 className='text-xl font-bold text-white'>
                                    Skills
                                </h3>
                            </div>

                            <div className='flex flex-wrap gap-2'>
                                {skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className='flex items-center gap-2 bg-gray-700/60 border border-gray-600/60 hover:border-red-500/40 hover:bg-gray-700 transition-all duration-200 rounded-xl px-3 py-2 cursor-default'
                                    >
                                        <img
                                            src={skill.img}
                                            alt={skill.label}
                                            className={`h-5 object-contain ${skill.rounded ? 'rounded-full' : ''} ${skill.wide ? 'w-14' : 'w-5'}`}
                                        />
                                        <span className='text-xs font-medium text-gray-300'>
                                            {skill.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Skill count */}
                            <div className='mt-auto pt-4 border-t border-gray-700'>
                                <p className='text-[12px] font-mono text-gray-500'>
                                    <span className='text-red-400'>{skills.length}</span> technologies &amp; counting
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About