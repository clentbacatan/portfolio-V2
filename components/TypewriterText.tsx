"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({
  text,
  speed = 40,
  delay = 300,
  color = "#00b4e0",
}: {
  text: string;
  speed?: number;
  delay?: number;
  color?: string;
}) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  // Blink cursor after typing finishes
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 750);
    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ color }}>
      {displayed}
      <span style={{ opacity: showCursor ? 1 : 0, color }}>|</span>
    </span>
  );
}
