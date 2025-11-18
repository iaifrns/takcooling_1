import PageTransition from '@/components/common/PagesTransition'
import React, { useState } from 'react'
import About from '@/assets/image/about-main1.png'
import blog2 from '@/assets/image/ing2.jpeg'
import blog3 from '@/assets/image/ing3.jpeg'
import blog4 from '@/assets/image/ing4.jpeg'
import blog5 from '@/assets/image/ing5.jpeg'
import blog6 from '@/assets/image/ing6.png'
import fond2 from '@/assets/image/fond_hom.jpg'
import { ArrowLeft, ArrowRight, Check, Search, X } from 'lucide-react';
import serviceimg from '@/assets/image/service.jpeg'
import { motion } from 'framer-motion'
import headerImg from '@/assets/image/hearderImg.png'


const Blog = () => {

  const tabs = [
    { id: 1, label: 'Air conditioning installation', image: fond2, title: 'Professional Air Conditioning Installation for Perfect Home Comfort', content: 'Upgrade your home or business with a modern, energy-efficient AC system installed by certified experts. We deliver fast, clean, and reliable installation services tailored to your space, ensuring powerful cooling and maximum comfort all year round. Stay cool the smart way!' },
    { id: 2, label: 'Air conditioning Repair', image: blog2, title: 'Fast & Reliable Air Conditioning Repair — Stay Cool Again in No Time', content: 'Is your AC making noise, blowing warm air, or not starting at all? Our skilled technicians diagnose and repair all AC issues with precision and speed. We restore your cooling system quickly so you can enjoy fresh, comfortable air without interruption' },
    { id: 3, label: 'Air conditioning Maintenance', image: blog3, title: 'Prevent Costly Breakdowns with Expert AC Maintenance', content: 'Extend the life of your air conditioner and improve its performance with our professional maintenance service. We clean, tune, and optimize your system to ensure efficient cooling, lower energy bills, and fewer unexpected repairs. Your comfort is our priority.' },
    { id: 4, label: 'Refrigeration install', image: blog4, title: 'High-Performance Refrigeration Installation for Homes & Businesses', content: 'From domestic fridges to commercial cold rooms, we install reliable refrigeration systems built for long-lasting performance. Our team ensures perfect setup, safe connections, and optimal cooling efficiency. Trust us for clean, professional, and affordable installation.' },
    { id: 5, label: 'refrigeraition Repair', image: blog5, title: 'Quick & Affordable Refrigeration Repair — Keep Your Items Fresh', content: 'Whether it’s a fridge, freezer, display cabinet, or cold room, we repair all refrigeration units with expert care. We troubleshoot fast and fix problems on the first visit whenever possible. Protect your food, products, and equipment with our trusted repair service.' },
    { id: 6, label: 'Refrigeration Maintenance', image: blog6, title: 'Refrigeration Maintenance that Boosts Efficiency & Saves Money', content: 'Prevent breakdowns and keep your cooling equipment running smoothly with our routine maintenance service. We inspect, clean, and optimize every component to ensure consistent temperature control and longer system lifespan. Ideal for homes, stores, and restaurants.' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const TabsFilter = tabs.filter(tab =>
    searchTerm !== '' ? tab.title.toLowerCase().includes(searchTerm.toLowerCase()) : tab.title.toLowerCase().includes("")
  );


  return (
    <PageTransition>
      <div className='w-screen mt-20 flex flex-col items-center bg-white '>
        <div className='relative flex w-full h-100' >
          <img className='w-full h-full' src={headerImg} alt="" />
        </div >
        <div className='w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 px-10 lg:px-0 flex flex-col md:flex-row justify-between gap-8  my-20'>
          <div className='w-full md:w-2/3 flex flex-col gap-8'>
            {TabsFilter.map((tabder, index) => {
              return (
                <motion.div key={index}
                  initial={{ opacity: [0, 0.5, 0], translateX: 20 }} animate={{ opacity: 1, translateX: -20 }} transition={{ duration: 1.5, ease: 'linear' }} className='w-full h-150 flex flex-col gap-4 py-8 border-b-2 border-gray-300'>
                  <div className='relative w-full h-2/3 rounded-xs overflow-hidden'>
                    <img className='w-full h-full hover:scale-110 object-cover' src={tabder.image} alt="" />
                    <button className='absolute top-10 left-20 w-20 h-10 bg-primary text-white rounded-sm'> company</button>
                  </div>
                  <p className='font-semibold text-gray-300'>By sagar . February 8, 2024</p>
                  <p className='text-2xl font-bold'>{tabder.title} </p>
                  <p className='text-gray-300 font-medium'>{tabder.content} </p>
                  <button className='flex w-1/5 justify-around font-semibold'>continue Ready <ArrowRight /></button>
                </motion.div>
              )
            })}
          </div>
          <div className='w-full md:w-1/3 py-10 flex flex-col gap-8 '>
            <div className=' w-full bg-gray-50 h-50 flex flex-col p-10 gap-5'>
              <p className='text-2xl font-semibold'>Search Here</p>
              <div className='relative h-15 w-full'>
                <input placeholder='Searching ...' 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className='h-full border-2 border-gray-200 w-full rounded-xs px-4 bg-white' type="text" />
              <Search className='absolute top-5 left-80' />
              </div>
              
            </div>
            <div className='w-full h-120 bg-gray-50 flex flex-col gap-4 py-10 px-4'>
              <p className='text-2xl font-semibold'>Categories</p>
              <div className='w-full flex flex-col gap-2'>
                {tabs.map((tabder) => {
                  return (
                    <button onClick={() => setSearchTerm(tabder.title)} className='group w-full h-12 bg-white border-2 border-gray-200 border-xs flex justify-between items-center px-8 hover:bg-primary '>
                      <p>{tabder.label} </p>
                      <ArrowRight className='group-hover:invert-100' />
                    </button>
                  )
                })}
              </div>
            </div>
            <div className='w-full  bg-gray-50 flex flex-col gap-4 py-10 px-4'>
              <p className='text-2xl font-semibold'>Recent Work</p>
              <div className='w-full flex flex-col gap-6'>
                {tabs.map((tabder) => {
                  return (
                    <div className='flex gap-4'>
                      <img className='w-1/3 rounded-xs object-cover' src={tabder.image} alt="" />
                      <div className='w-2/3 flex flex-col gap-2'>
                        <p className='font-semibold'>{tabder.title} </p>
                        <p className='text-gray-300'>By sagar . February 7, 2024 </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>


          </div>
        </div>
      </div>
    </PageTransition>

  )
}

export default Blog