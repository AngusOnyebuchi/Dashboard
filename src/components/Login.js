import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {


  return (
    <div name="login" className='w-full h-screen'>

        <div className='text-center text-black mt-0'>
        <div className='flex justify-between items-center p-8'>
            <div className='flex gap-4 ml-4'>
                <img alt=''/>
                <p className='text-3xl bg-black text-white p-2'><strong>AD</strong></p>
            </div>
            
            <div className='flex items-center gap-4'>
                <NavLink to='/register'><p className='cursor-pointer'>Register/Create Account</p></NavLink>
            </div>
        </div>
        <div className='ml-[340px]'>
        <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">Admin Dashboard</p>
                    <p className="text-black pt-5">Login to your dashboard or create a new account</p>
                </div>
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="name" 
                    className="py-2 px-8 bg-[#ccd6f6] rounded-2xl"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"
                />
                <NavLink to='/dashboard'>
                    <button className="text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex rounded-2xl font-bold w-[595px] "><p className='flex text-center ml-60'>LOGIN</p></button>
                </NavLink>

                <div className='flex justify-between items-center gap-12 text-xl mt-4'>
                    <NavLink to='/createAccount'><p>CREATE ACCOUNT</p></NavLink>
                    <NavLink to='/'><p>Forgot password?</p></NavLink>
                </div>

            </div>
        </div>

        </div>


    </div>
  )
}
