import React from 'react'

export default function NavBar() {
  return (
    <div className=' fixed w-[200px] h-screen px-8 py-4 text-white bg-black'>
        <div>
            <h1 className='p-1 w-12 bg-white text-center text-black'><strong>A.D</strong></h1>
        </div>
        
        <div>
        <div className='mt-[70px]'>
                <a href='/dashboard'><p className='cursor-pointer mb-4'>Dashboard</p></a>
                <a href='/team'><p className='cursor-pointer mb-4'>Our Team</p></a>
                <a href='/clients'><p className='cursor-pointer mb-4'>Our Clients</p></a>
                <a href='/products'><p className='cursor-pointer mb-[272px]'>Our Products</p></a>
                <a href='/'><p className='cursor-pointer mb-4'>LogOut</p></a>
            </div>
        </div>
    </div>
  )
}
