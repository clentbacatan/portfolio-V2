"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

type Category = "All Projects" | "n8n" | "Zapier" | "Funnels";

const filters: Category[] = ["All Projects", "n8n", "Zapier", "Funnels"];

type Project = {
  title: string;
  category: string;
  src?: string;
  placeholder?: string;
  description: string;
  features: string[];
  images: string[];
  technologies: string[];
  impact: string[];
};

const projects: Project[] = [
  {
    title: "Inbox AI Manager",
    category: "n8n",
    src: "/projects/inboxManager.png",
    images: ["/projects/inboxManager.png"],
    description:
      "Managing a high-volume inbox manually wastes hours every day. This n8n automation monitors incoming emails, classifies them by intent using AI, drafts contextual replies, and routes urgent items to the right team member — all without human intervention.",
    features: [
      "AI-powered email classification by intent and priority",
      "Smart routing to team members based on topic",
      "Full error handling and logging for reliability",
    ],
    technologies: ["n8n", "OpenAI", "Gmail"],
    impact: [
      "Reduced inbox processing time by over 80%",
      "Zero missed urgent emails with automated priority routing",
      "Consistent response quality across all team members",
    ],
  },
  {
  title: "Match Making AI Assistant",
  category: "n8n",
  src: "/projects/matchMakingAI.png",
  images: ["/projects/matchMakingAI.png"],
  description: "An AI-powered assistant that analyzes user input and queries a PostgreSQL database to identify the most relevant profiles. The system evaluates multiple attributes and returns profiles that closely match the user's requirements, enabling fast and accurate matchmaking.",
  features: [
    "AI-powered analysis of user requirements",
    "Dynamic querying of profiles stored in PostgreSQL",
    "Similarity matching algorithm returning profiles with up to 90% relevance",
    "Webhook-based request handling for real-time queries",
    "Automated workflow orchestration using n8n"
  ],
  technologies: ["Next.js", "PostgreSQL", "n8n", "Webhooks"],
  impact: [
    "Reduced manual profile searching by automating the matching process",
    "Delivered highly relevant profile recommendations within seconds",
    "Improved decision-making by surfacing the most compatible matches automatically"
  ]
},
  {
    title: "Automated Invoice Sync: Zoho CRM → Xero",
    category: "n8n",
    src: "/projects/zohoCrmToXero.png",
    images: ["/projects/zohoCrmToXero.png"],
    description:
      "An automation workflow that synchronizes invoice data from Zoho CRM to Xero, ensuring financial records stay accurate and up to date. When deal or payment information changes in Zoho CRM, the system automatically updates the corresponding invoice in Xero through an n8n workflow, eliminating manual reconciliation.",
    features: [
      "Automatic detection of invoice-related updates in Zoho CRM",
    "Real-time data synchronization to update invoices in Xero",
    "Webhook-based triggers for instant workflow execution",
    "Data validation and field mapping between CRM and accounting records",
    "Error handling and logging to ensure reliable financial updates"
    ],
    technologies: ["n8n", "Zoho CRM", "Xero", "Webhooks", "REST API"],
    impact: [
      "Eliminated manual invoice updates between CRM and accounting systems",
    "Reduced risk of billing discrepancies and outdated financial records",
    "Improved operational efficiency by automating cross-platform financial syncing"
    ],
  },
  {
    title: "Automated CRM Field Update from Custom Web App",
    category: "n8n",
     src: "/projects/requestToZoho.png",
    images: ["/projects/requestToZoho.png"],
    description:
     "An end-to-end automation workflow that processes user requests from a Next.js frontend, updates relevant fields in Zoho CRM, queries candidate profiles from PostgreSQL based on the request, and sends email notifications about job opportunities. This workflow ensures sales and recruitment teams can act immediately while keeping candidates informed in real time.",
    features: [
    "Webhook endpoint to receive requests from the Next.js frontend",
    "Automated field updates in Zoho CRM for sales team visibility",
    "Query PostgreSQL database to find relevant candidate profiles",
    "Send personalized email notifications to matched candidates",
    "Real-time syncing and error handling for reliable operations"
    ],
    technologies: ["n8n", "Next.js", "Zoho CRM", "Webhooks", "REST API", "PostgreSQL", "Gmail"],
    impact: [
      "Eliminated manual CRM updates and candidate outreach",
    "Instantly informs relevant candidates about job opportunities",
    "Empowers the sales and recruitment teams to respond faster",
    "Improved candidate engagement and reduced time-to-fill for roles"
    ],
  },
  {
    title: "Form Order Automation",
    category: "Zapier",
     src: "/projects/formToOrder.png",
    images: ["/projects/formToOrder.png"],
    description:
      "When customers submit orders through a form without automation, business owners must manually review submissions, categorize orders, and alert the right team members — a time-consuming process that doesn’t scale. I built a Zapier workflow that automatically captures every new submission, notifies the business owner instantly, and organizes orders in Google Sheets by type, ensuring nothing is missed or mismanaged. This automation transformed a fragmented manual process into a seamless, self-running system from day one, enabling businesses to handle more orders without increasing administrative workload.",
    features: [
      "Automatic capture and processing of customer order form submissions",
      "Instant business owner notification for every new order",
      "Eliminates manual checking and data entry completely",
      "Order type categorization and logging in Google Sheets",
      "Ready to scale as order volume increases",
    ],
    technologies: ["Zapier", "Google Forms", "Google Sheets", "Gmail"],
    impact: [
      "Eliminated the need to manually check and process order forms",
      "Estimated 5-8 hours saved per week for form-heavy order businesses",
      "No orders missed — every submission is captured and confirmed instantly",
    ],
  },
  {
    title: "AI-Powered CRM System",
    category: "Zapier",
    src: "/projects/aiDrivenCRM.png",
    images: ["/projects/aiDrivenCRM.png"],
    description:
      "Many businesses collect leads but struggle with consistent follow-ups because manually qualifying and segmenting each submission takes time. I built a Zapier CRM workflow that captures inquiries from Google Forms, creates a lead in HubSpot, uses AI to classify the lead as Cold, Warm, or Hot, logs the data in Google Sheets, and automatically sends a personalized follow-up email. This turns a simple lead form into an automated sales engine that ensures every lead gets the right message at the right time.",
    features: [
      "Lead capture from Google Forms directly into HubSpot CRM",
      "AI-powered lead classification as Cold, Warm, or Hot",
      "Google Sheets backup logging for every lead",
      "Personalized follow-up emails triggered by lead classification",
      "No manual review or segmentation required",
    ],
    technologies: ["HubSpot", "Zapier", "AI by Zapier", "Gmail", "ChatGPT"],
    impact: [
      "Every lead is classified and followed up automatically — no manual review required",
      "Personalized outreach improves engagement compared to generic responses",
      "More structured, data-driven sales pipeline with consistent follow-up at every stage",
    ],
  },
  {
    title: "Lead Gen Funnel – SaaS",
    category: "Funnels",
    src: "/projects/funnel1.png",
    images: ["/projects/funnel1.png"],
    description:
      "A two-step lead generation funnel for a SaaS product — a free trial opt-in with onboarding email sequence, trial expiry nudges, and upgrade prompts built inside GoHighLevel.",
    features: [
      "Free trial signup page with instant access delivery",
      "7-day onboarding email sequence",
      "In-app behaviour triggers via webhook",
      "Trial expiry upgrade offer sequence",
      "Stripe payment integration for upgrade",
    ],
    technologies: ["GoHighLevel", "Stripe", "Webhooks", "Zapier"],
    impact: [
      "Trial-to-paid conversion improved with timed nudge sequences",
      "Onboarding fully automated — zero manual handholding",
      "Revenue captured from users who would have churned silently",
    ],
  },
  {
    title: "Webinar Registration Funnel",
    category: "Funnels",
    src: "/projects/funnel2.png",
    images: ["/projects/funnel2.png"],
    description:
      "End-to-end webinar funnel — registration page, confirmation, reminder sequence, replay page, and post-webinar offer — fully automated with GoHighLevel and Zoom integration.",
    features: [
      "Registration page with Zoom integration",
      "Instant confirmation email with calendar invite",
      "24h, 1h, and 10-minute reminder sequence",
      "Live replay page auto-published post-event",
      "Post-webinar offer sequence with deadline timer",
    ],
    technologies: ["GoHighLevel", "Zoom", "Zapier", "Stripe"],
    impact: [
      "Show-up rate increased with multi-step reminder sequence",
      "Replay captures leads who missed the live event",
      "Post-webinar offer sequence running on autopilot",
    ],
  },
  {
    title: "Sales Funnel – Coaching",
    category: "Funnels",
    src: "/projects/funnel3.png",
    images: ["/projects/funnel3.png"],
    description:
      "A high-converting sales funnel for a coaching offer built in GoHighLevel — opt-in page, VSL page, application form, and booking page — with automated follow-up sequences integrated end to end.",
    features: [
      "Opt-in page with lead magnet delivery",
      "VSL page with timed CTA reveal",
      "Application form with conditional logic",
      "Automated booking confirmation and reminders",
      "Post-call follow-up sequence",
    ],
    technologies: ["GoHighLevel", "Zapier", "Calendly", "Stripe"],
    impact: [
      "Full funnel built and live in under one week",
      "Automated follow-up recovering missed bookings",
      "Consistent client experience from opt-in to call",
    ],
  },
  {
    title: "Lead Gen Funnel",
    category: "Funnels",
    src: "/projects/funnel4.png",
    images: ["/projects/funnel4.png"],
    description:
      "A focused lead generation funnel built in GoHighLevel designed to capture and convert cold traffic into qualified leads through a compelling offer and automated follow-up.",
    features: [
      "High-converting opt-in page with clear value proposition",
      "Instant lead magnet or offer delivery",
      "Automated email follow-up sequence",
      "Thank you page with next-step CTA",
      "Lead data synced to CRM automatically",
    ],
    technologies: ["GoHighLevel", "Zapier", "Gmail"],
    impact: [
      "Consistent lead flow without manual outreach",
      "Every lead entered into an automated nurture sequence",
      "Higher opt-in rates with focused single-offer design",
    ],
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl flex flex-col lg:flex-row"
        style={{ backgroundColor: "#0e0f18", border: "1px solid rgba(255,255,255,0.08)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-colors"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff" }}
        >
          <X size={16} />
        </button>

        {/* Left — image */}
        <div className="lg:w-[55%] flex flex-col shrink-0">
          <div className="relative w-full bg-black h-[35vh] lg:h-[480px]">
            {project.images[activeImg] ? (
              <Image
                src={project.images[activeImg]}
                alt={project.title}
                fill
                className="object-contain object-center"
              />
            ) : (
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ backgroundColor: project.placeholder ?? "#1a1a2a" }}
              >
                <span className="text-xs font-mono text-orange-400 opacity-60 tracking-widest uppercase">
                  [ screenshot coming soon ]
                </span>
              </div>
            )}

            {/* Zoom button */}
            {project.images[activeImg] && (
              <button
                onClick={() => setZoomed(true)}
                className="absolute bottom-3 right-3 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: "#f97316",
                  boxShadow: "0 0 12px rgba(249,115,22,0.6)",
                }}
              >
                <ZoomIn size={18} color="#fff" />
              </button>
            )}
          </div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto" style={{ backgroundColor: "#080910" }}>
              {project.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className="relative w-24 h-16 shrink-0 rounded overflow-hidden cursor-pointer"
                  style={{
                    border: i === activeImg ? "2px solid #f97316" : "2px solid transparent",
                    opacity: i === activeImg ? 1 : 0.5,
                  }}
                >
                  <Image src={img} alt="" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Zoom overlay */}
        {zoomed && (
          <div
            className="absolute inset-0 z-20 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
            onClick={() => setZoomed(false)}
          >
            <div className="overflow-auto w-full h-full flex items-center justify-center">
              <Image
                src={project.images[activeImg]}
                alt={project.title}
                width={1920}
                height={1080}
                className="w-auto h-auto max-w-none"
                style={{ minWidth: "150%" }}
              />
            </div>
            <button
              onClick={() => setZoomed(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#fff" }}
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Right — content */}
        <div className="lg:w-[45%] overflow-y-auto p-8 flex flex-col gap-5">
          {/* Category badge */}
          <span
            className="self-start text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(249,115,22,0.15)",
              color: "#f97316",
              border: "1px solid rgba(249,115,22,0.35)",
            }}
          >
            {project.category}
          </span>

          <h2 className="text-3xl font-bold text-white leading-tight">
            {project.title}
          </h2>

          <p className="text-base leading-relaxed" style={{ color: "rgba(180,188,200,0.88)" }}>
            {project.description}
          </p>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#f97316" }}>
              Key Features
            </h3>
            <ul className="flex flex-col gap-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(180,188,200,0.85)" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#f97316" }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#f97316" }}>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-3 py-1.5 rounded"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(220,225,235,0.9)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Impact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#f97316" }}>
              Project Impact
            </h3>
            <ul className="flex flex-col gap-3">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "rgba(180,188,200,0.85)" }}>
                  <span className="shrink-0 mt-0.5" style={{ color: "#f97316" }}>↑</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Category>("All Projects");
  const [selected, setSelected] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  const visible = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full pt-6 pb-24 md:py-24 px-6 flex flex-col items-center"
      style={{ backgroundColor: "#06070d" }}
    >
      <h2 className="text-3xl md:text-6xl font-bold text-white text-center mb-4 leading-tight">
        Real Systems. <span className="glitch-orange">Real Results.</span>
      </h2>
      <p className="text-center max-w-2xl text-sm md:text-lg leading-relaxed mb-10" style={{ color: "rgba(150, 160, 175, 0.85)" }}>
        Real automation projects showcasing workflow design, AI integration, and
        process optimization across various platforms and industries.
      </p>

      {/* Filter Buttons */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-2 md:gap-3 mb-14 w-full md:w-auto">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className="px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer"
            style={
              active === f
                ? { backgroundColor: "#f97316", color: "#fff", border: "1px solid #f97316", boxShadow: "0 0 14px rgba(249,115,22,0.4)" }
                : { backgroundColor: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {visible.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl overflow-hidden cursor-pointer flex flex-col"
            style={{ border: "1px solid rgba(255,255,255,0.08)", transition: "border-color 0.3s ease, box-shadow 0.3s ease" }}
            onClick={() => setSelected(project)}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(249,115,22,0.5)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 24px rgba(249,115,22,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Screenshot or Placeholder */}
            {project.category === "Funnels" && project.src ? (
              /* Funnel — tall scrollable container */
              <div
                className="funnel-scroll w-full overflow-y-auto relative group/img"
                style={{ height: "480px", backgroundColor: "#000" }}
              >
                <Image
                  src={project.src}
                  alt={project.title}
                  width={1200}
                  height={4000}
                  className="w-full h-auto"
                />
              </div>
            ) : (
              <div className="w-full aspect-video relative overflow-hidden group/img">
                {"src" in project && project.src ? (
                  <>
                    <Image
                      src={project.src}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(249,115,22,0.92) 0%, rgba(249,115,22,0.6) 50%, rgba(0,0,0,0.3) 100%)" }}
                    >
                      <span className="text-white text-lg font-bold text-center px-4 drop-shadow-lg">{project.title}</span>
                      <button className="px-6 py-2 text-sm font-bold tracking-widest uppercase text-white transition-colors duration-200 hover:bg-white hover:text-orange-500" style={{ border: "2px solid white", borderRadius: "999px" }}>See More</button>
                    </div>
                  </>
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-4 relative group/img"
                    style={{ backgroundColor: project.placeholder ?? "#1a1a2a" }}
                  >
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.4) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                    <span className="text-xs font-mono tracking-widest uppercase z-10" style={{ color: "rgba(249,115,22,0.6)" }}>[ screenshot coming soon ]</span>
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, rgba(249,115,22,0.88) 0%, rgba(249,115,22,0.5) 50%, rgba(0,0,0,0.2) 100%)" }}
                    >
                      <span className="text-white text-lg font-bold text-center px-4">{project.title}</span>
                      <button className="px-6 py-2 text-sm font-bold tracking-widest uppercase text-white hover:bg-white hover:text-orange-500 transition-colors duration-200" style={{ border: "2px solid white", borderRadius: "999px" }}>See More</button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Card Footer */}
            <div className="px-5 py-4 flex items-center justify-between mt-auto" style={{ backgroundColor: "rgba(255,255,255,0.02)" }}>
              <span className="text-base font-semibold text-white">{project.title}</span>
              <span className="text-xs font-mono px-2 py-1 rounded" style={{ backgroundColor: "rgba(249,115,22,0.12)", color: "#f97316", border: "1px solid rgba(249,115,22,0.25)" }}>
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* See More / Show Less */}
      {filtered.length > 4 && (
        <button
          onClick={() => {
            if (showAll) {
              setShowAll(false);
              sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              setShowAll(true);
            }
          }}
          className="mt-10 px-8 py-3 rounded-lg text-base font-semibold tracking-wide cursor-pointer transition-all duration-300 neon-btn"
          style={{
            backgroundColor: "transparent",
            color: "#f97316",
            border: "1px solid #f97316",
            boxShadow: "0 0 8px #f97316, 0 0 20px rgba(249,115,22,0.4), inset 0 0 8px rgba(249,115,22,0.1)",
            textShadow: "0 0 8px rgba(249,115,22,0.8)",
          }}
        >
          {showAll ? "Show Less ↑" : "See More ↓"}
        </button>
      )}

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
