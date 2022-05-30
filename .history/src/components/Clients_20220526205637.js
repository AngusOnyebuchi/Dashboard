import React from 'react'

export default function Clients(props) {
  return (
    <div name="clients" className='ml-44'>

        <div className='px-8'>

        {/** The Clients Container/card */}
        <div>
        <div className='mb-8 mt-4 p-4 flex gap-12 justify-between items-center text-black bg-gray-100'>
                <div>
                  <p> {props.id}.</p>
                </div>
                <div> 
                  <p><img src={props.image} alt='' className='mt-2 h-24'/></p>
                </div>
                <div> 
                  <p>{props.fullname} </p>
                </div>
                <div> 
                  <p>{props.email}</p>
                </div>
                <div>
                  <p>{props.phone}</p>
                </div>
                <div> 
                  <p>{props.gender} Male</p>
                </div>
                  
              </div>
        </div>

        </div>
    </div>
  )
}
