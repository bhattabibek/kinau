'use client';

import React from "react";
import { CiStar } from "react-icons/ci";
import Image from "next/image";

const ProductCard = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {/* Card 1 */}
        <div className="shadow-2xl text-center max-w-sm mx-auto">
          <div className="relative overflow-hidden">
            <Image
              src="/sony.jpg"
              width={340}
              height={170}
              alt="Samsung Headphones"
              className="mx-auto mb-4 rounded transition-transform duration-300 transform hover:scale-110"
            />
          </div>

          <h2 className="text-lg font-semibold mb-1">Samsung Headphones</h2>
          <h4 className="text-gray-600 mb-2">NPR 2390</h4>

          <div className="flex justify-center gap-1 text-xl mb-4">
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-gray-300" />
          </div>

          <button className="bg-[#136892] text-white px-4 py-2 rounded hover:bg-[#0f5474] transition">
            Add to Cart
          </button>
        </div>

        {/* Card 2 */}
        <div className=" shadow-2xl text-center max-w-sm mx-auto">
          <div className="relative overflow-hidden">
            <Image
              src="/sony.jpg"
              width={340}
              height={170}
              alt="Samsung Headphones"
              className="mx-auto mb-4 rounded transition-transform duration-300 transform hover:scale-110"
            />
          </div>

          <h2 className="text-lg font-semibold mb-1">Samsung Headphones</h2>
          <h4 className="text-gray-600 mb-2">NPR 2390</h4>

          <div className="flex justify-center gap-1 text-xl mb-4">
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-gray-300" />
          </div>

          <button className="bg-[#136892] text-white px-4 py-2 rounded hover:bg-[#0f5474] transition">
            Add to Cart
          </button>
        </div>

        {/* Card 3 with Zoom */}
        <div className="shadow-2xl rounded-lg  text-center  max-w-sm mx-auto">
          <div className="relative overflow-hidden">
            <Image
              src="/sony.jpg"
              width={340}
              height={170}
              alt="Samsung Headphones"
              className="mx-auto mb-4 rounded transition-transform duration-300 transform hover:scale-110"
            />
          </div>

          <h2 className="text-lg font-semibold mb-1">Samsung Headphones</h2>
          <h4 className="text-gray-600 mb-2">NPR 2390</h4>

          <div className="flex justify-center gap-1 text-xl mb-4">
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-gray-300" />
          </div>

          <button className="bg-[#136892] text-white px-4 py-2 rounded hover:bg-[#0f5474] transition">
            Add to Cart
          </button>
        </div>
        <div className="shadow-2xl rounded-lg  text-center  max-w-sm mx-auto">
          <div className="relative overflow-hidden">
            <Image
              src="/sony.jpg"
              width={340}
              height={170}
              alt="Samsung Headphones"
              className="mx-auto mb-4 rounded transition-transform duration-300 transform hover:scale-110"
            />
          </div>

          <h2 className="text-lg font-semibold mb-1">Samsung Headphones</h2>
          <h4 className="text-gray-600 mb-2">NPR 2390</h4>

          <div className="flex justify-center gap-1 text-xl mb-4">
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-amber-400" />
            <CiStar className="text-gray-300" />
          </div>

          <button className="bg-[#136892] text-white px-4 py-2 rounded hover:bg-[#0f5474] transition">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
