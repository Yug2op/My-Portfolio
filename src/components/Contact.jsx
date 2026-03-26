import { useRef } from 'react'
import Lottie from 'lottie-react'
import contact from '../../public/Contact.json'
import emailjs from '@emailjs/browser'
import conf from '../ENV_variables/conf'
import { publicKey } from '../ENV_variables/conf'

const Contact = () => {
  const form = useRef()
  const serviceId = conf.serviceId
  const templateId = conf.templateId

  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      console.log(publicKey)
      const response = await emailjs.sendForm(serviceId, templateId, form.current, { publicKey })
      alert('Message sent successfully!', response.text)
      form.current.reset()
    } catch (error) {
      console.error('Error:', JSON.stringify(error, null, 2))
    }
  }

  return (
    <section id='contact' className='z-50 bg-gray-700 relative py-8 px-5 md:px-0 border-t border-gray-500'>
      <div className='max-w-6xl mx-auto'>
        
        {/* Section Header - Keeping your new clean typography */}
        <div className='mb-6 ml-2'>
          <p className='text-[12px] font-mono tracking-[0.25em] uppercase text-red-500 mb-2'>
            Let's Talk
          </p>
          <h2 className='text-4xl font-bold text-white leading-none'>
            Get in Touch<span className='text-red-500'>.</span>
          </h2>
        </div>

        {/* Changed from grid to flex-row to match your old layout structure */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-10'>

          {/* LEFT — Info + Lottie (md:w-1/2 matches your old layout) */}
          <div className='md:w-1/2 mb-8 ml-4 md:mb-0'>
            <p className='mb-4 text-white/85 max-w-md'>
              I'm always open to new opportunities and collaboration. 
              <br />
              Feel free to reach out!
            </p>
            
            {/* Social links - Keeping the cool new SVG icons and hover effects */}
            <div className='flex items-center gap-4 mb-8'>
              {[
                { href: 'https://www.facebook.com/yugank.tri.111', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { href: 'https://www.instagram.com/_yugank__.__tripathi_/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { href: 'https://www.linkedin.com/in/yugank-tripathi-830b7a23a/', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' }
              ].map((social, i) => (
                <a key={i} href={social.href} target='_blank' rel='noopener noreferrer' 
                   className='w-8 h-8 flex items-center justify-center rounded-full bg-gray-700/50 border border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-500/50 hover:scale-110 transition-all duration-300'>
                  <svg viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4'>
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <Lottie animationData={contact} className='w-[300px] lg:w-[450px] opacity-90' />
          </div>

          {/* RIGHT — Form (md:w-1/2 matches your old layout) */}
          <div className='w-full md:w-1/2 bg-gray-900/40 border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl shadow-red-500/10 relative overflow-hidden'>
            
            {/* Visual Flare */}
            <div className='absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 blur-3xl rounded-full pointer-events-none' />

            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-6 relative z-10'>
              <h3 className='text-2xl font-bold text-white mb-2'>Contact Me</h3>
              
              <div className='flex flex-col gap-1'>
                <label htmlFor='name' className='text-[12px] font-mono tracking-widest uppercase text-gray-400'>Name</label>
                <input
                  type='text' id='name' name='user_name' placeholder='Full Name' required
                  className='bg-gray-800/50 border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:outline-none text-white rounded-xl px-4 py-2.5 transition-all'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='email' className='text-[12px] font-mono tracking-widest uppercase text-gray-400'>Email</label>
                <input
                  type='email' id='email' name='user_email' placeholder='Email Address' required
                  className='bg-gray-800/50 border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:outline-none text-white rounded-xl px-4 py-2.5 transition-all'
                />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor='message' className='text-[12px] font-mono tracking-widest uppercase text-gray-400'>Message</label>
                <textarea
                  id='message' name='message' placeholder='How can I help you?' rows={4} required
                  className='bg-gray-800/50 border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 focus:outline-none text-white rounded-xl px-4 py-2.5 transition-all resize-none'
                />
              </div>

              <button
                type='submit'
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-500/20'
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact