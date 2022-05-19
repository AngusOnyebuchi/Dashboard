import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-screen'>

        <div className='text-center text-white'>
        <div className='flex justify-between items-center p-4'>
            <img alt='e'/>
            <div className='flex items-center gap-4'>
                <p>About Us</p>
                <p>Register</p>
                <p>Contact</p>
            </div>
        </div>
        <div className='ml-[300px]'>
        <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-12 pt-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-50">Dashboard</p>
                    <p className="text-gray-200 pt-5">You can fill and submit the form below to gives us reviews or shoot us an email for collaborations of any sort. We look forward to hearing from you!</p>
                </div>
                <input type="text" placeholder="Username" name="name" className="p-2 bg-[#ccd6f6] rounded-3xl"/>
                <input type="password" placeholder="Password" name="password" className="my-4 p-2 bg-[#ccd6f6]"/>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
            </form>
        </div>
        
        <h1>The Login page</h1>
        </div>


    </div>
  )
}
