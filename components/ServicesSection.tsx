"use client";

import { useEffect, useRef } from "react";
import { Browsers, GitBranch, Plugs } from "@phosphor-icons/react";

const features = [
  {
    icon: Browsers,
    title: "Funnel Development",
    desc: "Visually stunning funnels that captivate your audience by blending your brand voice and customer needs.",
  },
  {
    icon: GitBranch,
    title: "Automation Systems",
    desc: "I craft intelligent systems that nurture leads, streamline follow-ups, and optimize conversions.",
  },
  {
    icon: Plugs,
    title: "API Integrations",
    desc: "Seamless integration of payment gateways, CRMs, and marketing tools for a smooth, high-performing system.",
  },
];

export default function ServicesSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateX(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative w-full pt-6 pb-20 md:py-20 px-3 md:px-6"
      style={{ backgroundColor: "#06070d" }}
    >
      {/* Outer border frame */}
      <div
        className="relative max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10"
        style={{ border: "1px solid rgba(249,115,22,0.15)" }}
      >
        {/* Corner accents */}
        <span className="absolute top-0 left-0 w-3 h-3 block" style={{ borderTop: "2px solid #f97316", borderLeft: "2px solid #f97316" }} />
        <span className="absolute top-0 right-0 w-3 h-3 block" style={{ borderTop: "2px solid #f97316", borderRight: "2px solid #f97316" }} />
        <span className="absolute bottom-0 left-0 w-3 h-3 block" style={{ borderBottom: "2px solid #f97316", borderLeft: "2px solid #f97316" }} />
        <span className="absolute bottom-0 right-0 w-3 h-3 block" style={{ borderBottom: "2px solid #f97316", borderRight: "2px solid #f97316" }} />

        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mb-8">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 shrink-0" style={{ backgroundColor: "#f97316" }} />
            <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold" style={{ color: "#f97316" }}>
              What I Build
            </span>
          </div>
          <span className="hidden md:inline" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          <span className="text-[10px] md:text-xs font-mono tracking-widest uppercase whitespace-nowrap" style={{ color: "rgba(150,160,175,0.6)" }}>
            Automation&nbsp;&nbsp;|&nbsp;&nbsp;Funnels&nbsp;&nbsp;|&nbsp;&nbsp;Integrations
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div
              className="inline-block text-xs font-mono tracking-widest uppercase px-3 py-1 mb-6"
              style={{ border: "1px solid #f97316", color: "#f97316" }}
            >
              MY SERVICES
            </div>

            <h2
              className="text-3xl md:text-6xl font-black leading-none mb-6 uppercase"
              style={{ fontFamily: "var(--font-geist-sans)" }}
            >
              <span className="text-white">BUILD </span>
              <span style={{ color: "#f97316" }}>SYSTEMS.</span>
              <br />
              <span className="text-white">NOT JUST </span>
              <span style={{ color: "rgba(255,255,255,0.3)", position: "relative", display: "inline-block" }}>
                AUTOMATIONS.
                <span style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  height: "2px",
                  backgroundColor: "rgba(255,255,255,0.4)",
                  transform: "translateY(-50%)",
                }} />
              </span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: "rgba(150,160,175,0.85)" }}>
              Your clients deserve more than a pretty page. I build{" "}
              <strong className="text-white">systems that think</strong> — automating
              follow-ups, integrating tools, and converting traffic into real revenue.
            </p>

            <a href="/booking-calendar" target="_blank" rel="noopener noreferrer" className="text-sm font-mono" style={{ color: "#f97316" }}>
              → Let&apos;s build together.
            </a>
          </div>

          {/* Right — feature cards */}
          <div className="flex flex-col gap-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="flex items-start gap-4 p-5 rounded-lg"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  opacity: 0,
                  transform: "translateX(32px)",
                  transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
                }}
              >
                <div
                  className="w-10 h-10 shrink-0 flex items-center justify-center rounded-lg"
                  style={{ backgroundColor: "rgba(249,115,22,0.12)", border: "1px solid rgba(249,115,22,0.25)" }}
                >
                  <Icon size={22} color="#f97316" weight="duotone" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest uppercase mb-1" style={{ color: "#fff" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(150,160,175,0.8)" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
