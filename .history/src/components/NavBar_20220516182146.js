import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className='w-[500px] h-screen flex justify-between px-8 py-4 mx-2 mt-2 text-black bg-green-500'>
        <div>
            <FaBars/>
        </div>
        
        <div>
            <FaTimes/>
        </div>
    </div>
  )
}
