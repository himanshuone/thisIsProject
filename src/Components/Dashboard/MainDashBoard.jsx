import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import { IoIosArrowRoundForward } from "react-icons/io";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

import CounterComponent from './CounterComponent';
import HeadingComponent from './HeadingComponent';
import ActiveProject from "./Components/ActiveProject";
import SubTask from './Components/SubTask';
import NewProjectModal from "./CreateProject/CreateProjectModel";


const ErrorAlert = ({ message, onClose }) => (
  <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
    <div className="bg-white relative z-10 w-full max-w-sm rounded-3xl p-8 text-center shadow-2xl animate-in zoom-in-95 duration-200">
      <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">!</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">Member Not Found</h3>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{message}</p>
      <button
        onClick={onClose}
        className="w-full bg-black text-white py-3 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95"
      >
        Understood
      </button>
    </div>
  </div>
);

function MainDashBoard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isSubTaskModelOpen, setIsSubTaskModelOpen] = useState(false);
  const [newProjectStatus, setNewProjectStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showAuthModal, setShowAuthModal] = useState(false);


  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setShowAuthModal(true);
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:3000/api/projects', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProjects(res.data);
      } catch (err) {
        if (err.response?.status === 401) {
          setShowAuthModal(true);
        } else {
          console.error("Fetch Error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [navigate]);

  const addProject = async (projectData) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:3000/api/projects', projectData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(prev => [...prev, res.data]);
      return true; 
    } catch (err) {2
      const msg = err.response?.data?.message || "Check your internet or member emails.";
      setErrorModal({ show: true, message: msg });
      return false; 
    }
  };

  const deleteProject = async (projectId) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setProjects(prev => prev.filter(p => p._id !== projectId));

      if (selectedProjectId === projectId) {
        setSelectedProjectId(null);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete project");
    }
  };

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedProject = projects.find((p) => p._id === selectedProjectId);

  if (loading) return (
    <div className="flex flex-col items-center justify-center mt-40 gap-4">
      <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 font-extralight text-sm tracking-widest">LOADING WORKSPACE</p>
    </div>
  );

  return (
    <div className='mt-[8vh] bg-[#f9fafb] h-full min-h-[92vh]'>


      {showAuthModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-100 flex items-center justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-sm mx-4 border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Session Expired</h2>
            <p className="text-gray-500 mb-6 text-sm">Please sign in to continue managing your projects.</p>
            <button
              onClick={() => navigate('/login')}
              className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:bg-gray-800 transition-all"
            >
              Sign In
            </button>
          </div>
        </div>
      )}


      {errorModal.show && (
        <ErrorAlert
          message={errorModal.message}
          onClose={() => setErrorModal({ show: false, message: "" })}
        />
      )}

      <HeadingComponent onClick={() => setNewProjectStatus(true)} />
      <CounterComponent projects={projects} />

      {newProjectStatus && (
        <NewProjectModal onClose={() => setNewProjectStatus(false)} onCreate={addProject} />
      )}

      <div className='h-fit w-full flex pb-10' >
        <div className="grid grid-cols-5 justify gap-6 mx-[8vw] w-full">


          <div className='col-span-3'>
            <div className="min-w-[50vw]">
              <div className='flex justify-between items-center mb-4'>
                <h1 className="text-xl font-bold text-gray-800">Active Projects</h1>
                <div className="flex gap-4 items-center">
                  <input
                    type="text"
                    placeholder="Search name or code..."
                    className="text-[11px] border border-gray-200 rounded-full px-5 py-2.5 outline-none focus:border-black w-56 transition-all shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className='font-extralight text-gray-400 text-xs '>
                    <button className="flex items-center gap-1 hover:text-black transition-colors">
                      History <IoIosArrowRoundForward size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <ActiveProject
                projects={filteredProjects}
                selectedProjectId={selectedProjectId}
                onSelectProject={setSelectedProjectId}
                onDeleteProject={deleteProject}
              />
            </div>
          </div>


          <div className='col-span-2 flex-col '>
            <div className='flex justify-between mb-4 items-center'>
              <h1 className="text-xl font-bold text-gray-800">Project Details</h1>
              <div className='font-extralight text-gray-600 text-xs '>
                <button
                  disabled={!selectedProject}
                  onClick={() => setIsSubTaskModelOpen(true)}
                  className={`${!selectedProject ? "opacity-30 cursor-not-allowed" : "hover:text-black"} flex items-center gap-1 transition-all`}
                >
                  <GrAdd /> New Task
                </button>
              </div>
            </div>

            <SubTask
              project={selectedProject}
              setProjects={setProjects}
              setIsSubTaskModelOpen={setIsSubTaskModelOpen}
              isSubTaskModelOpen={isSubTaskModelOpen}
              selectedProjectId={selectedProjectId}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainDashBoard;