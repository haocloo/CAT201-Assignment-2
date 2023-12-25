import CTAImage from "./assets/images/CTA/CTA.webp";

const CTA = ({ displayToast }) => {
  return (
    <div
      id="CTA"
      className="flex flex-col-reverse lg:flex-row w-full h-[calc(100vh-4rem)]"
    >
      <div className="scale-100  sm:scale-110 flex flex-col gap-3 lg:gap-7 items-start justify-center h-1/3 lg:h-full p-10 px-10 sm:px-16 md:px-24 lg:p-14 lg:px-24 w-full lg:w-1/2 text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Discover the Power of Recycling
        </h1>
        <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Join our recycling program and make a positive impact on the
          environment.
        </p>

        <div className="flex flex-row gap-4 ">
          <button
            onClick={() => displayToast()}
            className="hover:outline-primary hover:font-bold hover:border-primary hover:outline outline-offset-4 transition-all ease-in-out duration-300 px-10 py-2 md:py-4 bg-primary text-white rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Join
          </button>
          <button
            onClick={() => displayToast()}
            className="hover:outline-primary hover:font-bold hover:border-secondary hover:outline outline-offset-4 transition-all ease-in-out duration-300 px-6 py-2 md:py-4 border bg-secondary border-black/50 text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-2/3 lg:h-full lg:w-1/2">
        <img
          src={CTAImage}
          className="w-full h-full object-center object-cover bg-no-repeat"
          alt="CTA Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CTA;
