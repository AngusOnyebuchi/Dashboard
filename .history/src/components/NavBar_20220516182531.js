import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className=' fixed w-[500px] h-screen flex justify-between px-8 py-4 text-white bg-black'>
        <div>
            <FaBars/>
        </div>
        
        <div>
            <FaTimes/>
        </div>
    </div>
  )
}
