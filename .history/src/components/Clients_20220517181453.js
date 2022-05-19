import React from 'react'

export default function Clients(props) {
  return (
    <div name="clients" className='ml-48'>
        <div className='text-center p-8 text-black'>
            <h1 className='text-3xl'>Our Clients</h1>
        </div>

        <div className='px-8'>

        {/** The Clients Container/card */}
        <div className='text-black'>
              <div>
                  <p><strong>Full name:</strong> {props.firstname} {props.lastname}</p>
                  <p><strong>Email:</strong> {props.email}</p>
                  <p><strong>Phone number:</strong> {props.phone}</p>
                  <p><strong>Gender:</strong> {props.gender}</p>
                  <img src={props.image} alt='Image' className='h-48'/>
              </div>
        </div>

        </div>
    </div>
  )
}
