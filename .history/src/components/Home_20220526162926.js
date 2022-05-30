import React from 'react'
import { FaChevronDown, FaRegEnvelope, FaRegSun, FaRegBell} from 'react-icons/fa'

export default function Home() {
  return (
    <div name="dashboard" className='p-4 mx-2 h-screen bg-slate-200'>

          {/** The first part after the nav */}
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

      <div className='text-black ml-56'>
        <p>/ Dashboard</p>
      </div>
        

        {/** The second part after the nav */}
        <div className='flex gap-4 mt-12'>
          
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

          <div className='h-[300px] w-[725px] bg-white mt-4'>

            <div className='text-3xl px-12 py-8'>
              <p className='font-bold'>Sales Report</p>
              <hr/>
            </div>
            
            <div className='flex items-center px-4 gap-16'>
              <div>
                <p className='text-xl font-bold mb-4'>Date/ Week</p>
                <p className='mb-2'>Week 1</p>
                <p className='mb-2'>Week 2</p>
                <p className='mb-2'>Week 3</p>
                <p className='mb-2'>Week 4</p>
              </div>
              <div>
                <p className='text-xl font-bold mb-4'>Income</p>
                <p className='mb-2'>$10253</p>
                <p className='mb-2'>$11725</p>
                <p className='mb-2'>$15220</p>
                <p className='mb-2'>$18585</p>
              </div>
              <div>
                <p className='text-xl font-bold mb-4'>Expenses</p>
                <p className='mb-2'>$1730</p>
                <p className='mb-2'>$2950</p>
                <p className='mb-2'>$3430</p>
                <p className='mb-2'>$3354</p>
              </div>
              <div>
                <p className='text-xl font-bold mb-4'>Income</p>
                <p className='mb-2'>$10253</p>
                <p className='mb-2'>$11725</p>
                <p className='mb-2'>$15220</p>
                <p className='mb-2'>$18585</p>
              </div>
              <div>
                <p className='text-xl font-bold mb-4'>Expenses</p>
                <p className='mb-2'>$1730</p>
                <p className='mb-2'>$2950</p>
                <p className='mb-2'>$3430</p>
                <p className='mb-2'>$3354</p>
              </div>

            </div>
          </div>

          </div>

          <div className='bg-white h-[396px] w-[382px] py-4'>
            <p className='font-bold text-xl pl-8 pb-5'>Top Selling Product</p>
            <hr/>
            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Adidas CI Sneaker</p>
              <p className='font-bold ml-28'>$2,250</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Nike Men Sneaker</p>
              <p className='font-bold ml-28'>$1,850</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Adidas Court Sneaker</p>
              <p className='font-bold ml-[88px]'>$1,150</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>ASICS Running Shoe</p>
              <p className='font-bold ml-24'>$950</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Adidas CI Sneaker</p>
              <p className='font-bold ml-28'>$2,250</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Soffe Men Pack - USA Poly</p>
              <p className='font-bold ml-14'>$750</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Polo Ralph Men Slim fit</p>
              <p className='font-bold ml-20'>$450</p>
            </div>
            <hr/>

            <div className='flex gap-4 px-4 py-2'>
              <img alt='' src=''/>
              <p>Simple Joy Carter Shirt</p>
              <p className='font-bold ml-20'>$380</p>
            </div>
            
          </div>

        </div>

    </div>
  )
}
