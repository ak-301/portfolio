import { useState } from "react";
import HeroWrapper from "./wrappers/HeroWrapper";
import AboutWrapper from "./wrappers/AboutWrapper";
import ProjectWrapper from "./wrappers/ProjectWrapper";
import { Element } from "react-scroll";
import ContactWrapper from "./wrappers/ContactWrapper";
import ExperienceWrapper from "./wrappers/ExperienceWrapper";

function App() {
  return (
    <>
      <HeroWrapper />
      <Element name="about">
        <AboutWrapper />
      </Element>
      <Element name="experience">
        <ExperienceWrapper />
      </Element>
      <Element name="projects">
        <ProjectWrapper />
      </Element>
      <Element name="contact">
        <ContactWrapper />
      </Element>
    </>
  );
}

export default App;
