import yeoImage from "./assets/images/Team/yeo.jpg";
import looImage from "./assets/images/Team/loo.png";
import ljlImage from "./assets/images/Team/ljl.jpg";
import lyjImage from "./assets/images/Team/lyj.jpg";

const Card = ({
  image,
  name,
  role,
  description,
  initialPos = "translate-y-[69%]",
}) => {
  return (
    <div className="scale-[70%] w-full">
      <div className="rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
            src={image}
            alt={name}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div
          className={`${initialPos} absolute inset-0 flex flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0`}
        >
          <h1 className="font-dmserif text-3xl font-bold text-white">{name}</h1>
          <h2 className="my-3 font-dmserif text-xl font-bold text-white">
            {role}
          </h2>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div id="Team" className="flex flex-col h-fit justify-center items-center gap-3 w-full pt-16 py-10 bg-green-200 text-black">
      <h3 className="text-lg sm:text-xl md:text-2xl">Sustainable</h3>
      <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        Meet Our Team
      </h1>
      <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        Passionate individuals dedicated to sustainability
      </p>
      <div className="grid grid-cols-1 -space-y-20 sm:space-y-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          image={yeoImage}
          name="Yeo Din Song"
          role="CEO"
          description="Din Song is a visionary leader with a deep commitment to environmental conservation."
        />
        <Card
          image={looImage}
          name="Loo Chi Hao"
          role="Marketing Manager"
          description="Chi Hao is responsible for developing and implementing our marketing strategies."
          initialPos="translate-y-[66%]"
        />
        <Card
          image={ljlImage}
          name="Lim Jia Liang"
          role="Product Designer"
          description="Jia Liang brings creativity and innovation to our product design process."
          initialPos="translate-y-[62%]"
        />
        <Card
          image={lyjImage}
          name="Lim Yong Jun"
          role="Operations Manager"
          description="Yong Jun ensures smooth operations and efficient resource management."
          initialPos="translate-y-[62%]"
        />
      </div>

      <h1 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
        We&apos;re Hiring!
      </h1>
      <button className="px-2 py-2 md:px-8 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg">
        Contact
      </button>
    </div>
  );
};

export default Team;
