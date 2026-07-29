import React from 'react';
import { motion } from 'framer-motion';

const AnimatedTitle = ({ text, className, type = "character", delay = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: type === "character" ? 0.05 : 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  if (type === "word") {
    return (
      <motion.div
        style={{ overflow: "hidden", display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {words.map((word, index) => (
          <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      style={{ overflow: "hidden", display: "inline-flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-flex", marginRight: "0.25em" }}>
          {Array.from(word).map((char, charIndex) => (
            <motion.span variants={child} key={charIndex}>
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default AnimatedTitle;
