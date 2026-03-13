export default function BookingCalendarPage() {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-6 overflow-hidden"
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
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-3">

        {/* Header */}
        <p
          className="text-xs font-mono tracking-[0.35em] uppercase"
          style={{ color: "#f97316" }}
        >
          Let's Connect
        </p>
        <h1
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Book a Call
        </h1>
        <p
          className="text-sm md:text-base text-center max-w-xl"
          style={{ color: "rgba(180,188,200,0.75)" }}
        >
          Pick a time that works for you and let's talk about how I can help automate and grow your business.
        </p>

        {/* Iframe */}
        <div
          className="w-full rounded-2xl mt-4"
          style={{
            border: "1px solid rgba(249,115,22,0.2)",
            boxShadow: "0 0 40px rgba(249,115,22,0.06)",
            height: "700px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://api.leadconnectorhq.com/widget/bookings/book-with-clent"
            style={{ width: "100%", height: "730px", border: "none", marginTop: "-30px" }}
            title="Book a Call"
          />
        </div>

      </div>
    </main>
  );
}
