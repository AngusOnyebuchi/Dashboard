import React from 'react'
import { FaChevronDown, FaRegEnvelope, FaRegSun, FaRegBell, FaHome} from 'react-icons/fa'

export default function Products(props) {
  return (
    <div name='products' className='ml-48'>

<div className='flex justify-between p-4 items-center'>
        <h1 className='font-bold text-3xl ml-48'>Dashboard Overview</h1>

        <div className='flex items-center gap-4'>
          <div className='px-4 py-2 bg-white border-[1px] rounded-md border-blue-400'>
            <p>22 March 2022</p>
            <img alt=''/>
          </div>

          <p><strong>--</strong></p>

          <div className='px-4 py-2 bg-white border-[1px] rounded-md border-blue-400'>
            <p>22 April 2022</p>
            <img alt=''/>
          </div>
        </div>

        <div className='flex gap-8 items-center '>
          <div className='flex gap-2 items-center cursor-pointer'>
            <FaRegBell/>
            <FaChevronDown size={10}/>
          </div>
          <div className='flex gap-2 items-center cursor-pointer'>
            <FaRegEnvelope/>
            <FaChevronDown size={10}/>
          </div>
          <div className='flex gap-2 items-center cursor-pointer'>
            <FaRegSun/>
            <FaChevronDown size={10}/>
          </div>
        </div>

      </div>

      <div className='text-black ml-56 mt-8 flex gap-2 items-center text-center'>
        <FaHome size={15} className='mb-1 cursor-pointer'/>
        <p>/</p>
        <p className='font-semibold'>Dashboard</p>
      </div>
        

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
