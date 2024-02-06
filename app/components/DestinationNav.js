'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const DestinationNav = () => {
  const pathname = usePathname()
  return (
    <nav className="mx-auto mt-4 text-sm md:text-base flex justify-center xl:justify-start ">
      <ul className="flex items-center space-x-5 md:space-x-9 font-barlow-condensed text-[#D0D6F9] tracking-widest">
        <li>
          <Link href="/destination" className={`${pathname === '/destination' ? 'border-b-2 border-white text-white pb-1' : 'hover:border-b-2 border-[#808080]'}`}>
            MOON
          </Link>
        </li>
        <li>
          <Link href="/destination/mars" className={`${pathname === '/destination/mars' ? 'border-b-2 border-white text-white pb-1' : 'hover:border-b-2 border-[#808080]'}`}>
            MARS
          </Link>
        </li>
        <li >
          <Link href="/destination/europa" className={`${pathname === '/destination/europa' ? 'border-b-2 border-white text-white pb-1' : 'hover:border-b-2 border-[#808080]'}`}>
            EUROPA
          </Link>
        </li>
        <li >
          <Link href="/destination/titan" className={`${pathname === '/destination/titan' ? 'border-b-2 border-white text-white pb-1' : 'hover:border-b-2 border-[#808080]'}`}>
            TITAN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default DestinationNav;
