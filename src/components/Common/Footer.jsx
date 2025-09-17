import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 py-12 gap-12">
          {/* Newsletter */}
          <div className="">
            <h3 className="text-xl font-semibold text-gray-700 mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-3">
              Be the first to hear about new products, exclusive events, and
              online offers.
            </p>
            <p className="text-sm tracking-tight text-gray-500 font-bold mb-4">
              Sign up and get 10% off your first order
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="grow outline-none border-2 border-r-0 focus:border-gray-600 rounded-l-lg px-4 py-3 border-gray-400 text-gray-600 font-semibold"
                required
              />
              <button className="cursor-pointer border-2 border-black rounded-r-lg px-4 py-3 bg-black text-gray-200 font-bold">
                Subscribe
              </button>
            </div>
          </div>
          {/* Shop Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Shop</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>Men's Top Wear</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>Women's Top Wear</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>Men's Bottom Wear</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>Women's Bottom Wear</Link>
              </li>
            </ul>
          </div>
          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>Contact Us</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>About Us</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>FAQs</Link>
              </li>
              <li className="text-gray-600 hover:text-gray-800 hover:font-semibold">
                <Link to={"#"}>Features</Link>
              </li>
            </ul>
          </div>
          {/* Social Media links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-6">
              <a href="#" className="hover:text-gray-400">
                <TbBrandMeta className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <IoLogoInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <RiTwitterXLine className="h-4 w-4" />
              </a>
            </div>
            <div className="">
              <p className="font-semibold text-gray-700">Call Us</p>
              <a
                href="tel:+1234567890"
                className="font-semibold hover:text-gray-400"
              >
                (+1) 234 567-890
              </a>
            </div>
          </div>
        </div>
        <p className="text-center border-t border-gray-200 pt-2 text-gray-500 font-semibold">
          &copy; 2025, Mohammad Ali | CompileTab
        </p>
      </footer>
    </>
  );
};

export default Footer;
