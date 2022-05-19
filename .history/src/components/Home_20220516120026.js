import React from 'react'

export default function Home() {
  return (
    <div className='p-4 mx-2 mt-2 h-[700px] bg-slate-200'>

          {/** The first part after the nav */}
      <div className='flex justify-between p-4 items-center'>
        <h1 className='font-bold text-xl'>Overview</h1>

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
          
          <div>
          <div className='flex items-center gap-4'>
            <div className='h-[80px] w-[291px] bg-white'></div>
            <div className='h-[80px] w-[291px] bg-white'></div>
            <div className='h-[80px] w-[291px] bg-white'></div>
          </div>

          <div className='h-[300px] w-[905px] bg-white mt-4'></div>
          </div>

          <div className='bg-white h-[396px] w-[382px]'></div>

        </div>

    </div>
  )
}
