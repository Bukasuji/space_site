"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Crew_nav from '../../components/Crew_nav';


export default function Crew_b() {
  
  return (
  <main className="min-h-screen flex flex-col bg-cover md:bg-[url('/assets/crew/background-crew-tablet.jpg')] bg-[url('/assets/crew/background-crew-mobile.jpg')]">
    <Navbar/>
    <div className='mt-6 md:ml-10 md:mr-0 mx-6 text-white'>
      <p className='md:text-start md:text-xl text-center text-base md:text-xl text-white font-barlow-condensed font-normal tracking-[2.7px]'><span className='opacity-50 mr-2'>02</span> MEET YOUR CREW</p>  
    </div>

    <div className='text-center mt-10 md:mt-14 md:border'>
      <p className='font-sans text-base md:text-2xl md:mb-4 text-white opacity-40 uppercase'>Mission Specialist </p>
      <p className='font-sans text-white text-2xl md:text-[40px] uppercase'>MARK SHUTTLEWORTH</p>
      <p className='text-[#D0D6F9] font-base font-barlow mx-6 mt-4 md:w-[60%] md:mx-auto'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
    </div>

    <div className='mt-8 mx-auto md:hidden'>
        <Image
          src="/assets/crew/image-douglas-hurley.png"
          className='h-auto w-auto'
          width={153}
          height={222}
          alt="Douglas hurley"
          priority
        />
    </div>
    <div className='mx-auto w-[85%] h-px bg-[#383B4B] md:hidden'/>
    <Crew_nav/>
    <div className='md:mt-20 mt-8 mx-auto border'>
        <Image
          src="/assets/crew/image-mark-shuttleworth.png"
          className=''
          width={368}
          height={532}
          alt="Douglas hurley"
          priority
        />
    </div>
    <div className='text-center mt-4 md:hidden'>
      <p className='font-sans text-base text-white opacity-40'>COMMANDER</p>
      <p className='font-sans text-white text-2xl uppercase'>Douglas Hurley</p>
      <p className='text-[#D0D6F9] font-base font-barlow mx-6 mt-4'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
    </div>
  </main>
  )
}
