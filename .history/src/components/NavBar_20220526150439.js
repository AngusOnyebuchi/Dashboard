import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className=' fixed w-[200px] h-screen px-8 py-4 text-white bg-black'>
        <div>
            <h1 className='p-1 mt-4 w-12 border-2 border-white text-center text-white'><strong>A.D</strong></h1>
        </div>
        
        <div>
        <div className='mt-[70px]'>
                <NavLink to='/dashboard'>
                  <div className='flex gap-4 text-center'>
                  <FaHome size={30}/>
                  <p className='cursor-pointer mb-4'>Dashboard</p>
                  </div>
                  </NavLink>
                <NavLink to='/team'><p className='cursor-pointer mb-4'>Our Team</p></NavLink>
                <NavLink to='/clients'><p className='cursor-pointer mb-4'>Our Clients</p></NavLink>
                <NavLink to='/products'><p className='cursor-pointer mb-[272px]'>Our Products</p></NavLink>
                <NavLink to='/'><p className='cursor-pointer mb-4'>LogOut</p></NavLink>
            </div>
        </div>
    </div>
  )
}
