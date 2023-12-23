import ProcessNPC from "./assets/images/Process/processNPC.svg";
import Leaf from "./assets/images/Benefits/leaf.png";

const Process = () => {
  return (
    <div id="Process" className="flex flex-col lg:flex-row w-full h-fit bg-green-200">
      <div className="flex flex-col gap-3 lg:gap-7 relative lg:pt-20 p-8 w-full lg:h-[55vh] lg:w-1/2 text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl">Recycle</h3>
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Transforming Waste into Sustainable Products
        </h1>

        <div className="flex flex-row gap-4 ">
          <button className="px-2 py-2 md:px-4 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg">
            Learn More
          </button>
          <button className="px-2 py-2 space-x-4 md:px-4 md:py-4 text-black rounded-lg text-xs md:text-sm lg:text-lg">
            <span>Sign Up</span>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <img
          src={ProcessNPC}
          className="hidden lg:block absolute bottom-0 translate-x-1/2 w-1/4 h-1/4 lg:w-1/3 lg:h-1/3"
          alt="Process NPC Image"
        />
        <img
          src={ProcessNPC}
          className="lg:hidden relative ml-auto w-44 h-44"
          alt="Process NPC Image"
        />
      </div>
      {/* timeline */}
      <div className="py-20 w-1/2 flex place-items-center">
        <ul className="timeline timeline-vertical">
          <li className="w-full relative -left-1/3">
            <div className="timeline-middle">
              <img src={Leaf} className="my-2" alt="Leaf" />
            </div>
            <div className="timeline-end ml-10 w-screen max-w-xs sm:max-w-md md:max-w-xl lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
              <div className="timeline-box">
                <h3 className="font-black text-lg sm:text-xl md:text-2xl">
                  Collection Process
                </h3>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  We collect recyclable materials from households and
                  businesses, ensuring proper sorting and handling.
                </p>
              </div>
            </div>
            <hr className="bg-green-500" />
          </li>

          <li className="w-full relative -left-1/3">
            <hr className="bg-green-500" />
            <div className="timeline-middle">
              <img src={Leaf} className="my-2" alt="Leaf" />
            </div>
            <div className="timeline-end mt-10 ml-10 w-screen max-w-xs sm:max-w-md md:max-w-xl lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
              <div className="timeline-box">
                <h3 className="font-black text-lg sm:text-xl md:text-2xl">
                  Transformation
                </h3>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  The collected materials are processed and transformed into
                  high-quality sustainable products
                </p>
              </div>
            </div>
            <hr className="bg-green-500" />
          </li>

          <li className="w-full relative -left-1/3">
            <hr className="bg-green-500" />
            <div className="timeline-middle">
              <img src={Leaf} className="my-2" alt="Leaf" />
            </div>
            <div className="timeline-end mt-10 ml-10 w-screen max-w-xs sm:max-w-md md:max-w-xl lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
              <div className="timeline-box">
                <h3 className="font-black text-lg sm:text-xl md:text-2xl">
                  Final Product
                </h3>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  Our final product are eco-friendly and contribute to a
                  greener, more sustainable future.
                </p>
              </div>
            </div>
            <hr className="bg-green-500" />
          </li>

          <li className="w-full relative -left-1/3">
            <hr className="bg-green-500" />
            <div className="timeline-middle">
              <img src={Leaf} className="my-2" alt="Leaf" />
            </div>
            <div className="timeline-end mt-10 ml-10 w-screen max-w-xs sm:max-w-md md:max-w-xl lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
              <div className="timeline-box">
                <h3 className="font-black text-lg sm:text-xl md:text-2xl">
                  Educating Customers
                </h3>
                <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  We believe in raising awareness about recycling and its
                  positive impact on the environment.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Process;
