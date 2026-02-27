import React from 'react';

function CounterComponent({ projects }) {

  const totalProjects = projects.length;
  const activeTaskCount = projects.filter(p => p.status !== "Completed").length;
  const completedTaskCount = projects.filter(p => p.status === "Completed").length;


  const uniqueMembers = new Set();
  projects.forEach(project => {

    if (project.owner) {
      uniqueMembers.add(project.owner._id || project.owner);
    }

    if (project.team) {
      project.team.forEach(member => {
        uniqueMembers.add(member._id || member);
      });
    }
  });

  const teamMemberCount = uniqueMembers.size;

  return (
    <div className='w-full h-fit flex '>
      <div className='containers h-[20vh] w-full flex p-5 justify-center gap-5'>
        

        <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full '>
          <div className='p-4 w-full h-auto flex-col '>
            <div className='text-xs text-gray-400 font-light uppercase'> <p>Total Projects</p></div>
            <div className='text-4xl font-extralight mt-4'>{totalProjects}</div>
            <div className='text-xs text-gray-400 mt-2'>Live from Database</div>
          </div>
        </div>


        <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full'>
          <div className='p-4 w-full h-auto flex-col '>
            <div className='text-xs text-gray-400 font-light uppercase'> <p>Active Tasks</p></div>
            <div className='text-4xl font-extralight mt-4'>{activeTaskCount}</div>
            <div className='text-xs text-gray-400 mt-2'>Current status</div>
          </div>
        </div>


        <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full'>
          <div className='p-4 w-full h-auto flex-col '>
            <div className='text-xs text-gray-400 font-light uppercase'> <p>Completed</p></div>
            <div className='text-4xl font-extralight mt-4'>{completedTaskCount}</div>
            <div className='text-xs text-gray-400 mt-2'>Finished projects</div>
          </div>
        </div>


        <div className='border border-gray-300 rounded-2xl w-full max-w-[20vw] flex h-full'>
          <div className='p-4 w-full h-auto flex-col '>
            <div className='text-xs text-gray-400 font-light uppercase'> <p>Team Members</p></div>
            <div className='text-4xl font-extralight mt-4'>{teamMemberCount}</div>
            <div className='text-xs text-gray-400 mt-2'>Unique collaborators</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CounterComponent;