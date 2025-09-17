import { useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 h-24 w-full bg-white z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex justify-center items-center w-full space-x-2"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none w-full placeholder:text-gray-300 text-gray-700 font-medium"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700 cursor-pointer"
            >
              <HiMagnifyingGlass className="w-6 h-6" />
            </button>
          </div>
          <button
            className="text-gray-400 hover:text-gray-700 cursor-pointer"
            onClick={handleSearchToggle}
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </form>
      ) : (
        <button type="button" onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
