import React, { useState } from 'react'

function CreateProjectButton({onClick}) {
  return (
    <div className='min-w-[20vw] roun flex justify-end mr-10'>
      <div onClick={onClick} className='bg-black text-white rounded-4xl px-4 flex items-center h-[7vh]  md:h-[4vh]'>
        <button className='font-extralight' >+New Project</button>
      </div>
    </div>
  )
}

export default CreateProjectButton
