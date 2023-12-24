import yeoImage from "./assets/images/Team/yeo.webp";
import looImage from "./assets/images/Team/loo.webp";
import ljlImage from "./assets/images/Team/ljl.webp";
import lyjImage from "./assets/images/Team/lyj.webp";

const Card = ({
  image,
  name,
  role,
  description,
  initialPos = "translate-y-[67%]",
  socmed,
}) => {
  return (
    <div className="w-full">
      <div className="rounded-2xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow shadow-xl hover:shadow-black/30 shadow-black/50">
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
            src={image}
            alt={name}
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div
          className={`${initialPos} absolute inset-0 flex flex-col gap-5 items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0`}
        >
          <h1 className="font-dmserif text-2xl font-bold text-white">{name}</h1>
          <h2 className="font-dmserif text-xl font-bold text-white">{role}</h2>
          <p className="text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {description}
          </p>
          {/* icons */}
          <div className="flex space-x-5 scale-125">
            {!!socmed.linkedin && (
              <a href={socmed.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in text-cyan-500 text-2xl hover:scale-125 transition-transform duration-300 "></i>
              </a>
            )}
            <a href={socmed.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github text-white text-2xl hover:scale-125 transition-transform duration-300 "></i>
            </a>
            <a href={"mailto:" + socmed.email} target="_blank" rel="noreferrer">
              <i className="fas fa-envelope text-amber-400 text-2xl hover:scale-125 transition-transform duration-300 "></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = ({ displayToast }) => {
  return (
    <div
      id="Team"
      className="flex flex-col h-fit min-h-[calc(100vh-4rem)] justify-center items-center w-full px-10 lg:px-14 py-10 bg-green-200 text-black"
    >
      <div className="scale-125 h-2/6 lg:h-full text-center gap-3 ">
        <h3 className="text-lg sm:text-2xl">Sustainable</h3>
        <h1 className="font-bold text-lg sm:text-3xl lg:text-4xl xl:text-5xl">
          Meet Our Team
        </h1>
        <p className="text-justify text-xs sm:text-lg xl:text-xl">
          Passionate individuals dedicated to sustainability
        </p>
      </div>
      <div className="h-2/6 -mt-40 sm:-mt-16 md:mt-0 scale-75 lg:h-full grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          image={yeoImage}
          name="Yeo Din Song"
          role="CEO"
          description="Din Song is a visionary leader with a deep commitment to environmental conservation."
          initialPos="translate-y-[74%] md:translate-y-[75%] lg:translate-y-[74%]"
          socmed={{
            linkedin: "https://www.linkedin.com/in/yeo-undefined-2bb3b025a",
            github: "https://github.com/Yeo8023",
            email: "dinsong@student.usm.my",
          }}
        />
        <Card
          image={looImage}
          name="Loo Chi Hao"
          role="Marketing Manager"
          description="Chi Hao is responsible for developing and implementing our marketing strategies."
          initialPos="translate-y-[71%] md:translate-y-[75%] lg:translate-y-[71%]"
          socmed={{
            linkedin: "https://www.linkedin.com/in/loochihao/",
            github: "https://github.com/haocloo/",
            email: "haocloousm@student.usm.my",
          }}
        />
        <Card
          image={ljlImage}
          name="Lim Jia Liang"
          role="Product Designer"
          description="Jia Liang brings creativity and innovation to our product design process."
          initialPos="translate-y-[67%] md:translate-y-[71%] lg:translate-y-[67%]"
          socmed={{
            linkedin: "",
            github: "https://github.com/LIMJIALIANG",
            email: "limjialiang1067@student.usm.my",
          }}
        />
        <Card
          image={lyjImage}
          name="Lim Yong Jun"
          role="Operations Manager"
          description="Yong Jun ensures smooth operations and efficient resource management."
          initialPos="translate-y-[67%] md:translate-y-[75%] lg:translate-y-[67%]"
          socmed={{
            linkedin: "https://www.linkedin.com/in/lim-yong-jun-827888265/",
            github: "https://github.com/LimmmYongJun",
            email: "limyongjun007@gmail.com",
          }}
        />
      </div>

      <div className="scale-125 h-1/6 text-center space-y-5">
        <h1 className="font-bold text-lg sm:text-3xl lg:text-4xl xl:text-5xl">
          We&apos;re Hiring!
        </h1>
        <button
          onClick={() => displayToast()}
          className="px-2 py-2 md:px-8 md:py-4 border border-black text-black rounded-lg text-xs md:text-sm lg:text-lg"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Team;
