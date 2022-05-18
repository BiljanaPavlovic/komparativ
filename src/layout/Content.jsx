/** @format */

import React from "react";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Blog from "../components/Blog";

export default function Content() {
  return (
    <div>
      <AboutMe />
      <hr />
      <Services />
      <hr />
      <Blog />
      <hr />
      <Contact />
    </div>
  );
}
