import companyLogo1 from "./assets/images/Rating/company1.webp";
import companyLogo2 from "./assets/images/Rating/company2.webp";
import companyLogo3 from "./assets/images/Rating/company3.webp";
import portrait1 from "./assets/images/Rating/portrait1.webp";
import portrait2 from "./assets/images/Rating/portrait2.webp";
import portrait3 from "./assets/images/Rating/portrait3.webp";

const Stars = () => {
  return (
    <div className="rating rating-sm">
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
  );
};

const Card = ({ logo, desc, portrait, name, title }) => {
  return (
    <div className="hover:scale-110 hover:shadow-green-300 transition-all ease-in-out duration-300 flex flex-col justify-around shadow-xl shadow-white/30 rounded-lg h-[90%] w-[28vh] bg-white gap-5 px-5 py-8 lg:mt-0 lg:mb-0 my-10 text-center">
      <div className="space-y-5">
        <img
          src={logo}
          className="mx-auto bg-no-repeat bg-center bg-cover h-16 w-16"
          loading="lazy"
        ></img>
        <Stars />
        <p>{desc}</p>
      </div>
      <div className="space-y-5">
        <img
          src={portrait}
          className="bg-no-repeat bg-cover bg-center mx-auto rounded-full h-24 w-20"
          loading="lazy"
        ></img>
        <div>
          <p className="font-bold">{name}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

const Rating = () => {
  return (
    <div
      id="Rating"
      className="flex flex-col h-fit min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] justify-center items-center gap-2 w-screen p-10 bg-[#024b36]"
    >
      <p className="text-2xl md:text-3xl w-full text-center text-white font-bold">
        What Our Customers Say
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-9 justify-items-center items-center h-full w-full">
        <Card
          logo={companyLogo1}
          desc={
            "Impressed by their eco-friendly products. A great step towards sustainability!"
          }
          portrait={portrait1}
          name={"John Doe"}
          title={"CEO of Blue Falcon Co."}
        />

        <Card
          logo={companyLogo2}
          desc={
            "Quality recyclable products. Truly a game-changer in the market."
          }
          portrait={portrait2}
          name={"Jane Smith"}
          title={"CEO of Cityscape Corp."}
        />

        <Card
          logo={companyLogo3}
          desc={
            "Their commitment to the environment is commendable. Highly recommend!"
          }
          portrait={portrait3}
          name={"Alex Taylor"}
          title={"CEO of Golden Ball Inc."}
        />
      </div>
    </div>
  );
};

export default Rating;
