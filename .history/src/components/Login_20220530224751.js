import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
        isLoggedIn: false
    })

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setUser(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (user.isLoggedIn === true) {
            console.log("Thanks for logging in!")
        }
        console.log(user)
    }

  return (
    <div name="login" className='w-full '>
    
    <div className='h-[460px] w-[400px] my-20 mx-12 md:mx-[440px] bg-white'>

        <div className='text-center'>
        <div className='items-center ml-2 mb-2 p-8'>
            <div className='mb-8'>
                <p className="text-2xl font-bold text-blue-900">Angus Admin Board</p>
            </div>
            <div>
                <p className='text-sm border-2 inline border-blue-900 text-blue-900 p-2'><strong>AD</strong></p>
            </div>
        </div>
        <div className='ml-[20px]'>
        <div className="flex flex-col max-w-[600px] w-full">
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    name="email" 
                    onChange={handleChange}
                    value={user.email}
                    className="py-2 px-8 bg-[#ccd6f6] w-[340px] ml-3 rounded-lg border-2 border-gray-700"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={handleChange}
                    value={user.password}
                    className="my-4 py-2 px-8 bg-[#ccd6f6] w-[340px] ml-3 rounded-lg border-2 border-gray-700"
                />
                <div className='text-left ml-10'>
                <input 
                    type="checkbox"
                    name="isLoggedIn"
                    onChange={handleChange}
                    checked={user.isLoggedIn}
                />
                <label htmlFor="joinNewsletter" className='ml-4'>Keep me logged in on this device</label>
                </div>

                <NavLink to='/dashboard'>
                    <button onSubmit={handleSubmit}
                        className="bg-blue-900 hover:bg-blue-500 px-4 py-3 w-[340px] ml-3 my-4 flex rounded-lg font-bold">
                        <p className='flex text-center text-white ml-32'>Sign In</p>
                    </button>
                </NavLink>
                

                <div className='flex items-center gap-4 text-sm mx-16'>
                    <p>Don't have an account? </p>
                    <NavLink to='/register'><p className='font-semibold '>Sign up</p></NavLink>
                    
                </div>

            </div>
        </div>

        </div>
    
    </div>

    </div>
  )
}
