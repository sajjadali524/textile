import React from 'react';
import { NavLink } from 'react-router-dom';
import arrowImg from "../../assets/arrow.png";
import TableDate from "../MainPage/TableData";

const Pagination = () => {
    const noRows = TableDate.length;
    return (
        <div className="flex justify-between">
            <div className="items-center flex gap-3">
                <label for="">Show</label>
                <select className="w-10 border-2 outline-none">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className="flex items-center gap-5">
                <NavLink className=""><img className="w-4" src={arrowImg} alt="" /></NavLink>
                <NavLink className="rounded-full w-6 text-center text-white bg-[#8A2988]">1</NavLink>
                <NavLink>2</NavLink>
                <NavLink>3</NavLink>
                <NavLink>4</NavLink>
                <NavLink>5</NavLink>
                <NavLink>...</NavLink>
                <NavLink className=""><img className="w-4" src={arrowImg} alt="" /></NavLink>
            </div>
            <div>
                <p>{`view 1-${noRows} of 100 list`}</p>
            </div>
        </div>
    )
}

export default Pagination;
