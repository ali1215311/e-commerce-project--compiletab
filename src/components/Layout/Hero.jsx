import { Link } from "react-router";
import heroImg from "../../assets/rabbit-hero.webp";
const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[400px] object-cover md:h-[600px] lg:h-[750px]"
      />
      <div className="absolute inset-0 bg-black/35 flex justify-center items-center text-center">
        <div className="">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase text-white p-6">
            Vacation <br /> Ready
          </h1>
          <p className="text-white text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to={"#"}
            className="bg-gray-200 px-6 py-2 font-semibold rounded"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
