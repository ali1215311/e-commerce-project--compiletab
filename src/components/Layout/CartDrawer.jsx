import { IoMdClose } from "react-icons/io";

const CartDrawer = ({ isCartOpen, onToggleCart }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 bg-white z-50 h-full transition-transform duration-300 ${
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
    </div>
  );
};

export default CartDrawer;
