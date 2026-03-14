import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-10 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div className="lg:col-span-1">
          <Logo imgH={12} textSize={20} color="white" />

          <p className="text-gray-300 text-[12px] leading-relaxed mb-6 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center cursor-pointer transition"
                >
                  <Icon size={16} />
                </div>
              )
            )}
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Career</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="font-semibold mb-4">Customer Services</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Track Your Order</li>
            <li className="hover:text-white cursor-pointer">Return</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold mb-4">Our Information</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">
              User Terms & Condition
            </li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>+0123-456-789</li>
            <li>example@gmail.com</li>
            <li>
              8502 Preston Rd. <br />
              Inglewood, Maine 98380
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">

          <p>Copyright © 2024 Furniture. All Rights Reserved.</p>

          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span className="cursor-pointer">English ▼</span>
            <span>|</span>
            <span className="cursor-pointer">USD ▼</span>
          </div>

        </div>
      </div>

    </footer>
  );
}