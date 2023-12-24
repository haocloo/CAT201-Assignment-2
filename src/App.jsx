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

export default function App() {
  return (
    <>
      <Header />
      <HeroVideo />
      <Hero />
      <AboutUs />
      <Mission />
      <Feature />
      <Benefits/>
      <Process />
      <Products />
      <Rating />
      <FaQ />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
