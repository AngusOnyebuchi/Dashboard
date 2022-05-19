import React, { useState, useEffect } from 'react'


export default function Team(props) {
    
  return (
    <div name="team" className='ml-48'>
        <div className='text-center p-8 text-black'>
            <h1 className='text-3xl'>Team Members</h1>
        </div>

        <div className='px-8'>

        <div className='text-black'>
        <li key={props.team.id}>
                  <p>Full name: {props.team.full_name}</p>
                  <p>Email: {props.team.email}</p>
                  <p>Phone number: {props.team.phone_number}</p>
                  <p>Gender: {props.team.gender}</p>
                  <img href={props.team.image} alt='Image'/>
              </li>
        </div>

        </div>

    </div>
  )
}
