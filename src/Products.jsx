import { useEffect, useRef } from "react";

import Product1 from "./assets/images/Products/Product1.jpeg";
import Product2 from "./assets/images/Products/Product2.jpeg";
import Product3 from "./assets/images/Products/Product3.jpeg";
import Product4 from "./assets/images/Products/Product4.jpeg";
import Product5 from "./assets/images/Products/Product5.jpeg";

const Products = ({ displayToast }) => {
  const carouselElement = useRef(null);

  useEffect(() => {
    carouselElement.current = document.querySelector(".carousel");
  }, []);

  const scrollCarousel = (targetImageNumber) => {
    if (!carouselElement.current) {
      console.error('Element with class name "carousel" not found');
      return;
    }

    let carouselWidth = carouselElement.current.clientWidth;
    // Images are numbered from 1 to 4 so that's why we subtract 1
    let targetImage = targetImageNumber - 1;

    let targetXPixel = carouselWidth * targetImage + 1;

    carouselElement.current.scrollTo(targetXPixel, 0);
  };

  return (
    <div
      id="Products"
      className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] items-center w-full py-10"
    >
      <div className="flex flex-col gap-3 lg:gap-7 lg:justify-center lg:h-fit p-10 lg:p-14 w-full lg:w-1/2 text-left">
        <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
          Discover Our Eco-Friendly Products
        </h1>
        <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Explore our wide range of sustainable and recycled products that help
          protect the environment.
        </p>

        <div className="flex flex-row gap-4 ">
          <button
            onClick={() => displayToast()}
            className="px-2 py-2 md:px-4 md:py-4 bg-black text-white rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Sign Up
          </button>
          <button
            onClick={() => displayToast()}
            className="px-2 py-2 md:px-4 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg"
          >
            Shop now
          </button>
        </div>
      </div>

      <div className="w-full h-fit lg:h-fit lg:w-1/2 grid justify-items-center">
        <div className="carousel h-80 w-[90%]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={Product1} className="w-full object-cover object-center" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                onClick={() => scrollCarousel(5)}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => scrollCarousel(2)}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={Product2} className="w-full object-cover object-center" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                onClick={() => scrollCarousel(1)}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => scrollCarousel(3)}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={Product3} className="w-full object-cover object-center" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                onClick={() => scrollCarousel(2)}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => scrollCarousel(4)}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={Product4} className="w-full object-cover object-center" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                onClick={() => scrollCarousel(3)}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => scrollCarousel(5)}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={Product5} className="w-full object-cover object-center" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button
                onClick={() => scrollCarousel(4)}
                className="btn btn-circle"
              >
                ❮
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                className="btn btn-circle"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
