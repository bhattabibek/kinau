import React from 'react'
import Image from 'next/image';

const BentoGrid = () => {
  return (
   <>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-7  flex flex-wrap">
   
      <div className="relative bg-blue-200 rounded-lg row-span-2 md:col-span-2 aspect-[3/2] overflow-hidden">
        <Image
          src="/image.jpg"
          alt="Main Image"
          fill
          className="object-cover"
        />
      </div>

      {/* Smaller items */}
      <div className="relative bg-green-200 rounded-lg aspect-square overflow-hidden">
        <Image
          src="/image.jpg"
          alt="Secondary Image"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative bg-yellow-200 rounded-lg aspect-square overflow-hidden">
        <Image
          src="/camera.jpg"
          alt="Camera"
          fill
          className="object-cover"
        />
      </div>

      {/* Wide image block */}
      <div className="relative bg-pink-200 rounded-lg md:col-span-2 aspect-[3/1] overflow-hidden">
        <Image
          src="/laptop.jpg"
          alt="Laptop"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );



    </>
  )
}

export default BentoGrid