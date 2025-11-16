import React from 'react'
import logo from '@/assets/image/logo.png'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/assets/image/logo.png'

import { Menu, X, Instagram, Twitter, Facebook, Search } from 'lucide-react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const [ActiveSlide, setActiveSlide] = useState(false)
    const [ActiveSearch, setActiveSearch] = useState(false)

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'service', path: '/service' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ]

    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Facebook, href: '#', label: 'Facebook' }
    ]

    return (
        <motion.header
            className="fixed w-screen bg-white top-0 left-0 right-0 z-50  shadow-xl h-20 text-3xl"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >

            <div className="flex w-full h-full justify-around items-center">
                {/* Logo/Nom */}
                <Link to="/" className="w-4/6 md:w-1/6 h-full flex font-bold justify-center items-center border-gray-200 text-black hover:transition-colors">
                    <img className='h-19 w-3/4 rounded-sm' src={Logo} alt="" />
                </Link>

                

                {/* Navigation Desktop */}
                <nav className="hidden md:flex w-3/6 ml-8 items-center h-full gap-8 space-x-8 text-gray-500">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative text-sm font-semibold transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-gray-500'
                                }`}
                        >
                            {location.pathname === item.path && (
                                <motion.div
                                    className="absolute -top-6 left-0 right-0 h-0.5 bg-primary"
                                    layoutId="activeTab"
                                />
                            )}
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Réseaux sociaux Desktop */}
                <div className="hidden md:flex w-1/10 h-full items-center justify-around space-x-4  border-gray-200">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className=" hover:text-white transition-colors"
                            aria-label={social.label}
                        >
                            <social.icon className='invert-25' size={16} />
                        </a>
                    ))}
                </div>


                {/* Menu Mobile */}
                <button
                    className="md:hidden bg-primary w-10 h-10 rounded-sm flex justify-center items-center hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            <div className={`absolute z-30 w-1/2 h-300 shadow-xl backdrop-blur-xl right-0  ${!ActiveSlide && 'translate-x-300'} bg-[rgba(255,255,255,0.5)]`}  >
                <div className='w-full flex  justify-center  '>
                    <div className='text-4xl p-20'> Takcooling</div>
                    <div>description </div>
                </div>
            </div>

            {/* Menu Mobile Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden py-10 w-full bg-white border-t"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <nav className="flex flex-col space-y-4 ml-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-sm transition-colors hover:text-primary ${location.pathname === item.path ? 'text-primary' : 'text-foreground'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-4 pt-4 border-t border-border">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="text-primary hover:text-primary transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.header>
    )

}

export default Header