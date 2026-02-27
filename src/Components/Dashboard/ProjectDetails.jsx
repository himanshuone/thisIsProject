import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TbPencil, TbCircle, TbCircleCheckFilled, TbCheck, TbX, TbCalendar } from "react-icons/tb";

function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditingDesc, setIsEditingDesc] = useState(false);
    const [editData, setEditData] = useState({});


    const currentUser = JSON.parse(localStorage.getItem('user'));
    const currentUserId = currentUser?.id || currentUser?._id;

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get(`http://localhost:3000/api/projects/${id}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setProject(res.data);
                setEditData(res.data);
            } catch (err) {
                console.error("Error fetching project:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProject();
    }, [id]);

    const handleUpdate = async (field) => {
        try {
            const token = localStorage.getItem('token');
            const res = await axios.put(`http://localhost:3000/api/projects/${id}`, editData, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProject(res.data);
            if (field === 'description') setIsEditingDesc(false);
        } catch (err) {
            alert(err.response?.data?.message || "Update failed");
        }
    };

    const toggleTaskStatus = async (subtaskId, currentStatus) => {
        try {
            const token = localStorage.getItem('token');
            const newStatus = currentStatus === 'Completed' ? 'Pending' : 'Completed';

            const res = await axios.patch(`http://localhost:3000/api/projects/${id}/subtasks/${subtaskId}`,
                { status: newStatus },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setProject(res.data);
        } catch (err) {
            console.error("Task update failed", err);
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen bg-[#f9fafb]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
    );

    if (!project) return <div className="p-10 text-center">Project not found</div>;


    const isCreator = project.owner?._id === currentUserId || project.owner === currentUserId;

    return (
        <div className="mt-[8vh] bg-[#f9fafb] min-h-[92vh] px-[8vw] py-10">
            <button
                onClick={() => navigate(-1)}
                className="text-gray-400 mb-8 hover:text-black flex items-center gap-2 text-sm transition-all"
            >
                <span>←</span> Back to Dashboard
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                <div className="lg:col-span-2 space-y-6">


                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
                                <p className="text-gray-400 text-sm mt-1 uppercase tracking-tighter">Project Code: {project.code}</p>
                            </div>
                            <span className="px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold uppercase text-gray-500 border border-gray-100">
                                {project.status}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Description</label>
                                {isCreator && !isEditingDesc && (
                                    <button onClick={() => setIsEditingDesc(true)} className="text-gray-400 hover:text-black">
                                        <TbPencil size={18} />
                                    </button>
                                )}
                            </div>

                            {isEditingDesc ? (
                                <div className="space-y-3">
                                    <textarea
                                        className="w-full border border-gray-200 p-4 rounded-2xl text-sm focus:border-black outline-none h-32 transition-all resize-none font-extralight"
                                        value={editData.description}
                                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                                    />
                                    <div className="flex gap-2 justify-end">
                                        <button onClick={() => { setIsEditingDesc(false); setEditData(project); }} className="p-2 text-red-500 hover:bg-red-50 rounded-xl"><TbX size={20} /></button>
                                        <button onClick={() => handleUpdate('description')} className="p-2 text-green-500 hover:bg-green-50 rounded-xl"><TbCheck size={20} /></button>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-600 leading-relaxed text-sm font-light">
                                    {project.description || "No description provided."}
                                </p>
                            )}
                        </div>
                    </div>


                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-xl font-bold text-gray-800">Task Timeline</h2>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                {project.subtasks?.length || 0} Total Tasks
                            </p>
                        </div>

                        <div className="space-y-4">
                            {project.subtasks && project.subtasks.length > 0 ? (
                                project.subtasks.map((task) => (
                                    <div
                                        key={task._id}
                                        className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${task.status === 'Completed'
                                                ? 'bg-gray-50 border-transparent'
                                                : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => toggleTaskStatus(task._id, task.status)}
                                                className={`transition-all transform active:scale-90 ${task.status === 'Completed' ? 'text-green-500' : 'text-gray-300 hover:text-black'}`}
                                            >
                                                {task.status === 'Completed' ? <TbCircleCheckFilled size={24} /> : <TbCircle size={24} />}
                                            </button>
                                            <div>
                                                <h4 className={`text-sm font-semibold transition-all ${task.status === 'Completed' ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                                    {task.title}
                                                </h4>
                                                <p className="text-[9px] text-gray-400 font-bold uppercase mt-0.5 tracking-tight">{task.priority} Priority</p>
                                            </div>
                                        </div>

                                        <span className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase ${task.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'
                                            }`}>
                                            {task.status || 'Pending'}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-3xl">
                                    <p className="text-gray-300 text-sm font-extralight italic">No tasks added to the timeline yet.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>


                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
                        <h3 className="text-sm font-bold mb-6 text-gray-900 border-b border-gray-50 pb-4">Project Insights</h3>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Deadline</span>
                                {isCreator ? (
                                    <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded-lg">
                                        <TbCalendar className="text-gray-400" size={14} />
                                        <input
                                            type="date"
                                            className="text-[11px] font-semibold border-none bg-transparent focus:ring-0 cursor-pointer"
                                            value={editData.end?.split('T')[0]}
                                            onChange={(e) => {
                                                setEditData({ ...editData, end: e.target.value });
                                                handleUpdate('date');
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <span className="text-[11px] font-bold">{new Date(project.end).toLocaleDateString()}</span>
                                )}
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Priority</span>
                                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${project.priority === 'High' || project.priority === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-indigo-50 text-indigo-600'
                                    }`}>
                                    {project.priority}
                                </span>
                            </div>

                            <div className="pt-6 border-t border-gray-50">
                                <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider block mb-4">Team Members</span>
                                <div className="flex flex-wrap gap-2">
                                    {project.team?.map((m) => (
                                        <div key={m._id} title={m.email} className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white flex items-center justify-center text-[10px] text-white font-bold uppercase shadow-sm">
                                            {m.email[0]}
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full bg-gray-50 border-2 border-dashed border-gray-200 flex items-center justify-center text-[12px] text-gray-400 font-bold cursor-help" title="Creator: Only owner can invite more">
                                        +
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ProjectDetails;