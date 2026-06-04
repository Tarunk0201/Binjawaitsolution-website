import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Binjwa IT Solutions - Home</title>
        <meta
          name="description"
          content="Welcome to Binjwa IT Solutions. We provide top-notch full-stack development, digital marketing, and AI solutions."
        />
      </Helmet>
      <Hero />
      {/* <StatsSection /> */}
      <Services />
      <WhyChooseUs />
      <Advantages />
      <Testimonials />
      <FAQSection />
    </>
  );
}
