"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex md:ml-10 md:mx-0 md:mt-0 xl:mt-8 mx-6 mt-6 justify-between items-center xl:relative'>
      <div className=''>
        <Image
          src="/assets/shared/logo.svg"
          width={40}
          height={40}
          alt="logo"
          priority
        />
      </div>
      
      {/* Navigation Links for Tablets and Desktops */}
      <div className='hidden md:flex text-white h-[96px] w-[60%] bg-white bg-opacity-10 backdrop-blur-2xl shadow-md font-barlow-condensed font-normal text-base tracking-widest'>
        <ul className="pt-10 h-[96px] ml-12 xl:ml-28 space-x-10 flex">
          <li className={`h-full ${pathname === '/' ? 'border-white border-b-4' : ''}`}>
            <Link href="/"><span className='mr-3 font-bold hidden xl:inline'>00</span>HOME</Link>
          </li>
          <li className={`h-full ${pathname === '/destination' ? 'border-white border-b-4' : ''}`}>
            <Link href="/destination"><span className='mr-3 font-bold hidden xl:inline'>01</span>DESTINATION</Link>
          </li>
          <li className={`h-full ${pathname === '/crew' ? 'border-white border-b-4' : ''}`}>
            <Link href="/crew"><span className='mr-3 font-bold hidden xl:inline'>02</span>CREW</Link>
          </li>
          <li className={`h-full ${pathname === '/technology' ? 'border-white border-b-4' : ''}`}>
            <Link href="/technology"><span className='mr-3 font-bold hidden xl:inline'>03</span>TECHNOLOGY</Link>
          </li>
        </ul>
      </div>
      <div className='mx-auto xl:mx-0 xl:w-[35%] h-px bg-[#383B4B] my-8 md:my-10 md:mt-16 md:mb-8 xl:mt-11 left-28 xl:absolute hidden xl:block'/>

      {/* Navigation links for  Mobile Screens */}
      <div className='sm:hidden lg:hidden'>
        <div onClick={toggleMenu}>
          <Image
            src="/assets/shared/icon-hamburger.svg"
            className='md:hidden'
            width={24}
            height={21}
            alt="hamburger icon"
          />
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-[70%] bg-white shadow-md overflow-y-auto bg-white bg-opacity-25 backdrop-blur-2xl text-white font-barlow-condensed font-normal text-base">
            <div className='text-right text-xl p-6 cursor-pointer' onClick={toggleMenu}>
              X
            </div>
            <ul className="pl-8 pt-10">
              <li className='mb-5'>
                <Link href="/"><span className='mr-3 font-bold hidden'>00</span>HOME</Link>
              </li>
              <li className='mb-5'>
                <Link href="/destination"><span className='mr-3 font-bold hidden'>01</span>DESTINATION</Link>
              </li>
              <li className='mb-5'>
                <Link href="/crew"><span className='mr-3 font-bold hidden'>02</span>CREW</Link>
              </li>
              <li>
                <Link href="/technology"><span className='mr-3 font-bold hidden '>03</span>TECHNOLOGY</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
