import PageTransition from '@/components/common/PagesTransition'
import React, { useState } from 'react'
import ing5 from '@/assets/image/ing5.jpeg'
import { ArrowLeft, ArrowRight, Check, Search, X } from 'lucide-react';
import serviceimg from '@/assets/image/service.jpeg'


const Blog = () => {

  const tabs = [
    { id: 1, label: 'Industrial Construction', image: "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/s_tab_img_01.jpg", title: 'We solve worldwide industrial every problem', content: 'The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { id: 2, label: 'High regulation Industrial', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/s_tab_img_02.jpg', title: 'A high regulation industry refers', content: 'The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { id: 3, label: 'Bridge Construction', image: "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/s_tab_img_03.jpg", title: 'Bridge construction is a complex engineering', content: 'The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { id: 4, label: 'Oil gaz & energy', image: "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/s_tab_img_04.jpg", title: 'Bridge construction is a complex engineering', content: 'The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { id: 5, label: 'Mechanical Engineery', image: "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/s_tab_img_05.jpg", title: 'Bridge construction is a complex engineering', content: 'The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
    { id: 6, label: 'Automation industrial', image: "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/s_tab_img_05.jpg", title: 'Bridge construction is a complex engineering', content: 'The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.' },
  ];

  return (
    <PageTransition>
      <div className='w-screen mt-20 flex flex-col items-center bg-white '>
        <div className='relative flex w-full h-100' >
          <div className='absolute top-0 left-0  bg-primary w-1/2 h-100 rounded-xs' style={{ clipPath: 'polygon(0 0,100% 0%, 80% 100%, 0 100%)' }}></div>
          <div className='absolute top-0 right-0 w-1/2 h-100 rounded-xl' style={{ clipPath: 'polygon(20% 0,100% 0%, 100% 100%, 0 100%)' }}>
            <img src={ing5} alt="" className='object-cover rounded-2xl' />
          </div>
        </div >
        <div className='w-full lg:w-2/3 px-10 lg:px-0 flex flex-col md:flex-row justify-between gap-8  my-20'>
          <div className='w-full md:w-2/3 flex flex-col gap-8'>
            {tabs.map((tabder) => {
              return (
                <div className='w-full h-150 flex flex-col gap-4 py-8 border-b-2 border-gray-300'>
                  <div className='relative w-full h-2/3 rounded-xs overflow-hidden'>
                    <img className='w-full h-full hover:scale-110 object-cover' src={tabder.image} alt="" />
                    <button className='absolute top-10 left-20 w-20 h-10 bg-primary text-white rounded-sm'> company</button>
                  </div>
                  <p className='font-semibold text-gray-300'>By sagar . February 8, 2024</p>
                  <p className='text-2xl font-bold'>{tabder.title} </p>
                  <p className='text-gray-300 font-medium'>{tabder.content} </p>
                  <button className='flex w-1/5 justify-around font-semibold'>continue Ready <ArrowRight /></button>
                </div>
              )
            })}
          </div>
          <div className='w-full md:w-1/3 py-10 flex flex-col gap-8 '>
            <div className='relative w-full bg-gray-50 h-50 flex flex-col p-10 gap-5'>
              <p className='text-2xl font-semibold'>Search Here</p>
              <input placeholder='Searching ...' className='h-15 border-2 border-gray-200 w-full rounded-xs px-4 bg-white' type="text" />
              <Search className='absolute top-28 left-65' />
            </div>
            <div className='w-full h-120 bg-gray-50 flex flex-col gap-4 py-10 px-4'>
              <p className='text-2xl font-semibold'>Categories</p>
              <div className='w-full flex flex-col gap-2'>
                {tabs.map((tabder) => {
                  return (
                    <button className='group w-full h-12 bg-white border-2 border-gray-200 border-xs flex justify-between items-center px-8 hover:bg-primary '>
                      <p>{tabder.label} </p>
                      <ArrowRight className='group-hover:invert-100' />
                    </button>
                  )
                })}
              </div>
            </div>
            <div className='w-full  bg-gray-50 flex flex-col gap-4 py-10 px-4'>
              <p className='text-2xl font-semibold'>Categories</p>
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