import Image from "next/image";
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8 px-4">
      <footer className="max-width md:max-w-[1000px] flex flex-col gap-8">
        {/* Top Section: Logo and Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/icons/Logo.svg"
              width={120}
              height={40}
              alt="entapp tech logo"
              className="w-auto h-8"
            />
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left space-y-2">
            <p className="font-semibold mb-3 text-lg">Contact Us</p>
            
            {/* Address with Map Icon */}
            <a 
              href="https://maps.google.com/?q=2805+Foster+Avenue+Suite+204+Nashville+TN+37210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-secondary transition-colors flex items-center justify-center md:justify-end gap-2 cursor-pointer"
            >
              <MapPin size={16} />
              <span>
                2805 Foster Avenue, Suite 204<br />
                Nashville, TN 37210
              </span>
            </a>
            
            {/* Phone with Phone Icon */}
            <a 
              href="tel:+16155242890"
              className="text-gray-200 hover:text-secondary transition-colors flex items-center justify-start gap-2 cursor-pointer mt-2"
            >
              <Phone size={16} />
              <span>+1 (615) 524-2890</span>
            </a>
            {/* email Icon */}
            <a 
              href="mailto:support@entapptech.com"
              className="text-gray-200 hover:text-secondary transition-colors flex items-center justify-start gap-2 cursor-pointer mt-2"
            >

              <Mail size={16} />
              <span>support@entapptech.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright - Always at the bottom */}
        <div className="border-t border-gray-600 pt-4 mt-4">
          <div className="text-center text-[14px] text-gray-300">
            <span>
              <span className="text-secondary font-semibold">ENTAPP</span> 
              {" "}Copyright © 2025 All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;