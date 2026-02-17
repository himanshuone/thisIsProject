import React from 'react'

function ActiveProject({projects}) {
    const statusMap = {
  Planning: 10,
  Active: 30,
  "On Hold": 50,
  Review: 75,
  Completed: 100,
};
   

    return (
        <>
            {
                projects.map((i, index) => (
                    <div key={index} className="border mt-3 border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
                        <div className="gap-5 px-3 py-3 flex items-center  rounded-2xl ">
                            <div className="border-gray-900 border rounded-full w-1.5 h-1.5 "></div>
                            <div className="flex-1 ">
                                <p>{i.name}</p>
                                <p className="unique_id text-xs text-gray-500 ">{i.code}</p>
                            </div>

                            <div className=" bg-gray-200 h-1 w-20 rounded-2xl"> 

                                <div style={{ width: `${statusMap[i.status] || 50}%` }} className=" bg-gray-700 h-1  rounded-2xl"></div>
                                
                                
                                 </div>

                            <div className=" flex">

                                <div className=" bg-gray-200 rounded-full w-5 h-5 justify-center flex items-center text-xs">{i.team}</div>

                            </div>
                            <div className="border text-xs rounded-2xl px-2 py-0.5 text-gray-600">{i.status}</div>
                            <div className="border text-xs rounded-2xl px-2 py-0.5 text-gray-600">{i.priority}</div>
                        </div>
                    </div>
                ))
            }


        </>

    )
}

export default ActiveProject
