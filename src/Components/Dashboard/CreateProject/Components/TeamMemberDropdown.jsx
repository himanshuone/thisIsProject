import React, { useState } from 'react';

const TeamMemberDropdown = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    assignedMembers: [], 
  });

  const [showMemberDropdown, setShowMemberDropdown] = useState(false);

  const teamMembers = [
    { id: 1, name: 'Sarah Miller', initials: 'SM', email: 'sarah@project.com' },
    { id: 2, name: 'John Doe', initials: 'JD', email: 'john@project.com' },
    { id: 3, name: 'Alex Kumar', initials: 'AK', email: 'alex@project.com' },
    { id: 4, name: 'Lisa Chen', initials: 'LC', email: 'lisa@project.com' },
    { id: 5, name: 'Ryan Park', initials: 'RP', email: 'ryan@project.com' },
  ];

  const toggleMember = (member) => {
    if (formData.assignedMembers.find(m => m.id === member.id)) {
      // Remove member
      setFormData({
        ...formData,
        assignedMembers: formData.assignedMembers.filter(m => m.id !== member.id)
      });
    } else {
      // Add member
      setFormData({
        ...formData,
        assignedMembers: [...formData.assignedMembers, member]
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl border border-gray-200 w-full max-w-2xl">
        
        {/* Team Members Section */}
        <div className="px-8 py-6">
          <label className="block text-sm text-gray-700 mb-2">Assign Team Members</label>
          
          <div className="relative">
            {/* The Button */}
            <button
              type="button"
              onClick={() => setShowMemberDropdown(!showMemberDropdown)}
              className="w-full px-4 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-gray-400 transition-colors text-left flex items-center justify-between bg-white"
            >
              <span className="text-gray-400">
                {formData.assignedMembers.length === 0 
                  ? 'Select team members...' 
                  : `${formData.assignedMembers.length} member${formData.assignedMembers.length > 1 ? 's' : ''} selected`
                }
              </span>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform ${showMemberDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* The Dropdown */}
            {showMemberDropdown && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                {teamMembers.map((member) => {
                  const isSelected = formData.assignedMembers.find(m => m.id === member.id);
                  return (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => toggleMember(member)}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        {member.initials}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{member.name}</p>
                        <p className="text-xs text-gray-400">{member.email}</p>
                      </div>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Selected Members Display */}
          {formData.assignedMembers.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {formData.assignedMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full"
                >
                  <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-700">
                    {member.initials}
                  </div>
                  <span className="text-xs text-gray-700">{member.name}</span>
                  <button
                    type="button"
                    onClick={() => toggleMember(member)}
                    className="text-gray-400 hover:text-gray-600 ml-1"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default TeamMemberDropdown;