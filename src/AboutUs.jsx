import AboutUsImage from "./assets/images/AboutUs/about us.webp";
import AboutUsNPC from "./assets/images/AboutUs/about us npc.svg";

const AboutUs = () => {
  return (
    <div
      id="AboutUs"
      className="flex flex-col-reverse lg:flex-row-reverse w-full h-[calc(100vh-4rem)]"
    >
      <div className="grid lg:gap-7 h-1/2 lg:h-full p-10 pb-0 sm:px-16 lg:p-14 lg:pb-0 w-full lg:w-1/2 text-left">
        <div className="scale-105 h-1/2">
          <h1 className="-mt-4 mb-4 font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
            About us
          </h1>
          <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Recyco is passionate about recycling, turning waste into
            eco-friendly products. From stationery to home decor, we offer a
            variety of items made from recycled materials. We also provide
            recycling services for those committed to responsible waste
            disposal. Join us in our mission to reduce environmental impact and
            promote a circular economy. Together, we can innovate for a
            sustainable future.
          </p>
        </div>
        <div className="self-end">
          <img
            src={AboutUsNPC}
            className="self-end w-[30%] md:w-[20%] h-fit lg:w-1/2 lg:h-1/2 ml-auto"
            alt="About Us Image"
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-full h-1/2 lg:h-full lg:w-1/2">
        <img
          src={AboutUsImage}
          className="w-full h-full object-center object-cover bg-no-repeat"
          alt="About Us Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutUs;
