import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturedSection from "../components/Products/FeaturedSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeHolderProducts = [
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

const Home = () => {
  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4 mt-16">Best Seller</h2>
      <ProductDetails />

      {/* Women's collection */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-700">
          Womens Collection
        </h2>
        <ProductGrid products={placeHolderProducts} />
      </div>
      <FeaturedCollection />
      <FeaturedSection />
    </>
  );
};

export default Home;
