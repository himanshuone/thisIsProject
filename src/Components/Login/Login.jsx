import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('') // Reset error state

    try {
      // 1. Send request to your Auth Route
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      })

      // 2. Save the Token and User info
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      // 3. Redirect to Dashboard
      navigate('/dashboard')
    } catch (err) {
      // Handle errors (Invalid credentials, server down, etc.)
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className='flex w-screen h-screen'>
      <div className='flex w-screen h-[92vh] justify-center items-center mt-[8vh] rounded-2xl'>
        <div className='flex-col rounded-2xl border w-[30vw] h-auto min-h-[70vh] min-w-[320px] backdrop-blur-xs'>
          <div className='w-full h-10 flex items-center justify-center text-4xl font-light mt-10'>Welcome Back</div>
          <div className='w-full h-10 flex items-center justify-center text-xl font-light mt-10 text-gray-500'>Please enter your details to sign in</div>

          {/* Error Message Display */}
          {error && <div className="text-red-500 text-center mt-4 text-sm">{error}</div>}

          <div className='h-1/2 w-full items-center flex'>
            <form onSubmit={handleLogin} className='h-1/2 w-full justify-center flex flex-col'>
              <label htmlFor="Email" className='ml-3 text-gray-600'>Email Address</label>
              <input 
                type="email" 
                className='border items-center p-3 mx-3 justify-center rounded-2xl text-xl' 
                placeholder='Email' 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <label htmlFor="password" className='ml-3 text-gray-600 mt-2'>Password</label>
              <input 
                type="password" 
                className='border items-center p-3 m-3 justify-center rounded-2xl text-xl' 
                placeholder='Password' 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              
              <button type='submit' className='bg-black text-white border items-center m-3 p-2 justify-center rounded-2xl text-xl hover:bg-gray-800 transition-colors'> 
                Submit
              </button>
            </form>
          </div>
          
          <div className='flex justify-center mb-5'>Or continue with</div>
          <div className='flex gap-10 mx-8 justify-evenly'>
            <div className='p-3 flex flex-1 justify-center border rounded-4xl cursor-not-allowed opacity-50'>Google</div>
            <div className='p-3 flex flex-1 justify-center border rounded-4xl cursor-not-allowed opacity-50'>Facebook</div>
          </div>
          
          <div className='flex justify-center'>
            <div className='p-3 justify-center rounded-4xl '>
              Don't have an account? <Link to="/signup" className='font-bold text-gray-900'>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login