import video from "./assets/videos/HeroVideo.mp4";

const HeroVideo = ({ displayToast }) => {
  return (
    <div
      id="HeroVideo"
      className="relative h-screen pt-16 w-screen overflow-hidden"
    >
      <div className="absolute bg-black/20 lg:scale-125 top-16 z-10 w-full h-full flex text-center flex-col gap-5 justify-center items-center text-white">
        <h1 className="mx-auto text-5xl font-semibold font-sans">
          LET&apos;S RECYCLE TOGETHER
        </h1>
        <p className="text-3xl font-medium">
          Transforming Waste into Sustainable Solutions
        </p>
        <button className="hover:bg-gradient-to-r hover:from-[#02285a] hover:to-[#026f13] transition-all duration-300 ease-in text-xl font-bold w-52 h-14 mt-4 border border-white text-white rounded">
          <a href="#Hero">DISCOVER</a>
        </button>
        <button
          onClick={() => displayToast()}
          className="hover:bg-gradient-to-r hover:from-[#02285a] hover:to-[#026f13] hover:text-white transition-all duration-300 ease-in text-lg font-bold w-52 h-14 bg-white border border-white text-black rounded"
        >
          LEARN MORE <i className="fa fa-play-circle h-5 w-5 ml-2"></i>
        </button>
      </div>
      <video
        src={video}
        type="video/mp4"
        className="absolute top-16 left-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
        loading="lazy"
      />
    </div>
  );
};

export default HeroVideo;
