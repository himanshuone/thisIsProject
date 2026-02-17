import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";
import React from 'react'
import CounterComponent from './CounterComponent'
import HeadingComponent from './HeadingComponent'
import ActiveProject from "./Components/ActiveProject";
import RecentProject from "./Components/RecentProject";
import NewProjectModal from "./CreateProject/CreateProjectModel"



function MainDashBoard() {
  const [newProjectStatus, setNewProjectStatus] = useState(false)
  const [projects, setProjects] = useState([]);
  const addProject = (newProject) => {
    setProjects(prev => [...prev, newProject]);
  };

  const openModel = () => setNewProjectStatus(!newProjectStatus);
  const closeModel = () => setNewProjectStatus(!newProjectStatus);

  return (
    <div className='mt-[8vh] bg-[#f9fafb] h-full min-h-[92vh]'>

      <HeadingComponent onClick={openModel} />
      <CounterComponent />
      {newProjectStatus && (
        <NewProjectModal onClose={closeModel} onCreate={addProject} />
      )}



      <div className='h-fit w-full flex' >

        <div className="grid grid-cols-5 justify gap-6 mx-[8vw] ">
          <div className='col-span-3'>

            <div className="min-w-[50vw]">
              <div className='flex justify-between  '>
                <h1>Active Project</h1>
                <div className='font-extralight text-gray-600 font-xs '>
                  <button onClick={() => console.log("Hello")} className="flex items-center hover:cursor-none">View All <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
              <ActiveProject projects={projects}/>
            </div>
          </div>
          <div className=' col-span-2 flex-col '>
            <div className='flex justify-between'>
              <h1>Recent Project</h1>
              <div className='font-extralight text-gray-600 font-xs '>
                <button onClick={() => console.log("Hello")} className="flex items-center hover:cursor-none">All <IoIosArrowRoundForward />
                </button>
              </div></div>

            <div className="flex-col flex h-fit w-full"></div>
            <RecentProject />
          </div>

        </div>

      </div>

    </div>



  )
}

export default MainDashBoard
