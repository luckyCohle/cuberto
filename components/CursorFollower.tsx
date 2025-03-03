import React, { useEffect, useState } from 'react'
import {motion} from "motion/react"
import { CurFollowType } from '@/Types/cursorTypes';

interface propType{
  followerType:CurFollowType;
  bgColour?:string;
  children?:React.ReactNode;
}
function CursorFollower({followerType,bgColour,children}:propType) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <motion.div className={followerType} 
    style={{backgroundColor:bgColour}}
    animate={{
      x:position.x,
      y:position.y,
    }}
    transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {children}
    </motion.div>
  )
}

export default CursorFollower