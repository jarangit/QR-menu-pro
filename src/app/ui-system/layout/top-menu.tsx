import React from 'react'


const TopMenu = () => {
  return (
    <div className="container mx-auto px-6 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">QR Menu Pro</h1>
      <nav className=" space-x-6 hidden md:flex">
        <a href="#" className="hover:text-gray-600">
          Community
        </a>
        <a href="#" className="hover:text-gray-600">
          Features
        </a>
        <a href="#" className="hover:text-gray-600">
          About
        </a>
        <a href="#" className="hover:text-gray-600">
          Contact
        </a>
      </nav>
      <a href="#" className="bg-black text-white px-4 py-2 rounded-md">
        Start For Free
      </a>
    </div>
  )
}

export default TopMenu