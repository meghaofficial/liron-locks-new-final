import { HiArrowRight } from "react-icons/hi2";
import Timer from "./Timer";

export default function FlashSale() {

  return (
    <>
      <div className="w-full p-6 flex flex-col md:flex-row items-center justify-between md:my-7 my-5 md:gap-14 gap-10">

        {/* LEFT CONTENT */}
        <div className="space-y-4 bg-gray-100 w-full h-100 rounded-3xl p-6 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold">
            Flash <span className="text-brand">Sale!</span>
          </h2>
          <p className="text-gray-600">
            Get 25% off - Limited Time Offer!
          </p>
          <Timer />
          <button className="flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-full cursor-pointer transition">
            Shop Now
            <HiArrowRight />
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex sm:flex-row flex-col gap-6 w-full items-center justify-center">
          <video
            src="https://res.cloudinary.com/dlmdsldqn/video/upload/v1772650546/grok_video_2026-03-05-00-23-57_d0sn9k.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-1/2 w-full h-100 object-cover rounded-[20px]"
          />

          <video
            src="https://res.cloudinary.com/dlmdsldqn/video/upload/v1772649366/km_20260305-1_1080p_60f_20260305_000543_f7zr3s.3gp"
            autoPlay
            loop
            muted
            playsInline
            className="sm:w-1/2 w-full h-100 object-cover rounded-[20px]"
          />
        </div>

      </div>
    </>
  );
}