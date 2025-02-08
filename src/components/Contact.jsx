import React, { useRef } from 'react'
import facebook from '../../public/facebook.png'
import instagram from '../../public/instagram.png'
import linkedin from '../../public/linkedin.png'
import Lottie from 'lottie-react'
import contact from '../../public/Contact.json'
import emailjs from '@emailjs/browser';
import conf from '../ENV_variables/conf'
import { publicKey } from '../ENV_variables/conf'

const Contact = () => {
  const form = useRef();
  const serviceId = conf.serviceId;
  const templateId = conf.templateId;

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey,
        })
      alert('Email sent successfully:', response.text);
    } catch (error) {
      console.error("Error:", JSON.stringify(error, null, 2));
    }

  };
  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
            <div className='flex space-x-4'>
              <a href="https://www.facebook.com/yugank.tri.111" target='_blank' className='text-foreground/60 hover:text-foreground/80'>
                <img src={facebook} alt="" className='h-6 w-6' /></a>
              <a href="https://www.instagram.com/_yugank__.__tripathi_/" target='_blank' className='text-foreground/60 hover:text-foreground/80'>
                <img src={instagram} alt="" className='h-6 w-6' /></a>
              <a href="https://www.linkedin.com/in/yugank-tripathi-830b7a23a/" target='_blank' className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedin} alt="" className='h-6 w-6' /></a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>
          <form ref={form}
            onSubmit={sendEmail}
            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'>
            <h1
              className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
            <div
              className='mb-4'>
              <label
                htmlFor="name"
                className='block text-sm font-medium text-gray-700'>
                Name </label>
              <input
                type="text"
                id='name'
                name='user_name'
                placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label
                htmlFor="email"
                className='block text-sm font-medium text-gray-700'>Email</label>
              <input
                type="email"
                id='email'
                name='user_email'
                placeholder='Email'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <div className='mb-4'>
              <label
                htmlFor="message"
                className='block text-sm font-medium text-gray-700'>Message</label>
              <textarea
                id='message'
                name='message'
                placeholder='Enter Your Message'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' />
            </div>
            <button
              type='submit'
              value="send"
              className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact