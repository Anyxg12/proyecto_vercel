import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedTitle = ({ text, className, type = "character", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: type === "character" ? 0.03 : 0.08, delayChildren: delay },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  if (type === "word") {
    return (
      <motion.div
        ref={ref}
        style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {words.map((word, index) => (
          <motion.span variants={child} style={{ marginRight: "0.25em", display: "inline-block" }} key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-flex", marginRight: "0.25em" }}>
          {Array.from(word).map((char, charIndex) => (
            <motion.span variants={child} style={{ display: "inline-block" }} key={charIndex}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
