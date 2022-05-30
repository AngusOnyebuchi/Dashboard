import React from 'react'

export default function Products(props) {
  return (
    <div name='products' className='ml-48 bg-slate-200'>

        <div className='px-8'>

         {/** The Products Container/card */}
         <div className='text-black'>
              <div className='mt-4 mb-8'>
                  <p><strong>Product:</strong> {props.name}</p>
                  <br/>
                  <img src={props.image} alt='product' className='h-52'/>
                  <br/>
                  <p><strong>Net Price:</strong> ${props.netPrice}</p>
                  <p><strong>Taxes:</strong> ${props.taxes}</p>
                  <p><strong>Price:</strong> ${props.price}</p>
                  <hr/>
              </div>
              <hr/>
        </div>

        </div>

    </div>
  )
}
