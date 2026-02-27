import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { HiMenu } from "react-icons/hi"
import { IoPeopleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAnalytics } from "react-icons/md";
import { GoSidebarCollapse } from "react-icons/go";

export default function Navigation() {
    const navigate = useNavigate();
    const primaryRef = useRef(null);
    const secondaryRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [openSecondary, setOpenSecondary] = useState(false);


    const isLoggedIn = !!localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setOpen(false); 
        setOpenSecondary(false);
        navigate('/login');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (primaryRef.current && !primaryRef.current.contains(event.target)) {
                setOpen(false);
            }
            if (secondaryRef.current && !secondaryRef.current.contains(event.target)) {
                setOpenSecondary(false);
            }
        };

        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
                setOpenSecondary(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div>
            <div className='fixed top-0 left-0 flex backdrop-blur-2xl h-[8vh] bg-white/70 w-full rounded-2xl z-50'>
                <div className='flex items-center justify-between w-full mx-10'>

                    <div className='flex items-center'>
                        <div className='flex gap-5'>
                            <GoSidebarCollapse
                                className="text-2xl cursor-pointer"
                                onClick={() => setOpenSecondary(!openSecondary)}
                            />
                            <HiMenu
                                className="text-2xl cursor-pointer"
                                onClick={() => setOpen(!open)}
                            />
                        </div>


                        <div ref={secondaryRef} className={`fixed top-[8vh] left-0 border h-auto w-64 bg-white text-black ${openSecondary ? "ml-2 translate-x-0" : "-translate-x-full"} transition-transform duration-300 p-5 ease-in-out shadow-lg rounded-xl`}>
                            <div className="space-y-4">
                                <div className="font-bold border-b pb-2">Secondary Menu</div>
                                <div><Link to="dashboard" onClick={() => setOpenSecondary(false)}>Dashboard</Link></div>
                                <div className='flex items-center gap-2'><MdOutlineAnalytics /> Analytics</div>
                                <div className='flex items-center gap-2'><SlCalender /> Calendar</div>
                            </div>
                        </div>


                        <div ref={primaryRef} className={`fixed top-[8vh] left-0 border h-auto w-64 bg-white text-black ${open ? "ml-2 translate-x-0" : "-translate-x-full"} transition-transform duration-300 p-5 ease-in-out shadow-lg rounded-xl`}>
                            <div className="space-y-4">
                                <div className="font-bold border-b pb-2">Project Menu</div>
                                <div><Link to="dashboard" onClick={() => setOpen(false)}>Dashboard</Link></div>
                                <div><Link to="teams" onClick={() => setOpen(false)}>Teams</Link></div>
                                <div className='flex items-center gap-2'><IoPeopleOutline /> Team Members</div>
                            </div>
                        </div>

                        <div className='font-extralight text-xl ml-10 tracking-widest'>
                            <Link to="/">OpenAI's Internal Tool</Link>
                        </div>
                    </div>

                    <div className='flex items-center gap-7'>
                        <div className="flex items-center border border-gray-200 rounded-full px-4 py-1.5 focus-within:ring-1 focus-within:ring-black">
                            <CiSearch className="text-gray-400 mr-2 size-5" />
                            <input type="text" className="outline-none bg-transparent w-full text-xs font-extralight" placeholder="Search..." />
                        </div>

                        <IoIosNotifications className="text-xl cursor-pointer hover:text-indigo-600 transition" />
                        <IoIosSettings className="text-xl cursor-pointer hover:text-indigo-600 transition" />


                        {isLoggedIn ? (
                            <div
                                onClick={handleLogout}
                                className='w-10 h-10 rounded-full bg-red-50 text-red-600 border border-red-100 flex items-center justify-center text-xs font-bold cursor-pointer hover:bg-red-600 hover:text-white transition-all shadow-sm'
                                title="Logout"
                            >
                                OUT
                            </div>
                        ) : (
                            <Link to="/login">
                                <div className='w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-bold hover:bg-gray-700 transition-all shadow-sm'>
                                    ME
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}