import React from 'react';
import { NavLink } from 'react-router-dom';

const TransactionModel = ({ isModelopen }) => {
    return (
        <>
            {isModelopen ? <div className="lg:w-[800px] sm:w-[full]  bg-white absolute border-2 to-10 left-[30%]">
                <div className="bg-[#F9F8FD] px-5 py-3 flex justify-between">
                    <h1 className="text-green-500">Copy Session</h1>
                    <NavLink onClick={isModelopen}>X</NavLink>
                </div>
                <p className="px-5 py-3">copy the selected session plus at associated document within the session the copyed session will always have the status of betch to post when it is firts created.</p>

                <div className="px-5">
                    <form className="pb-12">
                        <h1 className="pb-3 font-bold">Copy From</h1>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                            <div className="gap-5">
                                <label for="">Session ID:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] px-3 py-2" type="text" placeholder="CDPAY03" />
                            </div>
                            <div>
                                <label for="">Session Description:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] px-3 py-2" type="text" placeholder="Allocation Example" />
                            </div>
                            <div>
                                <label for="">Transaction Source ID:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] px-3 py-2" type="text" placeholder="CD" />
                            </div>
                            <div>
                                <label for="">Transaction Source:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] px-3 py-2" type="text" placeholder="Cash Disbursement" />
                            </div>
                        </div>
                    </form>
                    <hr></hr>


                    <form className="pb-12">
                        <h1 className="pb-3 font-bold">Copy From</h1>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5">
                            <div className="gap-5">
                                <label for="">Session ID:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] px-3 py-2" type="text" placeholder="CDPAY03" />
                            </div>
                            <div>
                                <label for="">Session Description:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] px-3 py-2" type="text" placeholder="Allocation Example" />
                            </div>
                            <div className="pt-10">
                                <div>
                                <input type="checkbox" /> Use Origional Document Date
                                </div>
                            </div>
                            <div>
                                <label for="">New Document Date:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] opacity-50 px-3 py-2" type="Date" placeholder="Allocation Example" />
                            </div>

                            <div className="pt-10">
                                <div>
                                <input type="checkbox" /> Use Origional Effictive Date
                                </div>
                            </div>
                            <div>
                                <label for="">New Effective Date:</label><br></br>
                                <input className="bg-[#F9F8FD] outline-none w-[100%] opacity-50 px-3 py-2" type="Date" placeholder="Allocation Example" />
                            </div>
                        </div>

                        <div className="flex float-right gap-5 p-10">
                            <button className="px-5 border-green-500 border-2 rounded-md">Cancel</button>
                            <button className="bg-green-500 px-5 rounded-md">Copy</button>
                        </div>
                    </form>
                </div>
            </div> : null}
        </>
    )
}

export default TransactionModel;
