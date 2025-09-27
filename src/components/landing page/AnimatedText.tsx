"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MOVE_STAGES = [
  { font: "font-unbounded italic", family: "'Unbounded', sans-serif" },
  { font: "font-ebgaramond not-italic", family: "'EB Garamond', serif" },
  { font: "font-tinos italic", family: "'Tinos', serif" },
  { font: "font-opensans not-italic", family: "'Open Sans', sans-serif" },
  { font: "font-lato italic", family: "'Lato', sans-serif" },
  { font: "font-quattrocento not-italic", family: "'Quattrocento Sans', sans-serif" },
  { font: "font-unbounded italic", family: "'Unbounded', sans-serif" },
];

interface AnimatedTextProps {
  text: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  scribbleColor?: string;
  textColor?: string;
}

export default function AnimatedText({ 
  text, 
  showButton = false, 
  buttonText = "Launch App",
  onButtonClick,
  className = "",
  scribbleColor = "#d4f607",
  textColor = "#a66bff"
}: AnimatedTextProps) {
  const [moveStage, setMoveStage] = useState(0);
  const [scribble, setScribble] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fast animation loop for text
  useEffect(() => {
    let count = 0;
    setMoveStage(0);
    setScribble(false);

    intervalRef.current = setInterval(() => {
      count++;
      if (count < MOVE_STAGES.length - 1) {
        setMoveStage(count);
      } else {
        clearInterval(intervalRef.current!);
        setMoveStage(MOVE_STAGES.length - 1);
        setTimeout(() => setScribble(true), 300);
      }
    }, 400);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={moveStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
          className={MOVE_STAGES[moveStage].font}
          style={{ 
            fontFamily: MOVE_STAGES[moveStage].family, 
            position: "relative", 
            display: "inline-block",
            color: textColor
          }}
        >
          {text}
          {scribble && (
            <motion.svg
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              width="220"
              height="32"
              viewBox="0 0 220 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[220px] h-[32px] pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <motion.path
                d="M10 22 Q 60 28, 110 22 Q 160 16, 210 22
                   M20 28 Q 60 24, 110 28 Q 160 32, 200 28"
                stroke={scribbleColor}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </motion.svg>
          )}
        </motion.span>
      </AnimatePresence>
      
      {/* Button appears after scribble */}
      {showButton && (
        <AnimatePresence>
          {scribble && (
            <motion.button
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 32, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
              className="mt-6 mx-auto block relative hover:cursor-pointer w-full max-w-xs"
              style={{ zIndex: 2 }}
              onClick={onButtonClick}
            >
              <span
                className="block px-6 py-2 text-base sm:text-lg font-bold text-black"
                style={{
                  background: scribbleColor,
                  clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
                  fontFamily: "'Unbounded', sans-serif",
                  letterSpacing: "0.04em",
                  boxShadow: "0 4px 24px 0 rgba(164,107,255,0.10)",
                }}
              >
                {buttonText}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      )}
    </span>
  );
}