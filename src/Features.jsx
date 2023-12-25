const Features = ({ handleClick }) => {
  return (
    <div
      id="Features"
      className="flex flex-col-reverse lg:flex-row w-full h-[calc(100vh-4rem)]"
    >
      <div className="flex flex-col gap-3 lg:gap-7 lg:justify-center h-1/2 lg:h-full px-10 my-5 lg:p-14 w-full lg:w-1/2 text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl">Eco-friendly</h3>
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Quality Recycled Products for a Sustainable Future
        </h1>
        <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          At our company, we are dedicated to creating a greener future by
          recycling and repurposing waste materials. Through innovative
          processes and a commitment to sustainability, we transform discarded
          items into high-quality products that benefit both the environment and
          our customers.
        </p>

        <div className="flex flex-row gap-4 ">
          <button className="px-2 py-2 md:px-4 md:py-4 bg-secondary border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg">
            <a href="#Benefits">Learn More</a>
          </button>
          <button
            onClick={() => handleClick()}
            className="px-2 py-2 space-x-4 md:px-4 md:py-4 text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            <span>Sign Up</span>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex flex-col justify-center items-center relative h-full w-1/2 ">
        <div className="absolute hover:scale-110 scale-90 xl:scale-100 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[3%]  left-[30%] xl:left-[33%] bg-[url(./assets/images/Feature/product1.webp)] w-64 h-64 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover z-10"></div>
        <div className="absolute hover:scale-110 scale-90 xl:scale-100 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[22%] left-0     xl:left-[10%] bg-[url(./assets/images/Feature/product2.webp)] w-64 h-64 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover z-8"></div>
        <div className="absolute hover:scale-110 scale-90 xl:scale-100 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[42%] left-[30%] xl:left-[33%] bg-[url(./assets/images/Feature/product3.webp)] w-64 h-64 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover z-9"></div>
        <div className="absolute hover:scale-110 scale-90 xl:scale-100 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[62%] left-0     xl:left-[10%] bg-[url(./assets/images/Feature/product4.webp)] w-64 h-64 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover z-10"></div>
      </div>

      <div className="lg:hidden relative w-full h-1/2 flex flex-row items-center">
        <div className="left-[10%] sm:left-[5%]  hover:scale-125 transition-all duration-500 ease-in-out bg-[url(./assets/images/Feature/product1.webp)] absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover"></div>
        <div className="left-[25%] sm:left-[20%] hover:scale-125 transition-all duration-500 ease-in-out bg-[url(./assets/images/Feature/product2.webp)] absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover"></div>
        <div className="left-[40%] sm:left-[35%] hover:scale-125 transition-all duration-500 ease-in-out bg-[url(./assets/images/Feature/product3.webp)] absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover"></div>
        <div className="left-[55%] sm:left-[50%] hover:scale-125 transition-all duration-500 ease-in-out bg-[url(./assets/images/Feature/product4.webp)] absolute w-36 h-36 sm:w-48 sm:h-48 rounded-full shadow-[4px_8px_10px_#0000004c] bg-cover"></div>
      </div>
    </div>
  );
};

export default Features;
