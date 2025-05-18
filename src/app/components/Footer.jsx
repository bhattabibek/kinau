import React from 'react'
import { FaOpencart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className='flex flex-row gap-4 grid grid-cols-2 m-5'>
      <div>
       <h1 className='text-5xl inline-flex'>KINAU <FaOpencart /></h1>
  <br/>
       <p>Welcome to <span className='font-bold'>Kinau.</span> We sell all sorts of Electronic Products</p>
      </div>
      <div>
      <ul className='pl-10'>
        <h2 className='font-bold text-2xl'>QUICK LINKS</h2>
        <li>
        About us
        </li>
        <li>
          Shop
        </li>
        <li>
          Products
        </li>
        <li>
          
        </li>
      </ul>
      </div>
      <div>
       <h2 className='font-bold text-2xl'>
   COMPANY
       </h2>
       <ul>
        <li>
          Register

        </li>
        <li>
          Login
          </li>
          <li>
            FAQ
          </li>
          <li>Privacy policy</li>
       </ul>
      </div>
    </div>
    <div className='text-center font-bold p-4'>
      Copyright © All Rights Reserved
    </div>
    </>
  )
}

export default Footer