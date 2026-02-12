import React from 'react'

function CounterComponent() {
  return (

        <div className='w-full h-fit flex '>
          <div className='containers h-[20vh] w-full  flex  p-5 justify-center gap-5'>
            <div className='border border-gray-300 rounded-2xl w-full  max-w-[20vw] flex h-full '>
              <div className='p-4 w-full h-auto flex-col '><div className='text-xs text-gray-400 font-light uppercase'> <p>Total Projects</p></div>
                <div className='text-4xl font-extralight mt-4'>150</div>
                <div className='text-xs text-gray-400 mt-2'>+12% this month</div>

              </div>

            </div>
            <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full'>
              <div className='p-4 w-full h-auto flex-col '><div className='text-xs text-gray-400 font-light uppercase'> <p>Active Tasks</p></div>
                <div className='text-4xl font-extralight mt-4'>150</div>
                <div className='text-xs text-gray-400 mt-2'>+12% this month</div>

              </div>

            </div>
            <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full'>
              <div className='p-4 w-full h-auto flex-col '><div className='text-xs text-gray-400 font-light uppercase'> <p>Completed Tasks</p></div>
                <div className='text-4xl font-extralight mt-4'>150</div>
                <div className='text-xs text-gray-400 mt-2'>+12% this month</div>

              </div>

            </div>
            <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full'>
              <div className='p-4 w-full h-auto flex-col '><div className='text-xs text-gray-400 font-light uppercase'> <p>Team Members</p></div>
                <div className='text-4xl font-extralight mt-4'>150</div>
                <div className='text-xs text-gray-400 mt-2'>+12% this month</div>

              </div>

            </div>
          </div>


        </div>



  )
}

export default CounterComponent
