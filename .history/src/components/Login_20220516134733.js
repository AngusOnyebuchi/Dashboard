import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-screen'>

        <div className='text-center text-white mt-4'>
        <div className='flex justify-between items-center p-8'>
            <div className='flex gap-4'>
                <img alt='e'/>
                <p>AD</p>
            </div>
            
            <div className='flex items-center gap-4'>
                <p>About Us</p>
                <p>Register</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='ml-[350px]'>
        <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-12 pt-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-50">Dashboard</p>
                    <p className="text-gray-200 pt-5">Login to your dashboard or create a new account</p>
                </div>
                <input type="text" placeholder="Username" name="name" className="py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <input type="password" placeholder="Password" name="password" className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex rounded-2xl font-bold items-center">GET STARTED</button>

                <div className='flex justify-between items-center gap-12 text-xl'>
                    <a href=''><p>CREATE ACCOUNT</p></a>
                    <a href=''><p>Forgot password?</p></a>
                </div>

            </form>
        </div>

        </div>


    </div>
  )
}
