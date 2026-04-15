import React from "react";
import Hero from "./Hero";
import About1 from "./About1";
import Service from "./Service";
import CTA from "./CTA";
import Highlights from "./Highlights";
import Portfolio from "./Portfolio";
import Divider from "./Divider";

export default function Index() {
  return (
    <>
      <Hero />
      <Divider />
      <About1 />
      <Divider />
      <Service />
      <Divider />
      <CTA />
      <Divider />
      <Highlights />
      <Divider />
      <Portfolio />
      
    </>
  );
}