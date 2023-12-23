import AboutUsImage from "./assets/images/AboutUs/about us.png";
import AboutUsNPC from "./assets/images/AboutUs/about us npc.svg";

const AboutUs = () => {
  return (
    <div id="AboutUs" className="flex flex-col-reverse lg:flex-row-reverse w-full ">
      <div className="flex flex-col justify-center gap-3 lg:gap-7 lg:h-[100vh] p-8 w-full lg:w-1/2 text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          About us
        </h1>

        <div>
          <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
            Recyco is passionate about recycling, turning waste into
            eco-friendly products. From stationery to home decor, we offer a
            variety of items made from recycled materials. We also provide
            recycling services for those committed to responsible waste
            disposal. Join us in our mission to reduce environmental impact and
            promote a circular economy. Together, we can innovate for a
            sustainable future.
          </p>
          <img
            src={AboutUsNPC}
            className="mt-20 w-1/4 h-1/4 lg:w-1/2 lg:h-1/2 float-right"
            alt="About Us Image"
          />
        </div>
      </div>
      <div className="w-full h-72 lg:h-[100vh] lg:w-1/2">
        <img
          src={AboutUsImage}
          className="w-full h-full object-center object-cover bg-no-repeat"
          alt="About Us Image"
        />
      </div>
    </div>
  );
};

export default AboutUs;
