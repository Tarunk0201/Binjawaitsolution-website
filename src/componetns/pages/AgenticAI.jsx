import AICRMDetail from "../Agentic AI/AICRMDetail";
import { AIDocumentDetail } from "../Agentic AI/AIDocumentDetail";
import AIGrid from "../Agentic AI/AIGrid";
import AIHero from "../Agentic AI/AIHero";
import {
  AIWorkflowDetail,
  AIAssistantDetail,
} from "../Agentic AI/AIWorkflowDetail&AIAssistantDetail";

export default function AgenticAI() {
  return (
    <>
      <AIHero />
      <AIGrid />
      <AIAssistantDetail />
      <AIWorkflowDetail />
      <AICRMDetail />
      <AIDocumentDetail />
    </>
  );
}
