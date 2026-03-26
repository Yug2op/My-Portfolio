import { useState } from 'react'
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
    <header className='sticky top-0 z-50 w-full bg-gray-700/90 backdrop-blur-md border-b border-gray-600/50'>
      <div className='max-w-6xl mx-auto px-4 flex h-14 items-center justify-between'>

        {/* Logo */}
        <a href='/' className='flex items-center'>
          <span className='text-base font-bold text-white'>
            yugank<span className='text-red-500'>.</span>
          </span>
          <span className='text-base font-bold text-red-500'>tripathi</span>
          <span className='text-base font-bold text-gray-500'>/</span>
        </a>

        {/* Desktop nav */}
        <nav className='hidden md:flex items-center gap-1'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-xs font-medium text-gray-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-gray-600/50 transition-all duration-200'
            >
              {link.name}
            </a>
          ))}
          {/* <a
            href='#contact'
            className='ml-2 text-xs font-semibold tracking-wide uppercase bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-full transition-colors duration-200'
          >
            Hire Me
          </a> */}
        </nav>

        {/* Mobile menu button */}
        <button
          className='md:hidden text-gray-400 hover:text-white transition-colors'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label='Toggle menu'
        >
          {mobileMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t border-gray-600/50 bg-gray-700/95 backdrop-blur-md'>
          <div className='max-w-4xl mx-auto px-4 py-3 flex flex-col gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className='text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-600/50 px-3 py-2 rounded-lg transition-all duration-200'
              >
                {link.name}
              </a>
            ))}
            <a
              href='#contact'
              onClick={() => setMobileMenuOpen(false)}
              className='mt-1 text-xs font-semibold tracking-wide uppercase text-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-200'
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar