"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import DestinationNav from '../../components/DestinationNav';


export default function Titan() {
  
  return (
  <main className="min-h-screen flex flex-col bg-contain md:bg-cover md:bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-[url('/assets/destination/background-destination-mobile.jpg')]">
    <Navbar/>
    <div className='mt-6 mx-6 md:ml-10 md:mr-0 text-white'>
      <p className='md:text-start md:text-xl text-center text-base text-white font-barlow-condensed font-normal tracking-[2.7px]'><span className='opacity-50 mr-2'>01</span> PICK YOUR DESTINATION </p>  
    </div>
    <div className='mt-8 mx-auto '>
        <Image
          src="/assets/destination/image-titan.png"
          className='md:hidden'
          width={150}
          height={200}
          alt="titan"
          priority
        />

        <Image
          src="/assets/destination/image-titan.png"
          className='md:mb-8'
          width={300}
          height={300}
          alt="titan"
          priority
        />
    </div>
     {/* Destination navigation */}
     <DestinationNav />
      
      {/* Destination details */}
      <div className='text-center mt-4'>
        <p className='font-sans text-[56px] md:text-[80px] text-white'>TITAN</p>
        <div className='md:mx-auto md:w-[80%] md:text-base'>
            <p className='text-[#D0D6F9] font-barlow mx-6'>
              The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
            </p>
        </div>
      </div>
      
      {/* Divider */}
      <div className='mx-auto w-[85%] h-px bg-[#383B4B] my-8 md:my-10 md:mt-16 md:mb-8'/>
      
      {/* Additional details */}
      <div className='text-center mb-10'>
        <div className='md:flex text-center md:mx-auto md:w-[60%]'>
            <div className='md:w-[50%] md:ml-4'>
              <p className='text-[#D0D6F9] text-sm md:tracking-widest font-barlow-condensed md:mb-2'>AVG. DISTANCE</p>
              <p className='text-3xl text-white font-sans'>1.6 BIL. KM</p>
            </div>
            <div className='md:w-[50%]'>
              <p className='text-[#D0D6F9] text-sm  md:tracking-widest font-barlow-condensed mt-8 md:mt-0  md:mb-2'>EST. TRAVEL TIME</p>
              <p className='text-3xl text-white font-sans'>7 YEARS</p>
            </div>
        </div>
      </div>
    
  </main>

  )
}
