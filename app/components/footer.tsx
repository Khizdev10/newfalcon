import { Phone, Clock, Mail, MapPin } from "lucide-react";

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
                <span>waqasfarooq@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 mt-1" size={18} />
                <span>2 Hawksbay Rd, Mauripur, Karachi, Pakistan</span>
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
        Mon – Fri: <span className="text-blue-500">9am – 10pm</span>
      </span>
    </li>
    <li className="flex items-start gap-3">
      <Clock className="text-blue-500 mt-1" size={18} />
      <span>
        Saturday: <span className="text-blue-500">9am – 5pm</span>
      </span>
    </li>
    <li className="flex items-start gap-3">
      <Clock className="text-blue-500 mt-1" size={18} />
      <span>
        Sunday & Holidays: <span className="text-blue-500">Closed</span>
      </span>
    </li>
  </ul>
</div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3  py-2 text-white outline-none bg-gray-700"
              />
              <button className="bg-blue-600 px-4 text-white">
                Subscribe
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
