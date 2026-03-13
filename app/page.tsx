import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "#06070d" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 180, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
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

      {/* Corner accent — top left */}
      <div
        className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(0, 180, 255, 0.3)",
          borderLeft: "1px solid rgba(0, 180, 255, 0.3)",
        }}
      />
      {/* Corner accent — top right */}
      <div
        className="absolute top-0 right-0 w-24 h-24 pointer-events-none"
        style={{
          borderTop: "1px solid rgba(0, 180, 255, 0.3)",
          borderRight: "1px solid rgba(0, 180, 255, 0.3)",
        }}
      />
      {/* Corner accent — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none"
        style={{
          borderBottom: "1px solid rgba(0, 180, 255, 0.3)",
          borderLeft: "1px solid rgba(0, 180, 255, 0.3)",
        }}
      />
      {/* Corner accent — bottom right */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none"
        style={{
          borderBottom: "1px solid rgba(0, 180, 255, 0.3)",
          borderRight: "1px solid rgba(0, 180, 255, 0.3)",
        }}
      />

      {/* Badge */}
      <div
        className="relative z-10 mb-10 inline-flex items-center gap-3 px-5 py-2 text-xs tracking-[0.25em] uppercase"
        style={{
          border: "1px solid rgba(80, 200, 40, 0.4)",
          backgroundColor: "rgba(4, 14, 4, 0.9)",
          color: "#6ddd10",
          fontFamily: "monospace",
          boxShadow: "0 0 12px rgba(80, 200, 40, 0.1), inset 0 0 12px rgba(80, 200, 40, 0.04)",
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: "#6ddd10",
            boxShadow: "0 0 8px #6ddd10, 0 0 16px #6ddd10",
            animation: "pulse 1.8s ease-in-out infinite",
          }}
        />
        [ AI AUTOMATION SPECIALIST | FUNNEL/WEB DEVELOPER ]
      </div>

      {/* Headline */}
      <h1
        className="relative z-10 leading-[0.95] text-white"
        style={{
          fontFamily: bebas.style.fontFamily,
          fontSize: "clamp(52px, 9vw, 102px)",
          letterSpacing: "0.03em",
          textShadow: "0 0 30px rgba(255,255,255,0.08)",
        }}
      >
        AI AUTOMATIONS & SMART FUNNELS
      </h1>
      <h1
        className="relative z-10 leading-[0.95] glitch-orange"
        style={{
          fontFamily: bebas.style.fontFamily,
          fontSize: "clamp(52px, 9vw, 102px)",
          letterSpacing: "0.03em",
        }}
      >
        THAT WORK FOR YOU.
      </h1>

      {/* Subtitle */}
      <div className="relative z-10 mt-7 flex items-center justify-center gap-2 font-mono text-xl uppercase">
        <span style={{ color: "#f97316" }}>▸</span>
        <span className="typewriter" style={{ color: "#00b4e0" }}>STOP DROWNING IN MANUAL TASKS. START RUNNING ON AUTOPILOT.</span>
      </div>

      {/* Divider */}
      <div
        className="relative z-10 mt-6 w-24 h-px"
        style={{ backgroundColor: "rgba(0, 180, 255, 0.35)" }}
      />

      {/* Description */}
      <p
        className="relative z-10 mt-5 max-w-xl text-sm leading-relaxed tracking-wide font-mono"
        style={{ color: "rgba(150, 160, 175, 0.85)" }}
      >
        I build automation systems using n8n, Zapier, and AI tools, and create
        high-converting funnels with GoHighLevel to streamline operations and
        generate more leads.
      </p>
    </main>
  );
}
