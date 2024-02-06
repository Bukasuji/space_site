import { Bellefair, Barlow, Barlow_Condensed } from 'next/font/google' 
import './globals.css'
import Navbar from './components/Navbar';

const bellefair = Bellefair({ 
  subsets: ['latin'],
  weight: ['400'],
  variable:'--font-bellefair',
});
const barlow = Barlow({ subsets: ['latin'],
   weight: ['400', '700'],
   variable:'--font-barlow' 
});
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'],
  weight: ['400', '700'],
   variable:'--font-barlow_condensed' 
}); 

export const metadata = {
  title: 'A space site',
  description: 'This is a site about going to the space',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
          {children}
      </body>
    </html>
  )
}
