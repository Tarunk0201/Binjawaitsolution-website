import React from "react";
import { Helmet } from "react-helmet";
import MarketingHero from "../Digital Marketing/MarketingHero";
import { MarketingGrid } from "../Digital Marketing/MarketingGrid";
import { SocialDetail, SEODetail } from "../Digital Marketing/SocialDetail";
import BrandingDetail from "../Digital Marketing/BrandingDetail";
import AnalyticsDetail from "../Digital Marketing/AnalyticsDetail";

export default function DigitalMarketing() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Services | Binjwa IT Solutions</title>
        <meta
          name="description"
          content="Boost your online presence with our comprehensive digital marketing services, including SEO, social media, and branding."
        />
      </Helmet>
      <MarketingHero />
      <MarketingGrid />
      <SEODetail />
      <SocialDetail />
      <BrandingDetail />
      <AnalyticsDetail />
    </>
  );
}
