import React from "react";
import Hero from "../home/Hero";
import Advantages from "../home/Advantages";
import StatsSection from "../home/StatsSection";
import Services from "../home/Services";
import Testimonials from "../home/Testimonials";
import WhyChooseUs from "../home/WhyChooseUs";
import FAQSection from "../home/FAQSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <Services />
      <WhyChooseUs />
      <Advantages />
      <Testimonials />
      <FAQSection />
    </>
  );
}
