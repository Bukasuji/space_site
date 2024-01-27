"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Crew_nav from '../../components/Crew_nav';


export default function Crew_d() {
  
  return (
  <main className="min-h-screen flex flex-col bg-cover md:bg-[url('/assets/crew/background-crew-tablet.jpg')] bg-[url('/assets/crew/background-crew-mobile.jpg')]">
    <Navbar/>
    <div className='mt-6 md:ml-10 md:mr-0 mx-6 text-white'>
      <p className='md:text-start md:text-xl text-center text-base md:text-xl text-white font-barlow-condensed font-normal tracking-[2.7px]'><span className='opacity-50 mr-2'>02</span> MEET YOUR CREW</p>  
    </div>

    <div className='text-center mt-10 md:mt-14 md:border hidden md:block'>
      <p className='font-sans text-base md:text-2xl md:mb-4 text-white opacity-40 uppercase'>Flight Engineer </p>
      <p className='font-sans text-white text-2xl md:text-[40px] uppercase'>Anousheh Ansari</p>
      <p className='text-[#D0D6F9] font-base font-barlow mx-6 mt-4 md:w-[60%] md:mx-auto'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  </p>
    </div>

    <div className='mt-8 mx-auto md:hidden'>
        <Image
          src="/assets/crew/image-anousheh-ansari.png"
          className=''
          width={226}
          height={223}
          alt="Anousheh Ansari"
          priority
        />
    </div>
    <div className='mx-auto w-[85%] h-px bg-[#383B4B] md:hidden'/>
    <Crew_nav/>
    <div className='md:mt-8 mt-8 mx-auto hidden md:block'>
        <Image
          src="/assets/crew/image-anousheh-ansari.webp"
          className=''
          width={539}
          height={532}
          alt="anousheh ansari"
          priority
        />
    </div>
    <div className='text-center mt-4 md:hidden'>
      <p className='font-sans text-base text-white opacity-40 uppercase'>Flight Engineer</p>
      <p className='font-sans text-white text-2xl uppercase'>Anousheh Ansari</p>
      <p className='text-[#D0D6F9] font-base font-barlow mx-6 mt-4'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
    </div>
  </main>
  )
}
