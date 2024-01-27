"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Technology_nav from '../../components/Technology_nav';


export default function Technology_b() {
  
  return (
  <main className="min-h-screen flex flex-col bg-cover bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')]">
    <Navbar/>
    <div className= 'mt-6 md:ml-10 md:mr-0 mx-6 text-white'>
      <p className='md:text-start md:text-xl text-center text-base text-white font-barlow-condensed font-normal tracking-[2.7px]'> <span className='opacity-50 mr-2'>03</span> SPACE LUNCH 101</p>  
    </div>
    <div className='mt-8 md:mt-12'>
        <Image
          src="/assets/technology/image-spaceport-landscape.jpg"
          className='w-full h-auto'
          width={375}
          height={222}
          alt="launch vehicle landscape"
          priority
        />
    </div>
    <Technology_nav/>
    <div className='text-center mt-4 md:mt-10'>
      <p className='font-barlow-condensed font-normal text-sm md:text-base md:tracking-widest text-[#D0D6F9] uppercase'>THE TERMINOLOGY...</p>
      <p className='font-sans text-white text-2xl md:text-4xl uppercase mt-2 md:mt-4'>SPACEPORT</p>
      <p className='text-[#D0D6F9] font-base font-barlow font-normal mx-6 mt-4 md:w-[47%] md:mx-auto'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
    </div>
  </main>
  )
}
