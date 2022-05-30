import React from 'react'


export default function Team(props) {
    
  return (
    <div name="team" className='ml-44'>

        <div className='px-8'>
        
        {/** The Team Container/card */}
        <div>
              <div className='mb-8 mt-4 p-4 flex gap-12 justify-between items-center text-black bg-white'>
                <div>
                  <p> {props.id}</p>
                </div>
                <div className=''> 
                  <p><img src={props.image} alt='' className='mt-2 h-24'/></p>
                </div>
                <div className=''> 
                  <p>{props.firstname} {props.lastname}</p>
                </div>
                <div className=''> 
                  <p>{props.email}</p>
                </div>
                <div>
                  <p>{props.phone}</p>
                </div>
                <div> 
                  <p>{props.gender}</p>
                </div>
                  
              </div>
        </div>

        </div>

    </div>
  )
}
