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
  <main className="min-h-screen bg-cover bg-mobile md:bg-tablet xl:bg-desktop flex flex-col">
    <Navbar/>
    <div className='xl:flex xl:mx-32 xl:mt-28'>
        <div className='mt-10 md:mt-[106px] mx-6 xl:mx-0 text-white xl:w-[50%]'>
          <p className='text-center xl:text-start text-base md:text-xl xl:text-3xl text-[#D0D6F9] font-barlow-condensed font-normal tracking-[2.7px]'>SO, YOU WANT TO TRAVEL TO</p>
          <p className='mt-4 md:mt-11 text-center xl:text-start text-7xl md:text-[150px]  font-normal font-sans leading-[100px]'>SPACE</p>
          <div className='md:w-[60%]  md:mx-auto xl:mx-0 xl:w-[445px]'>
              <p className='mt-4 md:mt-10 text-center xl:text-start xl:text-lg text-base font-barlow text-[#D0D6F9] font-normal xl:mb-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
        </div>
        <div className='bg-white h-[150px] w-[150px] md:h-[250px] md:w-[250px] mt-20 md:mt-48 xl:mt-40 mx-auto xl:ml-60 xl:mr-0 rounded-full cursor-pointer hover:border-[32px] border-[#494f55]  flex justify-center items-center'>
             <p className='font-sans text-[20px] md:text-[32px]'>EXPLORE</p>
        </div>

    </div>
  </main>

  )
}
