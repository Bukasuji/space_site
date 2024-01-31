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
    <nav className='flex md:ml-10 md:mx-0 md:mt-0 mx-6 mt-6 justify-between items-center'>
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
        <ul className="pt-10 h-[96px] px-11 space-x-10 flex">
          <li className={`h-full ${pathname === '/' ? 'border-white border-b-4' : ''}`}>
            <Link href="/">HOME</Link>
          </li>
          <li className={`h-full ${pathname === '/destination' ? 'border-white border-b-4' : ''}`}>
            <Link href="/destination">DESTINATION</Link>
          </li>
          <li className={`h-full ${pathname === '/crew' ? 'border-white border-b-4' : ''}`}>
            <Link href="/crew">CREW</Link>
          </li>
          <li className={`h-full ${pathname === '/technology' ? 'border-white border-b-4' : ''}`}>
            <Link href="/technology">TECHNOLOGY</Link>
          </li>
        </ul>
      </div>

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
                <Link href="/"><span className='mr-3 font-bold'>00</span>HOME</Link>
              </li>
              <li className='mb-5'>
                <Link href="/destination"><span className='mr-3 font-bold'>01</span>DESTINATION</Link>
              </li>
              <li className='mb-5'>
                <Link href="/crew"><span className='mr-3 font-bold'>02</span>CREW</Link>
              </li>
              <li>
                <Link href="/technology"><span className='mr-3 font-bold'>03</span>TECHNOLOGY</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
