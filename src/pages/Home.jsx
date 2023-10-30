import React, { useState } from 'react';
import TableData from '../components/MainPage/TableData';
import { NavLink } from 'react-router-dom';
import delImg from "../assets/delete.png";
import editImg from "../assets/edit.png";
import viewImg from "../assets/eye.png";

const Home = () => {
    const [item, setItem] = useState(TableData);
    const delItems = (id) => {
        const newTbale = item.filter((val) => {
            return val.id !== id;
        })
        setItem(newTbale);
    }
    return (
        <>
                <table className="table-auto text-left sm:w-[170%] lg:w-[100%]">
                    <thead className=" bg-[#36304A] text-white">
                        <tr>
                            <th className="py-5 pl-5">#</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Creation Date</th>
                            <th>Main Department</th>
                            <th>Staus</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        item.map((val, ind) => {
                            return (
                                <>
                                    <tbody className="table-auto w-full md:overflow-scroll">
                                        <tr key={ind}>
                                            <td className="pl-5">{val.id}</td>
                                            <div className="flex items-center space-x-3 py-2">
                                                <img className="w-7 h-7" src={val.img} alt="" />
                                                <div className="grid grid-rows-2 items-center">
                                                    <td className="items-center text-sm">{val.name}</td>
                                                    <td className="text-sm">{val.number}</td>
                                                </div>
                                            </div>
                                            <td>{val.email}</td>
                                            <td>{val.date}</td>
                                            <td>{val.department}</td>
                                            <td className="w-32">{val.status}</td>
                                            <div className="flex gap-3">
                                                <NavLink><img className="w-5" src={viewImg} alt="" /></NavLink>
                                                <NavLink><img className="w-5" src={editImg} alt="" /></NavLink>
                                                <NavLink onClick= {() => delItems(val.id)}><img className="w-5" src={delImg} alt="" /></NavLink>
                                            </div>
                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
        </>
    )
}

export default Home;
