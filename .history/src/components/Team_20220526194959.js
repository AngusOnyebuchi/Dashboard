import React from 'react'


export default function Team(props) {
    
  return (
    <div name="team" className='ml-48'>

        <div className='px-8'>
        
        {/** The Team Container/card */}
        <div className='text-black'>
              <div className='mb-8 mt-4 flex gap-4'>
                <div>
                  <p className='font-bold'>#</p> 
                  <p> {props.id}</p>
                </div>
                <div>
                  <p className='font-bold'>Image</p> 
                  <p><img src={props.image} alt='' className='mt-2 h-48'/></p>
                </div>
                <div>
                  <p className='font-bold'>Full name</p> 
                  <p>{props.firstname} {props.lastname}</p>
                </div>
                <div>
                  <p className='font-bold'>Email</p> 
                  <p>{props.email}</p>
                </div>
                <div>
                  <p className='font-bold'>Phone number</p> 
                  <p>{props.phone}</p>
                </div>
                <div>
                  <p className='font-bold'>Gender</p> 
                  <p>{props.gender}</p>
                </div>
                  
              </div>
        </div>

        </div>

    </div>
  )
}
