import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"

export default function NavBar() {
  return (
    <div className=' fixed w-[200px] h-screen px-8 py-4 text-white bg-black'>
        <div>
            <FaBars/>
        </div>
        
        <div>
        <div className='mt-[100px]'>
                <a href='/createAccount'><p className='cursor-pointer'>Register</p></a>
                <a href='/team'><p className='cursor-pointer'>Our Team</p></a>
                <a href='/clients'><p className='cursor-pointer'>Our Clients</p></a>
                <a href='/products'><p className='cursor-pointer'>Our Products</p></a>
                <p className='cursor-pointer'>Contact</p>
                <a href='/'><p className='cursor-pointer'>LogOut</p></a>
            </div>
        </div>
    </div>
  )
}
