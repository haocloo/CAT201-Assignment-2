const Rating = () => {
  return (
    <div id="Rating" className="flex flex-col h-[50vh] justify-center items-center gap-3 w-full py-10 bg-green-200">
      <div className="rating rating-lg">
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          disabled
          checked
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          disabled
        />
      </div>
      <p className="px-20 text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-black">
        Our recycled products have made a significant impact on our
        customers&apos; lives. They are not only high-quality but also
        environmentally friendly, helping to reduce waste and protect the
        planet.
      </p>
    </div>
  );
};

export default Rating;
