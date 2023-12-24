import MissionImage from "./assets/images/Mission/mission.png";

const Mission = () => {
  const sections = [
    {
      title: "Our Mission",
      content:
        "To provide high-quality products made from recycled materials, to offer convenient and rewarding solutions for waste collection and recycling, and to contribute to the global efforts of reducing waste and protecting the environment.",
    },
    {
      title: "Our Vision",
      content:
        "To be a leading company in recycling and reusing waste materials, and to inspire a culture of environmental responsibility and innovation.",
    },
  ];
  return (
    <div
      id="Mission"
      className="flex flex-col-reverse lg:flex-row w-full items-center"
    >
      <div className="flex flex-col gap-3 lg:gap-14 lg:justify-center lg:h-[100vh] p-10 lg:p-14 w-full lg:w-1/2 text-left">
        {sections.map((section, index) => (
          <div key={index}>
            <h1 className="my-8 font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
              {section.title}
            </h1>
            <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:p-24 lg:px-8 w-full h-72 lg:h-[100vh] lg:w-1/2">
        <img
          src={MissionImage}
          className="hover:scale-110 transition-all delay-150 duration-300 ease-in-out shadow-xl shadow-black/40 lg:rounded-3xl w-full h-full object-center object-cover bg-no-repeat"
          alt="Mission Image"
        />
      </div>
    </div>
  );
};

export default Mission;
