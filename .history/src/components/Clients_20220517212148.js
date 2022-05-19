import React from 'react'

export default function Clients(props) {
  return (
    <div name="clients" className='ml-48'>

        <div className='px-8'>

        {/** The Clients Container/card */}
        <div className='text-black'>
              <div className='mb-8 mt-4'>
                  <p><strong>Full name:</strong> {props.fullname} </p>
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
