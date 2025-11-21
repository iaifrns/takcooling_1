import PageTransition from '@/components/common/PagesTransition'
import React, { useState } from 'react'
import ing5 from '@/assets/image/ing5.jpeg'
import { ArrowRight, Check, X, Instagram, Twitter, Facebook, Phone, MapPin, Clock9 } from 'lucide-react';
import serviceimg from '@/assets/image/service.jpeg'
import paysage from '@/assets/image/paysage2.jpg'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'
import emailjs from 'emailjs-com';

const contact = () => {

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]
  // const center = {lat:,lng:}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {

      emailjs.send(
        "service_takcooling",
        "template_hd6xane",
        formData,
        "0VDxYnDZMBN5m5FC7"
      ).then(_ => {
        alert("Message sent!");
      })
    } catch (e) {
      alert("Error sending message")
    }

  }

  return (
    <PageTransition>
      <div className='w-screen mt-20 flex flex-col items-center bg-white '>
        <div className='relative flex justify-center items-end w-full h-150'>
          <img className='absolute w-full h-150 object-cover' src={paysage} alt="" />
          <div className='relative flex justify-end w-2/3 h-2/3'>
            <div className='absolute flex flex-col py-10 px-8 top-0 left-0 w-full md:w-100 h-120 gap-8 rounded-xs bg-black'>
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none"><path d="M0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27V54H48V27C48 15.402 38.598 6 27 6C15.402 6 6 15.402 6 27V54H0V27Z" fill="#EA5501"></path><path d="M27 12C18.3015 12 11.25 19.0515 11.25 27.75V54H42.75V27.75C42.75 19.0515 35.6985 12 27 12Z" fill="#EA5501"></path></svg>
              <div className=''>
                <p className='text-white text-2xl font-semibold'>Main Offices</p>
                <p className='font-semibold text-gray-500'>Mon - Sat 10.00 - 18.00</p>
              </div>
              <button className='w-Full flex h-12 rounded-xs border-2 justify-center items-center gap-2 border-gray-500 text-gray-500'>View Location <ArrowRight /></button>
              <div className='flex flex-col gap-4'>
                <p className='font-semibold text-gray-500 flex gap-2'><Phone className='w-5 h-5' /> +32 (0) 73 240 396</p>
                <p className='font-semibold text-gray-500 flex gap-2'><MapPin className='w-5 h-5' />industrie.info@gmail.com</p>
                <p className='font-semibold text-gray-500 flex gap-2'><Clock9 className='w-5 h-5' />5214F Diamond Heights Blvd, San Franceisco, USA</p>
              </div>
            </div>
            <div className='flex mt-12 mr-4 md:flex-col gap-8'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[rgba(0,0,0,0.8)] w-10 h-10 flex justify-center items-center rounded-xs hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className='invert-25 w-8 h-8' size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className='h-250 pt-20 md:h-300 w-full flex flex-col justify-center items-center'>
          <form onSubmit={handleSubmit} className=' flex justify-around flex-col w-4/5 md:w-1/2 -top-50 right-[15%] md:right-[25%] md:h-200 border-t-primary border-4 border-l-white border-r-white border-b-white bg-gray-50 rounded-xl p-15 gap-8'>
            <p className='text-2xl w-2/3 text-center md:text-5xl font-semibold text-black'>Get in Touch</p>
            <p className=' font-semibold text-gray-300'>The point of using Lorem Ipsum is that it has more-or-less packages normal  make a type specimen book it has survived</p>
            <div className=' flex flex-col md:flex-row gap-4 justify-between'>
              <input placeholder='Full Name' onChange={(e) => setFormData({ ...formData, name: e.target.value })} className='px-4 w-full md:w-1/3 h-12 bg-white border-2 border-gray-300' type="text" />
              <input placeholder='Email Address' onChange={(e) => setFormData({ ...formData, email: e.target.value })} className='px-4 w-full md:w-1/3 h-12 bg-white border-2 border-gray-300' type="text" />
              <input placeholder='phone' className='px-4 w-full md:w-1/3 h-12 bg-white border-2 border-gray-300' type="text" />
            </div>
            <textarea placeholder='write here...' onChange={(e) => setFormData({ ...formData, email: e.target.value })} className='px-4 w-full h-30 bg-white border-2 border-gray-300' name="" id=""></textarea>
            <button type='submit' className='W-1/4 h-12 bg-primary flex gap-2 font-semibold justify-center items-center text-white'>Send Message <ArrowRight className='invert-0' /></button>
          </form>
        </div>
        <div className='relative w-full h-100 bg-gray-300'>

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3971.0803258203696!2d10.3452030757382!3d5.5551109944253065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1762448386451!5m2!1sfr!2scm" className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          {/* <GoogleMap center={} >

          </GoogleMap> */}
        </div>
      </div>
    </PageTransition>
  )
}

export default contact