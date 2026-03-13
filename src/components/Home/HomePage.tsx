import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import ProductSlider from './ProductSlider';
import Navbar from './Navbar';
import { RxCross1 } from "react-icons/rx";
import { PiPackageLight, PiWalletLight, PiHeadphonesLight } from "react-icons/pi";
import OurProducts from './OurProducts';

const HomePage = () => {

  const [boolValues, setBoolValues] = useState({
    openUpperBar: true,
  });

  const handleUpdateBool = (key: string, value: boolean) => setBoolValues(prev => ({ ...prev, [key]: value }));

  return (
    <div className='google-sans'>
      {boolValues.openUpperBar && (
        <div className='bg-brand flex items-center justify-between text-white text-[12px] p-3 sm:px-12'>
          <p className='sm:block hidden'>Call Us: +91-9358252692</p>
          <p>Sign up and <span className='font-semibold'>GET 25% OFF</span> for your first order. <span className='underline text-yellow-500 underline-offset-3'>Sign up now</span></p>
          <RxCross1 className='sm:hidden' onClick={() => handleUpdateBool('openUpperBar', false)} />
          <div className='items-center gap-3 sm:flex hidden'>
            <FaFacebookF className='text-yellow-500 cursor-pointer' size={15} />
            <FaInstagram className='text-yellow-500 cursor-pointer' size={15} />
            <FaTwitter className='text-yellow-500 cursor-pointer' size={15} />
          </div>
        </div>
      )}

      {/* navbar */}
      <Navbar />

      {/* hero section */}
      <div className='flex md:flex-row flex-col items-center relative py-6'>
        <div className="md:w-1/2 p-8 space-y-8">
          <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2 w-fit">
            <span className="text-xl">🔑</span>
            <span className="text-gray-700 font-medium">
              The Best Online Locks Store
            </span>
          </div>
          <h1 className="text-5xl font-semibold leading-tight text-gray-900">
            Explore Our{" "}
            <span className="text-brand">
              Modern Locks Collection
            </span>
          </h1>
          <p className="text-gray-600 text-md max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex md:flex-row flex-col items-center gap-6">
            <button className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-medium shadow-md">
              Shop Now
              <span>→</span>
            </button>
            <a
              href="#"
              className="underline underline-offset-4 text-gray-800 font-medium"
            >
              View All Products
            </a>
          </div>

        </div>
        <ProductSlider />
      </div>

      {/* characterics */}
      <div className='md:p-18 p-8 md:pb-18 pb-18 bg-white'>
        <div className="mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="relative w-13 h-13 flex items-center justify-center">
              <div className="absolute -bottom-1 -right-1 md:w-11.25 md:h-11.25 h-10 w-10 bg-yellow-500 rounded-full"></div>
              <PiPackageLight className="text-brand md:text-[100px] text-[40px] relative z-10" />
            </div>
            <div>
              <h3 className="md:text-[20px] font-semibold text-gray-800">
                Free Shipping
              </h3>
              <p className="text-gray-500 md:text-[15px] text-[13px]">
                Free shipping for order above Rs. 2500
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="relative w-13 h-13 flex items-center justify-center">
              <div className="absolute -bottom-1 -right-1 md:w-11.25 md:h-11.25 h-10 w-10 bg-yellow-500 rounded-full"></div>
              <PiWalletLight className="text-brand md:text-[100px] text-[40px] relative z-10" />
            </div>
            <div>
              <h3 className="md:text-[20px] font-semibold text-gray-800">
                Flexible Payment
              </h3>
              <p className="text-gray-500 md:text-[15px] text-[13px]">
                Multiple secure payment options
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="relative w-13 h-13 flex items-center justify-center">
              <div className="absolute -bottom-1 -right-1 md:w-11.25 md:h-11.25 h-10 w-10 bg-yellow-500 rounded-full"></div>
              <PiHeadphonesLight className="text-brand md:text-[100px] text-[40px] relative z-10" />
            </div>
            <div>
              <h3 className="md:text-[20px] font-semibold text-gray-800">
                24×7 Support
              </h3>
              <p className="text-gray-500 md:text-[15px] text-[13px]">
                We support online all days.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
          {/* left */}
          <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
            <div className="max-w-[250px]">
              <p className="bg-white px-4 py-1 mb-7 rounded-full text-yellow-500 w-fit">
                20+ Items
              </p>
              <div className='space-y-4'>
                <h2 className="text-4xl font-bold text-gray-800">
                  Handles
                </h2>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>Gaming Chair</li>
                  <li>Lounge Chair</li>
                  <li>Folding Chair</li>
                  <li>Dining Chair</li>
                  <li>Office Chair</li>
                  <li>Armchair</li>
                  <li>Bar Stool</li>
                  <li>Club Chair</li>
                </ul>
              </div>
            </div>
            <img
              src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262807/Picsart_26-02-27_23-29-15-732_q4ji5b.png"
              className="h-[420px] object-contain"
            />
          </div>

          {/* right */}
          <div className="flex flex-col gap-6">
            {/* upper */}
            <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
              <div className="space-y-4">
                <p className="bg-white px-4 py-1 rounded-full text-yellow-500 mb-3 w-fit">
                  10+ Items
                </p>
                <h2 className="text-3xl font-bold text-gray-800">
                  Mortice Lock
                </h2>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>Reception Sofa</li>
                  <li>Sectional Sofa</li>
                  <li>Armless Sofa</li>
                  <li>Curved Sofa</li>
                </ul>
              </div>
              <img
                src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554685/Picsart_26-03-03_11-36-01-738_jr5g7e.png"
                className="h-[200px] object-contain"
              />
            </div>
            {/* bottom */}
            <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
              <div className="space-y-4">
                <p className="bg-white px-4 py-1 rounded-full text-yellow-500 w-fit mb-3">
                  10+ Items
                </p>
                <h2 className="text-3xl font-bold text-gray-800">
                  Deadlock
                </h2>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>Table Lights</li>
                  <li>Floor Lights</li>
                  <li>Ceiling Lights</li>
                  <li>Wall Lights</li>
                </ul>
              </div>
              <img
                src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540842/Picsart_26-03-03_11-42-09-077_azkhvf.png"
                className="h-[200px] object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      <OurProducts />
    </div>
  )
}

export default HomePage
