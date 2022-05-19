import React from 'react'
import { FaBars } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className=' fixed w-[200px] h-screen px-8 py-4 text-white bg-black'>
        <div>
            <FaBars/>
        </div>
        
        <div>
        <div className='mt-[70px]'>
                <a href='/dashboard'><p className='cursor-pointer mb-4'>Dashboard</p></a>
                <a href='/team'><p className='cursor-pointer mb-4'>Our Team</p></a>
                <a href='/clients'><p className='cursor-pointer mb-4'>Our Clients</p></a>
                <a href='/products'><p className='cursor-pointer mb-264'>Our Products</p></a>
                <a href='/'><p className='cursor-pointer mb-4'>LogOut</p></a>
            </div>
        </div>
    </div>
  )
}
