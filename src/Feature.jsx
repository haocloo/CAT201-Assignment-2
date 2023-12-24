const Feature = () => {
  return (
    <div id="Feature" className="flex flex-col-reverse lg:flex-row w-full ">
      <div className="flex flex-col gap-3 lg:gap-7 lg:justify-center lg:h-[100vh] p-8 w-full lg:w-1/2 text-left">
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
          <button className="px-2 py-2 md:px-4 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg">
            Learn More
          </button>
          <button className="px-2 py-2 space-x-4 md:px-4 md:py-4 text-black rounded-lg text-xs md:text-sm lg:text-lg">
            <span>Sign Up</span>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="hidden lg:block -mt-24 relative h-full w-1/2 ">
        <div className="hover:scale-125 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[100px] left-[188px] xl:left-[218px] bg-[url(./assets/images/Feature/product1.png)] absolute w-64 h-64 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%] z-10"></div>
        <div className="hover:scale-125 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[260px] left-0                       bg-[url(./assets/images/Feature/product2.png)] absolute w-64 h-64 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%] z-8"></div>
        <div className="hover:scale-125 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[420px] left-[188px] xl:left-[218px] bg-[url(./assets/images/Feature/product3.png)] absolute w-64 h-64 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%] z-9"></div>
        <div className="hover:scale-125 transition-all duration-500 ease-in-out ml-16 xl:ml-28 top-[580px] left-0                       bg-[url(./assets/images/Feature/product4.png)] absolute w-64 h-64 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%] z-10"></div>
      </div>

      <div className="lg:hidden relative w-full h-32 md:h-48 flex flex-row">
        <div className="left-8             bg-[url(./assets/images/Feature/product1.png)] absolute w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%]"></div>
        <div className="left-20 md:left-28 bg-[url(./assets/images/Feature/product2.png)] absolute w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%]"></div>
        <div className="left-32 md:left-48 bg-[url(./assets/images/Feature/product3.png)] absolute w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%]"></div>
        <div className="left-44 md:left-72 bg-[url(./assets/images/Feature/product4.png)] absolute w-28 h-28 md:w-48 md:h-48 rounded-full overflow-hidden shadow-[4px_8px_10px_#0000004c] bg-cover bg-[50%_50%]"></div>
      </div>
    </div>
  );
};

export default Feature;
