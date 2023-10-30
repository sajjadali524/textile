import React from 'react';
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import LinksData from "../Sidebar/Data";
import { NavLink } from 'react-router-dom';

const Sidebar = ({isOpen}) => {
    return (
        <>
        <aside className={isOpen ? `h-screen bg-[#1c1d2f] w-[200px] justify-center` : `px-5 bg-[#1c1d2f] h-screen`}>
            <div className="flex justify-center py-10">
            <img className={isOpen ? `w-16` : `w-8 h-8 justify-center`} src={logo} alt="logo" />
            {isOpen ? <span className="text-[#CCCCCC] flex items-center font-bold text-[20px] ">Textile</span> : null}
            </div>
            <div>
                {
                    LinksData.map((val, ind) => {
                        return(
                            <NavLink key={ind} activeClassName="active" className={isOpen ? `text-[#CCCCCC] flex pl-5 py-5 gap-3` : `flex pl-1 py-5`} to={val.path}>
                                <img className="w-6 h-6" src={val.img} alt="images" />
                            {isOpen ?val.title : null}</NavLink>
                        )
                    })
                }
            </div>
        </aside>
        </>
    )
}

export default Sidebar;
