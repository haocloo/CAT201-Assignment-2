import ProcessNPC from "./assets/images/Process/processNPC.svg";
import Leaf from "./assets/images/Benefits/leaf.webp";

const Process = ({ displayToast }) => {
  return (
    <div
      id="Process"
      className="relative flex flex-col lg:flex-row w-fit max-h-fit min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] bg-[#024b36] text-white"
    >
      <div className="flex flex-col gap-3 lg:gap-7 relative h-1/3 lg:h-full p-10 pl-5 pt-5 pb-0 lg:p-14 lg:pt-20 w-full lg:w-1/2 text-left">
        <h3 className="text-lg sm:text-xl md:text-2xl">Recycle</h3>
        <h1 className="font-bold pr-5 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Transforming Waste into Sustainable Products
        </h1>

        <div className="flex flex-row gap-4">
          <button
            onClick={() => displayToast()}
            className="hover:outline-primary hover:font-bold hover:border-[#024b36] hover:outline outline-offset-4 transition-all ease-in-out duration-300 px-2 py-2 md:px-4 md:py-4 border border-white rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Learn More
          </button>
          <button
            onClick={() => displayToast()}
            className="hover:font-bold transition-all ease-in-out duration-300 px-2 py-2 space-x-4 md:px-4 md:py-4 rounded-lg text-xs md:text-sm lg:text-lg"
          >
            <span>Sign Up</span>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <img
          src={ProcessNPC}
          className="hidden lg:flex absolute bottom-0 translate-x-[80%] w-1/4 h-1/4 lg:w-2/5 lg:h-2/5"
          alt="Process NPC Image"
          loading="lazy"
        />
      </div>
      {/* timeline */}
      <div className="w-full lg:w-1/2 h-fit md:h-full grid lg:place-items-center">
        <ul className="timeline timeline-vertical scale-[85%] -left-[12%] sm:-left-[15%] lg:-left-[7%] lg:scale-90">
          <li className="-mt-3 lg:mt-0 w-full relative -left-1/3">
            <div className="timeline-middle">
              <img
                src={Leaf}
                className="my-2 ml-10 lg:ml-3 -mr-3 md:mx-0 h-[60%] w-[65%] md:h-[95%] md:w-[95%]"
                alt="Leaf"
                loading="lazy"
              />
            </div>
            <div className="timeline-end ml-10 w-[calc(100vw-6rem)] lg:w-[calc(50vw-14rem)]">
              <div className="relative timeline-box">
                <img
                  src={ProcessNPC}
                  className="lg:hidden absolute -mt-36 top-0 -right-6 w-36 h-36"
                  alt="Process NPC Image"
                  loading="lazy"
                />
                <h3 className="text-black font-black text-lg sm:text-xl md:text-2xl">
                  Collection Process
                </h3>
                <p className="text-black text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  We collect recyclable materials from households and
                  businesses, ensuring proper sorting and handling.
                </p>
              </div>
            </div>
            <hr className="bg-secondary ml-10 md:ml-0 lg:ml-4" />
          </li>

          <li className="-mt-3 lg:mt-0 w-full relative -left-1/3">
            <hr className="bg-secondary ml-10 md:ml-0 lg:ml-4" />
            <div className="timeline-middle">
              <img
                src={Leaf}
                className="my-2 ml-10 lg:ml-3 -mr-3 md:mx-0 h-[60%] w-[65%] md:h-[95%] md:w-[95%]"
                alt="Leaf"
                loading="lazy"
              />
            </div>
            <div className="timeline-end ml-10 mt-10 w-[calc(100vw-6rem)] lg:w-[calc(50vw-14rem)]">
              <div className="timeline-box">
                <h3 className="text-black font-black text-lg sm:text-xl md:text-2xl">
                  Transformation
                </h3>
                <p className="text-black text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  The collected materials are processed and transformed into
                  high-quality sustainable products
                </p>
              </div>
            </div>
            <hr className="bg-secondary ml-10 md:ml-0 lg:ml-4" />
          </li>

          <li className="-mt-3 lg:mt-0 w-full relative -left-1/3">
            <hr className="bg-secondary ml-10 md:ml-0 lg:ml-4" />
            <div className="timeline-middle">
              <img
                src={Leaf}
                className="my-2 ml-10 lg:ml-3 -mr-3 md:mx-0 h-[60%] w-[65%] md:h-[95%] md:w-[95%]"
                alt="Leaf"
                loading="lazy"
              />
            </div>
            <div className="timeline-end ml-10 mt-10 w-[calc(100vw-6rem)] lg:w-[calc(50vw-14rem)]">
              <div className="timeline-box">
                <h3 className="text-black font-black text-lg sm:text-xl md:text-2xl">
                  Final Product
                </h3>
                <p className="text-black text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  Our final product are eco-friendly and contribute to a
                  greener, more sustainable future.
                </p>
              </div>
            </div>
            <hr className="bg-secondary ml-10 md:ml-0 lg:ml-4" />
          </li>

          <li className="-mt-3 lg:mt-0 w-full relative -left-1/3">
            <hr className="bg-secondary ml-10 md:ml-0 lg:ml-4" />
            <div className="timeline-middle">
              <img
                src={Leaf}
                className="my-2 ml-10 lg:ml-3 -mr-3 md:mx-0 h-[60%] w-[65%] md:h-[95%] md:w-[95%]"
                alt="Leaf"
                loading="lazy"
              />
            </div>
            <div className="timeline-end ml-10 mt-10 w-[calc(100vw-6rem)] lg:w-[calc(50vw-14rem)]">
              <div className="timeline-box">
                <h3 className="text-black font-black text-lg sm:text-xl md:text-2xl">
                  Educating Customers
                </h3>
                <p className="text-black text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
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
