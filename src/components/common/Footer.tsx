import React from 'react'
import globe from '@/assets/image/globe.jpg'
import city from '@/assets/image/images.jpg'
import { Card } from '../ui/card'
import { ArrowRight, AtSign, Hourglass, MapPinned, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    return (
        <div className='flex flex-col max-w-screen justify-center bg-black '>
            {location.pathname === '/' &&
                <div className='lg:h-200 '>
                    <div className='absolute  w-full bg-black flex justify-center md:h-200'>
                        <img src={globe} className='relative z-1 top-0 left-0  invert-100 lg:w-3/4 h-200' alt="" />
                    </div>
                    <div className='relative z-10 flex flex-col justify-around items-center p-8 lg:p-0 md:flex-row w-full h-full gap-20 '>
                        <div className='w-full sm:w-4/5 lg:w-1/3 '>
                            <p className='text-primary text-2xl'> Contact</p>
                            <p className='text-2xl font-bold text-white md:text-4xl'>Have a project in mind? <br /> Contact with us</p>
                            <p className='text-gray-300 text-xl '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour.</p>
                            <div className='grid grid-cols-1  md:grid-cols-2 gap-9 mt-9'>
                                <div className='flex gap-8 md:grid grid-cols-2 '>
                                    <Card className='flex justify-center items-center w-20 md:w-15 h-20 bg-primary'><MapPinned className='invert-100 ' size={35} /></Card>
                                    <div className='w-2/3'>
                                        <p className='text-2xl font-bold text-white'>London</p>
                                        <p className='text-gray-400 text-sm '>London Postcode Se15 6rs Rue 149 glengall road</p>
                                    </div>
                                </div>
                                <div className='flex gap-8 md:grid grid-cols-2' >
                                    <Card className='flex justify-center items-center w-20 md:w-15 h-20 bg-primary'><AtSign className='invert-100' size={35} /></Card>
                                    <div className='w-2/3'>
                                        <p className='text-2xl font-bold text-white' >Email Address</p>
                                        <p className='text-gray-400 text-sm '>Interested in working with us? takcooling@gmail.com</p>
                                    </div>
                                </div>
                                <div className='flex gap-8 md:grid grid-cols-2' >
                                    <Card className='flex justify-center items-center w-20 md:w-15 h-20 bg-primary'><PhoneCall className='invert-100' size={35} /></Card>
                                    <div>
                                        <p className='text-2xl font-bold text-white'>Phone Number</p>
                                        <p className='text-gray-400 text-sm '>+ 00447877020977</p>
                                    </div>
                                </div>
                                <div className='flex gap-8  md:grid grid-cols-2 '>
                                    <Card className='flex justify-center items-center w-20 md:w-15 h-20 bg-primary'><Hourglass className='invert-100' size={35} /></Card>
                                    <div >
                                        <p className='text-2xl font-bold text-white'>Opening Hour</p>
                                        <p className='text-gray-400 text-sm '>Mon - Fri: 09am - 07pm</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='w-full sm:w-5/6 lg:w-1/4 h-120'>
                            <Card className='flex flex-col bg-[rgba(42,105,160,0.9)] h-full justify-center items-center gap-4 sm:gap-10 p-10 '>
                                <p className='text-2xl text-white mt-4 '>Get in Touch</p>
                                <p className='text-white '>The point of using Lorem Ipsum is that it has more-or-less normal</p>
                                <div className='flex flex-col gap-4 w-full mb-4'>
                                    <input type="text" placeholder='Full Name' className='bg-[rgba(255,255,255,0.3)] border-2  border-gray-200 h-10 pl-2 text-white' />
                                    <input type="text" placeholder='Email Address' className='bg-[rgba(255,255,255,0.3)] border-2 border-gray-200 h-10 pl-2 text-white' />
                                    <input type="text" placeholder='Your requiry' className='bg-[rgba(255,255,255,0.3)] border-2 border-gray-200 h-10 pl-2 text-white' />
                                    <textarea name="" placeholder='Write where' className='bg-[rgba(255,255,255,0.3)] border-2 border-gray-200 h-15 pl-2 text-white' id=""></textarea>
                                     <button className='bg-black w-3/4 h-10 flex justify-center items-center text-white p-1 hover:invert-25 gap-2 transition-colors'><p>Send Message </p><ArrowRight className='invert-25 w-5' /></button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            }

            <div className='bg-black md:h-100 '>
                <div className='absolute h-100 w-full bg-black flex justify-center'>
                </div>
                <div className='relative z-10 flex flex-col border-white w-full h-full text-white md:flex-row  '>
                    <div className='w-full p-5 lg:p-0  md:w-2/5 border-t-2 border-gray-600 flex flex-col md:justify-center md:pb-0 lg:items-end '>
                        <div className='flex flex-col  justify-center w-full md:w-100 h-100 gap-7'>
                            <Link to="/" className=" flex font-bold text-white text-3xl hover:transition-colors">
                                Takcooling
                            </Link>
                            <p className='text-gray-600 w-50 lg:w-80 flex text-xl md:text-sm font-bold justify-end items-center'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently works.</p>
                            <p className='text-primary text-4xl'>Since 2007</p>
                            <p>© 2025 Industrie. Designed By RS<b className='text-primary'>Theme.</b> </p>
                        </div>
                    </div>
                    <div className='w-full p-7  md:w-1/5 border-2 border-gray-600 flex md:justify-center pt-15'>
                        <div className='flex flex-col gap-7'>
                            <p className=" flex font-bold text-xl text-white md:text-3xl hover:transition-colors">Useful Links</p>
                            <div>
                                <ul className='text-sm text-white flex flex-col gap-3 '>
                                    <Link to='/Home' className=' hover:text-primary'>Home</Link>
                                    <Link to='/About' className=' hover:text-primary'>About Us</Link>
                                    <Link to='/Service' className=' hover:text-primary'>Service</Link>
                                    <Link to='/Blog' className=' hover:text-primary'>Blog</Link>
                                    <Link to='/Contact' className=' hover:text-primary'>Contact</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='w-full p-10  md:w-2/5 border-t-2 border-gray-600 flex flex-col pt-15 pl-4 items-start '>
                        <div className='flex flex-col  w-full h-60 md:h-100 gap-7'>
                            <Link to="/" className=" flex font-bold text-white text-3xl hover:transition-colors">
                                Newsletter
                            </Link>
                            <p className='text-gray-600 lg:w-80 flex text-xl md:text-sm font-bold justify-end items-center'>Subscribe for the latest news. Stay updated on the latest trends industrie.</p>
                            <input type="text" placeholder='Message...' className='h-16 w-3/5 border-2 border-gray-600 px-3' />
                            <button className='bg-primary w-3/5 h-10 flex justify-center items-center  hover:invert-25 gap-2 transition-colors'><p>subcribe now </p><ArrowRight className='invert-25 w-5' /></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Footer