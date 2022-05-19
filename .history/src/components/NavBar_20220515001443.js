import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className='flex justify-between p-4 '>
        <div>
            <FaBars/>
        </div>
        
        <div>
            <FaTimes/>
        </div>
    </div>
  )
}
