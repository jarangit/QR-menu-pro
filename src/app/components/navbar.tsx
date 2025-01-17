"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ใช้เพื่อฟังเส้นทางปัจจุบัน

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // เมื่อเส้นทางเปลี่ยน ให้ปิด Dropdown Menu
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-gray-100 p-4 border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-bold">SUDOFOOD</div>

        {/* Hamburger Menu */}
        <div
          className="text-black text-2xl md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-16 right-4 bg-white rounded-lg shadow-lg w-40 transition-transform duration-300 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              About
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              Contact
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              <Link href={"/login"}>Login</Link>
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              <Link href={"/creator/store"}>User</Link>
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">
              <Link href={"/community"}>Community</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
