import React from 'react'
import { useState } from 'react'
import AssignTeam from "./Components/AssignTeam"


function CreateProjectModel({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    start: "",
    end: "",
    priority: "Low",
    status: "Planning",
    team: "A"
  });
  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value

    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    onCreate(formData);
    onClose();

  }
  return (
    <>

      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
      />

      <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[40vw] pb-5 min-w-[320px] bg-white  rounded-2xl shadow-xl ">
            <div className='w-full border-b border-gray-300 h-full'>
              <div className="flex justify-between px-6 pt-6 items-center mb-4">

                <div>
                  <h2 className="text-lg font-semibold">Create New Project</h2>
                  <p className='text-xs text-gray-400'>Your project creation UI goes here</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              </div>
            </div>


            <div className='px-6 '>
              <div className='my-4'>
                <label htmlFor="Project Name" className=' text-gray-600 font-extralight'>Project Name</label>
                <div className='border border-gray-300 p-2 rounded-4xl  w-full flex'>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className='text-gray-500 outline-none font-extralight focus:outline-none focus:ring-0 w-full' placeholder='e.g., Mobile App Redesign' />
                </div>
              </div>
              <div className='my-4'>
                <label htmlFor="Project Code" className=' text-gray-600 font-extralight'>Project Code</label>
                <div className='border border-gray-300 p-2 rounded-4xl  w-full flex'>
                  <input type="text" name="code" value={formData.code} onChange={handleChange} className='text-gray-500 outline-none font-extralight focus:outline-none focus:ring-0 w-full' placeholder='e.g., PROJ-007' />
                </div>
              </div>
              <div className='my-4'>
                <label htmlFor="Project Code" className=' text-gray-600 font-extralight'>Description</label>
                <div className='border border-gray-300 px-3 rounded-2xl  w-full flex'>
                  <textarea type="text" name="description" value={formData.description} onChange={handleChange} className='text-gray-500 outline-none focus:outline-none focus:ring-0 w-full h-[10vh] font-extralight' placeholder='Brief description of the project goals and objectives...' />
                </div>
              </div>
              <div className='my-4 grid-cols-4  flex gap-3'>
                <div className="w-[50%] ">
                  <label htmlFor="Start Date" className=' text-gray-600 font-extralight'>Start Date</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300' > <input type="date" value={formData.start} name="start" onChange={handleChange} className='text-gray-500 font-extralight' /></div>

                </div>
                <div className=" w-[50%]">
                  <label htmlFor="Start Date" className=' text-gray-600 font-extralight'>End Date</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300'> <input type="date" value={formData.end} name="end" onChange={handleChange} className='text-gray-500 font-extralight' /></div>
                </div>
              </div>
              {/* Priority and Statues */}
              <div className="flex gap-3">
                <div className="w-[50%] overflow-auto">
                  <label htmlFor="Start Date" className=' text-gray-600 font-extralight'>Priority</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300'>
                    <select className="outline-none w-full font-extralight" id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                      <option value="Low" >Low</option>
                      <option value="Medium" >Medium</option>
                      <option value="High" >High</option>
                      <option value="Critical" >Critical</option>
                    </select>
                  </div>
                </div>

                <div className="w-[50%] overflow-auto">
                  <label htmlFor="Start Date" className=' text-gray-600 font-extralight'>Status</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300'>
                    <select className="outline-none w-full font-extralight" id="status" value={formData.status} onChange={handleChange} name="status">
                      <option value="planning" >Planning</option>
                      <option value="Active">Active</option>
                      <option value="On Hold">On Hold</option>
                      <option value="Review">Review</option>
                      <option value="Completed">Completed</option>

                    </select>
                  </div>
                </div>

              </div>


              <div className="w-full overflow-auto">
                <label htmlFor="team"  className=' text-gray-600 font-extralight'>Assign Team Members</label>
                <div className='flex p-2 border-gray-300 rounded-full border'>

                  <AssignTeam
                    value={formData.team}
                    onChange={handleChange}
                    
                  />
                </div>  
              </div>
            </div>
            <div className="h-[5vh] border-t mt-5 border-gray-300 px-10 pt-4 ">
              <div className="flex justify-between  p-1 rounded-2xl ">
                <div ><button type="button" onClick={onClose}>Cancel</button></div>
                <div className="rounded-4xl bg-black p-2 px-3 text-white "> <button type="Submit" >Submit</button></div>

              </div>

            </div>

          </div>

        </div>
      </form>
    </>
  )
}

export default CreateProjectModel
