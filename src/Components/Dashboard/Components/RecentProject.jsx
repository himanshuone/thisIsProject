import React from 'react'
import { TbPencil } from "react-icons/tb";


function RecentProject() {
    const arr = [1, 2, 3, 4, 5]

    return (
        <>
            {
                arr.map((i) => (
                    <div key={i.id} className="border mt-3 border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
                        <div className="gap-5 px-3 py-3 flex items-center rounded-2xl ">
                            <div className="bg-gray-200 border rounded-full p-[1v]  "><TbPencil />
                            </div>
                            <div className="flex-1 ">
                                <p className='text-xs flex flex-wrap items-center gap-c-1'>
                                    <span className='font-medium'>Sarah Miller</span>
                                    <span className='text-gray-400'> created "Update user authentication flow"</span>

                                </p>
                                <p className="unique_id text-xs text-gray-500 ">Mobile App Redesign</p>
                            </div>
                            <div className=" text-gray-300 text-xs items-end rounded-2xl ">2h ago </div>

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default RecentProject
