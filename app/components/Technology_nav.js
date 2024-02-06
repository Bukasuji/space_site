
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Technology_nav = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto xl:mr-12 xl:ml-0 xl:mt-0 mt-8 md:mt-12">
      <ul className="flex justify-center xl:flex-col xl:items-start xl:space-y-6 items-center space-x-4 xl:space-x-0">
        <li className={`rounded-full md:h-14 md:w-14 xl:h-16 xl:w-16 h-10 w-10 border border-[#8e918f] text-white px-4 py-2 md:px-6 md:py-3.5 xl:py-3 md:text-2xl hover:border-white cursor-pointer ${pathname === '/technology' ? 'bg-white text-black opacity-100 border-none' : ''}`}>
          <Link href="/technology" className={`${pathname === '/technology' ? 'text-black' : ''}`}>1</Link>
        </li>
        <li className={`rounded-full border border-[#8e918f] md:h-14 md:w-14 xl:h-16 xl:w-16 h-10 w-10 px-4 py-2 md:px-6 md:py-3 text-white  md:text-2xl hover:border-white cursor-pointer ${pathname === '/technology/technology_b' ? 'bg-white opacity-100 text-black border-none' : ''}`}>
          <Link href="/technology/technology_b" className={`${pathname === '/technology/technology_b' ? 'text-black' : ''}`}>2</Link>
        </li>
        <li className={`rounded-full border border-[#8e918f] md:h-14 md:w-14 xl:h-16 xl:w-16 h-10 w-10 px-4 py-2 md:px-6 md:py-3 text-white  md:text-2xl hover:border-white cursor-pointer ${pathname === '/technology/technology_c' ? 'bg-white opacity-100 text-black border-none' : ''}`}>
          <Link href="/technology/technology_c" className={`${pathname === '/technology/technology_c' ? 'text-black' : ''}`}>3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Technology_nav;
