// Import necessary modules and components
import Image from 'next/image';
import React from 'react';
import Navbar from '../../components/Navbar';
import DestinationNav from '../../components/DestinationNav';

// Define the Destination component
export default function Europa() {
  return (
    <main className="min-h-screen flex flex-col bg-cover md:bg-cover xl:bg-[url('/assets/destination/background-destination-desktop.jpg')] md:bg-[url('/assets/destination/background-destination-tablet.jpg')] bg-[url('/assets/destination/background-destination-mobile.jpg')]">
      <Navbar />
      <div className='xl:flex xl:mx-40 xl:mt-20'>
          <div className='flex justify-center flex-col'>
              {/* Destination title */}
              <div className='mt-6 xl:mt-0 xl:ml-0 md:ml-10 md:mr-0 mx-6 text-white'>
                <p className='md:text-start md:text-xl xl:text-[28px] text-center text-base text-white font-barlow-condensed font-normal tracking-[2.7px]'>
                  <span className='opacity-50 mr-2'>01</span> PICK YOUR DESTINATION
                </p>
              </div>
              
              {/* Moon image */}
              <div className='mt-8 md:mb-8 mx-auto xl:ml-16 xl:mb-0 xl:mt-28 hidden xl:block'>
                <Image
                  src="/assets/destination/image-europa.png"
                  width={400}
                  height={400}
                  alt="mars"
                  priority
                />
              </div>
              <div className='mt-8 md:mb-8 mx-auto xl:ml-24 xl:mb-0 xl:mt-16  hidden xl:hidden md:block'>
                <Image
                  src="/assets/destination/image-europa.png"
                  width={300}
                  height={300}
                  alt="europa"
                  priority
                />
              </div>

              <div className='mt-8 md:mb-8 mx-auto md:hidden'>
                <Image
                  src="/assets/destination/image-europa.png"
                  width={208}
                  height={208}
                  alt="europa"
                  priority
                />
              </div>
          </div>

          <div className='xl:w-[445px] xl:ml-32 xl:mt-20'>
            {/* Destination navigation */}
            <DestinationNav />
            
            {/* Destination details */}
            <div className='xl:text-start text-center mt-4 xl:mt-0'>
              <p className='font-sans text-[56px] md:text-[80px] xl:text-[6.25rem] text-white'>EUROPA</p>
              <div className='xl:mx-0 md:mx-auto md:w-[80%] xl:w-[100%] md:text-base xl:text-[18px]'>
                  <p className='text-[#D0D6F9] font-barlow xl:mx-0 mx-6'>
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                  </p>
              </div>
            </div>
            
            {/* Divider */}
            <div className='mx-auto xl:mx-0 xl:w-[100%] w-[85%] h-px bg-[#383B4B] my-8 md:my-10 md:mt-16 md:mb-8 xl:mt-11'/>
            
            {/* Additional details */}
            <div className='xl:text-start text-center xl:mb-0 mb-10'>
              <div className='md:flex text-center md:mx-auto xl:mx-0 md:w-[60%] xl:w-[100%] xl:text-start'>
                  <div className='md:w-[50%] md:ml-4'>
                    <p className='text-[#D0D6F9] text-sm md:tracking-widest font-barlow-condensed md:mb-2'>AVG. DISTANCE</p>
                    <p className='text-3xl text-white font-sans uppercase'>628 MIL. km</p>
                  </div>
                  <div className='md:w-[50%]'>
                    <p className='text-[#D0D6F9] text-sm  md:tracking-widest font-barlow-condensed mt-8 md:mt-0  md:mb-2'>EST. TRAVEL TIME</p>
                    <p className='text-3xl text-white font-sans uppercase'>3 years</p>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  );
}
