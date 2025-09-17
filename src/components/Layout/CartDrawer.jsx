import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ isCartOpen, onToggleCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 bg-white z-50 h-full shadow-lg transform transition-transform duration-300 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={onToggleCart}
          className="text-gray-400 hover:text-gray-700 cursor-pointer"
        >
          <IoMdClose className="w-6 h-6" />
        </button>
      </div>
      {/* Cart content with scrollable area */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      </div>
      {/* Checkout button fixed at bottom */}
      <div className="fixed bottom-0 w-full p-4">
        <button className="w-full bg-gray-800 text-gray-200 py-3 rounded font-semibold cursor-pointer">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-center text-gray-700">
          Shipping, taxes and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
