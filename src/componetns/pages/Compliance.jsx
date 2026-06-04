import React from "react";
import { Helmet } from "react-helmet";
import { AccountingDetail } from "../Compliance/AccountingDetail";
import { ComplianceGrid } from "../Compliance/ComplianceGrid";
import ComplianceHero from "../Compliance/ComplianceHero";
import LicensesDetail from "../Compliance/LicensesDetail";
import {
  TaxDetail,
  LegalAccountingDetail,
} from "../Compliance/TaxDetail&LegalAccountingDetail";

export default function Compliance() {
  return (
    <>
      <Helmet>
        <title>Compliance Services | Binjwa IT Solutions</title>
        <meta
          name="description"
          content="Stay compliant with our expert services, including tax, legal, and accounting solutions."
        />
      </Helmet>
      <ComplianceHero />
      <ComplianceGrid />
      <TaxDetail />
      <LicensesDetail />
      <LegalAccountingDetail />
      <AccountingDetail />
    </>
  );
}
