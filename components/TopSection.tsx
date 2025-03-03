import React from 'react'
import { motion } from "motion/react"
import { curFollowerStyles, CurFollowType } from '@/Types/cursorTypes'
import { div } from 'motion/react-client'

interface propType {
  setCursor: React.Dispatch<React.SetStateAction<CurFollowType>>
}
function TopSection({ setCursor }: propType) {
  return (
    <div className='w-full max-h-600'>
      <div className=' flex bg-white px-8.5 py-5 justify-between items-center '
        onMouseEnter={() => setCursor(curFollowerStyles.default)}>
        <p className='text-black text-xl font-bold font-mono '>cuberto</p>
        <p className='text-black mr-14'>menu</p>
      </div>
      {/* largeText */}
      <div className='flex justify-start p-20'>
        <div className="text-center space-y-4">
          <p className="text-7xl  text-gray-800">We are a digital</p>
          <div className='flex justify-center items-center gap-2'>
            <div className="w-[110px] h-[80px] overflow-hidden rounded-[42%]" >
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src="https://cuberto.com/assets/home/hero/header.mp4" type="video/mp4" />
              </video>
            </div>
            <p className=" inline text-7xl italic font-extralight text-gray-800">design  </p>&nbsp;<p className='inline text-7xl'>and</p>
          </div>
          <p className="text-7xl  text-gray-800">motion agency</p>
        </div>
      </div>
    </div>
  )
}

export default TopSection