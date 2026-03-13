import Image from "next/image";

const row1 = [
  { name: "n8n",              src: "/logos/n8n.png" },
  { name: "Zapier",           src: "/logos/zapier.webp" },
  { name: "HighLevel",        src: "/logos/highlevel.jpg" },
  { name: "OpenAI",           src: "/logos/openAI.png" },
  { name: "Claude",           src: "/logos/claude-color.png" },
  { name: "Google Workspace", src: "/logos/google workspace.png" },
];

const row2 = [
  { name: "Slack",      src: "/logos/slack.png" },
  { name: "WhatsApp",   src: "/logos/whatsapp-logo.png" },
  { name: "Apify",      src: "/logos/apify.webp" },
  { name: "Supabase",   src: "/logos/supabase.png" },
  { name: "PostgreSQL", src: "/logos/PostgreSQL.png" },
  { name: "Zoho",       src: "/logos/zoho.svg" },
];

function ToolCard({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="tool-card flex items-center gap-3 md:gap-5 px-4 md:px-8 py-3 md:py-5 rounded-2xl shrink-0"
      style={{
        backgroundColor: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        minWidth: "160px",
      }}
    >
      <div className="relative w-8 h-8 md:w-16 md:h-16 shrink-0">
        <Image src={src} alt={name} fill className="object-contain" />
      </div>
      <span
        className="text-sm md:text-2xl font-semibold whitespace-nowrap"
        style={{ color: "rgba(220, 225, 235, 0.9)" }}
      >
        {name}
      </span>
    </div>
  );
}

function MarqueeRow({
  tools,
  reverse = false,
}: {
  tools: typeof row1;
  reverse?: boolean;
}) {
  const doubled = [...tools, ...tools];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4"
        style={{
          animation: `marquee${reverse ? "-reverse" : ""} 25s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((tool, i) => (
          <ToolCard key={`${tool.name}-${i}`} name={tool.name} src={tool.src} />
        ))}
      </div>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section
      className="w-full pt-6 pb-24 md:py-24 flex flex-col items-center gap-4"
      style={{ backgroundColor: "#06070d" }}
    >
      {/* Header */}
      <p
        className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
        style={{ color: "rgba(150, 160, 175, 0.7)" }}
      >
        Tools &amp; Platforms
      </p>
      <h2 className="text-3xl md:text-6xl font-bold text-white mb-10 text-center px-6">
        Technologies I Work With
      </h2>

      {/* Row 1 — scrolls left */}
      <MarqueeRow tools={row1} />

      {/* Row 2 — scrolls right */}
      <MarqueeRow tools={row2} reverse />
    </section>
  );
}
