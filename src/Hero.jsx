import HeroImage from "./assets/images/Hero/Hero.webp";

const Hero = ({ displayToast }) => {
  return (
    <div
      id="Hero"
      className="flex flex-col-reverse lg:flex-row w-full h-[calc(100vh-4rem)]"
    >
      <div className="lg:scale-105 flex flex-col gap-3 lg:gap-7 justify-center h-full lg:h-full p-10 sm:px-16 lg:p-14 w-full lg:w-1/2 text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Transforming Waste into Sustainable Solutions
        </h1>
        <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          At our company, we are dedicated to creating a greener future by
          recycling and repurposing waste materials. Through innovative
          processes and a commitment to sustainability, we transform discarded
          items into high-quality products that benefit both the environment and
          our customers.
        </p>

        <div className="flex flex-row gap-4 ">
          <button className="px-6 py-2 md:py-4 bg-primary text-white rounded-lg text-xs md:text-sm lg:text-lg">
            <a href="#AboutUs">Discover</a>
          </button>
          <button
            onClick={() => displayToast()}
            className="px-2 py-2 md:px-4 md:py-4 bg-secondary border border-black/50 text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-2/3 lg:h-full lg:w-1/2">
        <img
          src={HeroImage}
          className="w-full h-full object-center object-cover bg-no-repeat"
          alt="Hero Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Hero;
