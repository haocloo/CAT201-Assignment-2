import video from "./assets/videos/HeroVideo.mp4";
import CEOVideoVertical from "./assets/videos/CEOVideoVertical.mp4";
import { useRef } from "react";

const HeroVideo = ({ displayToast }) => {
  const videoRef = useRef(null);

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
        <button className="hover:outline-primary hover:scale-95 hover:outline hover:border-none outline-offset-4 hover:bg-gradient-to-r hover:from-[#02285a] hover:to-[#026f13] transition-all duration-300 ease-in text-xl font-bold w-52 h-14 mt-4 border border-white text-white rounded">
          <a href="#Hero">DISCOVER</a>
        </button>

        {/* Pop Up Window */}
        <button
          className="btn hover:outline-primary hover:outline hover:scale-95 outline-offset-4 hover:bg-gradient-to-r hover:from-[#02285a] hover:to-[#026f13] hover:text-white hover:border-none transition-all duration-300 ease-in text-lg font-bold w-52 h-14 bg-white text-black rounded"
          onClick={() => {
            const modal = document.getElementById("my_modal_2");
            // play video when modal opens
            modal.showModal();
            videoRef.current.play();

            // pause video when modal closes
            modal.addEventListener("close", () => {
              videoRef.current.pause();
            });
          }}
        >
          WATCH VIDEO <i className="fa fa-play-circle h-5 w-5 ml-2"></i>
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box h-full -space-y-16 mx-5 w-fit max-w-5xl grid place-items-center bg-gradient-to-r from-[#02285a] to-[#026f13]">
            <h3 className="font-bold text-3xl text-white mb-5">
              Welcome From CEO of Recyco
            </h3>
            <video
              ref={videoRef}
              src={CEOVideoVertical}
              type="video/mp4"
              className="object-cover h-[80%] rounded-xl"
              controls
              loading="lazy"
            />
            <p className="py-4 text-white">
              Press ESC key or click outside to close
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
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
