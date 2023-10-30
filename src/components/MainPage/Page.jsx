import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import User from "../../pages/User";
import Setting from "../../pages/Setting";
import Transaction from '../../pages/Transaction';
import Reporting from '../../pages/Reporting';


const Page = () => {
    return (
        <>
            <Routes>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/transaction" element={<Transaction />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/reporting" element={<Reporting />} />
                <Route exact path="/settings" element={<Setting />} />
            </Routes>
        </>
    )
}

export default Page;
