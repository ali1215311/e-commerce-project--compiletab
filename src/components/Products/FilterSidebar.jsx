import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];

  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];

  const genders = ["Men", "Women"];
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;

    const filteredItems = { ...filters };
    if (type === "checkbox") {
      if (checked) {
        filteredItems[name] = [...(filteredItems[name] || []), value];
      } else {
        filteredItems[name] = filteredItems[name].filter(
          (size) => size !== value
        );
      }
    } else {
      filteredItems[name] = value;
    }
    setFilters(filteredItems);
    updateURLParams(filteredItems);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    for (let key in newFilters) {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join());
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    }

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4 h-full">
      <div className="">
        <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>
        {/* Category filter */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Category
          </label>
          {categories.map((category) => (
            <div className="flex items-center mb-1" key={category}>
              <input
                type="radio"
                name="category"
                value={category}
                onChange={handleFilterChange}
                checked={filters.category === category}
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{category}</span>
            </div>
          ))}
        </div>
        {/* Gender filter */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Gender</label>
          {genders.map((gender) => (
            <div className="flex items-center mb-1" key={gender}>
              <input
                id={`gender_${gender}`}
                type="radio"
                name="gender"
                value={gender}
                onChange={handleFilterChange}
                checked={filters.gender === gender}
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <label htmlFor={`gender_${gender}`} className="text-gray-700">
                {gender}
              </label>
            </div>
          ))}
        </div>
        {/* Color Filter */}
        <div className="mb-6">
          <label htmlFor="" className="block text-gray-600 font-medium mb-2">
            Color
          </label>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                className={`border rounded-full border-gray-400 w-8 h-8 cursor-pointer transition hover:scale-110 ${
                  filters.color === color ? "ring-2 ring-blue-500" : ""
                }`}
                name="color"
                value={color}
                onClick={handleFilterChange}
                style={{ backgroundColor: color.toLowerCase() }}
                key={color}
              ></button>
            ))}
          </div>
        </div>
        {/* Size Filter */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Sizes</label>
          {sizes.map((size) => (
            <div className="flex items-center mb-1" key={size}>
              <input
                type="checkbox"
                name="size"
                value={size}
                onChange={handleFilterChange}
                checked={filters.size.includes(size)}
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{size}</span>
            </div>
          ))}
        </div>
        {/* Material Filter */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Material
          </label>
          {materials.map((material) => (
            <div className="flex items-center mb-1" key={material}>
              <input
                type="checkbox"
                name="material"
                value={material}
                onChange={handleFilterChange}
                checked={filters.material.includes(material)}
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{material}</span>
            </div>
          ))}
        </div>
        {/* Brand Filter */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">Brand</label>
          {brands.map((brand) => (
            <div className="flex items-center mb-1" key={brand}>
              <input
                type="checkbox"
                name="brand"
                value={brand}
                onChange={handleFilterChange}
                checked={filters.brand.includes(brand)}
                className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
        <div className="mb-8">
          <label className="block text-gray-600 font-medium mb-2">
            Price Range
          </label>
          <input
            type="range"
            name="priceRange"
            min={0}
            max={100}
            value={priceRange[1]}
            onChange={handlePriceChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-gray-600 mt-2">
            <span>$0</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
