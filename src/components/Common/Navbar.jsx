import {
  HiBars3BottomRight,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi2";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left - Logo */}
        <div className="text-2xl font-medium">
          <Link to={"/"}>Rabbit</Link>
        </div>
        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to={"#"}
            className="text-gray-600 hover:text-black text-sm font-medium uppercase"
          >
            Men
          </Link>
          <Link
            to={"#"}
            className="text-gray-600 hover:text-black text-sm font-medium uppercase"
          >
            Women
          </Link>
          <Link
            to={"#"}
            className="text-gray-600 hover:text-black text-sm font-medium uppercase"
          >
            Top Wear
          </Link>
          <Link
            to={"#"}
            className="text-gray-600 hover:text-black text-sm font-medium uppercase"
          >
            Bottome Wear
          </Link>
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            className="relative hover:text-black"
            onClick={handleCartToggle}
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5 ">
              4
            </span>
          </button>
          {/* Search */}
          <SearchBar />

          <button className="md:hidden" onClick={handleMenuToggle}>
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        {/* Menu Items Mobile responsive */}
        <div
          className={`md:hidden absolute top-0 left-0 w-1/2 h-full bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end p-5 pb-0">
            <button
              onClick={handleMenuToggle}
              className="text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <IoMdClose className="w-6 h-6" />
            </button>
          </div>
          <div className="text-2xl font-medium text-center p-5">
            <Link to={"/"}>Rabbit</Link>
          </div>
          <div className="flex flex-col text-center space-y-6">
            <Link
              to={"#"}
              className="text-gray-600 hover:text-black text-sm font-medium uppercase"
            >
              Men
            </Link>
            <Link
              to={"#"}
              className="text-gray-600 hover:text-black text-sm font-medium uppercase"
            >
              Women
            </Link>
            <Link
              to={"#"}
              className="text-gray-600 hover:text-black text-sm font-medium uppercase"
            >
              Top Wear
            </Link>
            <Link
              to={"#"}
              className="text-gray-600 hover:text-black text-sm font-medium uppercase"
            >
              Bottome Wear
            </Link>
          </div>
        </div>
      </nav>
      <CartDrawer isCartOpen={isCartOpen} onToggleCart={handleCartToggle} />
    </>
  );
};

export default Navbar;
