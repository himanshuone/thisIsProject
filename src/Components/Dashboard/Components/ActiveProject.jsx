import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";

function ActiveProject({ projects, selectedProjectId, onSelectProject, onDeleteProject }) {
    const navigate = useNavigate();

    const statusMap = {
        Planning: 10,
        Active: 30,
        "On Hold": 50,
        Review: 75,
        Completed: 100,
    };

    return (
        <>
            {projects.map((i) => (
                <div key={i._id} className="relative group">
                    <div
                        onDoubleClick={() => navigate(`/project/${i._id}`)}
                        onClick={() => onSelectProject(i._id)}
                        className={`border mt-3 border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all divide-y divide-gray-200 ${selectedProjectId === i._id ? "border-black bg-gray-100 shadow-sm" : "border-gray-200 hover:border-gray-400"}`}
                    >
                        <div className="gap-5 px-3 py-3 flex items-center rounded-2xl ">
                            <div className="border-gray-900 border rounded-full w-1.5 h-1.5 "></div>

                            <div className="flex-1 ">
                                <p className="font-medium text-sm">{i.name}</p>
                                <p className="text-[10px] text-gray-500">{i.code}</p>
                            </div>

                            <div className="flex-1 text-[11px] text-gray-500 w-full flex justify-end">
                                <p>{i.end ? new Date(i.end).toLocaleDateString() : 'No date'}</p>
                            </div>

                            <div className="bg-gray-200 h-1 w-16 rounded-2xl">
                                <div
                                    style={{ width: `${statusMap[i.status] || 10}%` }}
                                    className="bg-gray-700 h-1 rounded-2xl transition-all duration-500"
                                ></div>
                            </div>

                            <div className="flex gap-1">
                                {i.team && i.team.map((member) => (
                                    <div
                                        key={member._id}
                                        title={member.email}
                                        className="rounded-full w-5 h-5 flex items-center justify-center text-[9px] text-white bg-indigo-500 uppercase font-bold border border-white"
                                    >
                                        {member.email ? member.email[0] : '?'}
                                    </div>
                                ))}
                            </div>

                            <div className="border text-[10px] rounded-2xl px-2 py-0.5 text-gray-600">{i.status}</div>
                            <div className="border text-[10px] rounded-2xl px-2 py-0.5 text-gray-600 font-medium">{i.priority}</div>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDeleteProject(i._id);
                                }}
                                className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all duration-200"
                                title="Delete Project"
                            >
                                <RiDeleteBin6Line size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ActiveProject;