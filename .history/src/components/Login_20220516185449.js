import React from 'react'

export default function Login() {
  return (
    <div name="login" className='w-full h-screen'>

        <div className='text-center text-black mt-0'>
        <div className='flex justify-between items-center p-8'>
            <div className='flex gap-4 ml-48'>
                <img alt=''/>
                <p>AD</p>
            </div>
            
            <div className='flex items-center gap-4'>
                <a href='/createAccount'><p className='cursor-pointer'>Register</p></a>
                <p className='cursor-pointer'>Contact Us</p>
            </div>
        </div>
        <div className='ml-[400px]'>
        <div className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-4">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-50">Admin Dashboard</p>
                    <p className="text-gray-200 pt-5">Login to your dashboard or create a new account</p>
                </div>
                <input type="text" placeholder="Username" name="name" className="py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <input type="password" placeholder="Password" name="password" className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <a href='/dashboard'>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex rounded-2xl font-bold w-[595px] "><p className='flex text-center'>LOGIN</p></button>
                </a>

                <div className='flex justify-between items-center gap-12 text-xl mt-4'>
                    <a href='/createAccount'><p>CREATE ACCOUNT</p></a>
                    <a href=''><p>Forgot password?</p></a>
                </div>

            </div>
        </div>

        </div>


    </div>
  )
}
