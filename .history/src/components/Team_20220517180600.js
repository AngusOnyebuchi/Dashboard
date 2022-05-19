import React from 'react'


export default function Team(props) {
    
  return (
    <div name="team" className='ml-48'>

        <div className='px-8'>
        
        {/** The Team Container/card */}
        <div className='text-black'>
              <div>
                  <p>Full name: {props.firstname} {props.lastname}</p>
                  <p>Email: {props.email}</p>
                  <p>Phone number: {props.phone}</p>
                  <p>Gender: {props.gender}</p>
                  <img src={props.image} alt='Image' className='h-48 w-56'/>
              </div>
        </div>

        </div>

    </div>
  )
}
