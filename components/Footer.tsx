import { Phone, Clock, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2633] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Company / About */}
          <div>
            <h3 className="text-white text-xl mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              We provide reliable transport and logistics services with
              professional support and customer-first solutions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-blue-500 mt-1" size={18} />
                <span>+92 344 2656567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-blue-500 mt-1" size={18} />
                <span>waqasfarooq243@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <span>Plot: 397-398 Gate no: 2 Street: 01, New Quaid-Azam truck stand, Hawksbay Road Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
<div>
  <h3 className="text-white text-xl mb-4">Business Hours</h3>
  <ul className="space-y-3 text-sm">
    <li className="flex items-start gap-3">
      <Clock className="text-blue-500 mt-1" size={18} />
      <span>
        Mon – Fri: <span className="text-blue-500">9am – 11pm</span>
      </span>
    </li>
    <li className="flex items-start gap-3">
      <Clock className="text-blue-500 mt-1" size={18} />
      <span>
        Saturday: <span className="text-blue-500">9am – 11pm</span>
      </span>
    </li>
    <li className="flex items-start gap-3">
      <Clock className="text-blue-500 mt-1" size={18} />
      <span>
        Sunday: <span className="text-blue-500">off</span>
      </span>
    </li>
  </ul>
</div>

    
          <div>
            <h3 className="text-white text-xl mb-4">Social Links</h3>
            <p className="text-sm mb-4">
              Follow us on social media for the latest updates and offers.
            </p>
            <div className="flex justify-start items-center">
              <button className="bg-blue-600 px-4 py-4 cursor-pointer rounded-full text-white">
                <Facebook />
              </button>
              <button className="bg-blue-600 ml-2 px-4 py-4 cursor-pointer rounded-full text-white">
                <Instagram />
              </button>
              <button className="bg-blue-600 ml-2 px-4 py-4 cursor-pointer rounded-full text-white">
                <Twitter />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} New Falcon Hazara. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
