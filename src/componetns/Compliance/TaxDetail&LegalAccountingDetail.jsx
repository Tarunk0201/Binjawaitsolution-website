import { ShieldAlert, CheckCircle, Briefcase, FileText } from "lucide-react";
import taax from "../../assets/images/taax.jpeg";
import Ironclad from "../../assets/images/legal.jpg";

// 3.1 Tax & Registration Section
export function TaxDetail() {
  return (
    <section
      id="tax-compliance"
      className="py-24 px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Seamless <span className="text-amber-600">Tax Management.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 italic">
            We solve the stress of deadlines. From monthly GST filings to
            complex ITR and TDS returns, we handle the paperwork while you
            handle the profit.
          </p>
          <div className="space-y-4">
            {[
              "Startup India & MSME Registration",
              "ESI, PF & Professional Tax Filing",
              "Annual Company Compliance",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100"
              >
                <ShieldAlert className="text-amber-600" size={18} />
                <span className="text-gray-800 font-medium text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 lg:sticky lg:top-24">
          <img
            src={taax}
            className="rounded-[2.5rem] shadow-2xl border-4 border-white"
            alt="Tax Services"
          />
        </div>
      </div>
    </section>
  );
}

// 3.2 Legal & Accounting Section
export function LegalAccountingDetail() {
  return (
    <section
      id="legal-doc"
      className="py-24 px-8 lg:px-16 bg-[#fdf8f1] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Ironclad <span className="text-amber-600">Documentation.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We solve the risk of legal exposure. Our team drafts MOA, AOA, and
            partnership deeds that protect your interests and define your
            future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
              <FileText className="text-amber-600 mb-2" />
              <h4 className="font-bold text-sm">Legal Drafting</h4>
              <p className="text-xs text-gray-500">
                Business contracts and agreements tailored to your industry.
              </p>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Briefcase className="text-amber-600 mb-2" />
              <h4 className="font-bold text-sm">Financial Audit</h4>
              <p className="text-xs text-gray-500">
                Thorough bookkeeping and CA consultation for loan project
                reports.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:sticky lg:top-24">
          <img
            src={Ironclad}
            className="rounded-[2.5rem] shadow-2xl border-4 border-white"
            alt="Legal Consultation"
          />
        </div>
      </div>
    </section>
  );
}
