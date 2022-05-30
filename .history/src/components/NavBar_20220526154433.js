import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaPeopleCarry, FaPeopleArrows, FaProductHunt, FaSignOutAlt } from 'react-icons/fa'

export default function NavBar() {
  return (
    <div className=' fixed w-[200px] h-screen px-8 py-4 text-white bg-black'>
        <div className='flex gap-2 items-center text-center'>
            <h1 className='p-1 mt-4 w-12 border-2 border-white rounded-lg text-center text-white'><strong>A.D</strong></h1>
            <h1 className='text-center mt-5'>Dash-Board</h1>
        </div>
        
        <div>
        <div className='mt-[50px]'>
                <h1 className='uppercase mb-6 text-xs'>Navigation</h1>

                <NavLink to='/dashboard'>
                  <div className='flex gap-4 text-center'>
                    <FaHome size={20}/>
                    <p className='cursor-pointer mb-4'>Dashboard</p>
                  </div>
                </NavLink>
                <NavLink to='/team'>
                  <div className='flex gap-4 text-center'>
                    <FaPeopleCarry size={20}/>
                    <p className='cursor-pointer mb-4'>Our Team</p>
                  </div>
                </NavLink>
                <NavLink to='/clients'>
                  <div className='flex gap-4 text-center'>
                    <FaPeopleArrows size={20}/>
                    <p className='cursor-pointer mb-4'>Our Clients</p>
                  </div>
                </NavLink>
                <NavLink to='/products'> 
                  <div className='flex gap-4 text-center'>
                    <FaProductHunt size={20}/>
                    <p className='cursor-pointer mb-[272px]'>Our Products</p>
                  </div> 
                </NavLink>
                <NavLink to='/'>
                  <div className='flex gap-4 text-center'>
                    <FaSignOutAlt size={20}/>
                    <p className='cursor-pointer mb-4'>LogOut</p>
                  </div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
