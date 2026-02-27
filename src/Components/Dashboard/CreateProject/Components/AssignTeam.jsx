import React, { useState } from 'react';
import { TbPlus, TbX } from "react-icons/tb";

function AssignTeam({ value = [], onChange }) {
    const [emailInput, setEmailInput] = useState("");

    const addMember = () => {
        if (emailInput && !value.includes(emailInput)) {
            onChange({
                target: {
                    name: 'team',
                    value: [...value, emailInput]
                }
            });
            setEmailInput("");
        }
    };

    const removeMember = (email) => {
        onChange({
            target: {
                name: 'team',
                value: value.filter(e => e !== email)
            }
        });
    };

    return (
        <div className="w-full">
            <div className="flex gap-2 mb-3">
                <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter member email..."
                    className="flex-1 text-xs border border-gray-300 p-2.5 rounded-2xl outline-none focus:border-black transition-all font-extralight"
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addMember())}
                />
                <button
                    type="button"
                    onClick={addMember}
                    className="bg-black text-white px-4 rounded-2xl hover:bg-gray-800 transition-all flex items-center justify-center shadow-sm"
                >
                    <TbPlus size={18} />
                </button>
            </div>

            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto py-1">
                {value.map((email) => (
                    <div
                        key={email}
                        className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100"
                    >
                        <div className="w-5 h-5 rounded-full bg-indigo-500 text-[9px] text-white flex items-center justify-center font-bold uppercase">
                            {email[0]}
                        </div>
                        <span className="text-[11px] text-gray-600 truncate max-w-[150px] font-light">
                            {email}
                        </span>
                        <button
                            type="button"
                            onClick={() => removeMember(email)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <TbX size={12} />
                        </button>
                    </div>
                ))}

                {value.length === 0 && (
                    <p className="text-[11px] text-gray-400 font-extralight italic ml-2">
                        No members added yet.
                    </p>
                )}
            </div>
        </div>
    );
}

export default AssignTeam;