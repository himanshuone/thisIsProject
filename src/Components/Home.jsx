import React from 'react'
import {Link} from 'react-router-dom';
import Features from './HomeComponents/Features';

function Home() {
  return (
    <div className=''>
    <div className=' w-screen h-[95vh] mt-[8vh] flex '>
<div className="w-full h-full flex flex-col justify-center bg-conic from-indigo-200 via-black- to-slate-600">
        <div className='flex justify-center'><div className='h-fit bg-white mt-[15vh] rounded-4xl p-1 shadow-white px-4 font-light font-stretch-semi-expanded text-blue-700 '><h1>✨ Trusted by 50,000*0 teams worldwide</h1></div>

        </div>
        <div className='text-white'>
          <div className='text-6xl font-extrabold flex justify-center mt-18 font-stretch-155% '>Manage Projects Like </div>
          <div className='text-6xl font-bold flex justify-center mt-11 font-stretch-200% gap-5 text-black'><span><span>N</span>ever </span><span><span>B</span>efore</span></div>

        </div>
        <div className='mt-20'>
          <div className=' font-extra-light flex text-white font-stretch-125% justify-center '>Streamline your workflow, collaborate seamlessly, and deliver projects on time.</div>
        <div className=' font-extra-light text-white font-stretch-125% flex justify-center '> The ultimate project management tool designed for modern teams.

          Start Free Trial
        </div>
        </div>
        <div className=' flex justify-center mt-[8vh]'> 
          <Link to="login">
            <div className=' rounded-4xl  w-fit p-3 justify-center flex bg-white transition-transform duration-200 hover:scale-110  '>
            <button  className=''>Start Free Trial</button></div>
          </Link>
</div>
      </div>


    </div>
      <Features />
    </div>
  )
}

export default Home
