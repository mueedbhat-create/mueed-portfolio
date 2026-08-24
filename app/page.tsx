import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const About = dynamic(() => import("@/components/sections/About"));
const Services = dynamic(() => import("@/components/sections/Services"));
const Projects = dynamic(() => import("@/components/sections/Projects"));
const TechStack = dynamic(() => import("@/components/sections/TechStack"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Writing = dynamic(() => import("@/components/sections/Writing"));
const Faq = dynamic(() => import("@/components/sections/Faq"));
const Contact = dynamic(() => import("@/components/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Experience />
      <Writing />
      <Faq />
      <Contact />
    </>
  );
}