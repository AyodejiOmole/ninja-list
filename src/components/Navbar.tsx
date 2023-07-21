import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='lg:p-4 px-2 py-4 border border-gray-200 lg:flex align-center justify-between'>
      <div className="logo font-mono cursor-pointer text-xl">
        <a>Ninja</a>
      </div>

      <div className='flex justify-between align-center'>
        <Link
            href="/">
            <p className='font-mono cursor-pointer mx-3 font-bold text-sm md:text-base lg:text-base hover:underline'>Home</p>
        </Link>
        
        <Link href="/ninja-listing" prefetch={true}>
            <p className='font-mono cursor-pointer mx-3 text-sm md:text-base lg:text-base font-bold hover:underline'>Ninja Listing</p>
        </Link>
        
        <Link href="/about" prefetch={true}>
            <p className='font-mono cursor-pointer mx-3 text-sm md:text-base lg:text-base font-bold hover:underline'>About</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;
