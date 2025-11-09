"use client";

import { useEffect, useState } from "react";

type TypewriterNameProps = {
  name: string;
  className?: string;
  delay?: number;
  startDelay?: number;
};

export function TypewriterName({
  name,
  className = "",
  delay = 110,
  startDelay = 600,
}: TypewriterNameProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const timeoutId = setTimeout(() => {
      let index = 0;
      intervalId = setInterval(() => {
        index += 1;
        setDisplayed(name.slice(0, index));
        if (index >= name.length && intervalId) {
          clearInterval(intervalId);
        }
      }, delay);
    }, startDelay);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      clearTimeout(timeoutId);
    };
  }, [delay, name, startDelay]);

  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold text-cyan-400 ${className}`}
      aria-label={name}
    >
      <span>{displayed}</span>
      <span className="h-5 w-px animate-pulse bg-cyan-300/80" />
    </span>
  );
}

