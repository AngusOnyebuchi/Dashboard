import React from 'react'
import { FaChevronDown, FaRegEnvelope, FaRegSun, FaRegBell, FaHome} from 'react-icons/fa'

export default function Products(props) {
  return (
    <div name='products' className='ml-48'>



        <div className='px-8'>

         {/** The Products Container/card */}
         <div className='text-black'>
              <div className='mt-4 mb-8'>
                  <p><strong>Product name:</strong> {props.name}</p>
                  <img src={props.image} alt='product' className='h-48'/>
                  <p><strong>Net Price:</strong> ${props.netPrice}</p>
                  <p><strong>Taxes:</strong> ${props.taxes}</p>
                  <p><strong>Price:</strong> ${props.price}</p>
              </div>
        </div>

        </div>

    </div>
  )
}
