"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/mlh.png" alt="MLH Logo" width={40} height={40} className="rounded-md" />
          <span className="text-xl font-bold">MLH Spoken English</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 ${open ? "block" : "hidden"} md:block`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
