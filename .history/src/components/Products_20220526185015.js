import React from 'react'

export default function Products(props) {
  return (
    <div name='products' className='ml-52 mr-4 bg-white'>

        <div className='px-8'>

         {/** The Products Container/card */}
         <div className='text-black'>
              <div className='mt-4 mb-8'>
                  <p><strong>Product:</strong> {props.name}</p>
                  <br/>
                  <img src={props.image} alt='product' className='h-68'/>
                  <br/>
                  <div className='flex justify-between items-center bg-gray-900 p-4'>
                    <div>
                      <p className='text-blue-400'><strong>Price ($)</strong></p>
                      <hr/>
                      <p className='text-white text-center font-semibold mt-4'>{props.price}</p>
                    </div>
                    <div>
                      <p className='text-yellow-500'><strong>Tax (%)</strong></p>
                      <hr/>
                      <p className='text-white text-center font-semibold mt-4'>{props.taxes}</p>
                    </div>
                    <div>
                      <p className='text-green-500'><strong>Net Price ($)</strong></p>
                      <hr/>
                      <p className='text-white text-center font-semibold mt-4'>{props.netPrice}</p>
                    </div>
                  </div>
                  
              </div>
              <hr/>
        </div>

        </div>

    </div>
  )
}
