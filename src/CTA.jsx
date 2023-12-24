import CTAImage from "./assets/images/CTA/CTA.png";

const CTA = () => {
  return (
    <div id="CTA" className="flex flex-col-reverse lg:flex-row w-full ">
      <div className="flex flex-col gap-3 lg:gap-7 lg:justify-center lg:h-[100vh] p-10 lg:p-14 w-full lg:w-1/2 text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Discover the Power of Recycling
        </h1>
        <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Join our recycling program and make a positive impact on the
          environment.
        </p>

        <div className="flex flex-row gap-4 ">
          <button className="px-12 py-2 md:py-4 bg-black text-white rounded-lg text-xs md:text-sm lg:text-lg">
            Join
          </button>
          <button className="px-6 py-2 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-72 lg:h-[100vh] lg:w-1/2">
        <img
          src={CTAImage}
          className="w-full h-full object-center object-cover bg-no-repeat"
          alt="CTA Image"
        />
      </div>
    </div>
  );
};

export default CTA;
