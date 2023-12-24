import Header from "./global/Header";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Mission from "./Mission";
import Feature from "./Feature";
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
    console.log(1);
    toast.warn("Feature Coming Soon", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      limit: 1,
    });
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <HeroVideo />
      <Hero displayToast={displayToast} />
      <AboutUs />
      <Mission />
      <Feature displayToast={displayToast} />
      <Benefits />
      <Process displayToast={displayToast} />
      <Products displayToast={displayToast} />
      <Rating />
      <FaQ displayToast={displayToast} />
      <Team displayToast={displayToast} />
      <CTA displayToast={displayToast}/>
      <Footer />
    </>
  );
}
