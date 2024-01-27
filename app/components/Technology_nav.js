// components/Technology.js
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Technology_nav = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto mt-8 md:mt-12">
      <ul className="flex items-center space-x-4">
        <li className={`rounded-full md:h-14 md:w-14 h-10 w-10 border border-[#8e918f] text-white px-4 py-2 md:px-6 md:py-3.5 md:text-2xl ${pathname === '/technology' ? 'bg-white text-black opacity-100 border-none' : ''}`}>
          <Link href="/technology" className={`${pathname === '/technology' ? 'text-black' : ''}`}>1</Link>
        </li>
        <li className={`rounded-full border border-[#8e918f] md:h-14 md:w-14 h-10 w-10 px-4 py-2 md:px-6 md:py-3 text-white  md:text-2xl ${pathname === '/technology/technology_b' ? 'bg-white opacity-100 text-black border-none' : ''}`}>
          <Link href="/technology/technology_b" className={`${pathname === '/technology/technology_b' ? 'text-black' : ''}`}>2</Link>
        </li>
        <li className={`rounded-full border border-[#8e918f] md:h-14 md:w-14 h-10 w-10 px-4 py-2 md:px-6 md:py-3 text-white  md:text-2xl ${pathname === '/technology/technology_c' ? 'bg-white opacity-100 text-black border-none' : ''}`}>
          <Link href="/technology/technology_c" className={`${pathname === '/technology/technology_c' ? 'text-black' : ''}`}>3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Technology_nav;
