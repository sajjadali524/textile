import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Page from '../MainPage/Page';
import Form from "../Form/Form";
import Pagination from '../Pagination/Pagination';
import TransactionModel from '../Models/TransactionModel';

const Header = () => {
    const [sidebar, setSidebar] = useState(true);
    const [openmodel, setOpenmodel] = useState(false);
    const toggleBar = () => {
        setSidebar(!sidebar);
    }
    const openMod = () => {
        setOpenmodel(true);
    }
    return (
        <>
        <div className={openmodel ? `flex flex-wrap opacity-30 w-full fixed right-0 left-0` : `flex w-full overflow-hidden bg-[#DEDCE9]`}>
            <div className="fixed top-0 left-0 ">
                <Sidebar isOpen = {sidebar} />
            </div>
            <div className={sidebar ? `block ml-[200px] w-full` : `block ml-[5rem] w-full`}>
                <div className="">
                    <Navbar toggle = {toggleBar}  />
                </div>
                <div className="bg-[#FFFFFF]">
                    <Form model = {openMod} />
                </div>
                <div className="px-10 bg-[#FFFFFF] sm:overflow-auto">
                    <Page  />
                </div>
                <div className="px-10 py-10 bg-[#FFFFFF]">
                    <Pagination  />
                </div>
            </div>
        </div>
        <div>
            <TransactionModel isModelopen = {openmodel} />
        </div>
        </>
    )
}

export default Header;
