import React from 'react'

export default function Login() {
  return (
    <div className='w-full h-screen'>

        <div>
        <div>
            <img alt='e'/>
            <div>
                <p>About Us</p>
                <p>Register</p>
                <p>Contact</p>
            </div>
        </div>
        <div>
            <img alt='d'/>
            <form className='text-white bg-black'>
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Password'/>
                <button>Login</button>
                <div>
                    <input>Keep me logged in</input>
                    <a href='#'><p>Forget Password</p></a>
                </div>
                <div>
                    <a href='#'><p>CREATE ACCOUNT</p></a>
                    <a href='#'><p>NEED HELP?</p></a>
                </div>
            </form>
        </div>
        <h1>The Login page</h1>
        </div>


    </div>
  )
}
