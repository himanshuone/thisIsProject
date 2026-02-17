import { useState } from 'react'
import TeamMemberDropdown from "./TeamMemberDropdown.jsx"

function AssignTeam({ value, onChange }) {
    
    return (
        <>
            
            <select onChange={onChange} name="team" value={value} className="w-full outline-none">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
            </select>
            
        </>
    )
}

export default AssignTeam;