import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


function Login() {
  const navigate=useNavigate()
  return (
    <div className=' flex w-screen h-screen'>
    <div className=' flex w-screen h-[92vh] justify-center items-center mt-[8vh] rounded-2xl'>
        <div className='flex-col  rounded-2xl border-1  w-[30vw] h-auto min-h-[70vh] min-w-[320px] backdrop-blur-xs '>
                <div className='w-full h-10 flex items-center justify-center text-4xl font-light mt-10'>Welcome Back</div>
                <div className='w-full h-10 flex items-center justify-center text-xl font-light mt-10 text-gray-500'>Please enter your details to sign in</div>
                
                <div className=' h-1/2 w-full items-center  flex'>
                <form onSubmit={()=>console.log("working")}className=' h-1/2 w-full  justify-center  flex flex-col'>
                  <label htmlFor="Email" className='ml-3 text-gray-600'>Email Address</label>
                    <input type="Email" className='border-1 items-center p-3 mx-3 justify-center rounded-2xl text-xl required:' name="" id="" placeholder='Email' />
                              <label htmlFor="password" className='ml-3 text-gray-600 mt-2'>Password</label>
        
                    <input type="Password" className='border-1 items-center p-3 m-3 justify-center rounded-2xl text-xl required:' name="" id="" placeholder='Password' />
                    <button type='Submit' className=' border-1 items-center m-3 p-2 justify-center rounded-2xl text-xl  ' onClick={()=>navigate('/')}> Submit</button>
        </form>
                </div>
                <div className='flex justify-center mb-5'>Or continue with</div>
            <div className='flex gap-10 mx-8 justify-evenly'>
              <div className='p-3 flex flex-1  justify-center border-1  rounded-4xl '><Link to="/">Google </Link></div>
            <div className='p-3 flex flex-1 justify-center border-1 rounded-4xl '><Link to="/">Facebook</Link></div>
        </div>
           <div className='flex justify-center'>
             <div className='p-3  justify-center rounded-4xl '>Have an account? <Link to="/signup" className='font-bold text-gradient-to-t from-gray-500 via-gray-750 to-gray-900'>Sign Up</Link></div>
        
           </div>
                </div>
        
        
        
        </div>
      
    </div>
  )
}

export default Login
