import React from 'react'


function CreateProjectModel({onClose}) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="w-[25vw] min-w-[320px] bg-white rounded-2xl shadow-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">New Project</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-black"
            >
              ✕
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Your project creation UI goes here
          </p>
        </div>
      </div>
    </>
  )
}

export default CreateProjectModel
