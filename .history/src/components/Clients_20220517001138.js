import React from 'react'

const url = 'https://fakerapi.it/api/v1/companies?_quantity=1'

export default function Clients() {
  return (
    <div name="clients" className='ml-48'>
        <div className='text-center p-8 text-black'>
            <h1 className='text-3xl'>Our Clients</h1>
        </div>

        <div className='px-8'>

        <div className='text-black'>
            <p>Full name: Angus Onyebuchi</p>
            <p>Email: AngusOnyebuchi@gmail.com</p>
            <p>Phone number: +23457688875885</p>
            <p>Gender: Male</p>
            <img href="" alt='Image'/>
            
        </div>

        </div>
    </div>
  )
}
