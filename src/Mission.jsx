import MissionImage from "./assets/images/Mission/mission.webp";

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
      className="flex flex-col-reverse lg:flex-row w-full items-center max-h-fit min-h-[calc(100vh-4rem)]"
    >
      <div className="scale-105 flex flex-col justify-center gap-3 lg:gap-14 lg:justify-center h-1/2 lg:h-[100vh] p-10 sm:px-16 lg:p-14 w-full lg:w-1/2 text-left">
        {sections.map((section, index) => (
          <div key={index}>
            <h1 className="mb-4 font-bold text-lg sm:text-3xl lg:text-4xl xl:text-5xl">
              {section.title}
            </h1>
            <p className="mb-4 text-justify text-xs sm:text-base lg:text-lg xl:text-xl">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:p-24 lg:px-8 w-full h-1/2 lg:h-[100vh] lg:w-1/2">
        <img
          src={MissionImage}
          className="hover:scale-110 transition-all delay-150 duration-300 ease-in-out lg:shadow-xl lg:shadow-black/40 lg:rounded-3xl w-full h-full object-center object-cover bg-no-repeat"
          alt="Mission Image"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Mission;
