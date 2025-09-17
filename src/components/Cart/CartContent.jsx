import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=4",
    },
    {
      productId: 5,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=5",
    },
    {
      productId: 6,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=6",
    },
    {
      productId: 7,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=7",
    },
    {
      productId: 8,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=8",
    },
    {
      productId: 9,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=9",
    },
    {
      productId: 10,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=10",
    },
    {
      productId: 11,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=11",
    },
    {
      productId: 12,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=12",
    },
    {
      productId: 13,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=13",
    },
    {
      productId: 14,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=14",
    },
    {
      productId: 15,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=15",
    },
    {
      productId: 16,
      name: "T-Shirt",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=16",
    },
  ];
  return (
    <div className="h-3/4 flex flex-col p-4 space-y-4 overflow-y-scroll">
      {cartProducts.map((product) => (
        <div key={product.productId} className="shadow-xl bg-white rounded">
          <div className="flex justify-between">
            <div className="flex">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-20 mr-3 object-cover rounded"
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-xs text-gray-500">
                  Size: {product.size} | Color: {product.color}
                </p>
                <div className="flex gap-3 items-center mt-2">
                  <button className="cursor-pointer h-5 w-5 bg-gray-300 flex items-center justify-center rounded text-xl font-bold">
                    -
                  </button>
                  1
                  <button className="cursor-pointer h-5 w-5 bg-gray-300 flex items-center justify-center rounded text-xl font-bold">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col justify-between items-center">
              <p>$ {product.price.toLocaleString()}</p>
              <button className="cursor-pointer">
                <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
