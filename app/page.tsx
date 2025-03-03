"use client";
import Navbar from '@/components/Navbar';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react'
import { div } from 'motion/react-client';


export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className="fixed top-6 right-14 z-50">
        <Menu className="h-6 w-6 text-black cursor-pointer" />
      </div>
      <Navbar />
    </div>
  )
}
