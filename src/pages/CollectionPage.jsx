import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    //   Close sidebar if clicked outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
        {
          _id: 6,
          name: "Product 6",
          price: 120,
          images: [{ url: "https://picsum.photos/500/500?random=8" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 180,
          images: [{ url: "https://picsum.photos/500/500?random=9" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 220,
          images: [{ url: "https://picsum.photos/500/500?random=10" }],
        },
        {
          _id: 9,
          name: "Product 9",
          price: 90,
          images: [{ url: "https://picsum.photos/500/500?random=11" }],
        },
        {
          _id: 10,
          name: "Product 10",
          price: 140,
          images: [{ url: "https://picsum.photos/500/500?random=12" }],
        },
        {
          _id: 11,
          name: "Product 11",
          price: 175,
          images: [{ url: "https://picsum.photos/500/500?random=13" }],
        },
        {
          _id: 12,
          name: "Product 12",
          price: 260,
          images: [{ url: "https://picsum.photos/500/500?random=14" }],
        },
        {
          _id: 13,
          name: "Product 13",
          price: 310,
          images: [{ url: "https://picsum.photos/500/500?random=15" }],
        },
      ];
      setProducts(fetchProducts);
    }, 1000);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed left-0 inset-y-0 z-50 w-64 bg-white overflow-y-auto lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* sort options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
