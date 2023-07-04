'use client';
import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];
const Navbar = () => {
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link className="font-bold text-[22px]" href="/">
        Soft Dazzle
      </Link>
      <div className="flex items-center gap-5">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="">
            {link.title}
          </Link>
        ))}
        <button
          className="p-[5px] border-0 bg-[#53c28b] text-white rounded-[3px]"
          onClick={() => {
            console.log('Logged Out');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
