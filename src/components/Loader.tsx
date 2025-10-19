'use client';

import React from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 z-50">
        <motion.div
        className="flex flex-col xs:flex-row items-center gap-3 xs:gap-4 w-full max-w-xs sm:max-w-md md:max-w-lg px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-4xl xs:text-5xl font-extrabold text-blue-600 dark:text-cyan-400 drop-shadow-lg"
          animate={{
            scale: [1, 1.18, 1],
            rotate: [0, 12, -12, 0],
            textShadow: [
              "0px 0px 0px #06b6d4",
              "0px 2px 16px #06b6d4",
              "0px 0px 0px #06b6d4"
            ]
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          &lt;/&gt;
        </motion.div>
        <div className="flex flex-col items-center xs:items-start w-full">
          <motion.span
            className="text-lg xs:text-xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight text-center xs:text-left"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
          >
            Anuj Kumar
          </motion.span>
          <motion.span
            className="text-xs xs:text-sm md:text-lg text-blue-700 dark:text-cyan-300 font-medium mt-1 text-center xs:text-left"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.9
            }}
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "inline-block",
              borderRight: "2px solid #06b6d4",
              maxWidth: "100%"
            }}
          >
            Electronics Engineer | IOT & Embedded Systems Enthusiast
          </motion.span>
        </div>
      </motion.div>
    </div>
    </LazyMotion>
  );
};

export default Loader;