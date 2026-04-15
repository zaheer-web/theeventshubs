import React from "react";
import AboutHero from "./AboutHero";
import CompanyInfo from "./CompanyInfo";
import StatsSection from "./StatsSection";
import WorkingAreas from "./WorkingAreas";
import Divider from '../home/Divider'



export default function AboutMain() {
  return (
    <>
      <AboutHero />
      <Divider/>
      <CompanyInfo />
      <Divider/>

      <StatsSection />
      <Divider/>

      <WorkingAreas />
      
    </>
  );
}