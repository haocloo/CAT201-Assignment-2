import BenefitsImage from "./assets/images/Benefits/benefits.webp";
import Leaf from "./assets/images/Benefits/leaf.webp";

const Benefits = () => {
  return (
    <div
      id="Benefits"
      className="flex flex-col-reverse lg:flex-row w-full sm:pt-0 items-center h-[calc(100vh-4rem)]"
    >
      <div className="flex flex-col gap-6 lg:gap-9 justify-center h-1/2 lg:h-full px-10 lg:px-14 my-5 w-full lg:w-1/2 text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Discover the Benefits of Using Recycled Products
        </h1>
        <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Choosing recycled products not only helps the environment but also
          improves your overall well-being. By reducing waste and conserving
          resources, you can make a positive impact on the planet while enjoying
          high-quality, sustainable products.
        </p>
        <ul className="list-inside space-y-3">
          <div className="flex items-center space-x-3">
            <img
              src={Leaf}
              className="h-[7%] w-[7%] lg:h-[11%] lg:w-[11%]"
              alt="Leaf"
              loading="lazy"
            />
            <li className="text-justify text-xs sm:text-sm md:text-base lg:text-lg ">
              Eco-friendly materials for a greener future
            </li>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src={Leaf}
              className="h-[7%] w-[7%] lg:h-[11%] lg:w-[11%]"
              alt="Leaf"
              loading="lazy"
            />
            <li className="text-justify text-xs sm:text-sm md:text-base lg:text-lg ">
              Support sustainable practices and responsible consumption
            </li>
          </div>
          <div className="flex items-center space-x-3">
            <img
              src={Leaf}
              className="h-[7%] w-[7%] lg:h-[11%] lg:w-[11%]"
              alt="Leaf"
              loading="lazy"
            />
            <li className="text-justify text-xs sm:text-sm md:text-base lg:text-lg ">
              Reduce waste and protect the environment
            </li>
          </div>
        </ul>
      </div>
      <div className="w-full h-1/2 lg:h-full lg:w-1/2">
        <img
          src={BenefitsImage}
          className="lg:scale-75 w-full h-full object-center object-cover bg-no-repeat"
          alt="Benefits Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Benefits;
