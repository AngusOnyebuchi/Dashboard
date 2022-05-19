import React from "react";

export default function CreateAccount () {
    return (
        <div name="createAccount">
            <div className='ml-[350px]'>
              <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-12 pt-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-50">Create new account</p>
                    <p className="text-gray-200 pt-5">Create a new account</p>
                </div>
                <input type="email" placeholder="email" name="email" className="py-2 px-8 mb-4 bg-[#ccd6f6] rounded-2xl"/>
                <input type="text" placeholder="Username" name="name" className="py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <input type="password" placeholder="New Password" name="password" className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <input type="password" placeholder="Retype Password" name="password" className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"/>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 flex rounded-2xl font-bold w-[595px] "><p className='flex text-center'>Create Account</p></button>

                <div className='flex justify-between items-center gap-12 text-xl text-white mt-4 px-4'>
                    <a href='/'><p>Back to Login Page</p></a>
                    <a href=''><p>Terms of Use</p></a>
                </div>

              </form>
            </div>
        </div>
    )
}