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
      <ComplianceHero />
      <ComplianceGrid />
      <TaxDetail />
      <LegalAccountingDetail />
      <LicensesDetail />
      <AccountingDetail />
    </>
  );
}
