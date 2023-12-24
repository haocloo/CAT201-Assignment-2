import ProcessNPC from "./assets/images/Process/processNPC.svg";
import Leaf from "./assets/images/Benefits/leaf.webp";

const Process = ({ displayToast }) => {
  return (
    <div
      id="Process"
      className="relative flex flex-col lg:flex-row w-fit h-[calc(100vh-4rem)] bg-green-200"
    >
      <div className="flex flex-col gap-3 lg:gap-7 relative h-1/3 lg:h-full p-10 pb-0 lg:p-14 lg:pt-20 w-full lg:w-1/2 text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl">Recycle</h3>
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Transforming Waste into Sustainable Products
        </h1>

        <div className="flex flex-row gap-4">
          <button
            onClick={() => displayToast()}
            className="px-2 py-2 md:px-4 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Learn More
          </button>
          <button
            onClick={() => displayToast()}
            className="px-2 py-2 space-x-4 md:px-4 md:py-4 text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            <span>Sign Up</span>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <img
          src={ProcessNPC}
          className="hidden lg:flex absolute bottom-0 translate-x-1/2 w-1/4 h-1/4 lg:w-2/5 lg:h-2/5"
          alt="Process NPC Image"
          loading="lazy"
        />
      </div>
      <img
        src={ProcessNPC}
        className="lg:hidden absolute top-[calc(10vh+65px)] right-6 w-[18%] h-[18%]"
        alt="Process NPC Image"
        loading="lazy"
      />
      {/* timeline */}
      <div className="w-full lg:w-1/2 h-fit lg:h-full grid lg:place-items-center">
        <ul className="timeline timeline-vertical scale-[85%] -left-[12%] sm:-left-[15%] lg:left-0 lg:scale-90">
          <li className="w-full relative -left-1/3">
            <div className="timeline-middle">
              <img src={Leaf} className="my-2 ml-3 -mr-3 md:mx-0 h-[75%] w-[75%] md:h-[95%] md:w-[95%]" alt="Leaf" loading="lazy" />
            </div>
            <div className="timeline-end ml-10 w-[calc(100vw-4rem)] lg:w-[calc(50vw-12rem)]">
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
              <img src={Leaf} className="my-2 ml-3 -mr-3 md:mx-0 h-[75%] w-[75%] md:h-[95%] md:w-[95%]" alt="Leaf" loading="lazy" />
            </div>
            <div className="timeline-end ml-10 mt-10 w-[calc(100vw-4rem)] lg:w-[calc(50vw-12rem)]">
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
              <img src={Leaf} className="my-2 ml-3 -mr-3 md:mx-0 h-[75%] w-[75%] md:h-[95%] md:w-[95%]" alt="Leaf" loading="lazy" />
            </div>
            <div className="timeline-end ml-10 mt-10 w-[calc(100vw-4rem)] lg:w-[calc(50vw-12rem)]">
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
              <img src={Leaf} className="my-2 ml-3 -mr-3 md:mx-0 h-[75%] w-[75%] md:h-[95%] md:w-[95%]" alt="Leaf" loading="lazy" />
            </div>
            <div className="timeline-end ml-10 mt-10 w-[calc(100vw-4rem)] lg:w-[calc(50vw-12rem)]">
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
