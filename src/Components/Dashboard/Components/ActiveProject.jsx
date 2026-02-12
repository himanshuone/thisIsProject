import React from 'react'

function ActiveProject() {
    const arr = [1, 2, 3, 4, 5]

    return (
        <>
            {
                arr.map((i) => (
                    <div key={i.id} className="border mt-3 border-gray-200 rounded-2xl overflow-hidden divide-y divide-gray-200">
                        <div className="gap-5 px-3 py-3 flex items-center  rounded-2xl ">
                            <div className="border-gray-900 border rounded-full w-1.5 h-1.5 "></div>
                            <div className="flex-1 ">
                                <p>Backend Project Management</p>
                                <p className="unique_id text-xs text-gray-500 ">Project001</p>
                            </div>
                            <div className=" bg-gray-200 h-1 w-20 rounded-2xl"> <div className=" bg-gray-700 h-1 w-[50%] rounded-2xl"></div> </div>
                            <div className=" flex">
                                <div className=" bg-gray-200 rounded-full w-5 h-5 justify-center flex items-center text-xs">H</div>
                                <div className=" bg-gray-200 rounded-full w-5 h-5 justify-center flex items-center text-xs">H</div>
                                <div className=" bg-gray-200 rounded-full w-5 h-5 justify-center flex items-center text-xs">H</div>
                            </div>
                            <div className="border text-xs rounded-2xl px-2 py-0.5 text-gray-600">{i % 2 == 0 ? <h1>Active</h1> : <h1>Testing</h1>}</div>
                        </div>
                    </div>
                ))
            }


        </>

    )
}

export default ActiveProject
