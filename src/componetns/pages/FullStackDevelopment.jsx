import React from "react";
import { Helmet } from "react-helmet";
import CloudDevDetail from "../FullStackDevelopment/CloudDevDetail";
import CRMDevDetail from "../FullStackDevelopment/CRMDevDetail";
import FullStackHero from "../FullStackDevelopment/FullStackHero";
import MobileDevDetail from "../FullStackDevelopment/MobileDevDetail";
import TechnicalGrid from "../FullStackDevelopment/TechnicalGrid";
import WebDevDetail from "../FullStackDevelopment/WebDevDetail";

export default function FullStackDevelopment() {
  return (
    <>
      <Helmet>
        <title>Full-Stack Development Services | Binjwa IT Solutions</title>
        <meta
          name="description"
          content="Expert full-stack development services, including web, mobile, CRM, and cloud solutions."
        />
      </Helmet>
      <FullStackHero />
      <TechnicalGrid />
      <WebDevDetail />
      <MobileDevDetail />
      <CRMDevDetail />
      <CloudDevDetail />
    </>
  );
}
