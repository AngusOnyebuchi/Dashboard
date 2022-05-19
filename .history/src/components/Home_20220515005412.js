import React from 'react'

export default function Home() {
  return (
    <div className='p-4 mx-2 h-[500px] bg-slate-200'>

      <div className='flex justify-between p-4 items-center'>
        <h1 className='font-bold text-xl'>Overview</h1>

        <div className='flex items-center gap-4'>
          <div className='px-4 py-2 bg-white border-[1px] border-blue-400'>
            <p>22 June 2020</p>
            <img/>
          </div>

          <p>-</p>

          <div className='px-4 py-2 bg-white border-[1px] border-blue-400'>
            <p>22 June 2020</p>
            <img/>
          </div>
        </div>

      </div>
        
    </div>
  )
}
