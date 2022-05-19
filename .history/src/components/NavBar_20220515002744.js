import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className='flex justify-between px-8 py-4 m-4 text-black bg-red'>
        <div>
            <FaBars/>
        </div>
        
        <div>
            <FaTimes/>
        </div>
    </div>
  )
}
