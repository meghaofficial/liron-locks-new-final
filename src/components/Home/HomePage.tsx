import ProductSlider from './ProductSlider';
import OurProducts from './OurProducts';
import Testimonials from './Testimonials';
import NewsletterSection from './NewsletterSection';
import Layout from '../Layout';
import FreeShipping from '../shared/FreeShipping';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <>
      <Layout>
        {/* hero section */}
        <div className='flex md:flex-row flex-col items-center relative py-6'>
          <div className="md:w-1/2 p-8 space-y-6">
            <div className="flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2 w-fit">
              <span className="text-xl">🔑</span>
              <span className="text-gray-700 font-medium">
                Built for Security, Made for You
              </span>
            </div>
            <h1 className="text-5xl font-semibold leading-tight text-gray-900">
              Upgrade Your{" "}
              <span className="text-brand">
                Safety with Better Locks
              </span>
            </h1>
            <p className="text-gray-600 text-md max-w-md">
              Secure what matters with premium locks built for strength and trust.
              Reliable protection and durability you can count on every day.
            </p>
            <div className="flex md:flex-row flex-col items-center gap-6">
              <button className="flex items-center cursor-pointer gap-2 bg-brand text-white px-6 py-3 rounded-full font-medium shadow-md" onClick={() => navigate("/products")}>
                View All Products
                <span>→</span>
              </button>
            </div>

          </div>
          <ProductSlider />
        </div>

        {/* characterics */}
        <div className='md:p-18 p-8 md:pb-18 pb-18 bg-white'>
          <FreeShipping />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-14">
            {/* left */}
            <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
              <div className="max-w-62.5">
                <p className="bg-white px-4 py-1 mb-7 rounded-full text-yellow-500 w-fit">
                  20+ Items
                </p>
                <div className='space-y-4'>
                  <h2 className="text-4xl font-bold text-gray-800">
                    Handles
                  </h2>
                  <ul className="text-gray-700 text-sm space-y-2">
                    <li onClick={() => navigate('/products/iron_handles')}>Iron Handles</li>
                    <li onClick={() => navigate('/products/rose_handles')}>Rose Handles</li>
                    <li onClick={() => navigate('/products/ss_handles')}>SS Handles</li>
                    <li onClick={() => navigate('/products/ss_plate_zinc')}>Zinc Handle SS Plate</li>
                  </ul>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262807/Picsart_26-02-27_23-29-15-732_q4ji5b.png"
                className="h-105 object-contain"
                onClick={() => navigate('/products/iron_handles')}
              />
            </div>

            {/* right */}
            <div className="flex flex-col gap-6">
              {/* upper */}
              <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
                <div className="space-y-4">
                  <p className="bg-white px-4 py-1 rounded-full text-yellow-500 mb-3 w-fit">
                    3+ Items
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Mortice Lock
                  </h2>
                </div>
                <img
                  src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554685/Picsart_26-03-03_11-36-01-738_jr5g7e.png"
                  className="h-50 object-contain"
                  onClick={() => navigate('/products/mortise_lock')}
                />
              </div>
              {/* bottom */}
              <div className="bg-gray-100 rounded-3xl p-8 flex justify-between items-center relative overflow-hidden">
                <div className="space-y-4">
                  <p className="bg-white px-4 py-1 rounded-full text-yellow-500 w-fit mb-3">
                    4+ Items
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Dead & Latch Locks
                  </h2>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li onClick={() => navigate('/products/dead_lock')}>Drawer Locks</li>
                    <li onClick={() => navigate('/products/dead_lock')}>Door Locks</li>
                  </ul>
                </div>
                <img
                  src="https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540842/Picsart_26-03-03_11-42-09-077_azkhvf.png"
                  className="h-50 object-contain"
                  onClick={() => navigate('/products/dead_lock')}
                />
              </div>
            </div>

          </div>
        </div>

        <OurProducts />
        {/* <FlashSale /> */}
        <Testimonials />
        {/* <NewsBlogs /> */}
        {/* <InstagramSection /> */}
        {/* <FAQSection /> */}
        <NewsletterSection />
      </Layout>
    </>
  )
}

export default HomePage
