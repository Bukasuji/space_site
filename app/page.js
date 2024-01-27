"use client"
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link';
import Navbar from './components/Navbar';


export default function Home() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () =>{
      setMenuOpen(!isMenuOpen)
  }
  return (
  <main className="min-h-screen bg-cover bg-mobile md:bg-tablet flex flex-col">
    <Navbar/>
    <div className='mt-10 md:mt-[106px] mx-6 text-white'>
      <p className='text-center text-base md:text-xl text-[#D0D6F9] font-barlow-condensed font-normal tracking-[2.7px]'>SO, YOU WANT TO TRAVEL TO</p>
      <p className='mt-4 md:mt-11 text-center text-[80px] md:text-[150px]  font-normal font-sans leading-[100px]'>SPACE</p>
      <div className='md:w-[60%] md:mx-auto'>
          <p className='mt-4 md:mt-10 text-center text-base font-barlow text-[#D0D6F9] font-normal'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
    </div>
    <div className='bg-white h-[150px] w-[150px] md:h-[242px] md:w-[242px] mt-20 md:mt-48 mx-auto rounded-full text-center'>
      <p className='mt-[68px] text-center font-sans text-[20px] md:text-[32px] md:mt-[103px]'>EXPLORE</p>
    </div>
  </main>

  )
}
