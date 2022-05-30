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
            <div className='ml-[350px]'>
            <form method="POST" action="https://getform.io/f/fe45028b-14d7-4641-8e48-4acf76466533" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-12 pt-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">Create new account</p>
                </div>

                <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    onChange={handleChange}
                    value={signupData.email}
                    className="py-2 px-8 mb-4 bg-[#ccd6f6] rounded-2xl"
                    />
                <input 
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={handleChange}
                    value={signupData.username}
                    className="py-2 px-8 bg-[#ccd6f6] rounded-2xl"
                    />
                <input 
                    type="password" 
                    placeholder="Input Password" 
                    name="password" 
                    onChange={handleChange}
                    value={signupData.password}
                    className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"
                    />
                <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="confirmPassword"
                    onChange={handleChange}
                    value={signupData.confirmPassword} 
                    className="my-4 py-2 px-8 bg-[#ccd6f6] rounded-2xl"
                    />
                <div className='ml-4'>
                <input 
                    type="checkbox"
                    name="joinNewsletter"
                    onChange={handleChange}
                    checked={signupData.joinNewsletter}
                />
                <label htmlFor="joinNewsletter" className="ml-4">I want to join the newsletter</label>
                </div>
                <button onSubmit={handleSubmit}
                    className="text-black bg-blue-900 hover:bg-blue-600 px-4 py-3 my-8 flex rounded-2xl font-bold w-[595px] ">
                    <p className='flex text-center text-white ml-52'>Create Account</p>
                </button>

                <div className='flex justify-between items-center gap-12 text-xl text-black mt-4 px-2'>
                    <NavLink to='/'><p>Back to Login Page</p></NavLink>
                    <NavLink to='/'><p>Terms of Use</p></NavLink>
                </div>

            </form>
            </div>
        </div>
    )
}