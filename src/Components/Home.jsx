import React from 'react'

function Home() {
  return (
    <div className=' w-screen h-[95vh] mt-[8vh] flex '>
<div className="w-full h-full flex flex-col justify-center bg-conic from-indigo-200 via-indigo-200 to-slate-600">
        <div className='flex justify-center'><div className='h-fit bg-white mt-[15vh] rounded-4xl p-1 shadow-white px-4 font-light font-stretch-semi-expanded text-blue-700 '><h1>✨ Trusted by 50,000*0 teams worldwide</h1></div>

        </div>
        <div className='text-white'>
          <div className='text-6xl font-extrabold flex justify-center mt-18 '>Manage Projects Like Never</div>
          <div className='text-6xl font-extrabold flex justify-center mt-11'>Before</div>

        </div>
        <div className='mt-20'>
          <div className=' font-extra-light flex text-gray-500 justify-center '>Streamline your workflow, collaborate seamlessly, and deliver projects on time.</div>
        <div className=' font-extra-light text-gray-500 flex justify-center '> The ultimate project management tool designed for modern teams.

          Start Free Trial
        </div>
        </div>
        <div className='flex justify-center mt-[8vh]'>        <div className='border-1 rounded-4xl items-center w-fit p-3 justify-center flex align-center bg-gradient-to-t from-gray-500 via-gray-750 to-gray-900'><button className=''>Start Free Trial</button></div>
</div>
      </div>


    </div>
  )
}

export default Home
