import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { HiBars3, HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { RiSearch2Line, RiHeart3Line, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import lion from '../../assets/images/lion.png';

const Navbar = () => {

  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      {/* md screen */}
      <div className='md:flex hidden items-center justify-between p-4 px-10 bg-white'>
        <div className='flex items-center gap-2' onClick={() => navigate("/")}>
          <img src={lion} alt="lion" className='h-10' />
          <span className='font-bold text-[20px] text-brand roboto'>Liron Locks</span>
        </div>
        <div className='text-[12px] flex items-center gap-5 font-medium roboto'>
          <Link to="/">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/">Categories</Link>
          <Link to="/">About Us</Link>
          <Link to="/">Contact Us</Link>
          <Link to="/">Blog</Link>
        </div>
        <div className='text-[14px] flex items-center gap-5 roboto'>
          <Link to="/"><RiSearch2Line /></Link>
          <Link to="/"><RiHeart3Line /></Link>
          <Link to="/"><RiShoppingCartLine /></Link>
          <Link to="/"><RiUser3Line /></Link>
        </div>
      </div>
      {/* sm screen */}
      <div className='flex flex-col bg-white shadow-md md:hidden px-4 py-3 gap-4'>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setOpenNav(true)}>
              <HiBars3 size={24} />
            </button>
            <div className='flex items-center gap-2' onClick={() => navigate("/")}>
              <img src={lion} alt="lion" className='h-6' />
              <span className='font-bold text-[15px] text-brand roboto'>Liron Locks</span>
            </div>

          </div>
          <div className="flex items-center gap-4">
            <RiHeart3Line />
            <RiShoppingCartLine />
            <RiUser3Line />
          </div>
        </div>
        {/* search */}
        <div className="flex items-center gap-3 border border-gray-200 rounded-full p-2 py-2 shadow-sm">
          <RiSearch2Line className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 roboto text-[14px]"
          />
        </div>
      </div>
      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity z-999 duration-300 ${openNav ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpenNav(false)}
      ></div>
      {/* SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] z-9999 bg-white shadow-lg transform transition-transform duration-300 ${openNav ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-6 space-y-6">
          <div className='flex items-center gap-2' onClick={() => navigate("/")}>
            <img src={lion} alt="lion" className='h-8' />
            <span className='font-bold text-[16px] text-brand roboto'>Liron Locks</span>
          </div>
          <nav className='text-[14px] flex flex-col gap-4 font-medium roboto'>
            <Link to="/">Home</Link>
            <Link to="/">Shop</Link>
            <Link to="/">Categories</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Blog</Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar
