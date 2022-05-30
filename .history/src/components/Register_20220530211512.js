import React, {useState} from "react";
import { NavLink } from "react-router-dom";

export default function Register () {

    const [signupData, setSignupData] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        joinNewsletter: false
    })

    const handleChange = (event) => {
        const {name, value, type, checked} = event.target
        setSignupData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (signupData.password === signupData.confirmPassword) {
            console.log("Successfully signed up!")
            console.log(signupData)
        } else {
            console.log("Passwords do not match")
            return
        }
        if (signupData.joinNewsletter === true) {
            console.log("Thanks for signing up our Newsletter!")
        }
    }

    return (
        <div name="register">
            <div className='h-[460px] w-[400px] my-20 mx-[440px] bg-white'>
            <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-5 pt-8">
                    <p className="text-2xl ml-20 font-bold text-blue-900">Create New Account</p>
                </div>

                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={handleChange}
                    value={signupData.email}
                    className="py-2 px-8 bg-[#ccd6f6] w-[340px] ml-7 mb-2 rounded-lg border-2 border-gray-700"
                    />
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={handleChange}
                    value={signupData.username}
                    className="py-2 px-8 bg-[#ccd6f6] w-[340px] ml-7 mb-2 rounded-lg border-2 border-gray-700"
                    />
                <input 
                    type="password" 
                    placeholder="Input Password" 
                    name="password" 
                    onChange={handleChange}
                    value={signupData.password}
                    className="py-2 px-8 bg-[#ccd6f6] w-[340px] ml-7 mb-2 rounded-lg border-2 border-gray-700"
                    />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmPassword"
                    onChange={handleChange}
                    value={signupData.confirmPassword} 
                    className="py-2 px-8 bg-[#ccd6f6] w-[340px] ml-7 mb-2 rounded-lg border-2 border-gray-700"
                    />
                <div className='ml-8'>
                <input 
                    type="checkbox"
                    name="joinNewsletter"
                    onChange={handleChange}
                    checked={signupData.joinNewsletter}
                />
                <label htmlFor="joinNewsletter" className="ml-3">I want to join the newsletter</label>
                </div>
                <button onSubmit={handleSubmit}
                    className="bg-blue-900 hover:bg-blue-500 px-4 py-3 w-[340px] ml-7 my-4 flex rounded-lg font-bold">
                    <p className='flex text-center text-white ml-32'>Sign Up</p>
                </button>

                <div className='flex justify-between items-center gap-12 text-md text-black px-8'>
                    <NavLink to='/'><p>Back to Login Page</p></NavLink>
                    <NavLink to='/'><p>Terms of Use</p></NavLink>
                </div>

            </form>
            </div>
        </div>
    )
}