import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const GREETINGS = [
  "Welcome.",
  "स्वागत आहे.", // Marathi
  "स्वागत है.", // Hindi
  "خوش آمدید.", // Urdu
];

export default function RotatingGreeting() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [reduce]);

  return (
    <span
      className="inline-block align-bottom overflow-hidden"
      style={{ perspective: "400px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          className="text-cyanx inline-block"
          style={{ transformOrigin: "50% 100%", backfaceVisibility: "hidden" }}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {GREETINGS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
