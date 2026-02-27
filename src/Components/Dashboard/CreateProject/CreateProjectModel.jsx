import React, { useState } from 'react'
import AssignTeam from "./Components/AssignTeam"

function CreateProjectModel({ onClose, onCreate }) {
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    description: "",
    start: "",
    end: "",
    priority: "Low",
    status: "Planning",
    team: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const success = await onCreate(formData);

    if (success) {
      onClose();
    } else {
      setError("One or more team members are not registered on this app.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40" />

      <form onSubmit={handleSubmit}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="w-[40vw] pb-5 min-w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">


            <div className='w-full border-b border-gray-300'>
              <div className="flex justify-between px-6 pt-6 items-center mb-4">
                <div>
                  <h2 className="text-lg font-semibold">Create New Project</h2>
                  <p className='text-xs text-gray-400 font-extralight'>Enter details to start your project</p>
                </div>
                <button type="button" onClick={onClose} className="text-gray-400 hover:text-black">✕</button>
              </div>
            </div>


            {error && (
              <div className="mx-6 mt-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">!</div>
                <p className="text-[11px] text-red-600 font-medium">{error}</p>
              </div>
            )}


            <div className='px-6 py-2 overflow-y-auto max-h-[60vh] custom-scrollbar'>
              <div className='my-4'>
                <label className='text-gray-600 font-extralight text-sm'>Project Name</label>
                <div className='border border-gray-300 p-2 rounded-4xl w-full flex mt-1'>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className='text-gray-500 outline-none font-extralight w-full px-2' placeholder='e.g., Mobile App Redesign' />
                </div>
              </div>

              <div className='my-4'>
                <label className='text-gray-600 font-extralight text-sm'>Project Code</label>
                <div className='border border-gray-300 p-2 rounded-4xl w-full flex mt-1'>
                  <input type="text" name="code" value={formData.code} onChange={handleChange} className='text-gray-500 outline-none font-extralight w-full px-2' placeholder='e.g., PROJ-007' />
                </div>
              </div>

              <div className='my-4'>
                <label className='text-gray-600 font-extralight text-sm'>Description</label>
                <div className='border border-gray-300 px-3 rounded-2xl w-full flex mt-1'>
                  <textarea name="description" value={formData.description} onChange={handleChange} className='text-gray-500 outline-none focus:ring-0 w-full h-[10vh] font-extralight py-2 resize-none' placeholder='Brief description...' />
                </div>
              </div>

              <div className='my-4 flex gap-3'>
                <div className="w-[50%]">
                  <label className='text-gray-600 font-extralight text-sm'>Start Date</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300 mt-1'>
                    <input type="date" value={formData.start} name="start" onChange={handleChange} className='text-gray-500 font-extralight w-full' />
                  </div>
                </div>
                <div className="w-[50%]">
                  <label className='text-gray-600 font-extralight text-sm'>End Date</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300 mt-1'>
                    <input type="date" value={formData.end} name="end" onChange={handleChange} className='text-gray-500 font-extralight w-full' />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-[50%]">
                  <label className='text-gray-600 font-extralight text-sm'>Priority</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300 mt-1'>
                    <select className="outline-none w-full font-extralight bg-transparent" name="priority" value={formData.priority} onChange={handleChange}>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                </div>
                <div className="w-[50%]">
                  <label className='text-gray-600 font-extralight text-sm'>Status</label>
                  <div className='flex border rounded-2xl p-2 border-gray-300 mt-1'>
                    <select className="outline-none w-full font-extralight bg-transparent" name="status" value={formData.status} onChange={handleChange}>
                      <option value="Planning">Planning</option>
                      <option value="Active">Active</option>
                    </select>
                  </div>
                </div>
              </div>


              <div className="w-full mt-4 pb-4">
                <label className='text-gray-600 font-extralight text-sm mb-2 block'>Assign Team Members</label>
                <AssignTeam value={formData.team} onChange={handleChange} />
              </div>
            </div>


            <div className="border-t border-gray-300 px-10 py-4">
              <div className="flex justify-between items-center">
                <button type="button" onClick={onClose} className="text-gray-500 hover:text-black transition-colors font-extralight">Cancel</button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`rounded-4xl bg-black px-8 py-2 text-white font-medium transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 active:scale-95'}`}
                >
                  {isSubmitting ? "Validating..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default CreateProjectModel;