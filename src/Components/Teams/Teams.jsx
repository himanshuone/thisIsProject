import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoPeopleOutline } from "react-icons/io5";

export default function Teams() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:3000/api/projects/team/all-members', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMembers(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchMembers();
    }, []);

    if (loading) return <div className="mt-[15vh] text-center font-extralight text-gray-400">Loading Team...</div>;

    return (
        <div className="mt-[10vh] px-[8vw] pb-10">
            <div className="flex items-center gap-3 mb-8">
               
                <h1 className="text-2xl font-bold">Team Members</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.length > 0 ? members.map((member) => (
                    <div key={member.id} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:border-gray-300 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg uppercase shadow-md">
                                {member.email[0]}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-semibold text-gray-800 truncate">{member.email}</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Collaborator</p>
                            </div>
                        </div>

                        <div className="border-t border-gray-50 pt-4">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-2">Assigned Projects</p>
                            <div className="flex flex-wrap gap-2">
                                {member.projects.map((proj, idx) => (
                                    <span key={idx} className="bg-indigo-50 text-indigo-600 text-[9px] font-bold px-2 py-1 rounded-lg uppercase">
                                        {proj}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                        <p className="text-gray-300 font-extralight italic">No collaborators found in your projects.</p>
                    </div>
                )}
            </div>
        </div>
    );
}