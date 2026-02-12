import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { HiMenu } from "react-icons/hi"
import { IoPeopleOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAnalytics } from "react-icons/md";




export default function Navigation() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className=' fixed top-0 left-0 flex backdrop-blur-2xl h-[8vh] bg-white/70 w-full rounded-2xl  '>
                <div className='insidenav  flex items-center justify-between w-full mx-10 '>


                    <div className='flex item-center '>
                        <div className=''>
                            <HiMenu
                                className="text-2xl cursor-pointer"
                                onClick={() => { setOpen(!open); console.log("Hello"); }}
                            />
                            <div className={`fixed top-[8vh] left-0 border border-s-2 h-auto w-64 bg-white text-black ${open?"ml-2 translate-x-0":"-translate-x-full"}  hover:border-black transition-transform duration-300 p-5 ease-in-out`}>

                            <div>
                                <div>Project</div>
                                <div><Link to="dashboard">Dashboard</Link></div>
                                <div>Website Redesign</div>
                                <div>Website Redesign</div>
                                <div>Project</div>
                                <div className='flex items-center gap-2 text-l'> <MdOutlineAnalytics />Analytics</div>
                                <div className='flex items-center gap-2'><SlCalender />Calender</div>
                                <div className='flex items-center gap-2'><IoPeopleOutline />Team</div>

                            </div>

                            </div>
                        </div>
                        <div className='font-extralight text-xl ml-10 font-stretch-ultra-expanded '><Link to={"/"}> Project </Link></div>
                    </div>



                    <div className='flex items-center gap-7'>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
                            <CiSearch className="text-gray-400 mr-2 size-5" />
                            <input
                                type="text"
                                className="outline-none bg-transparent w-full text-sm"
                                placeholder="Search"
                            />
                        </div>
                        <div className=' '>
                            <IoIosNotifications className="text-xl cursor-pointer hover:text-pink-700  transition" />
                        </div>
                        <div className=' '>
                            <IoIosSettings className="text-xl cursor-pointer hover:text-pink-700  transition" />
                        </div>
                        <Link to="/login"><div className='w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-medium'> ME </div></Link>
                    </div>


                </div>

            </div>
        </div>
    )
}
