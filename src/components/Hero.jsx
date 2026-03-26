import HeroLogo from '../../public/hero.png'
import reactLogo from '../../public/reactLogo.png'
import reduxLogo from '../../public/reduxLogo.png'
import Tailwind from '../../public/tailwind.png'
import Databricks from '../../public/Databricks.png'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Yug2op',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yugank-tripathi-830b7a23a/',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/_yugank__.__tripathi_/',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/yugank.tri.111',
    icon: (
      <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
      </svg>
    ),
  },
]

const floatingSkills = [
  { img: reactLogo, label: 'React', pos: 'top-[20%] left-[12%]', rounded: true },
  { img: reduxLogo, label: 'Redux', pos: 'top-[8%] right-[18%]' },
  { img: Tailwind, label: 'Tailwind', pos: 'bottom-[22%] right-[8%]', rounded: true },
  { img: Databricks, label: 'Databricks', pos: 'bottom-[4%] left-[2%]'},
]

const Hero = () => {
  return (
    <section className='relative bg-transparent overflow-hidden'>

      {/* Red glow behind image */}
      <div
        className='absolute bottom-0 right-0 w-[45%] h-[80%] pointer-events-none z-0'
        style={{ background: 'radial-gradient(ellipse at bottom right, rgba(239,68,68,0.1) 0%, transparent 65%)' }}
      />

      <div className='max-w-6xl mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row items-center min-h-[90vh] justify-between gap-8'>

          {/* LEFT — Text content */}
          <div className='md:w-1/2 flex flex-col gap-5 pt-24 md:pt-0'>

            <p className='text-[12px] font-mono tracking-[0.25em] uppercase text-red-500'>
              Full Stack Developer
            </p>

            <h1 className='text-4xl lg:text-5xl font-bold leading-tight text-white'>
              Hi, I'm{' '}
              <br />
              <span className='text-red-500'>Yugank </span>
              Tripathi
              <span className='text-red-500'>.</span>
            </h1>

            <p className='text-sm text-gray-400 leading-relaxed max-w-sm'>
              A passionate web developer with expertise in React and modern web technologies. I love creating beautiful, functional websites that solve real-world problems.
            </p>

            {/* CTA + Socials */}
            <div className='flex items-center gap-4 flex-wrap'>
              <a
                href='https://drive.google.com/file/d/1hfwzmnxoRKjLNB045N3xGUUBnNNkUjPe/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold tracking-wide uppercase px-5 py-2.5 rounded-full transition-colors duration-200'
              >
                Download CV
                <svg className='w-3.5 h-3.5' fill='none' stroke='currentColor' strokeWidth={2.5} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4' />
                </svg>
              </a>

              <div className='flex items-center gap-3'>
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={s.label}
                    className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/80 border border-gray-700 text-gray-400 hover:border-red-500/50 hover:text-red-400 transition-all duration-200'
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Stat row */}
            <div className='flex items-center gap-6 pt-2 border-t border-gray-600/50'>
              <div>
                <p className='text-xl font-bold text-white'>8<span className='text-red-500'>+</span></p>
                <p className='text-[12px] text-gray-500 font-mono tracking-wide'>Projects</p>
              </div>
              <div className='w-px h-8 bg-gray-600' />
              <div>
                <p className='text-xl font-bold text-white'>MERN<span className='text-red-500'>+</span></p>
                <p className='text-[12px] text-gray-500 font-mono tracking-wide'>Stack</p>
              </div>
              <div className='w-px h-8 bg-gray-600' />
              <div>
                <p className='text-xl font-bold text-white'>Open<span className='text-red-500'>.</span></p>
                <p className='text-[12px] text-gray-500 font-mono tracking-wide'>To Work</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Hero image */}
          <div className='md:w-1/2 relative flex justify-center items-end self-end'>

            {floatingSkills.map((skill) => (
              <div
                key={skill.label}
                className={`absolute ${skill.pos} hidden md:flex items-center gap-1.5 bg-gray-800/90 border border-gray-700 backdrop-blur-sm px-2.5 py-1.5 rounded-xl shadow-lg z-10`}
              >
                <img
                  src={skill.img}
                  alt={skill.label}
                  className={`w-5 h-5 object-contain ${skill.rounded ? 'rounded-full' : ''}`}
                />
                <span className='text-[12px] font-semibold text-gray-300'>{skill.label}</span>
              </div>
            ))}

            <img src={reactLogo} alt='React' className='absolute w-9 top-10 left-2 rounded-full md:hidden border border-gray-600' />
            <img src={reduxLogo} alt='Redux' className='absolute w-9 top-4 right-4 md:hidden border border-gray-600 rounded-lg' />
            <img src={Tailwind} alt='Tailwind' className='absolute w-9 bottom-32 right-2 rounded-full md:hidden border border-gray-600' />

            <img
              src={HeroLogo}
              alt='Yugank Tripathi'
              className='lg:h-[85vh] h-80 object-contain object-bottom relative z-0 drop-shadow-2xl'
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero