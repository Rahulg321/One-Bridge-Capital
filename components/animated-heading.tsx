"use client";

import React from "react";
import { motion } from "framer-motion";
import { KeyTextField } from "@prismicio/client";

const AnimatedHeading = ({ heading }: { heading: KeyTextField }) => {
  return (
    <motion.h1
      className="text-white mb-4"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {heading}
    </motion.h1>
  );
};

export default AnimatedHeading;
