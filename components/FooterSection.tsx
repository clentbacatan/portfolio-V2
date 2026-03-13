import { Bebas_Neue } from "next/font/google";
import { Button } from "@/components/ui/button";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function FooterSection() {
  return (
    <footer
      className="relative w-full pt-6 pb-32 md:py-32 px-6 overflow-hidden flex flex-col items-center text-center"
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

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(6,7,13,0.6)" }}
      />

      {/* Radial glow — center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(249,115,22,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top separator line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-8">

        {/* CTA label */}
        <p
          className="text-xs font-mono tracking-[0.35em] uppercase"
          style={{ color: "#f97316" }}
        >
          Ready to Automate
        </p>

        {/* Headline */}
        <h2
          className="leading-[0.95] text-white"
          style={{
            fontFamily: bebas.style.fontFamily,
            fontSize: "clamp(34px, 8vw, 96px)",
            letterSpacing: "0.03em",
            textShadow: "0 0 30px rgba(255,255,255,0.06)",
          }}
        >
          STOP MANAGING TASKS.
          <br />
          <span className="glitch-orange">START RUNNING SYSTEMS.</span>
        </h2>

        {/* Description */}
        <p
          className="max-w-2xl text-sm md:text-lg leading-relaxed"
          style={{ color: "rgba(180,188,200,0.85)" }}
        >
          Whether you need{" "}
          <strong style={{ color: "#f97316" }}>end-to-end automation</strong>,{" "}
          <strong style={{ color: "#f97316" }}>AI-powered workflows</strong>, or
          a{" "}
          <strong style={{ color: "#f97316" }}>high-converting funnel</strong> —
          let's build something that works while you sleep.
        </p>

        {/* Quote block */}
        <blockquote
          className="max-w-xl text-left px-4 md:px-6 py-4 italic text-sm md:text-base"
          style={{
            borderLeft: "3px solid #f97316",
            color: "rgba(180,188,200,0.7)",
            backgroundColor: "rgba(249,115,22,0.04)",
          }}
        >
          "The best automation is the one you never have to think about — it
          just runs, handles the work, and scales with you."
        </blockquote>

        {/* CTA Button */}
        <a href="/booking-calendar" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex justify-center">
          <Button
            className="neon-btn mt-4 h-12 md:h-14 px-6 md:px-12 rounded-lg text-sm md:text-base font-semibold tracking-widest uppercase cursor-pointer gap-2 w-full md:w-auto"
            style={{
              backgroundColor: "transparent",
              color: "#f97316",
              border: "1px solid #f97316",
              boxShadow:
                "0 0 8px #f97316, 0 0 20px rgba(249,115,22,0.4), inset 0 0 8px rgba(249,115,22,0.1)",
              textShadow: "0 0 8px rgba(249,115,22,0.8)",
            }}
          >
            Let's Work Together →
          </Button>
        </a>

        {/* Sub-note */}
        <p
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "rgba(150,160,175,0.5)" }}
        >
          No retainers. No fluff. Just results.
        </p>

      </div>

    </footer>
  );
}
