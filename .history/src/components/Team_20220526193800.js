import React from 'react'


export default function Team(props) {
    
  return (
    <div name="team" className='ml-48'>

        <div className='px-8'>
        
        {/** The Team Container/card */}
        <div className='text-black'>
              <div className='mb-8 mt-4 flex'>
                  <p><strong>Full name:</strong> {props.firstname} {props.lastname}</p>
                  <p><strong>Email:</strong> {props.email}</p>
                  <p><strong>Phone number:</strong> {props.phone}</p>
                  <p><strong>Gender:</strong> {props.gender}</p>
                  <img src={props.image} alt='' className='mt-2 h-48'/>
              </div>
        </div>

        </div>

    </div>
  )
}
