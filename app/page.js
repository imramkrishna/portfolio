import Image from "next/image";
import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import About from "./About/page";
import Services from "./Services/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  );
}
