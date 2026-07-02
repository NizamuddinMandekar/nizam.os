import { useEffect, useState } from "react";

export default function TypeWriter({ text, speed = 14 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span>
      {text.slice(0, count)}
      {count < text.length && <span className="cursor-block" />}
    </span>
  );
}
