'use client';
import { useEffect, useState } from 'react';
import { Search, User, ShoppingCart } from 'lucide-react'; // optional icons
import { Typewriter } from 'react-simple-typewriter'

export default function Header() {
  const fullText = 'ISH';
  const [typed, setTyped] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 200); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <main>
      <header className="relative flex items-center justify-between h-16 px-4 px-6 py-4 bg-[#121212] text-white shadow-md z-50">
      {/* Logo */}
        <div className="text-3xl absolute left-4 font-extrabold tracking-wider cursor-pointer">
          TRAPP
          <span className="text-red-500 text-3xl font-extrabold tracking-wider">
            <Typewriter
            words={['ISH']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={3000}
          />
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          {['Home', 'Music', 'Merch', 'Tickets', 'About', 'Contact'].map((item) => (
            <a key={item} href={`/${item.toLowerCase()}`} className="flex space-x-4 hover:text-red-500 transition">
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="absolute right-4">
          <div className="flex space-x-4 text-white">
          <Search className="w-5 h-5 hover:text-red-500 cursor-pointer" />
          <User className="w-5 h-5 hover:text-red-500 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 hover:text-red-500 cursor-pointer" />
        </div>
        </div>
      </header>
    </main>
    
  );
}