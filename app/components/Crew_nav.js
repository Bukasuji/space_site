// components/CrewNav.js
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const CrewNav = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto xl:mx-0 mt-8 xl:mt-20">
      <ul className="flex items-center space-x-4">
        <li className={`rounded-full h-2.5 w-2.5   ${pathname === '/crew' ? 'bg-white' : 'bg-slate-600 hover:bg-slate-300'}`}>
          <Link href="/crew"><div className="block h-full"></div></Link>
        </li>
        <li className={`rounded-full h-2.5 w-2.5   ${pathname === '/crew/crew_b' ? 'bg-white' : 'bg-slate-600 hover:bg-slate-300'}`}>
          <Link href="/crew/crew_b"><div className="block h-full"></div></Link>
        </li>
        <li className={`rounded-full h-2.5 w-2.5   ${pathname === '/crew/crew_c' ? 'bg-white' : 'bg-slate-600 hover:bg-slate-300'}`}>
          <Link href="/crew/crew_c"><div className="block h-full"></div></Link>
        </li>
        <li className={`rounded-full h-2.5 w-2.5   ${pathname === '/crew/crew_d' ? 'bg-white' : 'bg-slate-600 hover:bg-slate-300'}`}>
          <Link href="/crew/crew_d"><div className="block h-full "></div></Link>
        </li>
      </ul>
    </nav>
  );
};

export default CrewNav;
