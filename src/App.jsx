import { useState } from 'react'
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login/Login'


import './App.css'


import SignUp from './Components/SignUp/SignUp'
import MainDashBoard from './Components/Dashboard/MainDashBoard'

function App() {


  return (
    <>
    <Routes>
       <Route path='/' element={<Main />}>
       <Route path='/' element={<Home />} />
         <Route path='login' element={<Login />} />
         <Route path='signup' element={<SignUp />} />
         <Route path='dashboard' element={<MainDashBoard />} />

       </Route>
     </Routes>

   
     </>
  )
}

export default App
