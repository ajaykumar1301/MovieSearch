import React, { useState, useEffect } from 'react'
import axios from "axios";

const Navbar = ({searchText, setSearchText, fetchSearch}) => {
    
    return (
        <div className='flex flex-row items-center justify-center w-full h-20 gap-4 bg-white'>
            <div className='flex items-center content-center justify-center h-full text-black'>
              Movie Name
            </div>
            <div class="font-sans text-black  bg-white flex items-center justify-center rounded-2xl bottom-2 w-96">
                <div class="border rounded-2xl overflow-hidden flex flex-row gap-6  w-full justify-between items-center">
                    <input type="text" className="box-border px-3 no-underline border-none outline-none" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="flex items-center justify-center h-full px-4 text-white no-underline bg-black rounded-2xl" onClick={fetchSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar