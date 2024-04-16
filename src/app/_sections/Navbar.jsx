"use client"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between w-full items-center py-3 px-8 backdrop-blur-lg ">
      <a href="/">
        <img
          src="/AnimalCare.svg"
          alt="Animal Care"
          aria-label="Animal Care logo"
          height={41}
          width={41}
          className="transform rotate-0 scale-x-[-1]"
        />
      </a>

      <div className="hidden md:flex gap-6 text-[#04A69F] text-lg">
        <a className="hover:text-black transition-colors duration-300" href="/#">About us</a>
        <a className="hover:text-black transition-colors duration-300" href="/#">Marketing</a>
        <a className="hover:text-black transition-colors duration-300" href="/#">Products</a>
        <a className="hover:text-black transition-colors duration-300" href="/#">Team</a>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#04A69F] hover:text-black transition-colors duration-300 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 text-[#04A69F] bg-white z-50 flex flex-col w-screen h-screen justify-center items-center text-3xl">
          
          <a className="hover:text-black transition-colors duration-300 py-3" href="/#">About us</a>
          <a className="hover:text-black transition-colors duration-300 py-3" href="/#">Marketing</a>
          <a className="hover:text-black transition-colors duration-300 py-3" href="/#">Prdoducts</a>
          <a className="hover:text-black transition-colors duration-300 py-3" href="/#">Team</a>


          <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#04A69F] hover:text-black transition-colors duration-300 focus:outline-none relative top-[20%]"
        >
          <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
          
        </div>
      )}
    </nav>
  );
}
