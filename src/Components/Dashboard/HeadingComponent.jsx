import React from 'react'
import CreateProjectButton from './CreateProject/CreateProjectButton'

function HeadingComponent( {onClick}) {
  return (
   <div className=' flex h-[14vh] '>
        <div className='flex w-full h-full'>

          <div className='pl-10 pt-10 flex w-full h-full items-end '>

            <div className='flex  w-full h-full flex-col  '>

              <div className='"text-xs text-gray-400 uppercase tracking-widest mb-1"'>Overview</div>
              <div className='text-xl font-semibold text-gray-900'> Welcome back, user!</div>
              <div className='text-sm text-gray-400 mt-0.5'>Here's what's happening with your projects today</div>

            </div>

            <CreateProjectButton onClick={onClick}/>

          </div>


        </div>
      </div>
  )
}

export default HeadingComponent
