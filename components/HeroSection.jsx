'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row justify-between items-center px-8 md:px-24 pt-20 relative">
      {/* Left Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-[10rem] font-black text-gray-700 leading-none relative"
        >
          ISH
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-4 bottom-8 text-white text-[3rem] font-cursive"
          >
            Kevin
          </motion.span>
        </motion.h1>

        <p className="text-xl">
          Trapp<span className="text-red-500">ish</span> to the worlds.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-black text-white border border-red-500 rounded-full px-6 py-3 hover:bg-red-600 transition-all cursor-pointer">
            🎵 Listen Now
          </button>
          <button className="bg-red-600 text-white rounded-full px-6 py-3 hover:bg-red-700 transition-all cursor-pointer">
            🛒 Shop Merch
          </button>
          <button className="bg-black text-white border border-red-500 rounded-full px-6 py-3 hover:bg-red-600 transition-all cursor-pointer">
            🎟 Get Tickets
          </button>
        </div>

        {/* Social */}
        <div className="flex gap-4 mt-6">
          <p>Ish Kevin</p>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" /></a>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        className="flex-1 mt-10 md:mt-0"
      >
        <Image
          src="https://i.imgur.com/E0tUw46.png" // Replace with your own image later
          alt="Artist"
          width={600}
          height={800}
          className="rounded-lg object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;