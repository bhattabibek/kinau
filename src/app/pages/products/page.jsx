import React from 'react'
import { CiStar } from "react-icons/ci";
import Image from 'next/image';

const page = () => {
  return (
    <>
   
    <div>

    <Image src="/sony.jpg"  width={200}                // Desired width in pixels
  height={100}  />
    <h2>Samsung Headphones</h2>
    <h4>NPR 2390</h4>
    <CiStar/><CiStar /><CiStar /><CiStar />
    <button className='bg-[#136892]'>Add to Cart</button>
    </div>
    </>
  )
}

export default page