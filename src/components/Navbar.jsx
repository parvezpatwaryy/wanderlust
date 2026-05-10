import Link from 'next/link';
import React from 'react';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-5 bg-white'>
      <ul className='flex gap-3 justify-center items-center'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/Destinations'}>Destinations</Link></li>
        <li><Link href={'/My-Bookings'}>My Bookings</Link></li>
      </ul>
      <div>
        <Image
        src={'/assets/Wanderlast.png'}
        alt="logo"
        height={150}
        width={150}
        />
      </div>
      <ul className='flex gap-3 justify-center items-center'>
        <li><Link href={'/Profile'}>Profile</Link></li>
        <li><Link href={'/Login'}>Login</Link></li>
        <li><Link href={'/SignUp'}>Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;