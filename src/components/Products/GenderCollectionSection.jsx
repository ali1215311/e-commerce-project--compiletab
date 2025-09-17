import { Link } from "react-router";
import mensCollectionImg from "../../assets/mens-collection.webp";
import womensCollectionImg from "../../assets/womens-collection.webp";
const GenderCollectionSection = () => {
  return (
    <section className=" py-16 px-4 lg:px-0">
      <div className="container mx-auto flex items-center flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <img
            src={womensCollectionImg}
            alt="Women's collection"
            className="object-cover w-full h-[700px]"
          />
          <div className="absolute bottom-8 left-8 bg-white/60 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Women's collection
            </h2>
            <Link
              to={"/products/all?gender=Women"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={mensCollectionImg}
            alt="Men's collection"
            className="object-cover w-full h-[700px]"
          />
          <div className="absolute bottom-8 left-8 bg-white/60 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Men's collection
            </h2>
            <Link
              to={"/products/all?gender=Men"}
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
