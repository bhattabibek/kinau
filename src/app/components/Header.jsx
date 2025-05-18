import React from 'react'
import { FaOpencart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { CiUser } from "react-icons/ci";


const Header = () => {
  return (
    <>
  
       <div className='flex justify-evenly p-3 items-center bg-[#fffdfd] shadow-xl flex-wrap sticky top-0 z-50'>
        <h1 className='text-5xl inline-flex'>KINAU <FaOpencart /></h1>
        <div> <ul className='flex flex-row gap-6 text-amber-700'>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Account</li>
          <li>Contact</li>
        </ul></div>
       <div className='inline-flex gap-4 '>
       <button className='bg-[#136892] text-white p-2 px-5 rounded-sm hover:bg-[#1e2021] cursor-pointer '><CiLogin className='inline-flex text-center' size={25} />Login</button>
     
        <button className='bg-[#0c0c0c] text-white p-2 px-5 rounded-sm cursor-pointer'><CiUser className='inline-flex text-center ' size={25}/>Register</button>
       </div>
       </div>
     
    </>
 
  )
}

export default Header