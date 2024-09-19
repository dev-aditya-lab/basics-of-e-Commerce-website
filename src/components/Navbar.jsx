import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [showCart, setShowCart] = useState(false);
  return (
    <>
    <div className='relative' >
    <nav className='bg-blue-300 py-3 px-5 h-16 flex justify-between items-center'>
        <Link to="/" className='text-xl font-medium'>E-COM.</Link>
        <input type="text" className='w-1/3 py-2 px-3 rounded-full outline-none border border-gray-300' placeholder='Search....'/>
       
        <svg onClick={()=>{setShowCart(true)}} className='h-10 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.00488 9H19.9433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V9ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
    </nav>
        <div className={`h-screen ${showCart ? "w-2/5" : "w-0"} bg-slate-200 absolute top-0 right-0 z-50 overflow-hidden duration-300 `} >
        <svg onClick={()=>{setShowCart(false)}} className='h-10 absolute top-2 right-2 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>

        <h1>aditua</h1>
        <h1>aditua</h1>
        <h1>aditua</h1>
        <h1>aditua</h1>
        <h1>aditua</h1>
        <h1>aditua</h1>
        </div>
        </div>
    </>
  )
}

export default Navbar