import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <footer className='w-full mt-10 text-left bg-gray-900 md:px-36'>
            <div className='flex flex-col items-start justify-center gap-10 px-8 py-10 border-b border-white/30 md:flex-row md:px-0 md:gap-32'>
                <div className='flex flex-col items-center w-full md:items-start'>
                    <img src={assets.logo_dark} alt="logo" />
                    <p className='mt-6 text-sm text-center text-white/80 md:text-left'>Innovative learning solutions for a brighter future. Empowering individuals and organizations to achieve their full potential.</p>
                </div>
                
                <div className='flex flex-col items-center w-full md:items-start'>
                    <h2 className='mb-5 font-semibold text-white'>Company</h2>
                    <ul className='flex justify-between w-full text-sm text-white/80 md:flex-col md:space-y-2'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                
                <div className='flex-col items-start hidden w-full md:flex'>
                    <h2 className='mb-5 font-semibold text-white'>Subscribe to our newsletter</h2>
                    <p className='text-sm text-white/80'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex items-center gap-2 pt-4'>
                        <input className='w-64 px-2 text-sm text-gray-500 placeholder-gray-500 bg-gray-800 border rounded outline-none border-gray-500/30 h-9' type="email" placeholder='Enter your email' />
                        <button className='w-24 text-white bg-blue-600 rounded h-9'>Subscribe</button>
                    </div>
                </div>
            </div>
            <p className='py-4 text-xs text-center md:text-sm text-white/60'>Copyright 2025 © LMS. All Right Reserved.</p>
        </footer>
    )
}

export default Footer