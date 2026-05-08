import {
  CheckCircle2,
  Cpu,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Bot,
} from "lucide-react";
import ai from "../../assets/images/lalalala.png";
import Autonomous from "../../assets/images/Autonomous.jpg";

// 3.1 Custom AI Assistants & Chatbots
export function AIAssistantDetail() {
  return (
    <section
      id="ai-assistants"
      className="py-24 px-8 lg:px-16 bg-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Agents that Think, <br />
            <span className="text-teal-500">Not Just Talk.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 italic">
            Static chatbots are a thing of the past. We solve the problem of
            "robotic" support by building AI assistants that understand context
            and execute tasks autonomously.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-2xl border border-teal-100">
              <Bot className="text-teal-600 mb-2" size={20} />
              <p className="text-xs font-bold uppercase mb-1">Intelligence</p>
              <p className="text-sm text-gray-500 leading-snug">
                Context-aware agents that handle complex customer inquiries with
                ease.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-2xl border border-teal-100">
              <CheckCircle2 className="text-teal-600 mb-2" size={20} />
              <p className="text-xs font-bold uppercase mb-1">Automation</p>
              <p className="text-sm text-gray-500 leading-snug">
                24/7 autonomous support that integrates with your internal
                tools.
              </p>
            </div>
          </div>
          <button className="mt-10 flex items-center gap-3 bg-teal-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg">
            Deploy an AI Agent <ArrowRight size={20} />
          </button>
        </div>
        <div className="lg:w-1/2 lg:sticky lg:top-24">
          <img
            src={ai}
            className="rounded-[2.5rem] shadow-2xl border-4 border-white aspect-video object-cover"
            alt="AI Interface"
          />
        </div>
      </div>
    </section>
  );
}

// 3.2 Workflow & CRM Automation
export function AIWorkflowDetail() {
  return (
    <section
      id="workflow-automation"
      className="py-24 px-8 lg:px-16 bg-[#f9f5ff] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center lg:items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Autonomous Business <br />
            <span className="text-purple-600">Architectures.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We solve the problem of manual business processes. Our Agentic CRM
            solutions for Binjwa IT Solutions automate lead management and
            employee workflows so you can scale without hiring more staff.
          </p>
          <div className="space-y-4">
            {[
              "AI-powered lead scoring and automated outreach.",
              "Self-healing workflows that fix broken data connections.",
              "Real-time analytics dashboards powered by AI agents.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-purple-100"
              >
                <Cpu className="text-purple-500" size={18} />
                <span className="text-gray-700 text-sm font-medium">
                  {text}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-10 flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg">
            Automate My Workflow <ArrowRight size={20} />
          </button>
        </div>
        <div className="lg:w-1/2 lg:sticky lg:top-24">
          <div className="rounded-3xl shadow-2xl max-w-112.5 mx-auto overflow-hidden">
            <img
              src={Autonomous}
              className="w-full h-auto object-cover rounded-3xl"
              alt="AI Dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
