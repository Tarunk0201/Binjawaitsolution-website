import React from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../about/AboutHero";
import MissionValues from "../about/MissionValues";
import FoundersMessage from "../about/FoundersMessage";
import JourneyTimeline from "../about/JourneyTimeline";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Binjwa IT Solutions</title>
        <meta
          name="description"
          content="Learn more about Binjwa IT Solutions, our mission, values, and the team behind our success."
        />
      </Helmet>
      <AboutHero />
      <MissionValues />
      <FoundersMessage />
      {/* <JourneyTimeline /> */}
    </>
  );
}
