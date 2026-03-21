import { PiHeadphonesLight, PiPackageLight, PiHandshakeLight } from "react-icons/pi"

const FreeShipping = () => {
  return (
    <>
      <div className="mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {/* Feature 1 */}
        <div className="flex items-center gap-4">
          <div className="relative w-13 h-13 flex items-center justify-center">
            <div className="absolute -bottom-1 -right-1 md:w-11.25 md:h-11.25 h-10 w-10 bg-yellow-500 rounded-full"></div>
            <PiPackageLight className="text-brand md:text-[100px] text-[40px] relative z-10" />
          </div>
          <div>
            <h3 className="md:text-[20px] font-semibold text-gray-800">
              Bulk Orders Available
            </h3>
            <p className="text-gray-500 md:text-[15px] text-[13px]">
              Contact us for dealer and wholesale inquiries
            </p>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex items-center gap-4">
          <div className="relative w-13 h-13 flex items-center justify-center">
            <div className="absolute -bottom-1 -right-1 md:w-11.25 md:h-11.25 h-10 w-10 bg-yellow-500 rounded-full"></div>
            <PiHandshakeLight className="text-brand md:text-[100px] text-[40px] relative z-10" />
          </div>
          <div>
            <h3 className="md:text-[20px] font-semibold text-gray-800">
              Partner With Us
            </h3>
            <p className="text-gray-500 md:text-[15px] text-[13px]">
              Simple onboarding for dealers and distributors
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
              Dedicated Support
            </h3>
            <p className="text-gray-500 md:text-[15px] text-[13px]">
              We're here to assist you with any queries
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FreeShipping
