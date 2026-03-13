import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="relative w-full pt-6 pb-24 md:py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#06070d" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Horizontal scanlines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10, 50, 120, 0.35) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

        {/* Title — visible on mobile only, above photo */}
        <h2 className="lg:hidden text-3xl font-bold text-white text-center">
          About Me
        </h2>

        {/* Left — Photo */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative overflow-hidden rounded-2xl w-full lg:w-[420px]"
            style={{
              border: "1px solid rgba(249,115,22,0.25)",
              boxShadow: "0 0 40px rgba(249,115,22,0.08)",
              height: "480px",
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover object-top scale-[2] lg:scale-125 origin-top"
            />
            {/* Bottom orange gradient fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,7,13,0.7), transparent)",
              }}
            />
          </div>
        </div>

        {/* Right — Bio */}
        <div className="flex flex-col gap-6">
          <h2 className="hidden lg:block text-5xl md:text-6xl font-bold text-white">
            About Me
          </h2>

          <p className="text-sm md:text-lg leading-relaxed" style={{ color: "rgba(180,188,200,0.88)" }}>
            I work with growth-focused businesses to implement reliable AI-driven
            automation that reduces manual work and improves operational efficiency.
          </p>

          <p className="text-sm md:text-lg leading-relaxed" style={{ color: "rgba(180,188,200,0.88)" }}>
            I design structured workflows for lead handling, customer communication,
            marketing support, and internal operations using tools such as n8n,
            Zapier, and CRM platforms. My focus is on building automation that is
            practical, maintainable, and aligned with real business processes.
          </p>

          <p className="text-sm md:text-lg leading-relaxed" style={{ color: "rgba(180,188,200,0.88)" }}>
            Every workflow includes proper testing, error handling, and documentation
            to ensure reliability and continuity. I approach automation as structured
            operational support rather than short-term experiments.
          </p>

          {/* CTA */}
          <div className="mt-2">
            <a href="/cv.pdf" download>
              <Button
                className="neon-btn h-13 px-8 rounded-lg text-base font-semibold tracking-wide cursor-pointer gap-2"
                style={{
                  backgroundColor: "transparent",
                  color: "#f97316",
                  border: "1px solid #f97316",
                  boxShadow:
                    "0 0 8px #f97316, 0 0 20px rgba(249,115,22,0.4), inset 0 0 8px rgba(249,115,22,0.1)",
                  textShadow: "0 0 8px rgba(249,115,22,0.8)",
                }}
              >
                <ArrowDown size={16} />
                Download CV
              </Button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
