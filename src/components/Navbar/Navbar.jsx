import React from 'react';
import { NavLink } from 'react-router-dom';
import homeImg from "../../assets/home2.png";
// import emailImg from "../../assets/email.png";
// import bellImg from "../../assets/bell.png";
import profImg from "../../assets/profile.png";
import arrowImg from "../../assets/arrow.png";
import barImg from "../../assets/bars.png";

const Navbar = ({toggle}) => {
    return (
        <div className="flex bg-[#F9F8FD] px-5 py-3 justify-between items-center">
            <nav>
                <ul className="flex text-black-500 items-center">
                    <li className="px-3"><NavLink onClick = {toggle}><img className="w-7" src={barImg} alt="home" /></NavLink></li>
                    <li><NavLink><img className="w-5" src={homeImg} alt="home" /></NavLink></li>
                    <li className="border-r-2 px-3"><NavLink>Home</NavLink></li>
                    <li className="border-r-2 px-3"><NavLink>Department</NavLink></li>
                    <li className="px-3"><NavLink>Records</NavLink></li>
                </ul>
            </nav>
            <div className="flex gap-5 items-center">
                {/* <NavLink><img className="w-5" src={emailImg} alt="" /></NavLink> */}
                {/* <NavLink><img className="w-5" src={bellImg} alt="" /></NavLink> */}
                <div className="flex items-center space-x-3">
                    <NavLink><img className="w-8" src={profImg} alt="" /></NavLink>
                    <div className="space-y-[-5px]">
                        <h1 className="text-base font-semibold">Denis Bradely</h1>
                        <p className="text-sm">Admin</p>
                    </div>
                    <NavLink><img className="w-5" src={arrowImg} alt="" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;