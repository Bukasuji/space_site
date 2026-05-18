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
      <head>
        {/* Preload all background images to prevent white splash on first navigation */}
        <link rel="preload" as="image" href="/assets/home/background-home-mobile.jpg" />
        <link rel="preload" as="image" href="/assets/home/background-home-tablet.jpg" />
        <link rel="preload" as="image" href="/assets/home/background-home-desktop.jpg" />
        <link rel="preload" as="image" href="/assets/destination/background-destination-mobile.jpg" />
        <link rel="preload" as="image" href="/assets/destination/background-destination-tablet.jpg" />
        <link rel="preload" as="image" href="/assets/destination/background-destination-desktop.jpg" />
        <link rel="preload" as="image" href="/assets/crew/background-crew-mobile.jpg" />
        <link rel="preload" as="image" href="/assets/crew/background-crew-tablet.jpg" />
        <link rel="preload" as="image" href="/assets/crew/background-crew-desktop.jpg" />
        <link rel="preload" as="image" href="/assets/technology/background-technology-mobile.jpg" />
        <link rel="preload" as="image" href="/assets/technology/background-technology-tablet.jpg" />
        <link rel="preload" as="image" href="/assets/technology/background-technology-desktop.jpg" />
      </head>
      <body className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
          {children}
      </body>
    </html>
  )
}
