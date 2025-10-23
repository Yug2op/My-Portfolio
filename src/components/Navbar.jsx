import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur px-4 lg:px-0'>
      <div className='max-w-7xl mx-auto flex h-14 items-center justify-between'>
        {/* Logo */}
        <a href="/" className='flex items-center space-x-2'>
          <h5 className='text-xl font-bold text-foreground/80'>
            yugank.<span className='text-red-500'>tripathi/</span>
          </h5>
        </a>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center space-x-6 text-lg font-medium'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='transition-colors hover:text-foreground/80 text-foreground/60'
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='inline-flex items-center justify-center rounded-md md:hidden'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className='sr-only'>Open main menu</span>
          {mobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='md:hidden'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition'
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
