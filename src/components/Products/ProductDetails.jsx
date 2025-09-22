import { useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  brand: "FashionBrand",
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket perfect for any occasion",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=3" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 150,
    images: [{ url: "https://picsum.photos/500/500?random=4" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 200,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 250,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
];

const ProductDetails = () => {
  const [selectedImg, setSelectedImg] = useState(
    selectedProduct?.images?.[0]?.url || ""
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelcetedColor] = useState("");
  const [quantity, setQuatity] = useState(1);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleQuantityChange = (action) => {
    if (action === "increment") setQuatity((prev) => prev + 1);
    if (action === "decrement" && quantity > 1) setQuatity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select color and size!", { duration: 1000 });
      return;
    }
    setIsBtnDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart.");
      setIsBtnDisabled(false);
    }, 500);
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        {/* Best Seller */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image with thumbnail */}
          <div className="md:w-1/2 flex flex-col-reverse md:flex-row">
            {/* Left Thumbnails */}
            <div className="flex flex-row space-x-2 md:flex-col md:space-y-4 mr-6">
              {selectedProduct.images.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={img.altText || `Thumbnail ${i}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    selectedImg === img.url ? "border-black" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImg(img.url)}
                />
              ))}
            </div>
            {/* Main Image */}
            <div className="">
              <div className="mb-4">
                <img
                  src={selectedImg}
                  alt="Main Product"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}

          <div className="md:w-1/2 md:ml-4 space-y-3">
            <h2 className="font-semibold text-2xl">{selectedProduct.name}</h2>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-gray-400 tracking-wider text-xl">
                $ {selectedProduct.price}
              </p>
              {selectedProduct.originalPrice && (
                <p className="line-through text-sm text-gray-400">
                  {selectedProduct.originalPrice}
                </p>
              )}
            </div>
            <p className="text-gray-600">{selectedProduct.description}</p>
            <div>
              <p className="text-gray-700 mb-1">Color:</p>
              <div className="flex gap-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    className={`h-6 w-6 cursor-pointer rounded-full ${
                      selectedColor === color
                        ? "border-4 border-white"
                        : "border-gray-500"
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                    key={color}
                    onClick={() => setSelcetedColor(color)}
                  ></button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Size:</p>
              <div className="flex gap-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    className={`px-3 py-1.5 border rounded-sm border-gray-300 cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-2">Quantity:</p>
              <div className="flex gap-3">
                <button
                  className="h-6 w-6 flex items-center justify-center bg-gray-400 font-bold cursor-pointer rounded-md text-sm"
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </button>
                <span className="text-gray-700 font-bold">{quantity}</span>
                <button
                  className="w-6 h-6 flex items-center justify-center bg-gray-400 cursor-pointer rounded-md text-sm font-bold"
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`w-full bg-black text-white rounded-md py-2 ${
                isBtnDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-500 cursor-pointer"
              }`}
              disabled={isBtnDisabled}
            >
              {isBtnDisabled ? "Adding..." : "Add to Cart"}
            </button>
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* You may also like */}
        <div className="mt-16">
          <h3 className="text-center font-semibold text-2xl">
            You may also Like
          </h3>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
