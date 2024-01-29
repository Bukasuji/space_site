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
    <div className='xl:flex xl:mx-40 xl:mt-20 border xl:mb-0 xl:h-[100%]'>
        <div className='flex justify-center xl:justify-start flex-col xl:w-[70%]'>
            <div className='mt-6 xl:mt-0 md:ml-10 xl:ml-0 md:mr-0 mx-6 text-white'>
              <p className='md:text-start md:text-xl xl:text-3xl xl:text-start text-center text-base md:text-xl text-white font-barlow-condensed font-normal tracking-[2.7px]'><span className='opacity-50 mr-2'>02</span> MEET YOUR CREW</p>  
            </div>

            <div className='text-center xl:text-start mt-10 md:mt-14 xl:mt-32 hidden md:block'>
              <p className='font-sans text-base md:text-2xl xl:text-3xl md:mb-4 text-white opacity-40 uppercase'>Flight Engineer</p>
              <p className='font-sans text-white text-2xl md:text-[40px] xl:text-5xl uppercase'>Anousheh Ansari</p>
              <p className='text-[#D0D6F9] xl:text-lg font-normal font-base font-barlow mx-6 mt-4 md:w-[60%] xl:w-[444px] md:mx-auto xl:mx-0'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  </p>
            </div>

            <div className='mt-8 mx-auto md:hidden'>
                <Image
                  src="/assets/crew/image-anousheh-ansari.png"
                  className='h-auto w-auto'
                  width={153}
                  height={222}
                  alt="Anousheh Ansari"
                  priority
                />
            </div>
            <div className='mx-auto w-[85%] h-px bg-[#383B4B] md:hidden'/>
            <Crew_nav/>
        </div>

        <div className='flex justify-center'>
            <div className='md:mt-20 mt-8 mx-auto xl:mx-0 hidden xl:hidden md:block'>
                <Image
                  src="/assets/crew/image-anousheh-ansari.png"
                  className=''
                  width={368}
                  height={532}
                  alt="Anousheh Ansari"
                  priority
                />
            </div>

            <div className='md:mt-20 xl:mt-8 mt-8 mx-auto xl:ml-0 xl:mb-0 hidden xl:block'>
                <Image
                  src="/assets/crew/image-anousheh-ansari.png"
                  className=''
                  width={615}
                  height={607}
                  alt="Anousheh Ansari"
                  priority
                />
            </div>
            <div className='text-center mt-4 md:hidden'>
              <p className='font-sans text-base text-white opacity-40 uppercase'>Flight Engineer</p>
              <p className='font-sans text-white text-2xl uppercase'>Anousheh Ansari</p>
              <p className='text-[#D0D6F9] font-base font-barlow mx-6 mt-4'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
            </div>
        </div>
    </div>
  </main>
  )
}
