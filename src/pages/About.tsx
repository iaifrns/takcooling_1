import PageTransition from '@/components/common/PagesTransition'
import React, { useEffect, useState } from 'react'
import ing5 from '@/assets/image/ing5.jpeg'
import Employes from '@/components/common/Employes'
import ScrollAnimation from '@/components/common/ScrollAnimation'
import ing4 from '@/assets/image/ing4.jpeg'
import blog2 from '@/assets/image/ing2.jpeg'
import blog3 from '@/assets/image/ing3.jpeg'
import blog4 from '@/assets/image/ing4.jpeg'
import blog5 from '@/assets/image/ing5.jpeg'
import blog6 from '@/assets/image/ing6.png'
import fond2 from '@/assets/image/fond_hom.jpg'
import Aboutimg from '@/assets/image/about-main1.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Counter from '@/components/common/Counter'
import headerImg from '@/assets/image/hearderImg.png'

const About = () => {
  const [date, setDate] = useState(1)
  const [curr, setcurr] = useState(0)
  
  const tabs = [
      { id: 1, label: 'Air conditioning installation', image: fond2, title: 'Professional Air Conditioning Installation for Perfect Home Comfort', content: 'Upgrade your home or business with a modern, energy-efficient AC system installed by certified experts. We deliver fast, clean, and reliable installation services tailored to your space, ensuring powerful cooling and maximum comfort all year round. Stay cool the smart way!' },
      { id: 2, label: 'Air conditioning Repair', image: blog2, title: 'Fast & Reliable Air Conditioning Repair — Stay Cool Again in No Time', content: 'Is your AC making noise, blowing warm air, or not starting at all? Our skilled technicians diagnose and repair all AC issues with precision and speed. We restore your cooling system quickly so you can enjoy fresh, comfortable air without interruption' },
      { id: 3, label: 'Air conditioning Maintenance', image: blog3, title: 'Prevent Costly Breakdowns with Expert AC Maintenance', content: 'Extend the life of your air conditioner and improve its performance with our professional maintenance service. We clean, tune, and optimize your system to ensure efficient cooling, lower energy bills, and fewer unexpected repairs. Your comfort is our priority.' },
      { id: 4, label: 'Refrigeration install', image: blog4, title: 'High-Performance Refrigeration Installation for Homes & Businesses', content: 'From domestic fridges to commercial cold rooms, we install reliable refrigeration systems built for long-lasting performance. Our team ensures perfect setup, safe connections, and optimal cooling efficiency. Trust us for clean, professional, and affordable installation.' },
      { id: 5, label: 'refrigeraition Repair', image: blog5, title: 'Quick & Affordable Refrigeration Repair — Keep Your Items Fresh', content: 'Whether it’s a fridge, freezer, display cabinet, or cold room, we repair all refrigeration units with expert care. We troubleshoot fast and fix problems on the first visit whenever possible. Protect your food, products, and equipment with our trusted repair service.' },
      { id: 6, label: 'Refrigeration Maintenance', image: blog6, title: 'Refrigeration Maintenance that Boosts Efficiency & Saves Money', content: 'Prevent breakdowns and keep your cooling equipment running smoothly with our routine maintenance service. We inspect, clean, and optimize every component to ensure consistent temperature control and longer system lifespan. Ideal for homes, stores, and restaurants.' },
    ];



  const dateHistory = [
    { id: 1, date: 'In 2015', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/5.jpg', title: 'Journey Was Started', content: 'Welcome to Industrie, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.' },
    { id: 2, date: 'In 2020', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/2.jpg', title: 'Journey Was Started', content: 'Welcome to Industrie, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.' },
    { id: 3, date: 'In 2025', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/image_0.jpg', title: 'Journey Was Started', content: 'Welcome to Industrie, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.' },

  ]
  

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setcurr((prev) => (prev <= 2 ? (prev + 1.02) : 0 )  );
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [tabs.length]);
  return (
    <PageTransition>
      <div className='w-screen mt-20 flex flex-col items-center bg-white '>
        <div className='relative flex w-full h-100' >
          <img className='w-full h-full' src={headerImg} alt="" />
        </div>
        {/* corp du About */}
        <div className='w-full flex flex-col items-center'>
          <div className='w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col items-center py-25'>
            <div> <button className='text-primary text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg> About industrie</button></div>
            <div className='flex justify-center items-center'>
              <div className='text-2xl w-2/3 text-center md:text-5xl font-semibold text-black'>Welcome to Industrie, your trusted partner in cooling, refrigeration, and air conditioning services.</div>
            </div>
            <div className='flex gap-60 h-300 sm:h-250 md:gap-30 lg:gap-2 w-full flex-col justify-around px-10  lg:flex-row  md:h-200  xl:h-100 pt-10'>
              <div className='w-full lg:w-1/2 h-full flex relative'>
                <img className='h-2/3  w-2/3 sm:w-1/2 object-cover' src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/about-page-img1.jpg" alt="" />
                <div className='h-2/3 w-20 sm:w-1/2 pl-4 flex justify-center'><img src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/Icon.png" alt="" /></div>
                <div className='absolute w-4/5 sm:w-2/3  border-b-2 border-primary top-40 left-20 sm:left-35 bg-gray-50 p-10'>
                  <p className='font-semibold text-xl'>Our Mission</p>
                  <p className='text-gray-300 text-sm pt-5'>Deliver reliable, energy-efficient refrigeration and air-conditioning services through expert craftsmanship, innovative technology, and a commitment to customer satisfaction.</p>
                </div>
              </div>
              <div className='w-full lg:w-1/2 h-full flex relative'>
                <img className='h-2/3 w-2/3 sm:w-1/2 object-cover' src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/about-page-img2.jpg" alt="" />
                <div className='h-2/3 w-20 sm:w-1/2 pl-4 flex justify-center'><img  src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/icon1.png" alt="" /></div>
                <div className='absolute w-4/5 sm:w-2/3  border-b-2 border-primary top-40 left-20 sm:left-35 bg-gray-50 p-10'>
                  <p className='font-semibold text-xl '>Our Vision</p>
                  <p className='text-gray-300 text-sm pt-5'>Become the leading provider of sustainable cooling and air-conditioning solutions, ensuring comfort, efficiency, and environmental responsibility for every home and business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center bg-gray-50'>
          <div className='w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col items-center py-25'>
            <div> <button className='text-primary text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg>Our History</button></div>
            <div className='flex justify-center items-center'>
              <div className='text-2xl  text-center md:text-5xl font-medium text-black'>Company Journey</div>
            </div>
            <div className='w-full lg:h-80 flex flex-col items-center gap-8'>
              <div className='w-full h-10 bg-white flex justify-center mt-10'>
                {dateHistory.map((dater) => {
                  return (
                    <button className={`text-gray-400 text-center w-1/${dateHistory.length} ${date === dater.id && 'bg-primary border-0'}`} onClick={() => setDate(dater.id)}>{dater.date}</button>
                  )
                })}
              </div>
              <div className='w-full  flex flex-col md:flex-row md:h-70 gap-8 '>
                <img className='w-full md:w-1/2 rounded-xs' src={dateHistory[date].image} alt="" />
                <div className='w-full md:w-1/2 p-10'>
                  <p className='text-xl font-semibold'>{dateHistory[date].title}</p>
                  <p className='font-semibold text-gray-400'>{dateHistory[date].content}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-full flex flex-col items-center'>
          <div className='relative w-full h-100 p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 bg-gray-50 flex flex-col items-center py-25'>
            <div> <button className='text-primary text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg> About industrie</button></div>
            <div className='flex justify-center items-center'>
              <div className='text-2xl  text-center md:text-5xl font-semibold text-black'>Company Achievement</div>
            </div>
            {/* chiffre sur l'entreprise---------------------------------------------- */}
            <ScrollAnimation>
              <div className='w-full p-8  flex justify-between md:py-20 gap-4'>
                <div>
                  <Counter target={40} text={'+'} />
                  <p className='pt-4 text-gray-400 md:font-semibold'>Drilling Fields</p>
                </div>
                <div>
                  <Counter target={49} text={'%'} />
                  <p className='pt-4 text-gray-400 md:font-semibold'>Crane Equipment</p>
                </div>
                <div>
                  <Counter target={200} text={'m'} />
                  <p className='pt-4 text-gray-400 md:font-semibold'>Metal Factory</p>
                </div>
                <div >
                  <Counter target={25} text={'K'} />
                  <p className='pt-4 text-gray-400 md:font-semibold'>Special Machinery</p>
                </div>
              </div>
            </ScrollAnimation>
            <div className='absolute top-100  w-full flex gap-4'>
              <div className='relative w-1/2 h-70 shadow-2xl rounded-xs'>
                <img className='h-70 w-full shadow-2xs' src={ing4} alt="" />
                <div className='relative mask-linear-to-gray-100'></div>
              </div>
              <img className='relative w-1/2 h-70 rounded-xs shadow-2xl' src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/prog.jpg" alt="" />
            </div>
          </div>
          <div className='relative bg-black w-full h-150 md:h-120  flex items-center mt-100'>
            <img className='w-1/2 h-full object-cover' src={Aboutimg} alt="" />
            <div className=' w-1/2 text-white p-20 flex flex-col gap-8'>
              <div> <button className='text-primary text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg> About industrie</button></div>
              <p className='text-3xl font-bold'>What Client Say</p>
              <div className='flex flex-col md:flex-row  gap-8'>
                <div className='flex flex-row justify-around  md:flex-col mx-4 items-center gap-4'>
                  <img className='w-15 h-15 rounded-full' src="https://industrie.rstheme.com/main/wp-content/uploads/2024/01/testi-img1.png" alt="" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" fill="none"><path opacity="0.2" d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z" fill="white"></path></svg>
                </div>
                <div className='flex flex-col w-full md:w-1/2 gap-4'>
                  <p className='text-2xl font-semibold'>Best Company</p>
                  <p className='hidden sm:flex font-semibold text-sm lg:text-xl text-gray-300'>Podcasting operational change management inside of workflows to
                    establish a framework seamless key performance indicators.</p>
                  <hr />
                  <div className='flex justify-between'>
                    <p className='text-2xl font-bold'>Brist Tomson</p>
                    <div className='flex gap-2'>
                      <button className='bg-primary h-10'><ArrowLeft className='invert-0'/></button>
                      <button className='bg-primary h-10'><ArrowRight className='invert-0'/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col items-center bg-gray-50 '>
            <div className='relative w-full h-200 p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col gap-8 items-center py-25 overflow-hidden'>
              <div> <button className='text-primary text-xl flex items-center'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg> About industrie</button></div>
              <div className='flex justify-center items-center'>
                <div className='text-2xl  text-center md:text-5xl font-semibold text-black'>Discover the future of factories and industries</div>
              </div>
              <div className={`relative left-155 h-full flex gap-8 overflow-hidden`} style={{ transform: `translateX(-${curr * 428}px)` }} >
                {tabs.map((taber) => {
                  return (
                    <div className='relative   w-[420px] bg-gray-200  h-full flex flex-col'>
                      <img className='w-full h-1/2' src={taber.image} alt="" />
                      <div className='flex flex-col p-10 gap-8'>
                        <p className='font-semibold text-xl'>{taber.label} </p>
                        <hr />
                        <div className='flex justify-between'>
                          <p className='font-semibold text-gray-500'>By Sugar . Feb 2025</p>
                          <button className='bg-gray-300'><ArrowRight /></button>
                        </div>
                      </div>
                      <button className='bg-primary w-1/2 absolute top-55 left-10'>company</button>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>

          <div>

          </div>
        </div>
      </div>

    </PageTransition >
  )
}

export default About