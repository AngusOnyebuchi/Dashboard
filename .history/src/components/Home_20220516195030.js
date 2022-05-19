import React from 'react'

export default function Home() {
  return (
    <div name="dashboard" className='p-4 mx-2 h-[700px] bg-slate-200'>

          {/** The first part after the nav */}
      <div className='flex justify-between p-4 items-center'>
        <h1 className='font-bold text-xl ml-48'>Dashboard Overview</h1>

        <div className='flex items-center gap-4'>
          <div className='px-4 py-2 bg-white border-[1px] rounded-md border-blue-400'>
            <p>22 June 2020</p>
            <img alt=''/>
          </div>

          <p>-</p>

          <div className='px-4 py-2 bg-white border-[1px] rounded-md border-blue-400'>
            <p>22 June 2020</p>
            <img alt=''/>
          </div>
        </div>

      </div>
        

        {/** The second part after the nav */}
        <div className='flex gap-4 mt-4'>
          
          <div className='ml-[200px]'>
          <div className='flex items-center gap-4'>

            <div className='h-[80px] w-[231px] bg-white py-4 px-8'>
              <p>Total Profit</p>
              <div className='flex items-center gap-4 font-bold'>
                <p className='text-xl'>$55,783</p>
                <p className='text-green-600'>+23.67%</p>
              </div>
            </div>

            <div className='h-[80px] w-[231px] bg-white py-4 px-8'>
              <p>Total Expenses</p>
              <div className='flex items-center gap-4 font-bold'>
                <p className='text-xl'>$11,464</p>
                <p className='text-green-600'>+3.51%</p>
              </div>
            </div>

            <div className='h-[80px] w-[231px] bg-white py-4 px-8'>
              <p>New Users</p>
              <div className='flex items-center gap-4 font-bold'>
                <p className='text-xl'>1,248</p>
                <p className='text-red-600'>-8.98%</p>
              </div>
            </div>

          </div>

          <div className='h-[300px] w-[725px] bg-white mt-4'></div>
          </div>

          <div className='bg-white h-[396px] w-[382px] py-4'>
            <p className='font-bold text-xl pl-8 pb-5'>Top Selling Product</p>
            <hr/>
            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Adidas CI Sneaker</p>
              <p className='font-bold ml-20'>$2,250</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Nike Men Sneaker</p>
              <p className='font-bold ml-20'>$1,850</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Adidas Court Sneaker</p>
              <p className='font-bold ml-16'>$1,150</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>ASICS Running Shoe</p>
              <p className='font-bold ml-16'>$950</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Adidas CI Sneaker</p>
              <p className='font-bold ml-16'>$2,250</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Soffe Men Pack - USA Poly</p>
              <p className='font-bold ml-16'>$750</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Polo Ralph Men Slim fit</p>
              <p className='font-bold ml-16'>$450</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Simple Joy Carter Shirt</p>
              <p className='font-bold ml-16'>$380</p>
            </div>
            
          </div>

        </div>

    </div>
  )
}
