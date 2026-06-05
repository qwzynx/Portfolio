"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface GlitchTextProps {
  text: string;
  className?: string;
  interval?: number;
}

export default function GlitchText({ text, className, interval = 30 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = text.length;
    
    const animInterval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(animInterval);
      }

      iteration += 1 / 3;
    }, interval);

    return () => clearInterval(animInterval);
  }, [text, interval]);

  useEffect(() => {
    let animCleanup: (() => void) | undefined;
    
    const trigger = () => {
      if (animCleanup) animCleanup();
      animCleanup = scramble();
    };

    trigger();
    const intervalId = setInterval(trigger, 10000);
    
    return () => {
      if (animCleanup) animCleanup();
      clearInterval(intervalId);
    };
  }, [text, scramble]);

  return <span className={className}>{displayText}</span>;
}
