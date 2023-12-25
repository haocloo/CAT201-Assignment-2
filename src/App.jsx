import Header from "./global/Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Mission from "./Mission";
import Features from "./Features";
import Benefits from "./Benefits";
import Process from "./Process";
import Products from "./Products";
import Rating from "./Rating";
import FaQ from "./FaQ";
import Team from "./Team";
import CTA from "./CTA";
import Footer from "./global/Footer";
import HeroVideo from "./HeroVideo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const displayToast = () => {
    toast.warn("Feature Coming Soon", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const components = [
    HeroVideo,
    Hero,
    AboutUs,
    Mission,
    Features,
    Benefits,
    Process,
    Products,
    Rating,
    FaQ,
    Team,
    CTA,
    Footer,
  ];

  return (
    <>
      <ToastContainer />
      <Header displayToast={displayToast} />
      <div className="scroll-smooth snap-y scroll-pt-16 snap-mandatory h-screen overflow-scroll overflow-x-hidden">
        {components.map((Component, index) => (
          <div key={index} className="snap-start">
            <Component displayToast={displayToast} />
          </div>
        ))}
      </div>
    </>
  );
}
