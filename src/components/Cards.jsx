import React from 'react'
import Github from '../../public/github.png'

const Cards = ({ item }) => {
    return (
        <div className='border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50 shadow-md hover:shadow-red-400 transition-shadow duration-300'>
            <img src={item.image} alt={`${item.title} screenshot`} className='rounded-lg aspect-[4/3] object-cover' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <a 
                        href={item.live} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors'
                    >
                        Live Preview
                    </a>
                    <a 
                        href={item.github} 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className='bg-black text-white px-3 py-2 rounded-md hover:bg-gray-900 transition-colors flex items-center gap-1'
                    >
                        <img src={Github} alt="GitHub" className='w-5 h-5' />
                        Github Link
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards
