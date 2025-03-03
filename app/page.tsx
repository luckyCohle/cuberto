"use client";
import Navbar from '@/components/Navbar';
import { Menu } from 'lucide-react';
import { motion } from 'motion/react'
import { div } from 'motion/react-client';
import { useState } from 'react';
import { curFollowerStyles, CurFollowType } from '@/Types/cursorTypes';
import CursorFollower from '@/components/CursorFollower';



export default function Home() {
  const [activeSection, setActiveSection] = useState<CurFollowType>(curFollowerStyles.default);
  return (
    <div className='w-full h-full'>
      <CursorFollower followerType={activeSection} />
      <div className="fixed top-6 right-14 z-50">
        <Menu className="h-6 w-6 text-black cursor-pointer" />
      </div>
      <Navbar setCursor={setActiveSection}/>
    </div>
  )
}
