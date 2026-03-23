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
            Liron Locks delivers durable and reliable locking solutions built on experience.
            Focused on quality and strength, our products are trusted to perform and last.
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
            <li>+91-9358252692</li>
            <li>wardhanofficials@gmail.com</li>
            <li>
              89A1 Begum Bagh<br/> Aligarh, Uttar Pradesh 202001
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 Liron Locks. All Rights Reserved.</p>
        </div>
      </div>

    </footer>
  );
}