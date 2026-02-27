import React from 'react';
import { TbPencil } from "react-icons/tb";
import SubTaskModel from './SubTask/SubTaskModel';
import axios from 'axios';

function SubTask({ project, setProjects, selectedProjectId, isSubTaskModelOpen, setIsSubTaskModelOpen }) {

    const addSubTask = async (newSubTask) => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.post(`http://localhost:3000/api/projects/${selectedProjectId}/subtasks`, newSubTask, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setProjects(prev => prev.map(p => p._id === selectedProjectId ? res.data : p));
            setIsSubTaskModelOpen(false);
        } catch (err) {
            console.error("Failed to add task:", err);
        }
    };

    if (!project) return <div className="p-5 text-gray-400 font-extralight text-sm">Select a project to see tasks</div>;

    return (
        <div className="flex flex-col gap-6">



            <div className="flex flex-col gap-3">
                <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest px-1">
                    Active Tasks
                </h3>

                {project.subtasks && project.subtasks.length > 0 ? (
                    project.subtasks.map((sub) => (
                        <div key={sub._id} className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex justify-between items-center hover:border-gray-300 transition-all">
                            <div className="flex items-center gap-3">
                                <TbPencil className="text-gray-300" size={16} />
                                <span className="text-sm text-gray-700 font-light">{sub.title}</span>
                            </div>
                            <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${sub.priority === 'High' ? 'bg-red-50 text-red-500' : 'bg-gray-50 text-gray-400'
                                }`}>
                                {sub.priority}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-8 border-2 border-dashed border-gray-100 rounded-3xl text-center">
                        <p className="text-xs text-gray-300 font-extralight italic">No tasks created yet.</p>
                    </div>
                )}
            </div>

            {isSubTaskModelOpen && (
                <SubTaskModel onClose={() => setIsSubTaskModelOpen(false)} onCreate={addSubTask} />
            )}
        </div>
    );
}

export default SubTask;