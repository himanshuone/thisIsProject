
import Home from './Components/Home'
import {Routes,Route} from 'react-router-dom'
import Main from './Components/Main'
import Login from './Components/Login/Login'
import ProjectDetails from './Components/Dashboard/ProjectDetails'


import './App.css'


import SignUp from './Components/SignUp/SignUp'
import MainDashBoard from './Components/Dashboard/MainDashBoard'
import Teams from './Components/Teams/Teams'

function App() {


  return (
    <>
    <Routes>
       <Route path='/' element={<Main />}>
       
       <Route path='/' element={<Home />} />
         <Route path='login' element={<Login />} />
         <Route path='signup' element={<SignUp />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
         <Route path='dashboard' element={<MainDashBoard />} />
         <Route path='teams' element={<Teams />} />

       </Route>
     </Routes>

   
     </>
  )
}

export default App
