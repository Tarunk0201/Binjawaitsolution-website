import React from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>AI Solutions | Binjwa IT Solutions</title>
        <meta
          name="description"
          content="Leverage the power of AI with our custom solutions, including AI assistants, workflow automation, and more."
        />
      </Helmet>
      <AIHero />
      <AIGrid />
      <AIAssistantDetail />
      <AIWorkflowDetail />
      <AICRMDetail />
      <AIDocumentDetail />
    </>
  );
}
