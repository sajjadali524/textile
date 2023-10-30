import React from 'react';
import { NavLink } from 'react-router-dom';
import addImg from "../../assets/add.png";
import exportImg from "../../assets/export.png";

const Form = ({ model }) => {
    return (
        <>
            <div className="flex justify-between py-5 px-10">
                <div>
                    <h1>Transaction Records</h1>
                </div>
                <div className="flex gap-10">
                    <li><NavLink onClick={model} className="flex items-center gap-2"><img className="w-5" src={addImg} alt="" />Add Transaction</NavLink></li>
                    <li><NavLink className="flex items-center gap-3"><img className="w-5" src={exportImg} alt="" />Export to Files</NavLink></li>
                </div>
            </div>
            <form className="flex flex-wrap px-10 gap-3 pb-5">
                <div>
                    <label for="">Name</label><br></br>
                    <input className="border-2 px-2 py-1 w-[200px] rounded-md outline-none opacity-50" type="text" placeholder="Type name" />
                </div>
                <div>
                    <label for="">Email</label><br></br>
                    <input className="border-2 px-2 py-1 rounded-md outline-none w-36 opacity-50" type="email" placeholder="Type email" />
                </div>
                <div>
                    <label for="">Creation Date</label><br></br>
                    <select className="w-32 border-2 rounded-md py-1 px-2 opacity-50 outline-none">
                        <option>select</option>
                        <option>opt 1</option>
                    </select>
                </div>
                <div>
                    <label for="">Transaction</label><br></br>
                    <select className="w-32 border-2 rounded-md py-1 px-2 w-[180px] opacity-50 outline-none">
                        <option>select</option>
                        <option>opt 1</option>
                        <option>opt 2</option>
                        <option>opt 2</option>
                    </select>
                </div>
                <div>
                    <label for="">Status</label><br></br>
                    <select className="w-32 border-2 rounded-md py-1 px-2 opacity-50 outline-none">
                        <option>All</option>
                        <option>Active</option>
                        <option>Unactive</option>
                    </select>
                </div>
                <div className="flex items-end gap-3">
                    <button className="w-[100px] h-10 bg-[#8A2988] rounded-md text-white">Search</button>
                    <button className="w-[100px] h-10 border-[#8A2988] border-2 rounded-md text-[#8A2988]">Reset</button>
                </div>
            </form>
        </>
    )
}

export default Form;
