"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Technology_nav from '../../components/Technology_nav';


export default function Technology_c() {
  
  return (
  <main className="min-h-screen flex flex-col bg-cover bg-[url('/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/assets/technology/background-technology-tablet.jpg')] mx-auto">
    <Navbar/>
    <div className= 'mt-6 md:ml-10 md:mr-0 mx-6 xl:ml-40 xl:mt-20 text-white'>
      <p className='md:text-start md:text-xl xl:text-3xl text-center text-base text-white font-barlow-condensed font-normal tracking-[2.7px]'> <span className='opacity-50 mr-2'>03</span> SPACE LUNCH 101</p>  
    </div>

    <div className='xl:flex xl:ml-40'>
        <div className='mt-8 md:mt-12 xl:hidden'>
            <Image
              src="/assets/technology/image-space-capsule-landscape.jpg"
              className='w-full h-auto'
              width={375}
              height={222}
              alt="spaceport"
              priority
            />
        </div>

        <div className='xl:flex xl:w-[50%] xl:mt-40'>
            <Technology_nav/>
            <div className='xl:text-start text-center mt-4 md:mt-10 xl:mt-0 xl:ml-0'>
              <p className='font-barlow-condensed font-normal text-sm md:text-base  md:tracking-widest text-[#D0D6F9] uppercase'>THE TERMINOLOGY...</p>
              <p className='font-sans text-white text-2xl md:text-4xl xl:text-5xl uppercase mt-2 md:mt-4'>SPACE CAPSULE</p>
              <p className='text-[#D0D6F9] font-base xl:text-lg font-barlow font-normal mx-6 mt-4 md:w-[47%] md:mx-auto xl:mx-0 xl:w-[444px]'>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
            </div>
        </div>

        <div className='mt-8 md:mt-12 xl:mt-0 xl:w-[515px] xl:h-[527px] xl:ml-auto hidden xl:block'>
            <Image
              src="/assets/technology/image-space-capsule-portrait.jpg"
              className=''
              width={515}
              height={527}
              alt="spaceport"
              priority
            />
        </div>
    </div>
  </main>
  )
}
