import React from 'react'

const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'

export default function Clients(props) {
  return (
    <div name="clients" className='ml-48'>
        <div className='text-center p-8 text-black'>
            <h1 className='text-3xl'>Our Clients</h1>
        </div>

        <div className='px-8'>

        {/** The Team Container/card */}
        <div className='text-black'>
              <div>
                  <p>Full name: {props.firstname} {props.lastname}</p>
                  <p>Email: {props.email}</p>
                  <p>Phone number: {props.phone}</p>
                  <p>Gender: {props.gender}</p>
                  <img href={props.image} alt='Image'/>
              </div>
        </div>

        </div>
    </div>
  )
}
