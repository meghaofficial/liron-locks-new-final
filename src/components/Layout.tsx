import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  const [openUpperBar, setOpenUpperBar] = useState(true);

  return (
    <div className='google-sans'>
      {/* {openUpperBar && (
        <div className='bg-brand flex items-center justify-between text-white text-[12px] p-3 sm:px-12'>
          <p className='sm:block hidden'>Call Us: +91-9358252692</p>
          <p>Sign up and <span className='font-semibold'>GET 25% OFF</span> for your first order. <span className='underline text-yellow-500 underline-offset-3'>Sign up now</span></p>
          <RxCross1 className='sm:hidden' onClick={() => setOpenUpperBar(false)} />
          <div className='items-center gap-3 sm:flex hidden'>
            <FaFacebookF className='text-yellow-500 cursor-pointer' size={15} />
            <FaInstagram className='text-yellow-500 cursor-pointer' size={15} />
            <FaTwitter className='text-yellow-500 cursor-pointer' size={15} />
          </div>
        </div>
      )} */}
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
