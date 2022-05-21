import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className=' fixed w-[200px] h-screen px-8 py-4 text-white bg-black'>
        <div>
            <h1 className='p-1 mt-2 w-12 border-2 border-white text-center text-white'><strong>A.D</strong></h1>
        </div>
        
        <div>
        <div className='mt-[70px]'>
                <NavLink to='/dashboard'><p className='cursor-pointer mb-4'>Dashboard</p></NavLink>
                <NavLink to='/team'><p className='cursor-pointer mb-4'>Our Team</p></NavLink>
                <NavLink to='/clients'><p className='cursor-pointer mb-4'>Our Clients</p></NavLink>
                <NavLink to='/products'><p className='cursor-pointer mb-[272px]'>Our Products</p></NavLink>
                <NavLink to='/'><p className='cursor-pointer mb-4'>LogOut</p></NavLink>
            </div>
        </div>
    </div>
  )
}
