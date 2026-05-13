"use client"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';

const Navbar = () => {
  const {
    data: session,
  } = authClient.useSession()

  const user = session?.user
  console.log(user)

  return (
    <nav className='flex items-center justify-between p-5 bg-white'>
      <ul className='flex gap-3 justify-center items-center'>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/destinations'}>Destinations</Link></li>
        <li><Link href={'/My-Bookings'}>My Bookings</Link></li>
        <li><Link href={'/add-destination'}>AdDestinationPage</Link></li>
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
        {user ? <>
          <li>
            <Avatar>
              <Avatar.Image alt="John Doe" src={user?.Image} />
              <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
          </li>
          <li>
            <Button variant='danger' >Logout</Button>
          </li>

        </> : <>
          <li><Link href={'/login'}>Login</Link></li>
          <li><Link href={'/signup'}>Sign Up</Link></li>
        </>}
      </ul>
    </nav>
  );
};

export default Navbar;