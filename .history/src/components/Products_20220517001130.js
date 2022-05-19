import React from 'react'

const url = 'https://fakerapi.it/api/v1/products?_quantity=1'

export default function Products() {
  return (
    <div name='products' className='ml-48'>

        <div className='text-center p-8 text-black'>
            <h1 className='text-3xl'>Our Products</h1>
        </div>

        <div className='px-8'>

        <div className='text-black'>
            <p>Product name: Angus Chemicals</p>
            <p><img href="" alt='Image'/></p>
            <p>Net Price: $1200</p>
            <p>Taxes: $20</p>
            <p>Price: $1000</p>
            
        </div>

        </div>

    </div>
  )
}
