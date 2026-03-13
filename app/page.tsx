import { Bebas_Neue } from "next/font/google";
import { Button } from "@/components/ui/button";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";
import TypewriterText from "@/components/TypewriterText";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <main
      className="relative md:min-h-screen overflow-hidden flex flex-col items-center justify-start md:justify-center text-center px-6 pt-24 pb-16 md:pt-0 md:pb-0"
      style={{ backgroundColor: "#06070d" }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.35 }}
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to keep text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(6,7,13,0.6)" }}
      />

      {/* Horizontal scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Center radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(10, 50, 120, 0.5) 0%, rgba(5, 20, 50, 0.3) 50%, transparent 70%)",
        }}
      />


      {/* Badge */}
      <div
        className="hero-badge relative z-10 mb-10 inline-flex items-center gap-3 px-5 py-2 uppercase mx-4 text-center"
        style={{
          border: "1px solid rgba(80, 200, 40, 0.4)",
          backgroundColor: "rgba(4, 14, 4, 0.9)",
          color: "#6ddd10",
          fontFamily: "monospace",
          boxShadow: "0 0 12px rgba(80, 200, 40, 0.1), inset 0 0 12px rgba(80, 200, 40, 0.04)",
        }}
      >
        <span
          className="hidden sm:inline-block w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "#6ddd10",
            boxShadow: "0 0 8px #6ddd10, 0 0 16px #6ddd10",
            animation: "pulse 1.8s ease-in-out infinite",
          }}
        />
        AI AUTOMATION SPECIALIST <span className="hidden sm:inline">|</span> FUNNEL/WEB DEVELOPER
      </div>

      {/* Headline */}
      <h1
        className="hero-headline relative z-10 text-white"
        style={{
          fontFamily: bebas.style.fontFamily,
          textShadow: "0 0 30px rgba(255,255,255,0.08)",
        }}
      >
        AI AUTOMATIONS & SMART FUNNELS
      </h1>
      <h1
        className="hero-headline relative z-10 glitch-orange"
        style={{
          fontFamily: bebas.style.fontFamily,
        }}
      >
        THAT WORK FOR YOU.
      </h1>

      {/* Subtitle */}
      <div className="relative z-10 mt-7 flex items-start md:items-center justify-center gap-2 font-mono text-sm md:text-xl uppercase px-4 text-center">
        <span style={{ color: "#f97316" }}>▸</span>
        <TypewriterText text="STOP DROWNING IN MANUAL TASKS. START RUNNING ON AUTOPILOT." />
      </div>

      {/* Divider */}
      <div
        className="relative z-10 mt-6 w-24 h-px"
        style={{ backgroundColor: "rgba(0, 180, 255, 0.35)" }}
      />

      {/* Description */}
      <p
        className="relative z-10 mt-5 max-w-xl text-xs sm:text-sm leading-relaxed tracking-wide font-mono"
        style={{ color: "rgba(150, 160, 175, 0.85)" }}
      >
        I build automation systems using n8n, Zapier, and AI tools, and create
        high-converting funnels with GoHighLevel to streamline operations and
        generate more leads.
      </p>

      {/* CTA Buttons */}
      <div className="relative z-10 mt-10 flex items-center gap-4">
        <a href="#projects">
          <Button
            className="neon-btn h-13 px-8 rounded-lg text-base font-semibold tracking-wide cursor-pointer"
            style={{
              backgroundColor: "transparent",
              color: "#f97316",
              border: "1px solid #f97316",
              boxShadow: "0 0 8px #f97316, 0 0 20px rgba(249,115,22,0.4), inset 0 0 8px rgba(249,115,22,0.1)",
              textShadow: "0 0 8px rgba(249,115,22,0.8)",
            }}
          >
            View My Work &nbsp;→
          </Button>
        </a>
      </div>
    </main>
    <ToolsSection />
    <ProjectsSection />
    <ServicesSection />
    <AboutSection />
    <FooterSection />
</>
  );
}
