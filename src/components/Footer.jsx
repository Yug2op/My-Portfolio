import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Automatically get current year
  return (
    <footer className='bg-gray-100 py-4 relative'>
      <div className='container mx-auto px-4 text-center'>
      <p>&copy; {currentYear} <span className="font-semibold">Yugank</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer