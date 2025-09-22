import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Casual Sneakers",
      price: 85,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Casual Sneakers",
        },
      ],
    },
    {
      _id: "3",
      name: "Classic Watch",
      price: 200,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Classic Watch",
        },
      ],
    },
    {
      _id: "4",
      name: "Leather Backpack",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Leather Backpack",
        },
      ],
    },
    {
      _id: "5",
      name: "Slim Fit Jeans",
      price: 95,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Slim Fit Jeans",
        },
      ],
    },
    {
      _id: "6",
      name: "Summer T-Shirt",
      price: 40,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Summer T-Shirt",
        },
      ],
    },
    {
      _id: "7",
      name: "Elegant Handbag",
      price: 180,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Elegant Handbag",
        },
      ],
    },
    {
      _id: "8",
      name: "Elegant Golla",
      price: 160,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Elegant Golla",
        },
      ],
    },
  ];

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = startX - x;
      scrollRef.current.scrollLeft = scrollLeft + walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft + container.clientWidth < container.scrollWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
    }
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="py-16 px-4 lg:p-0">
      <div className="container mx-auto text-center mb-10 relative ">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion
        </p>
        {/* Scroll Button */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUpOrLeave}
        onMouseUp={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-full sm:min-w-1/2 lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
