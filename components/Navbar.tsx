import React from 'react'
import {motion} from "motion/react"
import { curFollowerStyles, CurFollowType } from '@/Types/cursorTypes'

interface propType {
  setCursor:React.Dispatch<React.SetStateAction<CurFollowType>>
}
function Navbar({setCursor}:propType) {
  return (
    <div className=' flex bg-white px-8.5 py-5.5 justify-between items-center ' 
    onMouseEnter={()=>setCursor(curFollowerStyles.default)}>
        <p className='text-black text-xl font-bold font-mono '>cuberto</p>
        <p className='text-black mr-14'>menu</p>
    </div>
  )
}

export default Navbar